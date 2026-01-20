"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { Service } from "@/lib/services-data"

interface ServiceDetailProps {
  service: Service
  index: number
}

const serviceImages: Record<string, string> = {
  consultation: "/consultation.png",
  "fat-dissolving": "/Fat_dissolving_injections.png",
  "fat-freeze": "/fat_freeze.png",
  "cavitation-rf-g5": "/Cavitation_radio_frequencyG5_slimming.png",
  "cellulite-reduction": "/cellulite_reduction.png",
  "wood-therapy": "/wood_therapy.png",
  "skin-tag-removal": "/skin_tag.png",
  "iv-drip": "/iv_drip.png",
  "hair-restoration": "/hair_restoration.png",
  "nail-fungus": "/nail_fungus.png",
  "prp-vampire-facial": "/prp.jpg",
  "microneedling-dermaplaning-led": "/microneedling_plasma energy_dermaplaning.png",
  "pigmentation-brightening": "/microneedling_plasma energy_dermaplanning_and_superficial_peel.png",
  "acne-peel": "/acne_peel.png",
  "glow-combo": "/glow_combo.png",
  "zena-algae-peel": "/algae_peel.png",
  "anti-aging-rejuvenation": "/anti-aging.png",
  "mens-detox-facial": "/facial_for_men.png",
  "deep-cleanse-combo": "/deep_cleanse.jpg",
  "mens-bald-head-facial": "/bald_treatment.jpg",
  "stretch-mark-removal": "/stretch_mark.png",
  "dark-knuckle-treatment": "/dark_knuckles.png"
}

export function ServiceDetail({ service, index }: ServiceDetailProps) {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={sectionRef}
      className={cn(
        "transition-all duration-1000 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          <Image
            src={serviceImages[service.id] || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div>
            <p className="font-[var(--font-body)] text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              {service.category}
            </p>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4 leading-tight">
              {service.title}
            </h2>
            <p className="font-[var(--font-display)] text-xl md:text-2xl text-primary mb-6">
              {service.price}
            </p>
            <p className="font-[var(--font-body)] text-base text-muted-foreground font-light leading-relaxed mb-8">
              {service.description}
            </p>
          </div>

          {service.sessions && (
            <div>
              <h3 className="font-[var(--font-body)] text-xs tracking-[0.2em] uppercase text-foreground mb-2">
                Treatment Plan
              </h3>
              <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light">
                {service.sessions}
              </p>
            </div>
          )}

          {service.results && (
            <div>
              <h3 className="font-[var(--font-body)] text-xs tracking-[0.2em] uppercase text-foreground mb-2">
                Expected Results
              </h3>
              <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light">
                {service.results}
              </p>
            </div>
          )}

          <div className="h-px bg-border" />

          <div>
            <h3 className="font-[var(--font-body)] text-xs tracking-[0.2em] uppercase text-foreground mb-4">
              Benefits
            </h3>
            <ul className="space-y-3">
              {service.benefits.map((benefit, i) => (
                <li
                  key={i}
                  className="font-[var(--font-body)] text-sm text-muted-foreground font-light flex items-start"
                >
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[var(--font-body)] text-xs tracking-[0.2em] uppercase text-foreground mb-4">
              Treatment Details
            </h3>
            <ul className="space-y-3">
              {service.details.map((detail, i) => (
                <li
                  key={i}
                  className="font-[var(--font-body)] text-sm text-muted-foreground font-light flex items-start"
                >
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {service.areas && service.areas.length > 0 && (
            <div>
              <h3 className="font-[var(--font-body)] text-xs tracking-[0.2em] uppercase text-foreground mb-4">
                Treatment Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.areas.map((area, i) => (
                  <span
                    key={i}
                    className="font-[var(--font-body)] text-xs px-3 py-1.5 bg-muted text-foreground"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="pt-6">
            {service.bookingOptions && service.bookingOptions.length > 1 ? (
              <div className="space-y-3">
                <h3 className="font-[var(--font-body)] text-xs tracking-[0.2em] uppercase text-foreground mb-4">
                  Select Option to Book
                </h3>
                {service.bookingOptions.map((option) => (
                  <Link
                    key={option.id}
                    href={`/book?service=${option.id}`}
                    className="flex justify-between items-center p-4 border border-border hover:border-primary transition-colors duration-300 group"
                  >
                    <span className="font-[var(--font-body)] text-sm text-foreground group-hover:text-primary">
                      {option.name}
                    </span>
                    <span className="font-[var(--font-display)] text-lg text-foreground group-hover:text-primary">
                      R{option.price}
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                href={`/book?service=${service.bookingOptions?.[0]?.id || service.id}`}
                className="inline-block font-[var(--font-body)] text-xs tracking-[0.2em] uppercase px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300"
              >
                Book This Treatment
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="mt-16 h-px bg-border" />
    </div>
  )
}
