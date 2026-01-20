import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { sendBookingConfirmation } from '@/lib/email-service'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { serviceId, serviceName, date, time, fullName, email, phone, userId } = body

    // Insert booking into Supabase
    const { data: booking, error: bookingError } = await supabaseAdmin
      .from('bookings')
      .insert({
        user_id: userId || null,
        service_id: serviceId,
        service_name: serviceName,
        date: date,
        time: time,
        full_name: fullName,
        email,
        phone,
        status: 'pending'
      })
      .select()
      .single()

    if (bookingError) {
      console.error('Booking error:', bookingError)
      return NextResponse.json({ success: false, error: 'Failed to create booking' }, { status: 500 })
    }

    // Mark time slot as unavailable
    const { error: timeSlotError } = await supabaseAdmin
      .from('time_slots')
      .upsert({
        date: date,
        time: time,
        available: false,
        booked_by: booking.id
      })

    if (timeSlotError) {
      console.error('Time slot error:', timeSlotError)
    }

    // Send booking confirmation email
    try {
      const emailResult = await sendBookingConfirmation({
        fullName,
        serviceName,
        date,
        time,
        email,
        phone
      })
      
      if (!emailResult.success) {
        console.error('Failed to send confirmation email:', emailResult.error)
      }
    } catch (emailError) {
      console.error('Email service error:', emailError)
    }

    return NextResponse.json({ 
      success: true, 
      booking,
      needsConsultation: true
    })
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json({ success: false, error: 'Failed to create booking' }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')

    if (date) {
      // Get available time slots for a specific date
      const { data: slots, error } = await supabaseAdmin
        .from('time_slots')
        .select('*')
        .eq('date', date)
        .eq('available', true)
      
      if (error) {
        console.error('Fetch slots error:', error)
        return NextResponse.json({ success: false, error: 'Failed to fetch slots' }, { status: 500 })
      }
      
      return NextResponse.json({ success: true, slots })
    }

    // Get all bookings (for admin)
    const { data: bookings, error } = await supabaseAdmin
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Fetch bookings error:', error)
      return NextResponse.json({ success: false, error: 'Failed to fetch bookings' }, { status: 500 })
    }
    
    return NextResponse.json({ success: true, bookings })
  } catch (error) {
    console.error('Fetch error:', error)
    return NextResponse.json({ success: false, error: 'Failed to fetch data' }, { status: 500 })
  }
}
