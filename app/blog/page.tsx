"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { blogPosts } from "@/lib/blog-data"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-[var(--font-body)] text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Blog
          </p>
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-foreground tracking-[0.02em] leading-[1.1] max-w-4xl mb-6">
            Science-backed insights for beauty and wellness
          </h1>
          <p className="font-[var(--font-body)] text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
            Expert knowledge from our team of practitioners and specialists.
          </p>
        </div>
      </section>

      <section className="pb-32 md:pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {blogPosts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group">
                <article className="space-y-6">
                  <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-[var(--font-body)] text-xs text-muted-foreground mb-2">
                        {post.date} • {post.readTime}
                      </p>
                      <h2 className="font-[var(--font-display)] text-xl md:text-2xl font-light text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h2>
                    </div>
                    <p className="font-[var(--font-body)] text-sm text-muted-foreground font-light leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-[var(--font-body)] text-xs text-foreground font-medium">
                          {post.author}
                        </p>
                        <p className="font-[var(--font-body)] text-xs text-muted-foreground">
                          {post.authorTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}