import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Nav from '@/components/nav'
import './globals.css'
import 'katex/dist/katex.min.css'

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
    template: '%s | Ricardo García Ramírez',
    default: 'Ricardo García Ramírez | Full-Stack Developer & Data Scientist',
  },
  description:
    'M.Sc. Data Science. AI/ML systems, data engineering, cloud, and full-stack; open to senior roles and select freelance work.',
  keywords: [
    'Full-Stack developer',
    'Data Scientist',
    'AI/ML',
    'data engineering',
    'cloud',
    'Python',
    'Next.js',
    'RAG',
    'LLM',
    'freelance developer',
  ],
  authors: [{ name: 'Ricardo García Ramírez' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ricardogr07.github.io',
    siteName: 'Ricardo García Ramírez Portfolio',
    title: 'Ricardo García Ramírez | Full-Stack Developer & Data Scientist',
    description:
      'M.Sc. Data Science. AI/ML systems, data engineering, cloud, and full-stack; open to senior roles and select freelance work.',
    images: [
      {
        url: 'https://ricardogr07.github.io/og/home.png',
        width: 1200,
        height: 630,
        alt: 'Ricardo García Ramírez | Full-Stack Developer & Data Scientist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ricardo García Ramírez | Full-Stack Developer & Data Scientist',
    description:
      'M.Sc. Data Science. AI/ML systems, data engineering, cloud, and full-stack; open to senior roles and select freelance work.',
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
