'use client'

import { useEffect, useRef } from 'react'
import { SectionHeader } from './Expertise'

const timeline = [
  {
    period: '2023 – Present',
    org: 'UBS',
    role: 'Director, AI Strategy & Platform Governance',
    location: 'Zürich, Switzerland',
    highlight: 'Global Wealth Management Platforms',
    points: [
      'Leading AI Interdependency Stream — Analysed ~22,000 application relationships using graph analytics and ML (Louvain, SCC, GNN, HDBSCAN), reducing structural complexity by 53.1% and supporting retirement of 2,000+ applications',
      'Designing CIAA v2.0: FINMA/GDPR/EU AI Act compliant agentic framework with context-isolation and local-first inference',
      'AI adoption analytics across ~7,500 employees; graphRAG benchmarking (Neo4j vs ChromaDB) over EU regulatory corpus',
      ' Designed a custom risk assessment model for application decommissioning combining application complexity, business criticality, data sensitivity, compliance requirements and historical incidents; integrated the resulting risk score into a clustering model to minimise decoupling risk and cost.',
      'Acted as Agile Product Owner within Agile@UBS crews, driving roadmap prioritisation, product decisions and OKR alignment across cross-functional teams. Chapter Lead / Line Manager of an Engineering team.',
    ],
  },
  {
    period: '2001 – 2023',
    org: 'Credit Suisse',
    role: 'Product Manager, Senior Architect, Risk & Service Manager',
    location: 'Zürich, Switzerland',
    highlight: 'Enterprise Platforms · AI/ML · FinOps',
    points: [
      'Product Manager & Senior Architect of the Application Platform — 750+ global clients, 35K+ deployments. Technical Owner of the related technologies and products.',
      'Deputy Owner, Container Platform — Avoid Vendor Lock-In principle, 350-app migration from commercial to open-source',
      'SOX Key Process Control Owner — zero findings across PwC and EY audits across 22 years',
      'FinOps: Managed multi-million CHF platform economics and delivered $5M recurring annual cost avoidance while reducing vulnerability exposure from 80% to <10%',
      'Managed enterprise contracts exceeding USD 10M annually, supporting more than 750 internal customers and 25,000 platform deployments.',
      'Led a large-scale digital transformation program, migrating more than 350 enterprise applications and 35,000 deployments to an open-source platform, delivering over USD 25M in cost avoidance.',      
      'Managed product strategy, lifecycle, licensing, chargeback, vulnerability management and vendor relationships. Partnered with business and technology stakeholders to design enterprise reporting, inventory and chargeback solutions.',
      'AI/ML applied to time-series forecasting, stakeholder clustering, vulnerability risk analysis and neural forecast models; 700+ stakeholders managed',
      'Applied AI/ML techniques, including neural forecasting models and graph-based clustering, to improve forecasting and operational decision-making.',
      'Led architecture and technical strategy for global Application platform.',
      'Provided architecture consulting for Online Banking, Trading and Private Banking systems.',
      'Defined enterprise Java technology standards',
      'Managed vendor relationships and contracts valued at approximately USD 12M annually',
      'Architect and Line Manager of an Engineering Consulting team',      
    ],
  },
  {
    period: '1998 – 2001',
    org: 'GFT Consulting',
    role: 'Consultant',
    location: 'Zürich / Berlin',
    highlight: 'Forward-deployed to Swiss Post, Deutsche Post, ESTV',
    points: [
      'Systems integration and platform delivery for Swiss Post, Deutsche Post, and Swiss Federal Tax Administration (ESTV)',
      'Early experience bridging technical delivery with institutional client stakeholders in regulated public-sector environments',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Career"
          title="Experience"
          subtitle="25+ years building platforms and leading AI transformation in global financial services."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="flex flex-col gap-16">
            {timeline.map((entry, i) => (
              <TimelineEntry key={entry.org} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineEntry({
  entry,
  index,
}: {
  entry: (typeof timeline)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, index * 100)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      className="pl-6 md:pl-20 relative"
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {/* Dot */}
      <div className="absolute left-0 md:left-8 top-1.5 w-2 h-2 rounded-full bg-accent -translate-x-[3px] md:-translate-x-[3px]" />

      {/* Period */}
      <p className="text-xs font-mono text-accent tracking-widest uppercase mb-1">
        {entry.period}
      </p>

      {/* Org + role */}
      <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3 mb-1">
        <h3 className="text-text font-semibold text-xl">{entry.org}</h3>
        <span className="text-muted text-sm">·</span>
        <p className="text-muted text-sm">{entry.role}</p>
      </div>

      <p className="text-xs text-muted mb-1">{entry.location}</p>

      <span className="inline-block px-2 py-0.5 text-xs border border-border text-muted rounded-sm mb-5">
        {entry.highlight}
      </span>

      <ul className="space-y-2">
        {entry.points.map((point, j) => (
          <li key={j} className="flex gap-3 text-sm text-muted leading-relaxed">
            <span className="text-accent mt-0.5 flex-shrink-0">›</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
