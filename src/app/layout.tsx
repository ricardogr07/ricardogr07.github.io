import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Nav from '@/components/nav'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Ricardo García',
    default: 'Ricardo García | Python & .NET Engineer',
  },
  description:
    'I build practical software tools for automation, data workflows, reporting, APIs, and AI-assisted systems. Web scraping, ETL pipelines, RAG/LLM tooling, dashboards, and scientific Python packages.',
  keywords: [
    'Python engineer',
    '.NET engineer',
    'automation',
    'web scraping',
    'ETL pipelines',
    'RAG',
    'LLM',
    'data engineering',
    'freelance developer',
  ],
  authors: [{ name: 'Ricardo García' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ricardogr07.github.io',
    siteName: 'Ricardo García Portfolio',
    title: 'Ricardo García | Python & .NET Engineer',
    description:
      'I build practical software tools for automation, data workflows, reporting, APIs, and AI-assisted systems.',
    images: [
      {
        url: 'https://ricardogr07.github.io/og/home.png',
        width: 1200,
        height: 630,
        alt: 'Ricardo García | ML/AI · Data Engineering · Scientific Computing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ricardo García | Python & .NET Engineer',
    description:
      'I build practical software tools for automation, data workflows, reporting, APIs, and AI-assisted systems.',
    images: ['https://ricardogr07.github.io/og/home.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-neutral-950 text-neutral-100">
        <Nav />
        {children}
      </body>
    </html>
  )
}
