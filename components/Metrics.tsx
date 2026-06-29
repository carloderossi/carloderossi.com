'use client'

import { useEffect, useRef } from 'react'

const metrics = [
  { value: '25+', label: 'Years Experience' },
  { value: '100+', label: 'Professional Certifications' },
  { value: '7,500+', label: 'Employees Impacted' },
  { value: '35,000+', label: 'Platform Deployments' },
  { value: '700+', label: 'Stakeholders Managed' },
  { value: '50+', label: 'Countries Supported' },
]

export default function Metrics() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>('.metric-item').forEach((item, i) => {
            setTimeout(() => {
              item.style.opacity = '1'
              item.style.transform = 'translateY(0)'
            }, i * 60)
          })
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-6 border-y border-border">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border rounded-lg overflow-hidden">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="metric-item bg-bg py-8 px-4 text-center"
              style={{
                opacity: 0,
                transform: 'translateY(12px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
            >
              <div className="text-3xl font-bold text-text mb-1 tabular-nums">{m.value}</div>
              <div className="text-xs text-muted leading-tight">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
