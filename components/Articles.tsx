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
const featured = articles.slice(0, 6)

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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeader
            eyebrow="LinkedIn"
            title="Publications"
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

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((article) => (
            <ArticleCard key={article.url} article={article} />
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
        transition: 'opacity 0.45s ease, transform 0.45s ease, border-color 0.2s, background-color 0.2s',
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-muted">{article.date}</span>
        <ExternalLink
          size={12}
          className="text-border group-hover:text-accent transition-colors"
        />
      </div>

      <h3 className="text-text text-sm font-semibold leading-snug mb-3 group-hover:text-accent-light transition-colors flex-1">
        {article.title}
      </h3>

      <p className="text-muted text-xs leading-relaxed mb-4 line-clamp-3">
        {article.description}
      </p>

      <span className="self-start px-2 py-0.5 text-xs border border-border text-muted rounded-sm">
        {tag}
      </span>
    </a>
  )
}
