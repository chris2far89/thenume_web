import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET() {
  try {
    const { data: services, error } = await supabaseAdmin
      .from('services')
      .select(`
        *,
        service_booking_options (*)
      `)
      .eq('active', true)
      .order('title')

    if (error) throw error

    return NextResponse.json(services)
  } catch (error) {
    console.error('Error fetching services:', error)
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { bookingOptions, ...serviceData } = data

    // Insert service
    const { data: service, error: serviceError } = await supabaseAdmin
      .from('services')
      .insert([serviceData])
      .select()
      .single()

    if (serviceError) throw serviceError

    // Insert booking options if provided
    if (bookingOptions && bookingOptions.length > 0) {
      const optionsToInsert = bookingOptions.map((option: any) => ({
        ...option,
        service_id: service.id
      }))

      const { error: optionsError } = await supabaseAdmin
        .from('service_booking_options')
        .insert(optionsToInsert)

      if (optionsError) throw optionsError
    }

    return NextResponse.json({ success: true, service })
  } catch (error) {
    console.error('Error creating service:', error)
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.json()
    const { bookingOptions, ...serviceData } = data

    // Update service
    const { error: serviceError } = await supabaseAdmin
      .from('services')
      .update(serviceData)
      .eq('id', serviceData.id)

    if (serviceError) throw serviceError

    // Delete existing booking options
    await supabaseAdmin
      .from('service_booking_options')
      .delete()
      .eq('service_id', serviceData.id)

    // Insert new booking options if provided
    if (bookingOptions && bookingOptions.length > 0) {
      const optionsToInsert = bookingOptions.map((option: any) => ({
        ...option,
        service_id: serviceData.id
      }))

      const { error: optionsError } = await supabaseAdmin
        .from('service_booking_options')
        .insert(optionsToInsert)

      if (optionsError) throw optionsError
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating service:', error)
    return NextResponse.json({ error: 'Failed to update service' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Service ID required' }, { status: 400 })
    }

    // Delete booking options first (due to foreign key constraint)
    await supabaseAdmin
      .from('service_booking_options')
      .delete()
      .eq('service_id', id)

    // Delete service
    const { error } = await supabaseAdmin
      .from('services')
      .delete()
      .eq('id', id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting service:', error)
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 })
  }
}