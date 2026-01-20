import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
  return NextResponse.json({ 
    success: false, 
    error: 'Registration service not configured' 
  }, { status: 503 })
}