"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function Footer() {
  const [inView, setInView] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="py-20 md:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 transition-all duration-1000 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
          )}
        >
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-[var(--font-display)] text-3xl font-light tracking-[0.15em] uppercase text-foreground">
                TheNumé
              </span>
            </Link>
            <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light leading-relaxed max-w-sm">
              Where authentic beauty meets conscious innovation — a sanctuary for transformation built on trust, inclusivity, and expertise.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[var(--font-body)] text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Contact
            </h4>
            <div className="space-y-3">
              <a href="https://wa.me/27760401540" target="_blank" rel="noopener noreferrer" className="font-[var(--font-body)] text-sm text-foreground font-light hover:text-primary transition-colors block">+27 76 040 1540</a>
              <p className="font-[var(--font-body)] text-sm text-foreground font-light">reservations@thenume.com</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-[var(--font-body)] text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Hours
            </h4>
            <div className="space-y-3">
              <div>
                <p className="font-[var(--font-body)] text-sm text-foreground font-light">Mon – Fri</p>
                <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light">8:00 AM – 6:00 PM</p>
              </div>
              <div>
                <p className="font-[var(--font-body)] text-sm text-foreground font-light">Saturday</p>
                <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light">9:00 AM – 5:00 PM</p>
              </div>
              <div>
                <p className="font-[var(--font-body)] text-sm text-foreground font-light">Sun & Holidays</p>
                <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light">9:00 AM – 3:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={cn(
            "flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4 transition-all duration-1000 ease-out delay-300",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <p className="font-[var(--font-body)] text-xs text-muted-foreground tracking-[0.1em]">
            © 2025 TheNumé. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="font-[var(--font-body)] text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="font-[var(--font-body)] text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Terms
            </Link>
            <a
              href="https://www.instagram.com/thenu.me_za/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[var(--font-body)] text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
