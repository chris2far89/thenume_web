"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export function Header() {
  const pathname = usePathname()
  const isHomepage = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [treatmentsOpen, setTreatmentsOpen] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
        scrolled || mobileMenuOpen ? "bg-background/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <span
              className={cn(
                "font-[var(--font-display)] text-2xl md:text-3xl font-light tracking-[0.15em] uppercase transition-colors duration-500",
                scrolled || mobileMenuOpen ? "text-foreground" : isHomepage ? "text-white" : "text-foreground",
              )}
            >
              TheNumé
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="/about"
              className={cn(
                "font-[var(--font-body)] text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-60",
                scrolled || mobileMenuOpen ? "text-foreground" : isHomepage ? "text-white" : "text-foreground",
              )}
            >
              About
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => {
                if (hoverTimeout) clearTimeout(hoverTimeout)
                setTreatmentsOpen(true)
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => setTreatmentsOpen(false), 300)
                setHoverTimeout(timeout)
              }}
            >
              <button
                className={cn(
                  "font-[var(--font-body)] text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-60 flex items-center gap-1",
                  scrolled || mobileMenuOpen ? "text-foreground" : isHomepage ? "text-white" : "text-foreground",
                )}
              >
                Treatments
                <ChevronDown className="w-3 h-3" />
              </button>
              {treatmentsOpen && (
                <div 
                  className="absolute top-full left-0 mt-4 w-64 bg-background border border-border shadow-lg z-50"
                  onMouseEnter={() => {
                    if (hoverTimeout) clearTimeout(hoverTimeout)
                    setTreatmentsOpen(true)
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => setTreatmentsOpen(false), 300)
                    setHoverTimeout(timeout)
                  }}
                >
                  <Link href="/skin-treatments" className="block px-6 py-4 hover:bg-muted transition-colors duration-300">
                    <span className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground">Skin Treatments</span>
                    <p className="font-[var(--font-body)] text-xs text-muted-foreground mt-1">Facial & Skin</p>
                  </Link>
                  <Link href="/body-contouring" className="block px-6 py-4 hover:bg-muted transition-colors duration-300">
                    <span className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground">Body Contouring</span>
                    <p className="font-[var(--font-body)] text-xs text-muted-foreground mt-1">Body Sculpting</p>
                  </Link>
                  <Link href="/hair-restoration" className="block px-6 py-4 hover:bg-muted transition-colors duration-300">
                    <span className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground">Hair Restoration</span>
                  </Link>
                  <Link href="/fungal-treatment" className="block px-6 py-4 hover:bg-muted transition-colors duration-300">
                    <span className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground">Fungal Treatment</span>
                  </Link>
                  <Link href="/iv-wellness" className="block px-6 py-4 hover:bg-muted transition-colors duration-300">
                    <span className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground">IV Infusion + Wellness</span>
                  </Link>
                  <Link href="/mens-treatments" className="block px-6 py-4 hover:bg-muted transition-colors duration-300">
                    <span className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground">Men's Treatments</span>
                  </Link>
                  <Link href="/services" className="block px-6 py-4 bg-primary/5 hover:bg-primary/10 transition-colors duration-300">
                    <span className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-primary">View All Treatments</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className={cn(
                "font-[var(--font-body)] text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-60",
                scrolled || mobileMenuOpen ? "text-foreground" : isHomepage ? "text-white" : "text-foreground",
              )}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={cn(
                "font-[var(--font-body)] text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-60",
                scrolled || mobileMenuOpen ? "text-foreground" : isHomepage ? "text-white" : "text-foreground",
              )}
            >
              Contact
            </Link>
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <Link
              href="/book"
              className={cn(
                "font-[var(--font-body)] text-xs tracking-[0.2em] uppercase px-6 py-3 border transition-all duration-500",
                scrolled || mobileMenuOpen
                  ? "border-foreground text-foreground hover:bg-foreground hover:text-background"
                  : isHomepage ? "border-white text-white hover:bg-white hover:text-black" : "border-foreground text-foreground hover:bg-foreground hover:text-background",
              )}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "w-6 h-px transition-all duration-300",
                scrolled || mobileMenuOpen ? "bg-foreground" : isHomepage ? "bg-white" : "bg-foreground",
                mobileMenuOpen && "rotate-45 translate-y-2",
              )}
            />
            <span className={cn("w-6 h-px transition-all duration-300", scrolled || mobileMenuOpen ? "bg-foreground" : isHomepage ? "bg-white" : "bg-foreground", mobileMenuOpen && "opacity-0")} />
            <span
              className={cn(
                "w-6 h-px transition-all duration-300",
                scrolled || mobileMenuOpen ? "bg-foreground" : isHomepage ? "bg-white" : "bg-foreground",
                mobileMenuOpen && "-rotate-45 -translate-y-2",
              )}
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-out",
            mobileMenuOpen ? "max-h-80 opacity-100 mt-8" : "max-h-0 opacity-0",
          )}
        >
          <div className="flex flex-col gap-6 py-4">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="font-[var(--font-body)] text-sm tracking-[0.15em] uppercase text-foreground"
            >
              About
            </Link>
            <div>
              <button
                onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                className="font-[var(--font-body)] text-sm tracking-[0.15em] uppercase text-foreground flex items-center gap-2 w-full"
              >
                Treatments
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", treatmentsOpen && "rotate-180")} />
              </button>
              {treatmentsOpen && (
                <div className="mt-4 ml-4 space-y-3">
                  <Link href="/skin-treatments" onClick={() => setMobileMenuOpen(false)} className="block">
                    <span className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground">Skin Treatments</span>
                  </Link>
                  <Link href="/body-contouring" onClick={() => setMobileMenuOpen(false)} className="block">
                    <span className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground">Body Contouring</span>
                  </Link>
                  <Link href="/hair-restoration" onClick={() => setMobileMenuOpen(false)} className="block">
                    <span className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground">Hair Restoration</span>
                  </Link>
                  <Link href="/fungal-treatment" onClick={() => setMobileMenuOpen(false)} className="block">
                    <span className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground">Fungal Treatment</span>
                  </Link>
                  <Link href="/iv-wellness" onClick={() => setMobileMenuOpen(false)} className="block">
                    <span className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground">IV Infusion + Wellness</span>
                  </Link>
                  <Link href="/mens-treatments" onClick={() => setMobileMenuOpen(false)} className="block">
                    <span className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-foreground">Men's Treatments</span>
                  </Link>
                  <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block">
                    <span className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-primary">View All</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="font-[var(--font-body)] text-sm tracking-[0.15em] uppercase text-foreground"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="font-[var(--font-body)] text-sm tracking-[0.15em] uppercase text-foreground"
            >
              Contact
            </Link>
            <Link
              href="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="font-[var(--font-body)] text-sm tracking-[0.15em] uppercase text-foreground"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
