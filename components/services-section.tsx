"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Consultation",
    description: "Premium, personalised consultation for your transformation",
    duration: "Virtual or In-Person",
    price: "250",
    image: "/info.png",
    link: "/services#consultation"
  },
  {
    title: "Body Sculpting",
    description: "Advanced non-surgical treatments for contouring and slimming",
    duration: "Various options",
    price: "500",
    image: "/Fat_dissolving_injections.png",
    link: "/services#fat-dissolving"
  },
  {
    title: "Facial Treatments",
    description: "Rejuvenating treatments for radiant, youthful skin",
    duration: "Various options",
    price: "800",
    image: "/vampire_facial.png",
    link: "/services#prp-vampire-facial"
  },
  {
    title: "Wellness & IV Therapy",
    description: "Fast-acting nourishment for energy, immunity, and glow",
    duration: "30-45 min",
    price: "800",
    image: "/iv_drip.png",
    link: "/services#iv-drip"
  },
]

export function ServicesSection() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 },
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
        const viewportHeight = window.innerHeight
        const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height)))
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-40 bg-background relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 md:mb-32">
        <div
          className={cn(
            "transition-all duration-1000 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
          )}
        >
          <p className="font-[var(--font-body)] text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Our Services
          </p>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-foreground tracking-[0.02em] leading-[1.1] max-w-3xl">
            Science-backed treatments for authentic transformation
          </h2>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.link}
              className={cn(
                "group cursor-pointer transition-all duration-700 ease-out block",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16",
              )}
              style={{
                transitionDelay: inView ? `${index * 150}ms` : "0ms",
              }}
            >
              {/* Image Container with Parallax */}
              <div className="relative aspect-[5/6] overflow-hidden bg-muted mb-6">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    transform: `translateY(${scrollProgress * 20 - 10}px) scale(${1 + scrollProgress * 0.05})`,
                  }}
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-[var(--font-display)] text-2xl md:text-3xl font-light text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
                    {service.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-[var(--font-body)] text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                    {service.duration}
                  </p>
                  <p className="font-[var(--font-display)] text-xl text-foreground">From R{service.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
