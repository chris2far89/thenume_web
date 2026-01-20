import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
  return NextResponse.json({ 
    success: false, 
    error: 'Authentication service not configured' 
  }, { status: 503 })
}