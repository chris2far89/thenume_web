"use client"

import { use } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { blogPosts } from "@/lib/blog-data"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params)
  const post = blogPosts.find(p => p.id === slug)
  
  if (!post) {
    notFound()
  }

  // Convert markdown-style content to JSX
  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="font-[var(--font-display)] text-2xl md:text-3xl font-light text-foreground mb-4 mt-8">
            {paragraph.replace('## ', '')}
          </h2>
        )
      } else if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="font-[var(--font-display)] text-xl md:text-2xl font-light text-foreground mb-3 mt-6">
            {paragraph.replace('### ', '')}
          </h3>
        )
      } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <p key={index} className="font-[var(--font-body)] text-base text-muted-foreground font-medium leading-relaxed mb-4">
            {paragraph.replace(/\*\*/g, '')}
          </p>
        )
      } else {
        return (
          <p key={index} className="font-[var(--font-body)] text-base text-muted-foreground font-light leading-relaxed mb-4">
            {paragraph}
          </p>
        )
      }
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <article className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div>
                <p className="font-[var(--font-body)] text-sm text-foreground font-medium">
                  {post.author}
                </p>
                <p className="font-[var(--font-body)] text-xs text-muted-foreground">
                  {post.authorTitle}
                </p>
              </div>
            </div>
            <p className="font-[var(--font-body)] text-xs text-muted-foreground mb-4">
              {post.date} • {post.readTime}
            </p>
            <h1 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-[0.02em] leading-[1.1] mb-6">
              {post.title}
            </h1>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] bg-muted overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {formatContent(post.content)}
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div>
                  <p className="font-[var(--font-body)] text-sm text-foreground font-medium">
                    {post.author}
                  </p>
                  <p className="font-[var(--font-body)] text-xs text-muted-foreground">
                    {post.authorTitle}
                  </p>
                </div>
              </div>
              <Link 
                href="/blog" 
                className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300"
              >
                More Articles
              </Link>
            </div>
          </footer>
        </div>
      </article>

      <Footer />
    </main>
  )
}