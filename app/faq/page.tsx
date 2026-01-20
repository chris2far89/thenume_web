"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    category: "Bookings & Consultations",
    questions: [
      {
        q: "How do I book a treatment?",
        a: "You can book online through our website, call us directly, or visit our location. We recommend booking in advance to secure your preferred time slot."
      },
      {
        q: "What happens during a consultation?",
        a: "Your dedicated skin technician or nurse will assess your concerns, goals, and challenges. We'll create a personalized treatment plan with recommended in-clinic treatments and home-care products."
      },
      {
        q: "How much does a consultation cost?",
        a: "Virtual consultations are R250, and in-person consultations are R395. This investment ensures you receive expert guidance tailored to your unique needs."
      }
    ]
  },
  {
    category: "Treatments & Results",
    questions: [
      {
        q: "How many sessions will I need?",
        a: "Treatment plans vary based on your goals and the service. Most treatments require 6-12 sessions for optimal results. Your specialist will provide a personalized recommendation during your consultation."
      },
      {
        q: "When will I see results?",
        a: "Results vary by treatment. Some clients see improvements after the first session, while others notice changes after 3-5 sessions. Full transformation typically appears after completing your treatment course."
      },
      {
        q: "Are treatments painful?",
        a: "Most treatments are comfortable. We use numbing creams where appropriate and ensure your comfort throughout. Any temporary redness or swelling is normal and settles quickly."
      },
      {
        q: "What is the ReGlow Guarantee?",
        a: "If you don't see visible improvement within your treatment plan, we provide a complimentary re-assessment and follow-up treatment at no extra cost. Your confidence is our commitment."
      }
    ]
  },
  {
    category: "Products & Sustainability",
    questions: [
      {
        q: "Are your products natural?",
        a: "Yes, we use authentic natural products with visible ingredient lists and sustainability certifications. We're committed to eco-conscious beauty that honors both your skin and the planet."
      },
      {
        q: "Do you test on animals?",
        a: "Absolutely not. All our products and treatments are cruelty-free. We believe in ethical beauty practices."
      },
      {
        q: "Can I purchase products for home use?",
        a: "Yes, we offer curated home-care products recommended by your specialist to enhance and maintain your treatment results."
      }
    ]
  },
  {
    category: "Pricing & Packages",
    questions: [
      {
        q: "Do you offer package deals?",
        a: "Yes, many treatments offer package pricing that provides significant savings. For example, our Hair Restoration 12-session package saves R2,400 compared to individual sessions."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, credit/debit cards, and EFT. Payment plans may be available for certain treatment packages."
      },
      {
        q: "Is there a cancellation policy?",
        a: "We require 24 hours notice for cancellations or rescheduling. Late cancellations may incur a fee."
      }
    ]
  },
  {
    category: "Safety & Aftercare",
    questions: [
      {
        q: "Are treatments safe?",
        a: "Yes, all treatments are performed by certified specialists using industry-leading technology. We prioritize your safety and comfort at every step."
      },
      {
        q: "What should I do after treatment?",
        a: "Aftercare instructions vary by treatment. Your specialist will provide detailed guidance, and we include complimentary aftercare products where needed."
      },
      {
        q: "Can I wear makeup after facial treatments?",
        a: "We recommend avoiding makeup for 24 hours after most facial treatments to allow your skin to heal and absorb the benefits fully."
      }
    ]
  }
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-[var(--font-body)] text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            FAQ
          </p>
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-foreground tracking-[0.02em] leading-[1.1] max-w-4xl mb-6">
            Your questions answered
          </h1>
          <p className="font-[var(--font-body)] text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
            Find answers to common questions about our treatments, booking process, and what to expect.
          </p>
        </div>
      </section>

      <section className="pb-32 md:pb-40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-16">
              <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-light text-foreground mb-8">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => {
                  const id = `${catIndex}-${qIndex}`
                  const isOpen = openItems.includes(id)
                  
                  return (
                    <div key={id} className="border border-border">
                      <button
                        onClick={() => toggleItem(id)}
                        className="w-full p-6 flex justify-between items-center text-left hover:bg-muted/50 transition-colors duration-300"
                      >
                        <span className="font-[var(--font-body)] text-base text-foreground pr-4">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0",
                            isOpen && "rotate-180"
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300",
                          isOpen ? "max-h-96" : "max-h-0"
                        )}
                      >
                        <div className="p-6 pt-0">
                          <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
