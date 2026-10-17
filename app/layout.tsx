import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Carlo De Rossi', // — AI Strategy & Enterprise Transformation',
  description:
    'Director AI Strategy & Platform Governance. 25+ years in global financial services. Agentic AI, Enterprise Architecture, AI Governance, Product Leadership.',
  keywords: [
    'Enterprise Transformation',
    'AI Strategy',
    'Agentic AI',
    'Product Leadership',
    'Product Management',
    'Enterprise Architecture',
    'TOGAF',
    'FINMA',
    'AI Governance',
    'Microsoft Agentic AI',
    'Microsoft Foundry',
    'Microsoft Azure',
    'Microsoft Copilot Studio',
    'Business Process Transformation',
    'UBS',
    'Credit Suisse',
    'Zürich',
    'Switzerland',
  ],
  authors: [{ name: 'Carlo De Rossi', url: 'https://carloderossi.com' }],
  openGraph: {
    title: 'Carlo De Rossi — AI Strategy & Enterprise Transformation',
    description: 'AI Strategy · Agentic AI · Product Leadership · Enterprise Transformation',
    url: 'https://carloderossi.com',
    siteName: 'Carlo De Rossi',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carlo De Rossi',
    description: 'AI Strategy · Agentic AI · Product Leadership',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-bg text-text antialiased font-sans">{children}</body>
    </html>
  )
}
