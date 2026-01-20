"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { Mail, Phone } from "lucide-react"

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
      <section className="relative h-[70vh] md:h-screen flex items-center justify-center overflow-hidden">
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
                Plasma Energy Technology
              </p>
              <h1 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-[0.02em] leading-[1.1] mb-6">
                The future of skin transformation
              </h1>
              <p className="font-[var(--font-body)] text-base text-muted-foreground font-light leading-relaxed mb-6">
                At TheNumé, we harness the revolutionary power of Plasma Energy — the fourth state of matter — to deliver unparalleled skin rejuvenation and transformation.
              </p>
              <p className="font-[var(--font-body)] text-base text-muted-foreground font-light leading-relaxed mb-6">
                This cutting-edge technology works at the cellular level, stimulating natural collagen production, tightening skin instantly, and promoting deep regeneration without invasive procedures. From wrinkle reduction to skin tightening, hair restoration to scar treatment — Plasma Energy delivers visible, lasting results.
              </p>
              <p className="font-[var(--font-body)] text-base text-muted-foreground font-light leading-relaxed">
                Experience the science of tomorrow, today. Where innovation meets beauty, and transformation becomes effortless.
              </p>
            </div>
            <div
              className={cn(
                "relative aspect-[4/5] bg-muted transition-all duration-1000 ease-out delay-200",
                inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              )}
            >
              <Image
                src="/plasma.png"
                alt="Plasma Energy Technology"
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

      {/* Consultation Call to Action */}
      <section className="py-20 md:py-28 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-[var(--font-body)] text-xs tracking-[0.4em] uppercase text-white/60 mb-4">
            Professional Consultation
          </p>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-[0.02em] leading-[1.1] mb-6">
            Begin with a consultation
          </h2>
          <p className="font-[var(--font-body)] text-base text-white/80 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            We ensure every consultation is a premium, personalised experience designed to deliver real, transformative, and lasting results.
          </p>
          <div className="space-y-3 mb-12 max-w-xl mx-auto">
            <p className="font-[var(--font-body)] text-sm text-white/70 font-light">
              Expert assessment of your key concerns and goals
            </p>
            <p className="font-[var(--font-body)] text-sm text-white/70 font-light">
              Tailored treatment plan using advanced diagnostic insights
            </p>
            <p className="font-[var(--font-body)] text-sm text-white/70 font-light">
              Comprehensive home-care prescription
            </p>
          </div>
          <div className="space-y-4">
            <a
              href="/book?service=consultation-virtual"
              className="inline-block font-[var(--font-body)] text-xs tracking-[0.2em] uppercase px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors duration-300 mr-4"
            >
              Virtual - R250
            </a>
            <a
              href="/book?service=consultation-person"
              className="inline-block font-[var(--font-body)] text-xs tracking-[0.2em] uppercase px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              In-Person - R395
            </a>
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
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-[var(--font-body)] text-sm text-foreground font-light">
                      +27 76 040 1540
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-[var(--font-body)] text-sm text-foreground font-light">
                      @thenu.me_za
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
      <WhatsAppChat />
    </main>
  )
}
