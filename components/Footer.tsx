'use client'

import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/carloderossi/',
    icon: Linkedin,
    desc: '/in/carloderossi',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/carloderossi',
    icon: Github,
    desc: 'github.com/carloderossi',
  },
  {
    label: 'Email',
    href: 'mailto:contacts@carloderossi.com',
    icon: Mail,
    desc: 'contacts@carloderossi.com',
  },
  {
    label: 'Location',
    href: 'https://maps.google.com/?q=Zurich,Switzerland',
    icon: MapPin,
    desc: 'Zürich, Switzerland',
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-bg py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Contact block */}
        <div className="mb-16">
          <p className="text-accent text-xs font-mono tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Get in touch</h2>
          <p className="text-muted text-sm max-w-md">
            Available from January 2027 for senior roles in AI strategy, architecture, and product
            leadership across Swiss financial services, technology, and life sciences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {links.map(({ label, href, icon: Icon, desc }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 border border-border rounded-lg bg-surface hover:border-accent hover:bg-surface-2 group transition-all duration-200"
            >
              <Icon
                size={18}
                className="text-muted group-hover:text-accent transition-colors flex-shrink-0"
              />
              <div>
                <div className="text-text text-sm font-medium group-hover:text-accent-light transition-colors">
                  {label}
                </div>
                <div className="text-muted text-xs truncate">{desc}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} Carlo De Rossi · Zürich, Switzerland
          </p>
          <p className="text-muted text-xs font-mono">
            AI Strategy · Agentic AI · Product Leadership
          </p>
        </div>
      </div>
    </footer>
  )
}
