import { NextResponse } from 'next/server'
import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore as getAdminFirestore } from 'firebase-admin/firestore'

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
    const body = await request.json()
    const { userId, consultationData } = body

    await adminDb.collection('consultations').add({
      userId,
      ...consultationData,
      submittedAt: new Date().toISOString()
    })

    await adminDb.collection('users').doc(userId).update({
      consultationCompleted: true
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to save consultation' }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ success: false, error: 'User ID required' }, { status: 400 })
    }

    const consultationSnapshot = await adminDb.collection('consultations')
      .where('userId', '==', userId)
      .limit(1)
      .get()

    const hasConsultation = !consultationSnapshot.empty

    return NextResponse.json({ 
      success: true, 
      hasConsultation,
      consultation: hasConsultation ? consultationSnapshot.docs[0].data() : null
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch consultation' }, { status: 500 })
  }
}