import { NextResponse } from 'next/server'
import { sendPasswordResetEmail } from '@/lib/email-service'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Send password reset email
    const emailResult = await sendPasswordResetEmail(email)

    if (emailResult.success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to send reset email' 
      }, { status: 500 })
    }
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to process request' 
    }, { status: 500 })
  }
}