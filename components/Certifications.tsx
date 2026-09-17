'use client'

import { useEffect, useRef, useState } from 'react'
import { SectionHeader } from './Expertise'
import certsData from '@/data/certifications.json'

type CertData = Record<string, string[]>

const certs = certsData as CertData

type SelectedCert = {
  name: string
  issuer: string
  category: 'AI & Agentic AI' | 'Governance & Architecture' | 'Azure & Data' | 'Enterprise & Product'
  featured?: boolean
}

const selectedCertifications: SelectedCert[] = [
  {
    name: 'AI-103 — Agentic AI Engineer',
    issuer: 'Microsoft',
    category: 'AI & Agentic AI',
    featured: true,
  },
  {
    name: 'AB-100 — Agentic AI Business Architect',
    issuer: 'Microsoft',
    category: 'AI & Agentic AI',
    featured: true,
  },
  {
    name: 'AIGP — AI Governance Professional',
    issuer: 'IAPP',
    category: 'Governance & Architecture',
    featured: true,
  },
  {
    name: 'ISO/IEC 42001 — Lead Implementer',
    issuer: 'ISO / AI Management Systems',
    category: 'Governance & Architecture',
    featured: true,
  },
  {
    name: 'TOGAF® 10',
    issuer: 'The Open Group',
    category: 'Governance & Architecture',
    featured: true,
  },
  {
    name: 'CRISC',
    issuer: 'ISACA',
    category: 'Governance & Architecture',
    featured: true,
  },
  {
    name: 'AZ-104 — Azure Administrator',
    issuer: 'Microsoft',
    category: 'Azure & Data',
    featured: true,
  },
  {
    name: 'DP-100 — Azure Data Scientist',
    issuer: 'Microsoft',
    category: 'Azure & Data',
    featured: true,
  },
  {
    name: 'AI-300 — MLOps Engineer',
    issuer: 'Microsoft',
    category: 'Azure & Data',
    featured: true,
  },
  {
    name: 'ITIL® 4',
    issuer: 'PeopleCert',
    category: 'Enterprise & Product',
    featured: true,
  },
]

const categoryDescriptions: Record<SelectedCert['category'], string> = {
  'AI & Agentic AI':
    'Current AI engineering, agentic AI and AI business architecture capabilities.',
  'Governance & Architecture':
    'Architecture, AI governance, risk and management-system disciplines.',
  'Azure & Data':
    'Microsoft Azure, data science and ML engineering capabilities.',
  'Enterprise & Product':
    'Enterprise technology management, service management and product disciplines.',
}

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null)
  const [showAll, setShowAll] = useState(false)

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
            }, i * 60)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  /*
   * Count the complete certification inventory from certifications.json.
   * This avoids hard-coded totals becoming stale when certifications are added.
   */
  const totalCertifications = Object.values(certs).reduce(
    (total, items) => total + items.length,
    0
  )

  return (
    <section id="certifications" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Credentials"
          title="Selected Credentials"
          subtitle="A focused selection of credentials supporting AI architecture, agentic AI, governance, Azure, and enterprise transformation."
        />

        {/* Executive credential summary */}
        <div className="mb-10 p-6 md:p-8 border border-border rounded-xl bg-bg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm font-medium text-accent mb-2">
                Executive profile
              </p>

              <h3 className="text-lg md:text-xl font-semibold text-text mb-2">
                AI Architecture · AI Strategy · Governance · Enterprise Technology
              </h3>

              <p className="text-sm text-muted max-w-3xl leading-relaxed">
                Selected certifications are shown here for relevance to senior
                AI architecture and transformation roles. The complete credential
                inventory spans AI, machine learning, Azure, data, product
                management, architecture, governance and enterprise technology.
              </p>
            </div>

            <div className="shrink-0 text-left md:text-right">
              <div className="text-3xl font-bold text-accent tabular-nums">
                {totalCertifications}+
              </div>
              <div className="text-xs text-muted mt-1">
                professional credentials
              </div>
            </div>
          </div>
        </div>

        {/* Selected credentials */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {(
            [
              'AI & Agentic AI',
              'Governance & Architecture',
              'Azure & Data',
              'Enterprise & Product',
            ] as SelectedCert['category'][]
          ).map((category) => {
            const categoryCerts = selectedCertifications.filter(
              (cert) => cert.category === category
            )

            return (
              <div
                key={category}
                className="cert-card p-6 border border-border rounded-xl bg-bg"
                style={{
                  opacity: 0,
                  transform: 'translateY(12px)',
                  transition:
                    'opacity 0.45s ease, transform 0.45s ease, border-color 0.2s',
                }}
              >
                <div className="mb-5">
                  <h3 className="font-semibold text-base text-text">
                    {category}
                  </h3>

                  <p className="text-xs text-muted mt-1.5 leading-relaxed">
                    {categoryDescriptions[category]}
                  </p>
                </div>

                <div className="space-y-2">
                  {categoryCerts.map((cert) => (
                    <div
                      key={cert.name}
                      className={`group flex items-center justify-between gap-4 p-3 rounded-lg border transition-colors ${
                        cert.featured
                          ? 'border-accent/40 bg-surface hover:border-accent'
                          : 'border-border hover:border-accent'
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-text truncate">
                          {cert.name}
                        </div>
                        <div className="text-xs text-muted mt-0.5">
                          {cert.issuer}
                        </div>
                      </div>

                      {cert.featured && (
                        <span className="shrink-0 text-[10px] uppercase tracking-wider text-accent">
                          Selected
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* UBS internal credentials */}
        <div className="mt-5 p-6 border border-border rounded-xl bg-bg">
          <div className="mb-4">
            <h3 className="font-semibold text-base text-text">
              UBS Internal Credentials
            </h3>

            <p className="text-xs text-muted mt-1.5">
              Enterprise credentials reflecting internal roles and capabilities
              developed within UBS.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              'Product Manager',
              'Data Scientist',
              'Data Analyst',
              'Certified Engineer Gold — Architecture Domain',
              'Agile@UBS Product Owner',
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs border border-border text-muted rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Full credential inventory */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            aria-expanded={showAll}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-border rounded-lg text-text hover:border-accent hover:text-accent transition-colors"
          >
            {showAll ? 'Hide full credential inventory' : 'View full credential inventory'}

            <span
              className={`transition-transform duration-200 ${
                showAll ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            >
              ↓
            </span>
          </button>
        </div>

        {showAll && (
          <div className="mt-8 p-6 md:p-8 border border-border rounded-xl bg-bg">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-text">
                Complete Credential Inventory
              </h3>

              <p className="text-sm text-muted mt-1">
                Full list of certifications and professional credentials.
              </p>
            </div>

            <div className="space-y-8">
              {Object.entries(certs).map(([category, items]) => (
                <div key={category}>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-text">
                      {category}
                    </h4>

                    <span className="text-xs text-muted tabular-nums">
                      {items.length}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5">
                    {items.map((cert) => (
                      <div
                        key={cert}
                        className="text-xs text-muted py-1 border-b border-border/50"
                      >
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recruiter CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted mb-4">
            Looking for a senior AI architecture, strategy, product, or
            transformation leader?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg bg-accent text-bg hover:opacity-90 transition-opacity"
          >
            Discuss a role
          </a>
        </div>
      </div>
    </section>
  )
}