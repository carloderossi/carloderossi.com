'use client'

import { useEffect, useRef } from 'react'

type ExpertiseArea = {
  title: string
  icon: string
  tags: string[]
  desc: string
  number?: string
  evidence?: string
}

const leadershipAreas: ExpertiseArea[] = [
  {
    number: '01',
    title: 'Turning Technology into Business Value',
    icon: '◇',
    desc: 'Organizations invest heavily in technology, yet struggle to translate those investments into tangible results. I connect business objectives with product strategy, technology economics and execution — transforming complex platforms into capabilities that reduce costs, improve decisions and deliver measurable value.',
    tags: ['Enterprise Product Leadership', 'Business–IT Alignment', 'FinOps & Value Realization'],
    evidence: 'USD 25M+ cost avoidance · 750+ internal customers',
  },
  {
    number: '02',
    title: 'Leading Complex Technology & AI Transformation',
    icon: '⬡',
    desc: 'Transformation is not simply a technology upgrade. It requires aligning architecture, operations, stakeholders and organizational change. I lead enterprise modernization and AI initiatives from strategic direction through implementation, combining engineering depth with disciplined product and program leadership.',
    tags: ['Digital & AI Transformation', 'Enterprise Architecture', 'Change & Delivery Leadership'],
    evidence: '350+ application migrations · 53.1% complexity reduction',
  },
  {
    number: '03',
    title: 'Making Innovation Governable and Sustainable',
    icon: '◈',
    desc: 'Innovation creates lasting value only when organizations can trust, control and operate what they build. I integrate governance, accountability, risk management and operational resilience into enterprise technology and AI systems — enabling innovation without compromising regulatory obligations or business continuity.',
    tags: ['AI Governance', 'Risk & Compliance', 'Operational Resilience'],
    evidence: 'SOX control ownership · Zero PwC/EY audit findings',
  },
]

const technicalAreas: ExpertiseArea[] = [
  {
    title: 'AI & Intelligent Systems',
    icon: '◈',
    desc: 'Designing and evaluating intelligent systems, from retrieval-augmented generation to agentic workflows and production ML operations.',
    tags: ['Agentic AI', 'RAG & GraphRAG', 'Graph ML', 'MLOps & AI Evaluation'],
  },
  {
    title: 'Enterprise Platforms',
    icon: '⬡',
    desc: 'Connecting platform strategy to implementation through cloud architecture, modernization and enterprise integration.',
    tags: ['Cloud & Azure', 'Platform Modernization', 'Architecture', 'Integration'],
  },
  {
    title: 'Data, Analytics & Governance',
    icon: '◇',
    desc: 'Building the foundations for trusted decisions and controlled operations across data-intensive enterprise environments.',
    tags: ['Graph Analytics', 'Data Architecture', 'Forecasting & Decision Intelligence', 'TOGAF', 'ITIL', 'SOX', 'Responsible AI', 'Technology Risk'],
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Areas of Expertise"
          title="Where I Create Value"
          subtitle="Bridging business ambition, technology capabilities and organizational execution to deliver measurable, sustainable outcomes."
        />

        <div className="mb-4">
          <p className="text-accent text-xs font-mono tracking-widest uppercase">Leadership & Business Outcomes</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
          {leadershipAreas.map((area, i) => (
            <ExpertiseCard key={area.title} area={area} delay={i * 80} variant="leadership" />
          ))}
        </div>

        <div className="mt-16 mb-4">
          <p className="text-accent text-xs font-mono tracking-widest uppercase">Technical Foundations</p>
          <h3 className="text-2xl md:text-3xl font-bold text-text mt-3 mb-3">Technical Depth. Executive Perspective.</h3>
          <p className="text-muted text-base w-full max-w-6xl leading-relaxed">
            I combine strategic leadership with practical architectural knowledge, allowing me to connect business decisions with technical realities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
          {technicalAreas.map((area, i) => (
            <ExpertiseCard key={area.title} area={area} delay={i * 80} variant="technical" />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExpertiseCard({
  area,
  delay,
  variant,
}: {
  area: ExpertiseArea
  delay: number
  variant: 'leadership' | 'technical'
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let timeoutId: ReturnType<typeof setTimeout> | undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [delay])

  return (
    <div
      ref={ref}
      // className={`bg-surface p-7 md:p-8 group hover:bg-surface-2 transition-colors duration-300 cursor-default ${variant === 'leadership' ? 'min-h-full' : 'min-h-full'}`}
      className="bg-surface p-8 group hover:bg-surface-2 transition-colors duration-300 cursor-default flex flex-col h-full"
      style={{ opacity: 0, transform: 'translateY(16px)', transition: 'opacity 0.5s ease, transform 0.5s ease, background-color 0.3s ease' }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="text-2xl text-accent font-light">{area.icon}</div>
        {area.number && <span className="text-accent text-xs font-mono tracking-widest">{area.number}</span>}
      </div>
      <h3 className="text-text font-semibold text-base md:text-lg mb-3 group-hover:text-accent-light transition-colors">
        {area.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-5">{area.desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {area.tags.map((tag) => (
          <span key={tag} className="px-2 py-1 text-xs border border-border text-muted rounded-sm">
            {tag}
          </span>
        ))}
      </div>
{area.evidence && (
  <div className="mt-auto pt-6">
    <div className="border-t border-border pt-4">
      <p className="text-xs text-muted uppercase tracking-wider mb-1">
        Evidence
      </p>
      <p className="text-sm text-text font-medium leading-relaxed">
        {area.evidence}
      </p>
    </div>
  </div>
)}
    </div>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-10">
      <p className="text-accent text-xs font-mono tracking-widest uppercase mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">{title}</h2>
      {subtitle && (
        <p className="text-muted text-base w-full max-w-5xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
