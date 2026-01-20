import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ExperienceSection } from "@/components/experience-section"
import { BookingSection } from "@/components/booking-section"
import { Footer } from "@/components/footer"

export default function HomeOriginal() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <BookingSection />
      <Footer />
    </main>
  )
}
