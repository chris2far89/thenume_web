import { NextResponse } from 'next/server'
import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore as getAdminFirestore } from 'firebase-admin/firestore'
import bcrypt from 'bcryptjs'

if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  })
}

const adminDb = getAdminFirestore()

export async function POST(request: Request) {
  try {
    const { email, password, fullName, phone } = await request.json()

    // Check if user already exists
    const existingUser = await adminDb.collection('users').where('email', '==', email).get()
    if (!existingUser.empty) {
      return NextResponse.json({ 
        success: false, 
        error: 'User already exists' 
      }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user document
    const userRef = await adminDb.collection('users').add({
      email,
      password: hashedPassword,
      fullName,
      phone,
      createdAt: new Date().toISOString(),
      consultationCompleted: false
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Account created successfully' 
    })
  } catch (error: any) {
    console.error('Registration error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to create account' 
    }, { status: 500 })
  }
}