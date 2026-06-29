'use client'

import { useEffect, useRef } from 'react'
import { ArrowDown, Github, Linkedin, FileText } from 'lucide-react'

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = lineRef.current
    if (!el) return
    const timer = setTimeout(() => {
      el.style.width = '100%'
    }, 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-20 pb-16 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      {/* Accent glow */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        {/* Eyebrow */}
        <p
          className="text-accent text-sm font-mono tracking-widest uppercase mb-6"
          style={{ animation: 'fadeIn 0.5s ease-out 0.1s both' }}
        >
          Director · AI Strategy & Platform Governance
        </p>

        {/* Name */}
        <h1
          className="text-6xl md:text-8xl font-bold tracking-tight text-text leading-none mb-2"
          style={{ animation: 'fadeUp 0.6s ease-out 0.2s both' }}
        >
          Carlo
        </h1>
        <h1
          className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-8"
          style={{
            animation: 'fadeUp 0.6s ease-out 0.3s both',
            background: 'linear-gradient(90deg, #F8FAFC 60%, #2563EB)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          De Rossi
        </h1>

        {/* Divider line that animates in */}
        <div
          ref={lineRef}
          className="h-px bg-accent mb-8 transition-all duration-700 ease-out"
          style={{ width: '0%' }}
        />

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl text-muted font-light max-w-2xl leading-relaxed mb-4"
          style={{ animation: 'fadeUp 0.6s ease-out 0.5s both' }}
        >
          Helping organizations transform AI experimentation
          <br className="hidden md:block" /> into governed, scalable business value.
        </p>

        <p
          className="text-muted text-base max-w-xl leading-relaxed mb-12"
          style={{ animation: 'fadeUp 0.6s ease-out 0.65s both' }}
        >
          25+ years across global financial services — platform engineering,
          enterprise architecture, AI governance, and product management
          at UBS and Credit Suisse.
        </p>

        {/* Discipline tags */}
        <div
          className="flex flex-wrap gap-2 mb-12"
          style={{ animation: 'fadeUp 0.6s ease-out 0.75s both' }}
        >
          {['AI Strategy', 'Agentic AI', 'Product Leadership', 'Enterprise Transformation'].map(
            (tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium border border-border text-muted rounded-sm tracking-wide"
              >
                {tag}
              </span>
            )
          )}
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4"
          style={{ animation: 'fadeUp 0.6s ease-out 0.85s both' }}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white text-sm font-medium rounded transition-colors duration-200"
          >
            <Github size={16} />
            View Projects
          </a>
          <a
            href="#articles"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-text hover:border-accent-light hover:text-accent-light text-sm font-medium rounded transition-colors duration-200"
          >
            <Linkedin size={16} />
            Read Articles
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-muted hover:text-text hover:border-muted text-sm font-medium rounded transition-colors duration-200"
          >
            <FileText size={16} />
            Download CV
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#expertise"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors"
        aria-label="Scroll to expertise"
        style={{ animation: 'fadeIn 1s ease-out 1.5s both' }}
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  )
}
