"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const features = [
  {
    title: "Authentic Transformation",
    description: "Every service is designed to help you embrace your true self — renewed, confident, and radiant.",
  },
  {
    title: "Innovative Simplicity",
    description: "We simplify beauty through innovation — finding creative, effortless ways to make self-care accessible and transformative.",
  },
  {
    title: "Sustainable Elegance",
    description: "We use eco-conscious products that honor both your skin and the environment — beauty that's luxurious yet sustainable.",
  },
  {
    title: "Excellence in Experience",
    description: "From personalized care to serene environments — every touchpoint leaves a lasting impression of confidence and well-being.",
  },
]

export function ExperienceSection() {
  const [inView, setInView] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setScrollY(window.innerHeight - rect.top)
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-primary"
        style={{
          transform: `translateY(${-scrollY * 0.1}px)`,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/info.png')`,
            transform: `scale(${1 + scrollY * 0.0002})`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Title */}
          <div
            className={cn(
              "transition-all duration-1000 ease-out",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
            )}
          >
            <p className="font-[var(--font-body)] text-xs tracking-[0.4em] uppercase text-primary-foreground/60 mb-6">
              The Experience
            </p>
            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light text-primary-foreground tracking-[0.02em] leading-[1.1] mb-8">
              Beauty that feels like you
            </h2>
            <p className="font-[var(--font-body)] text-base text-primary-foreground/70 font-light leading-relaxed max-w-md">
              We don't change who you are — we reveal your best self. Through trust, innovation, and care, we create a sanctuary where transformation feels effortless.
            </p>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  "border-t border-primary-foreground/20 pt-6 transition-all duration-700 ease-out",
                  inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
                )}
                style={{
                  transitionDelay: inView ? `${index * 100 + 300}ms` : "0ms",
                }}
              >
                <h3 className="font-[var(--font-display)] text-xl md:text-2xl font-light text-primary-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-[var(--font-body)] text-sm text-primary-foreground/60 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
