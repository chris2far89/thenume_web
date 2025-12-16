"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="font-[var(--font-body)] text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Legal
          </p>
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-[0.02em] leading-[1.1] mb-12">
            Terms & Conditions
          </h1>

          <div className="space-y-8 font-[var(--font-body)] text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using TheNumé's services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
              </p>
            </div>

            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Booking & Appointments</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All bookings require account registration</li>
                <li>You must complete a consultation form before your first appointment</li>
                <li>Consultation forms are valid for all future appointments</li>
                <li>Appointments are subject to availability</li>
                <li>We reserve the right to refuse service to anyone</li>
              </ul>
            </div>

            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Cancellation & Rescheduling</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You may reschedule your appointment up to 12 hours before your scheduled time</li>
                <li>Late cancellations (less than 12 hours notice) may result in forfeiture of any deposits</li>
                <li>No-shows will be charged the full treatment cost</li>
                <li>We reserve the right to cancel or reschedule appointments due to unforeseen circumstances</li>
              </ul>
            </div>

            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment is required at the time of service</li>
                <li>We accept various payment methods as displayed at checkout</li>
                <li>All prices are in South African Rand (ZAR)</li>
                <li>Prices are subject to change without notice</li>
              </ul>
            </div>

            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Medical Disclaimer</h2>
              <p>
                Our treatments are cosmetic in nature and are not intended to diagnose, treat, cure, or prevent any disease. You must disclose all relevant medical information in your consultation form. We are not liable for any adverse reactions resulting from undisclosed medical conditions or medications.
              </p>
            </div>

            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Results & Expectations</h2>
              <p>
                Individual results may vary. We make no guarantees regarding the outcome of any treatment. Before-and-after photos and testimonials represent individual experiences and are not guarantees of your results.
              </p>
            </div>

            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Liability</h2>
              <p>
                TheNumé shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid for the specific service in question.
              </p>
            </div>

            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, and images, is the property of TheNumé and protected by copyright laws. You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
            </div>

            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Contact Information</h2>
              <p>
                For questions about these Terms & Conditions, please contact us at:<br />
                WhatsApp: +27 76 040 1540<br />
                Instagram: @thenu.me_za<br />
                Address: 8 Tin Rd, Bromhof, Randburg, 2154
              </p>
            </div>

            <div>
              <p className="text-xs">Last updated: January 2025</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
