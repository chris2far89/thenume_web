"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

const articles = [
  {
    id: "skincare-routine",
    title: "Building Your Perfect Skincare Routine",
    excerpt: "Discover the essential steps to create a personalized skincare routine that works for your unique skin type.",
    category: "Skincare Tips",
    date: "March 15, 2025"
  },
  {
    id: "natural-ingredients",
    title: "The Power of Natural Ingredients",
    excerpt: "Learn about the science-backed benefits of natural ingredients in modern beauty treatments.",
    category: "Education",
    date: "March 10, 2025"
  },
  {
    id: "body-sculpting-guide",
    title: "Complete Guide to Non-Surgical Body Sculpting",
    excerpt: "Everything you need to know about safe, effective body contouring treatments.",
    category: "Treatment Guides",
    date: "March 5, 2025"
  },
  {
    id: "sustainable-beauty",
    title: "Sustainable Beauty: Why It Matters",
    excerpt: "How choosing eco-conscious beauty treatments benefits both your skin and the planet.",
    category: "Sustainability",
    date: "February 28, 2025"
  },
  {
    id: "acne-solutions",
    title: "Science-Backed Solutions for Acne",
    excerpt: "Understanding the root causes of acne and the most effective treatment approaches.",
    category: "Skincare Tips",
    date: "February 20, 2025"
  },
  {
    id: "anti-aging",
    title: "Natural Anti-Aging: What Really Works",
    excerpt: "Separating fact from fiction in the world of anti-aging treatments.",
    category: "Education",
    date: "February 15, 2025"
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-[var(--font-body)] text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Beauty Education
          </p>
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-foreground tracking-[0.02em] leading-[1.1] max-w-4xl mb-6">
            Knowledge is beautiful
          </h1>
          <p className="font-[var(--font-body)] text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
            Explore our collection of articles on skincare science, treatment guides, and sustainable beauty practices.
          </p>
        </div>
      </section>

      <section className="pb-32 md:pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.id}`}
                className="group border border-border hover:border-primary transition-colors duration-300"
              >
                <div className="p-8">
                  <p className="font-[var(--font-body)] text-xs tracking-[0.2em] uppercase text-primary mb-3">
                    {article.category}
                  </p>
                  <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {article.title}
                  </h2>
                  <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <p className="font-[var(--font-body)] text-xs text-muted-foreground">
                    {article.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
