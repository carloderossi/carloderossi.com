'use client'

import { useEffect, useRef } from 'react'
import { ExternalLink } from 'lucide-react'
import { SectionHeader } from './Expertise'
import articlesData from '@/data/linkedin-articles.json'

type Article = {
  title: string
  description: string
  classification: string
  date: string
  url: string
}

const articles: Article[] = articlesData as Article[]
const articlesToShow = articles.slice(0, 6)

export default function Articles() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>('.article-card').forEach((card, i) => {
            setTimeout(() => {
              card.style.opacity = '1'
              card.style.transform = 'translateY(0)'
            }, i * 70)
          })
        }
      },
      { threshold: 0.05 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="articles" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col md:whitespace-nowrap md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeader
            eyebrow="LinkedIn"
            title="AI Architecture & Governance Thinking"
            subtitle="Thought leadership on agentic AI, governance, and enterprise transformation."
          />

          <a
            href="https://www.linkedin.com/in/carloderossi/recent-activity/articles/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-16"
          >
            All articles <ExternalLink size={12} />
          </a>
        </div>

        {/* Featured Thinking */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent">
              Featured Thinking
            </span>

            <span className="h-px flex-1 bg-border" />
          </div>

          <a
            href="https://www.linkedin.com/pulse/next-european-ai-unicorn-may-trust-layer-autonomous-agents-de-rossi-kd6te"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-8 md:p-10 border border-accent/40 rounded-lg bg-surface hover:border-accent hover:bg-surface-2 transition-all duration-200"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

              <div className="max-w-4xl">

                {/* Social proof */}
                <div className="text-xs font-mono text-muted mb-4">
                  33.8K LinkedIn impressions · 26.5K members reached
                </div>

                {/* Title */}
                <h2 className="text-text text-xl md:text-2xl font-semibold leading-tight mb-5 group-hover:text-accent-light transition-colors">
                  The Next European AI Unicorn May Be a Trust Layer for Autonomous Agents
                </h2>

                {/* Description */}
                <p className="text-muted text-sm md:text-base leading-relaxed whitespace-nowrap max-w-3xl">
                  Why the next layer of enterprise AI infrastructure may be identity,
                  delegation, authorization, policy and accountability rather than
                  another model.
                </p>

              </div>

              {/* CTA */}
              <div className="flex-shrink-0 inline-flex items-center gap-2 text-sm text-accent group-hover:text-accent-light transition-colors md:pt-1">
                Read on LinkedIn
                <ExternalLink size={14} />
              </div>

            </div>
          </a>
        </div>

        {/* Article list */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {articlesToShow.map((article) => (
            <ArticleCard
              key={article.url}
              article={article}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

function ArticleCard({ article }: { article: Article }) {
  // Pick first tag only
  const tag = article.classification.split(',')[0].trim()

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="article-card flex flex-col p-6 border border-border rounded-lg bg-surface hover:border-accent hover:bg-surface-2 group transition-all duration-200"
      style={{
        opacity: 0,
        transform: 'translateY(14px)',
        transition:
          'opacity 0.45s ease, transform 0.45s ease, border-color 0.2s, background-color 0.2s',
      }}
    >
      {/* Date / external link */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-muted">
          {article.date}
        </span>

        <ExternalLink
          size={12}
          className="text-border group-hover:text-accent transition-colors"
        />
      </div>

      {/* Title */}
      <h3 className="text-text text-sm font-semibold leading-snug mb-3 group-hover:text-accent-light transition-colors flex-1">
        {article.title}
      </h3>

      {/* Description */}
      <p className="text-muted text-xs leading-relaxed mb-4 line-clamp-3">
        {article.description}
      </p>

      {/* Classification */}
      <span className="self-start px-2 py-0.5 text-xs border border-border text-muted rounded-sm">
        {tag}
      </span>
    </a>
  )
}
