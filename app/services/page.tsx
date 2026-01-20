"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/service-detail"
import { useState, useEffect } from "react"
import { Sparkles, Droplet, Heart, Zap, User, Scissors } from "lucide-react"
import { cn } from "@/lib/utils"
import { supabase } from "@/lib/supabase"

interface Service {
  id: string
  title: string
  category: string
  price_display: string
  description: string
  benefits: string[]
  details: string[]
  sessions?: string
  results?: string
  areas?: string[]
  image_url: string
  bookingOptions?: { id: string; name: string; price: number }[]
}

const categories = [
  { id: "all", name: "All Treatments", icon: Sparkles },
  { id: "Consultation", name: "Consultation", icon: User },
  { id: "Body Sculpting", name: "Body Sculpting", icon: Droplet },
  { id: "Facial Treatments", name: "Facial Treatments", icon: Heart },
  { id: "Wellness", name: "Wellness", icon: Zap },
  { id: "Hair & Scalp", name: "Hair & Scalp", icon: Scissors },
  { id: "Skin Treatments", name: "Skin Treatments", icon: Sparkles },
  { id: "Fungal Treatments", name: "Fungal Treatments", icon: Droplet },
  { id: "Men's Treatments", name: "Men's Treatments", icon: User },
]

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchServices() {
      try {
        // Fetch services
        const { data: servicesData, error: servicesError } = await supabase
          .from('services')
          .select('*')
          .eq('active', true)
          .order('title')

        if (servicesError) throw servicesError

        // Fetch booking options
        const { data: optionsData, error: optionsError } = await supabase
          .from('service_booking_options')
          .select('*')
          .order('price')

        if (optionsError) throw optionsError

        // Combine services with their booking options
        const servicesWithOptions = servicesData.map(service => ({
          ...service,
          price: service.price_display, // Map for compatibility
          bookingOptions: optionsData.filter(option => option.service_id === service.id)
        }))

        setServices(servicesWithOptions)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  const getFilteredServices = () => {
    if (selectedCategory === "all") return services
    return services.filter(s => s.category === selectedCategory)
  }

  const filteredServices = getFilteredServices()

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading services...</p>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

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
