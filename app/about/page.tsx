"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"


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
            Inspiring transformation through science and innovation
          </h1>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-32">
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-light text-foreground mb-6">Our Vision</h2>
            <p className="font-[var(--font-body)] text-base text-muted-foreground font-light leading-relaxed mb-6">
              To inspire confidence and transformation by helping every individual discover their new self — through healthier skin, a sculpted body, and elevated wellness. We envision TheNumé expanding across South Africa and beyond as a trusted destination for advanced, non-surgical beauty and wellness solutions driven by science, innovation, and results.
            </p>
          </div>

          <div className="mb-32">
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-light text-foreground mb-6">Our Mission</h2>
            <p className="font-[var(--font-body)] text-base text-muted-foreground font-light leading-relaxed">
              At TheNumé, our mission is to redefine modern beauty and wellness through science-backed skin treatments, cutting-edge non-surgical slimming technologies, and customized wellness solutions. We are dedicated to delivering personalized experiences that enhance the skin, sculpt the body, and support overall well-being. By continuously introducing the latest aesthetic devices, offering tailored treatment plans, and providing IV drip therapy for total wellness, we help our clients look, feel, and live their best — confidently and effortlessly.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-light text-foreground mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-border">
                <h3 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Science-Driven Results</h3>
                <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light leading-relaxed">
                  We believe in treatments that work. Every service we offer is grounded in proven science and advanced technology to deliver visible, long-lasting results.
                </p>
              </div>
              <div className="p-8 border border-border">
                <h3 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Innovation & Progress</h3>
                <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light leading-relaxed">
                  We stay ahead of beauty and wellness trends by consistently introducing the latest devices and techniques — ensuring our clients benefit from the most advanced non-surgical solutions available.
                </p>
              </div>
              <div className="p-8 border border-border">
                <h3 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Personalized Care</h3>
                <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light leading-relaxed">
                  No two bodies or skins are the same. We create fully customized treatment plans and wellness packages designed to meet each individual's unique goals and needs.
                </p>
              </div>
              <div className="p-8 border border-border">
                <h3 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Holistic Wellness</h3>
                <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light leading-relaxed">
                  Beauty goes beyond the surface. Through IV drip therapy and integrated wellness solutions, we support the body from within — enhancing energy, immunity, skin health, and overall vitality.
                </p>
              </div>
              <div className="p-8 border border-border md:col-span-2">
                <h3 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Excellence in Experience</h3>
                <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light leading-relaxed">
                  From consultation to results, we are committed to exceptional service, professional care, and transformative outcomes that leave every client feeling confident, renewed, and empowered.
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
