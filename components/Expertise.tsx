'use client'

import { useEffect, useRef } from 'react'

const areas = [
  {
    title: 'AI Strategy & Governance',
    icon: '⬡',
    tags: ['EU AI Act', 'FINMA', 'Responsible AI', 'Risk Frameworks'],
    desc: 'Designing AI governance architectures for regulated environments. From policy to implementation under FINMA, GDPR, and the EU AI Act.',
  },
  {
    title: 'Agentic AI',
    icon: '◈',
    tags: ['MCP', 'A2A', 'LangGraph', 'RAG'],
    desc: 'Building production-grade agentic systems — multi-agent orchestration, tool protocols, and self-healing ML pipelines.',
  },
  {
    title: 'AI Product Management',
    icon: '◇',
    tags: ['Roadmaps', 'Discovery', 'ROI', 'Stakeholders'],
    desc: 'Translating AI capability into business outcomes. Discovery, prioritization, and delivery across 700+ enterprise stakeholders.',
  },
  {
    title: 'Enterprise Architecture',
    icon: '⬜',
    tags: ['TOGAF 10', 'Platform Engineering', 'Cloud', 'FinOps'],
    desc: 'End-to-end platform design at scale. CHF multi-million budget governance, 35K+ deployments, vendor-neutral principles.',
  },
  {
    title: 'Azure AI',
    icon: '△',
    tags: ['Azure AI Foundry', 'Azure ML', 'OpenAI', 'AZ-104', 'DP-100'],
    desc: 'Hands-on Azure AI engineering: MLOps pipelines, Azure ML Champion-Challenger, AI Foundry multi-agent deployments.',
  },
  {
    title: 'Program Leadership',
    icon: '○',
    tags: ['Transformation', 'SOX Controls', 'Vendor Governance', 'CRISC'],
    desc: 'Leading enterprise-scale programmes. SOX Key Process Control owner with zero audit findings across PwC and EY.',
  },
]

function useInView(ref: React.RefObject<Element | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])
}

export default function Expertise() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="expertise" className="py-24 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="What I bring"
          title="Areas of Expertise"
          subtitle="Spanning AI strategy, engineering, and enterprise governance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
          {areas.map((area, i) => (
            <ExpertiseCard key={area.title} area={area} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExpertiseCard({
  area,
  delay,
}: {
  area: (typeof areas)[0]
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, delay)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className="bg-surface p-8 group hover:bg-surface-2 transition-colors duration-300 cursor-default"
      style={{ opacity: 0, transform: 'translateY(16px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}
    >
      <div className="text-2xl text-accent mb-4 font-light">{area.icon}</div>
      <h3 className="text-text font-semibold text-base mb-3 group-hover:text-accent-light transition-colors">
        {area.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-4">{area.desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {area.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs border border-border text-muted rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
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
    <div className="mb-16">
      <p className="text-accent text-xs font-mono tracking-widest uppercase mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">{title}</h2>
      {subtitle && <p className="text-muted text-base max-w-xl">{subtitle}</p>}
    </div>
  )
}
