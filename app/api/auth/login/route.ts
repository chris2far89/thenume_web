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
    const { email, password } = await request.json()

    // Find user by email
    const usersSnapshot = await adminDb.collection('users').where('email', '==', email).get()
    
    if (usersSnapshot.empty) {
      return NextResponse.json({ 
        success: false, 
        error: 'User not found' 
      }, { status: 404 })
    }

    const userDoc = usersSnapshot.docs[0]
    const userData = userDoc.data()
    const userId = userDoc.id

    // Verify password
    const isValidPassword = await bcrypt.compare(password, userData.password)
    if (!isValidPassword) {
      return NextResponse.json({ 
        success: false, 
        error: 'Invalid credentials' 
      }, { status: 401 })
    }

    return NextResponse.json({ 
      success: true, 
      user: {
        id: userId,
        email: userData.email,
        fullName: userData.fullName,
        phone: userData.phone,
        consultationCompleted: userData.consultationCompleted || false
      }
    })
  } catch (error: any) {
    console.error('Login error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Invalid credentials' 
    }, { status: 401 })
  }
}