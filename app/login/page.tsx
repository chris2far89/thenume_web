"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phone: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      if (!isLogin && formData.password !== formData.confirmPassword) {
        setError("Passwords do not match")
        return
      }

      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register'
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.success) {
        if (isLogin) {
          localStorage.setItem('user', JSON.stringify(data.user))
          router.push('/book')
        } else {
          setError("Account created successfully! Please sign in.")
          setIsLogin(true)
          setFormData(prev => ({ ...prev, password: "", confirmPassword: "", fullName: "", phone: "" }))
        }
      } else {
        setError(data.error || 'Authentication failed')
      }
    } catch (error) {
      setError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = () => {
    if (isLogin) {
      return formData.email && formData.password
    } else {
      return formData.email && formData.password && formData.confirmPassword && 
             formData.fullName && formData.phone && formData.password === formData.confirmPassword
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
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => {
                setIsLogin(true)
                setError("")
                setFormData({ email: "", password: "", confirmPassword: "", fullName: "", phone: "" })
              }}
              className={cn(
                "flex-1 py-3 border transition-all duration-300",
                isLogin ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground"
              )}
            >
              <span className="font-[var(--font-body)] text-xs tracking-[0.15em] uppercase">Sign In</span>
            </button>
            <button
              onClick={() => {
                setIsLogin(false)
                setError("")
                setFormData({ email: "", password: "", confirmPassword: "", fullName: "", phone: "" })
              }}
              className={cn(
                "flex-1 py-3 border transition-all duration-300",
                !isLogin ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground"
              )}
            >
              <span className="font-[var(--font-body)] text-xs tracking-[0.15em] uppercase">Create Account</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <>
                <div>
                  <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300"
                    placeholder="Your full name"
                    required={!isLogin}
                  />
                </div>
                <div>
                  <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300"
                    placeholder="+27 XX XXX XXXX"
                    required={!isLogin}
                  />
                </div>
              </>
            )}

            <div>
              <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full px-4 py-3 pr-12 bg-background border border-border focus:border-primary outline-none transition-colors duration-300"
                  placeholder={isLogin ? "Your password" : "Create a password"}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300"
                  placeholder="Confirm your password"
                  required={!isLogin}
                />
                {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
                )}
              </div>
            )}

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={!isFormValid() || isSubmitting}
              className={cn(
                "w-full font-[var(--font-body)] text-xs tracking-[0.2em] uppercase py-6 rounded-none transition-all duration-300",
                isFormValid() && !isSubmitting
                  ? "bg-foreground text-background hover:bg-foreground/90"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              )}
            >
              {isSubmitting ? "Processing..." : isLogin ? "Sign In" : "Create Account"}
            </Button>

            {isLogin && (
              <div className="text-center">
                <Link 
                  href="/reset-password" 
                  className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
            )}
          </form>
        </Card>

        <div className="text-center mt-6">
          <Link 
            href="/" 
            className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}