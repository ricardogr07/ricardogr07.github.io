import type { Metadata } from 'next'
import Footer from '@/components/footer'
import { QueryLabShell } from '@/components/query-lab'

export const metadata: Metadata = {
  title: 'Portfolio Query Lab',
  description:
    'Interactive SQLite query lab running in the browser via sql.js/WebAssembly. Query synthetic portfolio holdings, monthly returns, and goals with plain SQL — no server required.',
  openGraph: {
    images: [
      {
        url: 'https://ricardogr07.github.io/og/demo-query-lab.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio Query Lab — Ricardo García Ramírez',
      },
    ],
  },
  twitter: {
    images: ['https://ricardogr07.github.io/og/demo-query-lab.png'],
  },
}

export default function QueryLabPage() {
  return (
    <main>
      <QueryLabShell />
      <Footer />
    </main>
  )
}
