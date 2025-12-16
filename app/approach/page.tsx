"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function ApproachPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-[var(--font-body)] text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Our Approach
          </p>
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-foreground tracking-[0.02em] leading-[1.1] max-w-4xl mb-6">
            Where authentic beauty meets conscious innovation
          </h1>
          <p className="font-[var(--font-body)] text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
            A sanctuary for transformation built on trust, inclusivity, and expertise.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-32">
            <div className="relative aspect-[4/5] bg-muted">
              <Image src="/luxury-spa-retreat-pool-zen-garden.jpg" alt="Science-Backed Beauty" fill className="object-cover" />
            </div>
            <div>
              <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-light text-foreground mb-6">Science-Backed Beauty</h2>
              <p className="font-[var(--font-body)] text-base text-muted-foreground font-light leading-relaxed mb-6">
                We provide authentic transformation through science-backed beauty innovations that empower confidence and celebrate individuality — all while honoring the environment.
              </p>
              <p className="font-[var(--font-body)] text-base text-muted-foreground font-light leading-relaxed">
                Unlike traditional beauty clinics that overpromise results or prioritize exclusivity, TheNumé simplifies beauty through sustainable innovation, personalized care, and a luxurious yet inclusive experience.
              </p>
            </div>
          </div>

          <div className="mb-32">
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-light text-foreground mb-12 text-center">Our Differentiation Strategy</h2>
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Trust Through Transparency</h3>
                  <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light leading-relaxed mb-4">
                    We are radically transparent about treatment expectations, timelines, and results. Every client receives before-and-after progress tracking using digital imaging.
                  </p>
                  <ul className="space-y-2">
                    <li className="font-[var(--font-body)] text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Authentic products with visible ingredient lists</span>
                    </li>
                    <li className="font-[var(--font-body)] text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Sustainability certification</span>
                    </li>
                    <li className="font-[var(--font-body)] text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>"ReGlow Guarantee" — results or complimentary follow-up</span>
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-[4/3] bg-muted">
                  <Image src="/luxury-facial-treatment-spa-skincare.jpg" alt="Transparency" fill className="object-cover" />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="order-2 lg:order-1 relative aspect-[4/3] bg-muted">
                  <Image src="/luxury-spa-interior-zen-minimalist-stone-water-fea.jpg" alt="Inclusive Luxury" fill className="object-cover" />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Inclusive Luxury</h3>
                  <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light leading-relaxed mb-4">
                    We redefine luxury as care, not exclusivity. TheNumé is elegant, but welcoming — celebrating real clients, not celebrities.
                  </p>
                  <ul className="space-y-2">
                    <li className="font-[var(--font-body)] text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Warmth, respect, and personal attention</span>
                    </li>
                    <li className="font-[var(--font-body)] text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Membership programs that reward loyalty</span>
                    </li>
                    <li className="font-[var(--font-body)] text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Luxury through care, not class</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Expertise & Consistency</h3>
                  <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light leading-relaxed mb-4">
                    TheNumé Standard certification ensures all beauty specialists deliver skill, communication, and empathy consistently across all branches.
                  </p>
                  <ul className="space-y-2">
                    <li className="font-[var(--font-body)] text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Ongoing training and quality audits</span>
                    </li>
                    <li className="font-[var(--font-body)] text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Client-therapist pairing for returning customers</span>
                    </li>
                    <li className="font-[var(--font-body)] text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>TheNumé Academy certification program</span>
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-[4/3] bg-muted">
                  <Image src="/thermal-spa-treatment-sauna-luxury-wellness.jpg" alt="Expertise" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-12 border border-primary/20">
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-light text-foreground mb-6 text-center">The ReGlow Guarantee</h2>
            <p className="font-[var(--font-body)] text-base text-muted-foreground font-light leading-relaxed text-center max-w-3xl mx-auto">
              We stand behind our results. If you don't see visible skin improvement within your treatment plan, we provide a complimentary re-assessment and follow-up treatment at no extra cost. Your confidence is our commitment.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
