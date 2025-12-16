"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/service-detail"
import { services } from "@/lib/services-data"

export default function SkinTreatmentsPage() {
  const skinServices = services.filter(s => s.category === 'Facial Treatments' || s.category === 'Skin Treatments')

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-[var(--font-body)] text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Skin Treatments
          </p>
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-foreground tracking-[0.02em] leading-[1.1] max-w-4xl mb-6">
            Radiant skin through science
          </h1>
          <p className="font-[var(--font-body)] text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
            Advanced facial and skin treatments designed to reveal your natural glow.
          </p>
        </div>
      </section>

      <section className="pb-32 md:pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-32 md:space-y-40">
            {skinServices.map((service, index) => (
              <ServiceDetail key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
