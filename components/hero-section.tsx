"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        if (rect.bottom > 0) {
          setScrollY(window.scrollY)
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-primary/90"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('/header.png')`,
            transform: `scale(${1 + scrollY * 0.0005})`,
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div
          className="overflow-hidden mb-6"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            opacity: Math.max(0, 1 - scrollY * 0.002),
          }}
        >
          <p className="font-[var(--font-body)] text-xs md:text-sm tracking-[0.4em] uppercase text-primary-foreground/80 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Beauty By Science
          </p>
        </div>

        <h1
          className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-primary-foreground tracking-[0.05em] leading-[0.9] mb-8"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            opacity: Math.max(0, 1 - scrollY * 0.0015),
          }}
        >
          <span className="block animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">Rediscover</span>
          <span className="block animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">Your Radiance</span>
        </h1>

        <p
          className="font-[var(--font-body)] text-sm md:text-base text-primary-foreground/70 font-light tracking-wide max-w-xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            opacity: Math.max(0, 1 - scrollY * 0.002),
          }}
        >
          Authentic transformation through simplicity, innovation, and care
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-in fade-in duration-1000 delay-1000"
        style={{
          opacity: Math.max(0, 1 - scrollY * 0.005),
        }}
      >
        <span className="font-[var(--font-body)] text-[10px] tracking-[0.3em] uppercase text-primary-foreground/50">
          Discover
        </span>
        <ChevronDown className="w-4 h-4 text-primary-foreground/50 animate-bounce" />
      </div>
    </section>
  )
}
