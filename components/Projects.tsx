'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { SectionHeader } from './Expertise'
import githubProjects from '@/data/github-projects.json'

const featured = [
  'CoMMEnTo',
  'graphRAG',
  'agentic-rag',
  'self-healing-ml-agentic-demo',
  'adaptive-rebalancing-agent',
  'a2a',
  'mlflow-pipeline',
  'NeuralForecast4TimeSeries',
  'AIPdMML',
  'auction-agents',
  'CreditCardFraudAnomalyDetection',
  'carlo-career-mcp',
]

type Repo = {
  name: string
  description: string
  classification: string
  url: string
}

const allRepos: Repo[] = (githubProjects as { repositories: Repo[] }).repositories
const featuredRepos = allRepos.filter((r) => featured.includes(r.name))
const otherRepos = allRepos.filter((r) => !featured.includes(r.name))

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>('.proj-card').forEach((card, i) => {
            setTimeout(() => {
              card.style.opacity = '1'
              card.style.transform = 'translateY(0)'
            }, i * 50)
          })
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [showAll])

  const displayed = showAll ? allRepos : featuredRepos

  return (
    <section id="projects" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="GitHub"
          title="Projects"
          subtitle="Production implementations across agentic AI, MLOps, RAG, and financial ML."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {displayed.map((repo) => (
            <ProjectCard key={repo.name} repo={repo} />
          ))}
        </div>

        <div className="mt-10 text-center">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2.5 border border-border text-muted hover:border-accent hover:text-accent text-sm rounded transition-colors duration-200"
            >
              View All {allRepos.length} Projects
            </button>
          ) : (
            <a
              href="https://github.com/carloderossi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-border text-muted hover:border-accent hover:text-accent text-sm rounded transition-colors duration-200"
            >
              <ExternalLink size={14} />
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="proj-card block p-5 border border-border rounded-lg bg-bg hover:border-accent hover:bg-surface-2 group transition-all duration-200"
      style={{
        opacity: 0,
        transform: 'translateY(12px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease, border-color 0.2s, background-color 0.2s',
      }}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="text-text text-sm font-semibold group-hover:text-accent-light transition-colors font-mono">
          {repo.name}
        </h3>
        <ExternalLink
          size={12}
          className="text-border group-hover:text-accent flex-shrink-0 mt-0.5 transition-colors"
        />
      </div>
      <p className="text-muted text-xs leading-relaxed mb-3">{repo.description}</p>
      <span className="px-2 py-0.5 text-xs border border-border text-muted rounded-sm">
        {repo.classification}
      </span>
    </a>
  )
}
