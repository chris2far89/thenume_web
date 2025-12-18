"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Home() {
  const [inView, setInView] = useState(false)
  const aboutRef = useRef<HTMLElement>(null)
  const teamRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (aboutRef.current) observer.observe(aboutRef.current)
    if (teamRef.current) observer.observe(teamRef.current)
    if (contactRef.current) observer.observe(contactRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/90">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: `url('/header.png')`,
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background/40" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="font-[var(--font-body)] text-xs md:text-sm tracking-[0.4em] uppercase text-primary-foreground/80 mb-6">
            Beauty By Science
          </p>
          <h1 className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-primary-foreground tracking-[0.05em] leading-[0.9] mb-8">
            <span className="block">Rediscover</span>
            <span className="block">Your Radiance</span>
          </h1>
          <p className="font-[var(--font-body)] text-sm md:text-base text-primary-foreground/70 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
            Authentic transformation through simplicity, innovation, and care
          </p>
        </div>
      </section>

      {/* About TheNumé Section */}
      <section ref={aboutRef} className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div
              className={cn(
                "transition-all duration-1000 ease-out",
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              )}
            >
              <p className="font-[var(--font-body)] text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
                About TheNumé
              </p>
              <h1 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-[0.02em] leading-[1.1] mb-6">
                Where authentic beauty meets conscious innovation
              </h1>
              <p className="font-[var(--font-body)] text-base text-muted-foreground font-light leading-relaxed mb-6">
                We don't change who you are — we reveal your best self. Through trust, innovation, and care, we create a sanctuary where transformation feels effortless.
              </p>
              <p className="font-[var(--font-body)] text-base text-muted-foreground font-light leading-relaxed mb-6">
                At TheNumé, we believe beauty begins with authenticity. Every treatment is designed to help you embrace your true self — renewed, confident, and radiant. We blend science-backed solutions with sustainable elegance, ensuring every experience leaves a lasting impression of confidence and well-being.
              </p>
              <p className="font-[var(--font-body)] text-base text-muted-foreground font-light leading-relaxed">
                Our commitment extends beyond exceptional service — we champion eco-conscious products that honor both your skin and the environment, making effortless beauty accessible to everyone, everywhere.
              </p>
            </div>
            <div
              className={cn(
                "relative aspect-[4/5] bg-muted transition-all duration-1000 ease-out delay-200",
                inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              )}
            >
              <Image
                src="/luxury-spa-interior-warm-lighting-minimalist-zen.jpg"
                alt="TheNumé Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section ref={teamRef} className="py-20 md:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={cn(
              "text-center mb-16 transition-all duration-1000 ease-out",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            <p className="font-[var(--font-body)] text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
              Our Team
            </p>
            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-[0.02em] leading-[1.1] mb-6">
              Experts in transformation
            </h2>
            <p className="font-[var(--font-body)] text-base text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              Our dedicated team of professionals brings years of expertise, passion, and care to every treatment — ensuring you receive the highest standard of personalized service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            <div
              className={cn(
                "transition-all duration-1000 ease-out delay-300",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
            >
              <div className="relative aspect-[3/4] bg-muted mb-6">
                <Image
                  src="/tebo.png"
                  alt="Therapist Tebo"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-2">
                Therapist Tebo
              </h3>
              <p className="font-[var(--font-body)] text-sm tracking-[0.15em] uppercase text-muted-foreground mb-3">
                Professional Skin & Body Therapist
              </p>
              <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light leading-relaxed">
                A highly trained professional dedicated to helping you look and feel your absolute best. With a deep understanding of skin health, weight management, and advanced body treatments, she combines science-driven techniques with a personalized, results-focused approach. Known for her gentle touch, professionalism, and attention to detail, she takes the time to understand your goals and design treatment plans that support real, visible results.
              </p>
            </div>

            <div
              className={cn(
                "transition-all duration-1000 ease-out delay-500",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
            >
              <div className="relative aspect-[3/4] bg-muted mb-6">
                <Image
                  src="/yaya.jpg"
                  alt="Nurse Yaya"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-2">
                Nurse Yaya
              </h3>
              <p className="font-[var(--font-body)] text-sm tracking-[0.15em] uppercase text-muted-foreground mb-3">
                Wellness & Aesthetics Nurse
              </p>
              <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light leading-relaxed">
                A dedicated and compassionate healthcare professional with a strong passion for wellness, aesthetics, and patient-centered care. Highly knowledgeable in administering IV drips and providing family planning services, she ensures each treatment is delivered safely and professionally. Known for her calm and caring nature, she combines medical expertise with a warm, reassuring approach, helping clients achieve optimal health, balance, and overall wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={contactRef} className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div
              className={cn(
                "transition-all duration-1000 ease-out",
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              )}
            >
              <p className="font-[var(--font-body)] text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
                Get In Touch
              </p>
              <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-[0.02em] leading-[1.1] mb-6">
                Begin your journey with us
              </h2>
              <p className="font-[var(--font-body)] text-base text-muted-foreground font-light leading-relaxed mb-8">
                Whether you have questions about our treatments or wish to schedule a consultation, we're here to guide you every step of the way.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-[var(--font-body)] text-sm text-foreground font-light leading-relaxed">
                      123 Wellness Boulevard
                      <br />
                      Beverly Hills, CA 90210
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-[var(--font-body)] text-sm text-foreground font-light">
                      +1 (555) 234-5678
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-[var(--font-body)] text-sm text-foreground font-light">
                      reservations@thenume.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={cn(
                "transition-all duration-1000 ease-out delay-200",
                inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              )}
            >
              <form className="space-y-6">
                <div>
                  <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300 font-[var(--font-body)] text-sm"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300 font-[var(--font-body)] text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300 font-[var(--font-body)] text-sm"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300 font-[var(--font-body)] text-sm resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-[var(--font-body)] text-xs tracking-[0.2em] uppercase px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
