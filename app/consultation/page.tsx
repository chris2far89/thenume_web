"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ConsultationForm, ConsultationFormData } from "@/components/consultation-form"

export default function ConsultationPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasExistingConsultation, setHasExistingConsultation] = useState(false)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/login')
      return
    }

    const parsedUser = JSON.parse(userData)
    setUser(parsedUser)

    // Check if user already has consultation
    checkExistingConsultation(parsedUser.id)
  }, [router])

  const checkExistingConsultation = async (userId: string) => {
    try {
      const response = await fetch(`/api/consultation?userId=${userId}`)
      const data = await response.json()
      
      if (data.success && data.hasConsultation) {
        setHasExistingConsultation(true)
      }
    } catch (error) {
      console.error('Error checking consultation:', error)
    }
  }

  const handleSubmit = async (consultationData: ConsultationFormData) => {
    if (!user) return

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          consultationData
        })
      })

      const data = await response.json()
      
      if (data.success) {
        // Update user in localStorage
        const updatedUser = { ...user, consultationCompleted: true }
        localStorage.setItem('user', JSON.stringify(updatedUser))
        
        router.push('/book?consultation=completed')
      } else {
        alert('Failed to save consultation form. Please try again.')
      }
    } catch (error) {
      alert('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!user) {
    return <div className="min-h-screen bg-card flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  }

  if (hasExistingConsultation) {
    return (
      <div className="min-h-screen bg-card flex items-center justify-center p-6">
        <div className="max-w-md text-center">
          <h1 className="font-[var(--font-display)] text-3xl font-light text-foreground mb-4">
            Consultation Complete
          </h1>
          <p className="font-[var(--font-body)] text-muted-foreground mb-8">
            You have already completed your consultation form. You can proceed to book your treatments.
          </p>
          <button
            onClick={() => router.push('/book')}
            className="font-[var(--font-body)] text-xs tracking-[0.2em] uppercase px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors"
          >
            Book Treatment
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-card">
      <ConsultationForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </div>
  )
}