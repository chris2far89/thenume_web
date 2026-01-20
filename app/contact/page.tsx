"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-[var(--font-body)] text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Contact Us
          </p>
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-foreground tracking-[0.02em] leading-[1.1] max-w-4xl mb-6">
            Let's begin your transformation
          </h1>
          <p className="font-[var(--font-body)] text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
            Reach out to us for consultations, bookings, or any questions about our treatments.
          </p>
        </div>
      </section>

      <section className="pb-32 md:pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-[var(--font-display)] text-xl font-light text-foreground mb-2">WhatsApp</h3>
                  <a href="https://wa.me/27760401540" target="_blank" rel="noopener noreferrer" className="font-[var(--font-body)] text-sm text-muted-foreground font-light hover:text-primary transition-colors">
                    +27 76 040 1540
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-[var(--font-display)] text-xl font-light text-foreground mb-2">Instagram</h3>
                  <a href="https://www.instagram.com/thenu.me_za/" target="_blank" rel="noopener noreferrer" className="font-[var(--font-body)] text-sm text-muted-foreground font-light hover:text-primary transition-colors">
                    @thenu.me_za
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-[var(--font-display)] text-xl font-light text-foreground mb-2">Hours</h3>
                  <div className="space-y-2">
                    <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light">
                      Monday – Friday: 8:00 AM – 6:00 PM
                    </p>
                    <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light">
                      Saturday: 9:00 AM – 5:00 PM
                    </p>
                    <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light">
                      Sunday: 9:00 AM – 3:00 PM
                    </p>
                    <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light">
                      Holidays: 9:00 AM – 3:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 border border-border">
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300 font-[var(--font-body)] text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300 font-[var(--font-body)] text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300 font-[var(--font-body)] text-sm"
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300 font-[var(--font-body)] text-sm resize-none"
                    placeholder="Tell us about your beauty goals..."
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
