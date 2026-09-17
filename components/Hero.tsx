'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowDown, BadgeCheck, Mail, MailOpen, Send, MessageSquare, MessageCircle, Brain, Sparkles,Github, Linkedin, FileText } from 'lucide-react'

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

      {/* Accent glow — follows portrait side on desktop */}
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-24">

          {/* ── Left column: text ── */}
          <div className="flex-1 min-w-0">
            {/* Eyebrow */}
            <p
              className="text-accent text-sm font-mono tracking-widest uppercase mb-6"
              style={{ animation: 'fadeIn 0.5s ease-out 0.1s both' }}
            >
              AI Architect & AI Product Manager
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

            {/* Animated divider */}
            <div
              ref={lineRef}
              className="h-px bg-accent mb-8 transition-all duration-700 ease-out"
              style={{ width: '0%' }}
            />

            {/* Tagline */}
            <p
              className="text-xl md:text-2xl text-muted font-light max-w-xl leading-relaxed mb-4"
              style={{ animation: 'fadeUp 0.6s ease-out 0.5s both' }}
            >
              Helping organizations transform AI experimentation
              into governed, scalable business value.
            </p>

            <p
              className="text-muted text-base max-w-lg leading-relaxed mb-10"
              style={{ animation: 'fadeUp 0.6s ease-out 0.65s both' }}
            >
              25+ years building enterprise technology in regulated financial services.
            </p>

            {/* Discipline tags */}
            <div
              className="flex flex-wrap gap-2 mb-10"
              style={{ animation: 'fadeUp 0.6s ease-out 0.75s both' }}
            >
              {['AI Strategy', 'AI Governance', 'Product Leadership', 'Enterprise Transformation'].map(
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
                href="#expertise"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white text-sm font-medium rounded transition-colors duration-200"
              >
                <BadgeCheck size={16} />
                Expertise
              </a>
              <a
                href="#articles"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-text hover:border-accent-light hover:text-accent-light text-sm font-medium rounded transition-colors duration-200"
              >
                <Linkedin size={16} />
                Read Articles
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white text-sm font-medium rounded transition-colors duration-200"
              >
                <MailOpen  size={16} />
                Get in Contact
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

          {/* ── Right column: portrait ── */}
          <div
            className="hidden lg:flex flex-shrink-0 justify-center items-end mt-12 lg:mt-0"
            style={{ animation: 'fadeIn 0.8s ease-out 0.4s both' }}
          >
            <div className="relative" style={{ width: 380, height: 640 }}>
              {/* Subtle accent border frame */}
              <div
                className="absolute inset-0 rounded-lg pointer-events-none z-10"
                style={{
                  boxShadow: 'inset 0 0 0 1px rgba(37,99,235,0.25)',
                }}
              />
              {/* Bottom-left accent line */}
              <div
                className="absolute -bottom-3 -left-3 w-16 h-16 pointer-events-none z-0"
                style={{
                  borderBottom: '1px solid #2563EB',
                  borderLeft: '1px solid #2563EB',
                  borderBottomLeftRadius: '4px',
                }}
              />
              {/* Top-right accent line */}
              <div
                className="absolute -top-3 -right-3 w-16 h-16 pointer-events-none z-0"
                style={{
                  borderTop: '1px solid #2563EB',
                  borderRight: '1px solid #2563EB',
                  borderTopRightRadius: '4px',
                }}
              />
              {/* Portrait image */}
              <Image
                src="/profile.jpg"
                alt="Carlo De Rossi"
                fill
                className="object-cover object-top rounded-lg"
                priority
                sizes="380px"
              />
              {/* Bottom gradient fade into page background */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24 rounded-b-lg pointer-events-none z-10"
                style={{
                  background: 'linear-gradient(to bottom, transparent, rgba(11,16,32,0.6))',
                }}
              />
            </div>
          </div>

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
