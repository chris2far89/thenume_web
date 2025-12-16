"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-[var(--font-body)] text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            About Us
          </p>
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-foreground tracking-[0.02em] leading-[1.1] max-w-4xl mb-12">
            We don't change who you are — we reveal your best self
          </h1>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32">
            <div className="relative aspect-[4/5] bg-muted">
              <Image src="/luxury-spa-interior-warm-lighting-minimalist-zen.jpg" alt="TheNumé" fill className="object-cover" />
            </div>
            <div>
              <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-light text-foreground mb-6">Our Vision</h2>
              <p className="font-[var(--font-body)] text-base text-muted-foreground font-light leading-relaxed mb-6">
                We aspire to empower every individual to experience their new self — with renewed body and radiant skin — by introducing innovative ways to simplify beauty, expanding into opulent destinations across South Africa and beyond, and championing sustainable products that protect our environment and celebrate conscious beauty.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32">
            <div className="order-2 lg:order-1">
              <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-light text-foreground mb-6">Our Mission</h2>
              <p className="font-[var(--font-body)] text-base text-muted-foreground font-light leading-relaxed">
                We are committed to redefining everyday beauty by providing exceptional, personalized services that help our customers feel renewed, confident, and radiant. Every day, we blend innovation with care — using sustainable, science-backed products and simplified beauty solutions that enhance the body, skin, and spirit. Through consistent excellence, environmental mindfulness, and a passion for transformation, we bring the TheNumé experience to life — making effortless beauty accessible to everyone, everywhere.
              </p>
            </div>
            <div className="relative aspect-[4/5] bg-muted order-1 lg:order-2">
              <Image src="/luxury-facial-treatment-spa-skincare.jpg" alt="Our Mission" fill className="object-cover" />
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-light text-foreground mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-border">
                <h3 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Authentic Transformation</h3>
                <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light leading-relaxed">
                  We believe beauty begins with authenticity. Every service we offer is designed to help our customers embrace their true selves — renewed, confident, and radiant.
                </p>
              </div>
              <div className="p-8 border border-border">
                <h3 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Innovative Simplicity</h3>
                <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light leading-relaxed">
                  We simplify beauty through innovation — continuously finding creative, effortless ways to make self-care accessible, enjoyable, and transformative.
                </p>
              </div>
              <div className="p-8 border border-border">
                <h3 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Sustainable Elegance</h3>
                <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light leading-relaxed">
                  We are dedicated to using eco-conscious products that honor both the skin and the environment — promoting a culture of beauty that is luxurious yet sustainable.
                </p>
              </div>
              <div className="p-8 border border-border">
                <h3 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Excellence in Experience</h3>
                <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light leading-relaxed">
                  We strive for excellence in every touchpoint — from personalized care to luxurious environments — ensuring that every TheNumé experience leaves a lasting impression of confidence and well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
