"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ConsultationFormProps {
  onSubmit: (data: ConsultationFormData) => void
  isSubmitting?: boolean
}

export interface ConsultationFormData {
  // Personal Information
  dateOfBirth: string
  occupation: string
  emergencyContact: string
  emergencyPhone: string
  
  // Medical History
  currentMedications: string
  allergies: string
  medicalConditions: string
  previousSurgeries: string
  skinType: string
  skinConcerns: string[]
  
  // Lifestyle
  smokingStatus: string
  alcoholConsumption: string
  exerciseFrequency: string
  stressLevel: string
  sleepHours: string
  
  // Treatment Specific
  previousTreatments: string
  treatmentGoals: string
  budgetRange: string
  availableDowntime: string
  
  // Consent
  consentToTreatment: boolean
  consentToPhotos: boolean
  consentToMarketing: boolean
}

const skinConcernOptions = [
  "Acne", "Aging/Wrinkles", "Dark Spots", "Uneven Skin Tone", 
  "Large Pores", "Dryness", "Oiliness", "Sensitivity", "Scarring", "Other"
]

export function ConsultationForm({ onSubmit, isSubmitting = false }: ConsultationFormProps) {
  const [formData, setFormData] = useState<ConsultationFormData>({
    dateOfBirth: "",
    occupation: "",
    emergencyContact: "",
    emergencyPhone: "",
    currentMedications: "",
    allergies: "",
    medicalConditions: "",
    previousSurgeries: "",
    skinType: "",
    skinConcerns: [],
    smokingStatus: "",
    alcoholConsumption: "",
    exerciseFrequency: "",
    stressLevel: "",
    sleepHours: "",
    previousTreatments: "",
    treatmentGoals: "",
    budgetRange: "",
    availableDowntime: "",
    consentToTreatment: false,
    consentToPhotos: false,
    consentToMarketing: false
  })

  const handleInputChange = (field: keyof ConsultationFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSkinConcernToggle = (concern: string) => {
    setFormData(prev => ({
      ...prev,
      skinConcerns: prev.skinConcerns.includes(concern)
        ? prev.skinConcerns.filter(c => c !== concern)
        : [...prev.skinConcerns, concern]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const isFormValid = () => {
    return formData.dateOfBirth && 
           formData.emergencyContact && 
           formData.emergencyPhone && 
           formData.skinType && 
           formData.consentToTreatment
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="font-[var(--font-display)] text-4xl font-light text-foreground mb-4">
          Consultation Form
        </h1>
        <p className="font-[var(--font-body)] text-muted-foreground">
          Please complete this form to ensure we provide the best possible treatment for you
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information */}
        <Card className="p-6">
          <h2 className="font-[var(--font-display)] text-2xl font-light mb-6">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                Date of Birth *
              </label>
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300"
                required
              />
            </div>
            <div>
              <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                Occupation
              </label>
              <input
                type="text"
                value={formData.occupation}
                onChange={(e) => handleInputChange('occupation', e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300"
                placeholder="Your occupation"
              />
            </div>
            <div>
              <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                Emergency Contact Name *
              </label>
              <input
                type="text"
                value={formData.emergencyContact}
                onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300"
                placeholder="Emergency contact name"
                required
              />
            </div>
            <div>
              <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                Emergency Contact Phone *
              </label>
              <input
                type="tel"
                value={formData.emergencyPhone}
                onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300"
                placeholder="+27 XX XXX XXXX"
                required
              />
            </div>
          </div>
        </Card>

        {/* Medical History */}
        <Card className="p-6">
          <h2 className="font-[var(--font-display)] text-2xl font-light mb-6">Medical History</h2>
          <div className="space-y-6">
            <div>
              <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                Current Medications
              </label>
              <textarea
                value={formData.currentMedications}
                onChange={(e) => handleInputChange('currentMedications', e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300 h-24 resize-none"
                placeholder="List any medications you're currently taking (or write 'None')"
              />
            </div>
            <div>
              <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                Allergies
              </label>
              <textarea
                value={formData.allergies}
                onChange={(e) => handleInputChange('allergies', e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300 h-24 resize-none"
                placeholder="List any known allergies (or write 'None')"
              />
            </div>
            <div>
              <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                Medical Conditions
              </label>
              <textarea
                value={formData.medicalConditions}
                onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300 h-24 resize-none"
                placeholder="Any medical conditions we should be aware of (or write 'None')"
              />
            </div>
            <div>
              <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                Previous Surgeries
              </label>
              <textarea
                value={formData.previousSurgeries}
                onChange={(e) => handleInputChange('previousSurgeries', e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300 h-24 resize-none"
                placeholder="Any previous surgeries or procedures (or write 'None')"
              />
            </div>
          </div>
        </Card>

        {/* Skin Assessment */}
        <Card className="p-6">
          <h2 className="font-[var(--font-display)] text-2xl font-light mb-6">Skin Assessment</h2>
          <div className="space-y-6">
            <div>
              <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                Skin Type *
              </label>
              <select
                value={formData.skinType}
                onChange={(e) => handleInputChange('skinType', e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300"
                required
              >
                <option value="">Select your skin type</option>
                <option value="oily">Oily</option>
                <option value="dry">Dry</option>
                <option value="combination">Combination</option>
                <option value="sensitive">Sensitive</option>
                <option value="normal">Normal</option>
              </select>
            </div>
            <div>
              <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-4 block">
                Skin Concerns (Select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skinConcernOptions.map((concern) => (
                  <button
                    key={concern}
                    type="button"
                    onClick={() => handleSkinConcernToggle(concern)}
                    className={cn(
                      "p-3 text-left border transition-all duration-300",
                      formData.skinConcerns.includes(concern)
                        ? "border-primary bg-primary/5 text-foreground"
                        : "border-border hover:border-primary/50 text-muted-foreground"
                    )}
                  >
                    <span className="font-[var(--font-body)] text-sm">{concern}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Lifestyle */}
        <Card className="p-6">
          <h2 className="font-[var(--font-display)] text-2xl font-light mb-6">Lifestyle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                Smoking Status
              </label>
              <select
                value={formData.smokingStatus}
                onChange={(e) => handleInputChange('smokingStatus', e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300"
              >
                <option value="">Select</option>
                <option value="never">Never</option>
                <option value="former">Former smoker</option>
                <option value="occasional">Occasional</option>
                <option value="regular">Regular</option>
              </select>
            </div>
            <div>
              <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                Alcohol Consumption
              </label>
              <select
                value={formData.alcoholConsumption}
                onChange={(e) => handleInputChange('alcoholConsumption', e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300"
              >
                <option value="">Select</option>
                <option value="none">None</option>
                <option value="occasional">Occasional</option>
                <option value="moderate">Moderate</option>
                <option value="regular">Regular</option>
              </select>
            </div>
            <div>
              <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                Exercise Frequency
              </label>
              <select
                value={formData.exerciseFrequency}
                onChange={(e) => handleInputChange('exerciseFrequency', e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300"
              >
                <option value="">Select</option>
                <option value="none">None</option>
                <option value="1-2">1-2 times per week</option>
                <option value="3-4">3-4 times per week</option>
                <option value="5+">5+ times per week</option>
              </select>
            </div>
            <div>
              <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                Sleep Hours (per night)
              </label>
              <select
                value={formData.sleepHours}
                onChange={(e) => handleInputChange('sleepHours', e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300"
              >
                <option value="">Select</option>
                <option value="<5">Less than 5 hours</option>
                <option value="5-6">5-6 hours</option>
                <option value="7-8">7-8 hours</option>
                <option value="9+">9+ hours</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Treatment Goals */}
        <Card className="p-6">
          <h2 className="font-[var(--font-display)] text-2xl font-light mb-6">Treatment Goals</h2>
          <div className="space-y-6">
            <div>
              <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                Previous Aesthetic Treatments
              </label>
              <textarea
                value={formData.previousTreatments}
                onChange={(e) => handleInputChange('previousTreatments', e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300 h-24 resize-none"
                placeholder="List any previous aesthetic treatments (or write 'None')"
              />
            </div>
            <div>
              <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                Treatment Goals
              </label>
              <textarea
                value={formData.treatmentGoals}
                onChange={(e) => handleInputChange('treatmentGoals', e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300 h-24 resize-none"
                placeholder="What would you like to achieve with your treatment?"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                  Budget Range
                </label>
                <select
                  value={formData.budgetRange}
                  onChange={(e) => handleInputChange('budgetRange', e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300"
                >
                  <option value="">Select</option>
                  <option value="<1000">Under R1,000</option>
                  <option value="1000-3000">R1,000 - R3,000</option>
                  <option value="3000-5000">R3,000 - R5,000</option>
                  <option value="5000+">R5,000+</option>
                </select>
              </div>
              <div>
                <label className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground mb-2 block">
                  Available Downtime
                </label>
                <select
                  value={formData.availableDowntime}
                  onChange={(e) => handleInputChange('availableDowntime', e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none transition-colors duration-300"
                >
                  <option value="">Select</option>
                  <option value="none">No downtime</option>
                  <option value="1-2">1-2 days</option>
                  <option value="3-7">3-7 days</option>
                  <option value="1-2weeks">1-2 weeks</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
          </div>
        </Card>

        {/* Consent */}
        <Card className="p-6">
          <h2 className="font-[var(--font-display)] text-2xl font-light mb-6">Consent & Agreement</h2>
          <div className="space-y-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.consentToTreatment}
                onChange={(e) => handleInputChange('consentToTreatment', e.target.checked)}
                className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary"
                required
              />
              <span className="font-[var(--font-body)] text-sm text-foreground">
                I consent to treatment and understand the risks and benefits explained to me. *
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.consentToPhotos}
                onChange={(e) => handleInputChange('consentToPhotos', e.target.checked)}
                className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary"
              />
              <span className="font-[var(--font-body)] text-sm text-foreground">
                I consent to before/after photos being taken for treatment documentation.
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.consentToMarketing}
                onChange={(e) => handleInputChange('consentToMarketing', e.target.checked)}
                className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary"
              />
              <span className="font-[var(--font-body)] text-sm text-foreground">
                I consent to receiving marketing communications and treatment reminders.
              </span>
            </label>
          </div>
        </Card>

        <div className="flex justify-center">
          <Button
            type="submit"
            disabled={!isFormValid() || isSubmitting}
            className={cn(
              "font-[var(--font-body)] text-xs tracking-[0.2em] uppercase px-12 py-6 rounded-none transition-all duration-300",
              isFormValid() && !isSubmitting
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            )}
          >
            {isSubmitting ? "Submitting..." : "Submit Consultation Form"}
          </Button>
        </div>
      </form>
    </div>
  )
}