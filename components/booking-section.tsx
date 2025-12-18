"use client"

import { useState, useEffect, useRef, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Check, ChevronRight } from "lucide-react"

const treatments = [
  { id: "consultation", name: "Virtual Consultation", duration: "30 min", price: 250 },
  { id: "consultation-person", name: "In-Person Consultation", duration: "45 min", price: 395 },
  { id: "fat-dissolving", name: "Fat Dissolving Injections", duration: "60 min", price: 1050 },
  { id: "fat-freeze", name: "Fat Freeze", duration: "60 min", price: 500 },
  { id: "cavitation", name: "Cavitation, RF & G5 Combo", duration: "60 min", price: 800 },
  { id: "cellulite", name: "Cellulite Reduction", duration: "60 min", price: 800 },
  { id: "wood-therapy", name: "Wood Therapy + G5", duration: "60 min", price: 600 },
  { id: "iv-drip", name: "IV Drip Therapy", duration: "45 min", price: 800 },
  { id: "prp-facial", name: "PRP Vampire Facial", duration: "90 min", price: 2000 },
  { id: "microneedling", name: "Microneedling + Dermaplaning + LED", duration: "75 min", price: 950 },
  { id: "acne-peel", name: "Acne Peel + High Frequency", duration: "45 min", price: 500 },
  { id: "glow-combo", name: "Glow Combo", duration: "60 min", price: 800 },
]

const timeSlots = ["9:00 AM", "10:30 AM", "12:00 PM", "2:00 PM", "3:30 PM", "5:00 PM"]

function BookingContent() {
  const searchParams = useSearchParams()
  const preSelectedService = searchParams.get('service')
  
  const [step, setStep] = useState(1)
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [isNewUser, setIsNewUser] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [bookingConfirmed, setBookingConfirmed] = useState(false)
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

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleConfirmBooking = () => {
    // Here you would send booking data to your backend
    setBookingConfirmed(true)
    // Simulate sending consultation form email
    console.log('Booking confirmed, consultation form sent to:', email)
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {treatments.map((treatment) => (
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
                      <h3 className="font-[var(--font-display)] text-xl font-light text-foreground">
                        {treatment.name}
                      </h3>
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
                disabled={!canProceed()}
                className={cn(
                  "font-[var(--font-body)] text-xs tracking-[0.2em] uppercase px-8 py-6 rounded-none transition-all duration-300",
                  canProceed()
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "bg-muted text-muted-foreground cursor-not-allowed",
                )}
              >
                {step === 4 ? "Confirm Booking" : "Continue"}
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
