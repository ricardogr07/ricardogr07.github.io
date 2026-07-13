import type { Metadata } from 'next'
import Image from 'next/image'
import { BookMarked, Download } from 'lucide-react'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Production-Grade Data Science (book)',
  description:
    'Production-Grade Data Science: an engineering handbook for working data scientists, organized as six standards from reproducible to accountable. Coming December 2026. Read the introduction.',
  openGraph: {
    images: [
      {
        url: 'https://ricardogr07.github.io/og/book.png',
        width: 1200,
        height: 630,
        alt: 'Production-Grade Data Science, coming December 2026',
      },
    ],
  },
  twitter: {
    images: ['https://ricardogr07.github.io/og/book.png'],
  },
}

const SAMPLE = '/book/pgds-intro-sample.pdf'

// The six engineering standards, framed as the question each one answers (from the book's intro).
const standards = [
  { n: 0, name: 'Reproducible', q: 'Can someone else run it and get your result?' },
  { n: 1, name: 'Legible', q: 'Can a stranger (or you at 3 a.m.) read it?' },
  { n: 2, name: 'Structured', q: 'Is it a system, or a pile of scripts?' },
  { n: 3, name: 'Proven', q: 'Is there evidence it works, not a vibe?' },
  { n: 4, name: 'Shipped', q: 'Can it run where the users are?' },
  { n: 5, name: 'Accountable', q: 'Would you know the moment it breaks?' },
]

const linkBtn =
  'inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-300 transition-all hover:border-neutral-500 hover:text-white'

export default function BookPage() {
  return (
    <main>
      <section className="bg-neutral-950 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Header: cover + intro */}
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            <div className="shrink-0">
              <Image
                src="/images/book/cover.svg"
                alt="Production-Grade Data Science book cover"
                width={260}
                height={390}
                className="w-44 rounded-lg border border-neutral-800 sm:w-52"
                priority
                unoptimized
              />
            </div>
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400">
                <BookMarked className="h-3.5 w-3.5" aria-hidden="true" />
                Book in progress · coming December 2026
              </span>
              <h1 className="mb-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Production-Grade Data Science
              </h1>
              <p className="mb-4 text-lg text-neutral-400">
                An engineering handbook for working data scientists.
              </p>
              <p className="mb-6 text-base leading-relaxed text-neutral-300">
                You can train a model. The question this book asks is harder:{' '}
                <span className="text-white">
                  can you prove it works, ship it, and know the moment it breaks?
                </span>
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a href={SAMPLE} className={linkBtn}>
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Read the introduction (PDF)
                </a>
              </div>
            </div>
          </div>

          {/* What it is */}
          <div className="mt-14 space-y-4 text-base leading-relaxed text-neutral-400 text-justify">
            <p>
              Most data science code never clears the bar. It runs once, in one notebook, on one
              machine, and quietly fails everywhere else. The gap isn&apos;t statistics or modeling.
              It&apos;s engineering: reproducibility, testing, packaging, deployment, and
              monitoring: the discipline that separates a script that ran from a system you can
              stand behind.
            </p>
            <p>
              This book is that standard, written by a software engineer who builds production
              systems and teaches data scientists to do the same. It&apos;s organized as six
              engineering standards every production data scientist should meet, with reliability as
              the line you can&apos;t cross. Every chapter ends not with a summary but with a
              verdict you can apply to your own work.
            </p>
          </div>

          {/* The six standards */}
          <section className="mt-14" aria-labelledby="standards-heading">
            <h2
              id="standards-heading"
              className="mb-6 text-xs font-semibold uppercase tracking-widest text-neutral-500"
            >
              The six standards
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {standards.map((s) => (
                <div
                  key={s.n}
                  className="flex gap-4 rounded-xl border border-neutral-800 bg-neutral-900 p-4"
                >
                  <span className="font-mono text-lg font-bold text-cyan-400">{s.n}</span>
                  <div>
                    <h3 className="font-semibold text-white">{s.name}</h3>
                    <p className="mt-0.5 text-sm text-neutral-400">{s.q}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Read the introduction (inline PDF) */}
          <section className="mt-14" aria-labelledby="read-heading">
            <h2
              id="read-heading"
              className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-500"
            >
              Read the introduction
            </h2>
            <p className="mb-4 text-sm text-neutral-400">
              The opening chapter, &quot;The Passing Grade&quot;: the whole argument in five pages.
            </p>
            <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
              <iframe
                src={`${SAMPLE}#view=FitH`}
                title="Introduction: The Passing Grade (sample)"
                className="h-[70vh] w-full"
              />
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  )
}
