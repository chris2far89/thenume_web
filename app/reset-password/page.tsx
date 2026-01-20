"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowLeft, Check } from "lucide-react"

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch('/api/auth/reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (data.success) {
        setIsSuccess(true)
      } else {
        setError(data.error || 'Failed to send reset email')
      }
    } catch (error) {
      setError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-card flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="font-[var(--font-display)] text-4xl font-light text-foreground mb-2">
              The Nume
            </h1>
          </Link>
          <p className="font-[var(--font-body)] text-xs tracking-[0.4em] uppercase text-muted-foreground">
            Luxury Wellness & Aesthetics
          </p>
        </div>

        <Card className="p-8">
          {!isSuccess ? (
            <>
              <div className="text-center mb-8">
                <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-2">
                  Reset Password
                </h2>
                <p className="font-[var(--font-body)] text-sm text-muted-foreground">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={!email || isSubmitting}
                  className={cn(
                    "w-full font-[var(--font-body)] text-xs tracking-[0.2em] uppercase py-6 rounded-none transition-all duration-300",
                    email && !isSubmitting
                      ? "bg-foreground text-background hover:bg-foreground/90"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Reset Link"}
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">
                Check Your Email
              </h2>
              <p className="font-[var(--font-body)] text-sm text-muted-foreground mb-6">
                We've sent a password reset link to {email}
              </p>
              <p className="font-[var(--font-body)] text-xs text-muted-foreground">
                Didn't receive the email? Check your spam folder or try again.
              </p>
            </div>
          )}
        </Card>

        <div className="text-center mt-6">
          <Link 
            href="/login" 
            className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}