"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/service-detail"
import { services } from "@/lib/services-data"
import { useState } from "react"
import { Sparkles, Droplet, Heart, Zap, User, Scissors } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", name: "All Treatments", icon: Sparkles },
  { id: "Consultation", name: "Consultation", icon: User },
  { id: "Body Sculpting", name: "Body Sculpting", icon: Droplet },
  { id: "Facial Treatments", name: "Facial Treatments", icon: Heart },
  { id: "Wellness", name: "Wellness", icon: Zap },
  { id: "Hair & Scalp", name: "Hair & Scalp", icon: Scissors },
  { id: "Skin Treatments", name: "Skin Treatments", icon: Sparkles },
  { id: "Body Treatments", name: "Body Treatments", icon: Droplet },
]

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const getFilteredServices = () => {
    if (selectedCategory === "all") return services
    return services.filter(s => s.category === selectedCategory)
  }

  const filteredServices = getFilteredServices()

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-[var(--font-body)] text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Our Treatments
          </p>
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-foreground tracking-[0.02em] leading-[1.1] max-w-4xl mb-6">
            Authentic transformation through natural innovation
          </h1>
          <p className="font-[var(--font-body)] text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
            We provide science-backed beauty solutions that empower confidence and celebrate individuality — all while honoring the planet. Effortless beauty, consciously created.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "flex flex-col items-center gap-3 p-6 border transition-all duration-300 group",
                    selectedCategory === category.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <Icon className={cn(
                    "w-8 h-8 transition-colors duration-300",
                    selectedCategory === category.id ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                  )} />
                  <span className={cn(
                    "font-[var(--font-body)] text-xs text-center transition-colors duration-300",
                    selectedCategory === category.id ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                  )}>
                    {category.name}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="pb-32 md:pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-32 md:space-y-40">
            {filteredServices.map((service, index) => (
              <ServiceDetail key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
