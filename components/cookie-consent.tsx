"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-6 z-50 border-t border-white/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="font-[var(--font-body)] text-sm font-light leading-relaxed">
            We use cookies to enhance your experience, analyze site usage, and provide personalized content. 
            By continuing to use our site, you consent to our use of cookies in accordance with our{" "}
            <Link href="/privacy" className="underline hover:no-underline">
              Privacy Policy
            </Link>{" "}
            and POPI Act compliance.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={declineCookies}
            className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase px-4 py-2 border border-white/30 text-white hover:bg-white/10 transition-colors duration-300"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase px-4 py-2 bg-white text-black hover:bg-white/90 transition-colors duration-300"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}