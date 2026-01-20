"use client"

import { useState, useEffect, useRef, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Check, ChevronRight, ChevronDown } from "lucide-react"

const treatmentCategories = {
  "Consultation": [
    { id: "consultation-virtual", name: "Virtual Consultation", duration: "30 min", price: 250 },
    { id: "consultation-person", name: "In-Person Consultation", duration: "45 min", price: 395 },
  ],
  "Body Sculpting": [
    { id: "fat-dissolving-face", name: "Lipo Vela V-Line (Face)", duration: "60 min", price: 1050 },
    { id: "fat-dissolving-body", name: "Lipo Vela (Body)", duration: "60 min", price: 1350 },
    { id: "fat-dissolving-lemon", name: "Lemon Bottle", duration: "60 min", price: 2000 },
    { id: "fat-freeze-one", name: "Fat Freeze (One Applicator)", duration: "60 min", price: 500 },
    { id: "fat-freeze-two", name: "Fat Freeze (Two Applicators)", duration: "60 min", price: 1000 },
    { id: "cavitation-rf-g5", name: "Cavitation, RF & G5 Combo", duration: "60 min", price: 800 },
    { id: "cellulite-reduction", name: "Cellulite Reduction", duration: "60 min", price: 800 },
    { id: "wood-therapy", name: "Wood Therapy + G5", duration: "60 min", price: 600 },
  ],
  "Facial Treatments": [
    { id: "prp-face", name: "PRP Vampire Facial (Face)", duration: "90 min", price: 2000 },
    { id: "prp-full", name: "PRP Vampire Facial (Face, Neck & Chest)", duration: "90 min", price: 2800 },
    { id: "microneedling-face-neck", name: "Microneedling + Dermaplaning + LED (Face & Neck)", duration: "75 min", price: 1050 },
    { id: "microneedling-full", name: "Microneedling + Dermaplaning + LED (Face, Neck & Chest)", duration: "75 min", price: 1500 },
    { id: "pigmentation-brightening", name: "Pigmentation Brightening Treatment", duration: "75 min", price: 1750 },
    { id: "acne-face", name: "Acne Peel + High Frequency (Face)", duration: "45 min", price: 500 },
    { id: "acne-body", name: "Acne Peel + High Frequency (Body)", duration: "60 min", price: 950 },
    { id: "glow-combo", name: "Glow Combo", duration: "60 min", price: 800 },
    { id: "zena-face", name: "Zena Algae Peel (Face)", duration: "60 min", price: 800 },
    { id: "zena-body", name: "Zena Algae Peel (Body)", duration: "90 min", price: 1500 },
    { id: "anti-aging", name: "Anti-Aging Rejuvenation", duration: "90 min", price: 1800 },
    { id: "deep-cleanse", name: "Deep Cleanse Combo", duration: "60 min", price: 800 },
  ],
  "Men's Treatments": [
    { id: "mens-detox", name: "Men's Detox Facial", duration: "60 min", price: 850 },
    { id: "mens-bald-head", name: "Men's Bald Head Facial", duration: "45 min", price: 400 },
  ],
  "Skin Treatments": [
    { id: "skin-tag-20", name: "Skin Tag Removal (20 min)", duration: "20 min", price: 650 },
    { id: "skin-tag-40", name: "Skin Tag Removal (40 min)", duration: "40 min", price: 1000 },
    { id: "skin-tag-60", name: "Skin Tag Removal (1 hour)", duration: "60 min", price: 1500 },
    { id: "dark-knuckle", name: "Dark Knuckle Treatment (8 Sessions)", duration: "30 min", price: 2000 },
    { id: "stretch-single", name: "Stretch Mark Removal (Single)", duration: "60 min", price: 1500 },
    { id: "stretch-package", name: "Stretch Mark Removal (8 Sessions)", duration: "60 min", price: 8800 },
  ],
  "Hair & Scalp": [
    { id: "hair-single", name: "Hair Restoration (Single)", duration: "60 min", price: 1200 },
    { id: "hair-package", name: "Hair Restoration (12 Sessions)", duration: "60 min", price: 12000 },
  ],
  "Wellness": [
    { id: "iv-glow", name: "Skin Lightening Glow Drip", duration: "45 min", price: 800 },
    { id: "iv-energy", name: "Energy Booster Drip", duration: "45 min", price: 900 },
    { id: "iv-sports", name: "Sports Recovery Drip", duration: "45 min", price: 1000 },
    { id: "iv-detox", name: "Detox Wellness Drip", duration: "45 min", price: 900 },
  ],
  "Fungal Treatments": [
    { id: "nail-single", name: "Nail Fungus Removal (Single)", duration: "30 min", price: 300 },
    { id: "nail-package", name: "Nail Fungus Removal (8 Sessions)", duration: "30 min", price: 2000 },
  ],
}

const treatments = Object.values(treatmentCategories).flat()

const timeSlots = ["9:00 AM", "10:30 AM", "12:00 PM", "2:00 PM", "3:30 PM", "5:00 PM"]

function BookingContent() {
  const searchParams = useSearchParams()
  const preSelectedService = searchParams.get('service')
  
  const [step, setStep] = useState(1)
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set(["Consultation"]))
  const [isNewUser, setIsNewUser] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [bookingConfirmed, setBookingConfirmed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (preSelectedService) {
      setSelectedTreatment(preSelectedService)
      setStep(2)
    }
  }, [preSelectedService])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const toggleCategory = (category: string) => {
    const newOpenCategories = new Set(openCategories)
    if (newOpenCategories.has(category)) {
      newOpenCategories.delete(category)
    } else {
      newOpenCategories.add(category)
    }
    setOpenCategories(newOpenCategories)
  }

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleConfirmBooking = async () => {
    if (isSubmitting) return
    
    setIsSubmitting(true)
    
    try {
      const selectedTreatmentData = treatments.find((t) => t.id === selectedTreatment)
      
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceId: selectedTreatment,
          serviceName: selectedTreatmentData?.name,
          date: selectedDate?.toISOString().split('T')[0],
          time: selectedTime,
          fullName,
          email,
          phone,
          userId: null
        })
      })

      const data = await response.json()
      
      if (data.success) {
        setBookingConfirmed(true)
      } else {
        alert('Booking failed. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Booking error:', error)
      alert('Booking failed. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const canProceed = () => {
    if (step === 1) return selectedTreatment !== null
    if (step === 2) return selectedDate !== undefined
    if (step === 3) return selectedTime !== null
    if (step === 4) {
      if (isNewUser) {
        return email && password && confirmPassword && password === confirmPassword && fullName && phone
      }
      return email && password
    }
    return false
  }

  return (
    <section id="booking" ref={sectionRef} className="py-32 md:py-40 bg-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={cn(
            "text-center mb-16 md:mb-24 transition-all duration-1000 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
          )}
        >
          <p className="font-[var(--font-body)] text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Reservations
          </p>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-[0.02em] leading-[1.1]">
            Begin your transformation
          </h2>
        </div>

        <div
          className={cn(
            "flex justify-center items-center gap-4 md:gap-8 mb-16 transition-all duration-1000 ease-out delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {[
            { num: 1, label: "Treatment" },
            { num: 2, label: "Date" },
            { num: 3, label: "Time" },
            { num: 4, label: "Account" },
          ].map((s, i) => (
            <div key={s.num} className="flex items-center gap-4 md:gap-8">
              <button
                onClick={() => {
                  if (s.num < step || (s.num === 2 && selectedTreatment) || (s.num === 3 && selectedDate)) {
                    setStep(s.num)
                  }
                }}
                className={cn(
                  "flex flex-col items-center gap-2 transition-all duration-300",
                  s.num <= step ? "opacity-100" : "opacity-40",
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-[var(--font-body)] transition-all duration-500",
                    s.num < step
                      ? "bg-primary text-primary-foreground"
                      : s.num === step
                        ? "border-2 border-primary text-primary"
                        : "border border-muted-foreground text-muted-foreground",
                  )}
                >
                  {s.num < step ? <Check className="w-4 h-4" /> : s.num}
                </div>
                <span className="font-[var(--font-body)] text-xs tracking-[0.15em] uppercase text-muted-foreground hidden md:block">
                  {s.label}
                </span>
              </button>
              {i < 3 && (
                <div
                  className={cn(
                    "w-12 md:w-24 h-px transition-colors duration-500",
                    s.num < step ? "bg-primary" : "bg-border",
                  )}
                />
              )}
            </div>
          ))}
        </div>

        <div
          className={cn(
            "max-w-4xl mx-auto transition-all duration-1000 ease-out delay-300",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div
            className={cn(
              "transition-all duration-500",
              step === 1 ? "opacity-100 translate-x-0" : "opacity-0 absolute pointer-events-none translate-x-8",
            )}
          >
            {step === 1 && (
              <div className="space-y-4">
                {Object.entries(treatmentCategories).map(([category, categoryTreatments]) => {
                  const isOpen = openCategories.has(category)
                  return (
                    <div key={category} className="border border-border">
                      <button
                        onClick={() => toggleCategory(category)}
                        className="w-full flex justify-between items-center p-6 text-left hover:bg-primary/5 transition-colors duration-300"
                      >
                        <h3 className="font-[var(--font-display)] text-2xl font-light text-foreground">
                          {category}
                        </h3>
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 text-muted-foreground transition-transform duration-300",
                            isOpen ? "rotate-180" : "rotate-0"
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300 ease-out",
                          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                        )}
                      >
                        <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-4">
                          {categoryTreatments.map((treatment) => (
                            <button
                              key={treatment.id}
                              onClick={() => setSelectedTreatment(treatment.id)}
                              className={cn(
                                "p-6 text-left border transition-all duration-300 group",
                                selectedTreatment === treatment.id
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary/50",
                              )}
                            >
                              <div className="flex justify-between items-start mb-4">
                                <h4 className="font-[var(--font-display)] text-xl font-light text-foreground">
                                  {treatment.name}
                                </h4>
                                <div
                                  className={cn(
                                    "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                                    selectedTreatment === treatment.id ? "border-primary bg-primary" : "border-muted-foreground",
                                  )}
                                >
                                  {selectedTreatment === treatment.id && <Check className="w-3 h-3 text-primary-foreground" />}
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="font-[var(--font-body)] text-xs tracking-[0.15em] uppercase text-muted-foreground">
                                  {treatment.duration}
                                </span>
                                <span className="font-[var(--font-display)] text-lg text-foreground">R{treatment.price}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          <div
            className={cn(
              "transition-all duration-500",
              step === 2 ? "opacity-100 translate-x-0" : "opacity-0 absolute pointer-events-none translate-x-8",
            )}
          >
            {step === 2 && (
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date()}
                  className="rounded-none border border-border p-4"
                />
              </div>
            )}
          </div>

          <div
            className={cn(
              "transition-all duration-500",
              step === 3 ? "opacity-100 translate-x-0" : "opacity-0 absolute pointer-events-none translate-x-8",
            )}
          >
            {step === 3 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={cn(
                      "py-4 px-6 border text-center transition-all duration-300",
                      selectedTime === time
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary/50 text-foreground",
                    )}
                  >
                    <span className="font-[var(--font-body)] text-sm tracking-[0.1em]">{time}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div
            className={cn(
              "transition-all duration-500",
              step === 4 ? "opacity-100 translate-x-0" : "opacity-0 absolute pointer-events-none translate-x-8",
            )}
          >
            {step === 4 && !bookingConfirmed && (
              <div className="space-y-6">
                <div className="flex gap-4 mb-6">
                  <button
                    onClick={() => setIsNewUser(true)}
                    className={cn(
                      "flex-1 py-3 border transition-all duration-300",
                      isNewUser ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground"
                    )}
                  >
                    <span className="font-[var(--font-body)] text-xs tracking-[0.15em] uppercase">Create Account</span>
                  </button>
                  <button
                    onClick={() => setIsNewUser(false)}
                    className={cn(
                      "flex-1 py-3 border transition-all duration-300",
                      !isNewUser ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground"
                    )}
                  >
                    <span className="font-[var(--font-body)] text-xs tracking-[0.15em] uppercase">Sign In</span>
                  </button>
                </div>

                {isNewUser ? (
                  <div className="space-y-4">
                    <h3 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Create Your Account</h3>
                    <div>
                      <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300 font-[var(--font-body)] text-sm"
                        placeholder="+27 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300 font-[var(--font-body)] text-sm"
                        placeholder="Create a password"
                      />
                    </div>
                    <div>
                      <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300 font-[var(--font-body)] text-sm"
                        placeholder="Confirm your password"
                      />
                      {password && confirmPassword && password !== confirmPassword && (
                        <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4">Sign In</h3>
                    <div>
                      <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300 font-[var(--font-body)] text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300 font-[var(--font-body)] text-sm"
                        placeholder="Your password"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
            {step === 4 && bookingConfirmed && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-[var(--font-display)] text-3xl font-light text-foreground mb-4">Booking Confirmed!</h3>
                <p className="font-[var(--font-body)] text-base text-muted-foreground mb-6">
                  We've sent a consultation form to {email}
                </p>
                <p className="font-[var(--font-body)] text-sm text-muted-foreground">
                  Please complete the form before your appointment. You won't need to fill it out again for future bookings.
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <button
              onClick={handleBack}
              className={cn(
                "font-[var(--font-body)] text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300",
                step === 1 && "opacity-0 pointer-events-none",
              )}
            >
              Back
            </button>

            {!bookingConfirmed && (
              <Button
                onClick={step === 4 ? handleConfirmBooking : handleNext}
                disabled={!canProceed() || isSubmitting}
                className={cn(
                  "font-[var(--font-body)] text-xs tracking-[0.2em] uppercase px-8 py-6 rounded-none transition-all duration-300",
                  canProceed() && !isSubmitting
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "bg-muted text-muted-foreground cursor-not-allowed",
                )}
              >
                {isSubmitting ? "Processing..." : step === 4 ? "Confirm Booking" : "Continue"}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>

          {(selectedTreatment || selectedDate || selectedTime) && (
            <div className="mt-12 p-6 bg-background border border-border">
              <p className="font-[var(--font-body)] text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Your Selection
              </p>
              <div className="space-y-2">
                {selectedTreatment && (
                  <p className="font-[var(--font-display)] text-lg text-foreground">
                    {treatments.find((t) => t.id === selectedTreatment)?.name}
                  </p>
                )}
                {selectedDate && (
                  <p className="font-[var(--font-body)] text-sm text-muted-foreground">
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}
                {selectedTime && (
                  <p className="font-[var(--font-body)] text-sm text-muted-foreground">{selectedTime}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export function BookingSection() {
  return (
    <Suspense fallback={<div className="py-32 md:py-40 bg-card" />}>
      <BookingContent />
    </Suspense>
  )
}
