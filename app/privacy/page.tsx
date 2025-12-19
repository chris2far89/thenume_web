"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="font-[var(--font-body)] text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Legal
          </p>
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-[0.02em] leading-[1.1] mb-12">
            Privacy Policy
          </h1>

          <div className="space-y-8 font-[var(--font-body)] text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Introduction</h2>
              <p>
                TheNumé ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Information We Collect</h2>
              <p className="mb-3">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Booking and appointment details</li>
                <li>Medical history and consultation forms</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
              </ul>
            </div>

            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your bookings and appointments</li>
                <li>Send you consultation forms and treatment information</li>
                <li>Communicate with you about your appointments</li>
                <li>Send promotional materials (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business, conducting our services, or servicing you, as long as those parties agree to keep this information confidential.
              </p>
            </div>

            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">POPI Act Compliance</h2>
              <p className="mb-3">
                TheNumé is committed to complying with the Protection of Personal Information Act (POPI Act) of South Africa. We process your personal information lawfully, fairly, and transparently. Under POPI, you have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to be notified about the collection and use of your personal information</li>
                <li>Right to access your personal information we hold</li>
                <li>Right to correct or update inaccurate personal information</li>
                <li>Right to delete your personal information (subject to legal requirements)</li>
                <li>Right to object to the processing of your personal information</li>
                <li>Right to lodge a complaint with the Information Regulator</li>
              </ul>
            </div>

            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Cookies and Tracking</h2>
              <p className="mb-3">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site usage, and provide personalized content. Cookies are small data files stored on your device. You can control cookie settings through your browser, but disabling cookies may affect site functionality.
              </p>
              <p>
                By continuing to use our website, you consent to our use of cookies as described in this policy.
              </p>
            </div>

            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
                <li>File a complaint with the Information Regulator of South Africa</li>
              </ul>
            </div>

            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:<br />
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
