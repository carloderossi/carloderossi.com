'use client'

import { useEffect, useRef } from 'react'
import { SectionHeader } from './Expertise'
import certsData from '@/data/certifications.json'

type CertData = Record<string, string[]>

const certs = certsData as CertData

// Display order and labels
const categories = [
  {
    key: 'Artificial Intelligence',
    label: 'Artificial Intelligence',
    count: 50,
    accent: true,
  },
  {
    key: 'Machine and Deep Learning',
    label: 'Machine Learning',
    count: 21,
    accent: false,
  },
  {
    key: 'Product Management',
    label: 'Product Management',
    count: 22,
    accent: false,
  },
  {
    key: 'Azure',
    label: 'Azure',
    count: 19,
    accent: false,
  },
  {
    key: 'Data',
    label: 'Data',
    count: 15,
    accent: false,
  },
  {
    key: 'Curriculum',
    label: 'Architecture & Governance',
    count: null, // render as tags
    accent: false,
    tags: ['TOGAF® 10', 'CRISC', 'ITIL v4', 'Kubernetes', 'SAFe® 5'],
  },
  {
    key: 'UBS',
    label: 'UBS Internal',
    count: null,
    accent: false,
    tags: ['Certified Engineer Gold', 'Certified Product Manager', 'Data Scientist', 'Data Analyst', 'Agile@UBS Product Owner'],
  },
]

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>('.cert-card').forEach((card, i) => {
            setTimeout(() => {
              card.style.opacity = '1'
              card.style.transform = 'translateY(0)'
            }, i * 70)
          })
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="certifications" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Credentials"
          title="Certifications"
          subtitle="100+ professional certifications across AI, cloud, architecture, and product management."
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <CertCard key={cat.key} cat={cat} index={i} certs={certs} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CertCard({
  cat,
  index,
  certs,
}: {
  cat: (typeof categories)[0]
  index: number
  certs: CertData
}) {
  const items = certs[cat.key] ?? []

  return (
    <div
      className={`cert-card p-6 border rounded-lg transition-all duration-200 hover:border-accent cursor-default ${
        cat.accent
          ? 'border-accent bg-bg col-span-1'
          : 'border-border bg-bg'
      }`}
      style={{
        opacity: 0,
        transform: 'translateY(12px)',
        transition: 'opacity 0.45s ease, transform 0.45s ease, border-color 0.2s',
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <h3
          className={`font-semibold text-sm ${cat.accent ? 'text-accent-light' : 'text-text'}`}
        >
          {cat.label}
        </h3>
        {cat.count !== null && (
          <span
            className={`text-2xl font-bold tabular-nums ${
              cat.accent ? 'text-accent' : 'text-muted'
            }`}
          >
            {cat.count}
          </span>
        )}
      </div>

      {cat.tags ? (
        <div className="flex flex-wrap gap-1.5">
          {cat.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs border border-border text-muted rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : (
        <ul className="space-y-1">
          {items.slice(0, 5).map((cert) => (
            <li key={cert} className="text-xs text-muted truncate">
              › {cert}
            </li>
          ))}
          {items.length > 5 && (
            <li className="text-xs text-border">+{items.length - 5} more</li>
          )}
        </ul>
      )}
    </div>
  )
}
