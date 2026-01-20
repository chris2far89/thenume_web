import { Resend } from 'resend'
import { createBookingConfirmationEmail } from './email-template'

const resend = new Resend(process.env.RESEND_API_KEY)

interface BookingDetails {
  fullName: string
  serviceName: string
  date: string
  time: string
  email: string
  phone: string
}

export async function sendBookingConfirmation(bookingDetails: BookingDetails) {
  try {
    const emailHtml = createBookingConfirmationEmail(bookingDetails)
    
    const { data, error } = await resend.emails.send({
      from: 'The Nume <bookings@thenume.co.za>',
      to: [bookingDetails.email],
      subject: `Booking Confirmed - ${bookingDetails.serviceName}`,
      html: emailHtml,
    })

    if (error) {
      console.error('Email sending error:', error)
      return { success: false, error }
    }

    console.log('Email sent successfully:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Email service error:', error)
    return { success: false, error }
  }
}

export async function sendPasswordResetEmail(email: string) {
  try {
    const resetLink = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/reset-password?token=placeholder`
    
    const { data, error } = await resend.emails.send({
      from: 'The Nume <noreply@thenume.co.za>',
      to: [email],
      subject: 'Reset Your Password - The Nume',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #8b7355; font-size: 24px; margin-bottom: 20px;">Reset Your Password</h1>
          <p style="color: #666; line-height: 1.6;">You requested to reset your password for your The Nume account.</p>
          <p style="color: #666; line-height: 1.6;">Click the button below to reset your password:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetLink}" style="background-color: #2c2c2c; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">Reset Password</a>
          </div>
          <p style="color: #999; font-size: 12px;">If you didn't request this, please ignore this email.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #999; font-size: 12px; text-align: center;">The Nume - Luxury Wellness & Aesthetics</p>
        </div>
      `,
    })

    if (error) {
      console.error('Password reset email error:', error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Password reset email service error:', error)
    return { success: false, error }
  }
}