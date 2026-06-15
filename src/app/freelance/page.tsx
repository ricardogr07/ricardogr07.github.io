import type { Metadata } from 'next'
import Link from 'next/link'
import { Brain, Database, ClipboardCheck } from 'lucide-react'
import HowIWork from '@/components/how-i-work'
import ContactCTA from '@/components/contact-cta'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Freelance',
  description:
    'Productized freelance offers: AI/RAG pipeline build or audit, data pipeline to reporting site, and engineering/repo audits — each with a shipped project as proof. Scope-based quotes.',
  openGraph: {
    images: [
      {
        url: 'https://ricardogr07.github.io/og/freelance.png',
        width: 1200,
        height: 630,
        alt: 'Freelance — Ricardo García Ramírez',
      },
    ],
  },
  twitter: {
    images: ['https://ricardogr07.github.io/og/freelance.png'],
  },
}

const offers = [
  {
    icon: Brain,
    title: 'AI / RAG Pipeline — Build or Audit',
    description:
      'Token-aware ingestion, vector search, hallucination guards, and an eval harness — built right or reviewed against the failure modes that quietly wreck retrieval quality.',
    bullets: [
      'Token-aware chunking that respects model limits',
      'Vector search + retrieval that returns the right context',
      'Hallucination guards and an evaluation harness',
    ],
    proof: { label: 'Proof: rusty-rag-chunker', slug: 'rusty-rag-chunker' },
  },
  {
    icon: Database,
    title: 'Data Pipeline → Reporting Site',
    description:
      'Raw, messy data turned into curated DuckDB/Parquet assets and automated reports — running unattended so the numbers stay fresh without anyone touching them.',
    bullets: [
      'ETL from raw files to clean, queryable analytics assets',
      'Automated bilingual reports + a published docs/dashboard site',
      'Scheduled and unattended — no manual refresh',
    ],
    proof: { label: 'Proof: mx-jobs-insights', slug: 'mx-jobs-insights' },
  },
  {
    icon: ClipboardCheck,
    title: 'Engineering / Repo Audit',
    description:
      'A structured audit of your codebase — language and framework signals, dependencies, tests, docs, CI, typing — with a prioritized remediation plan. A low-commitment way to start.',
    bullets: [
      'Automated codebase scan + structured findings',
      'Prioritized, actionable remediation plan',
      'A cheap entry point that can scope into a larger build',
    ],
    proof: { label: 'Proof: RepoSage', slug: 'reposage' },
  },
]

export default function FreelancePage() {
  return (
    <main>
      <section className="bg-neutral-950 px-6 pt-16 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Freelance
          </h1>
          <p className="max-w-2xl text-lg text-neutral-400">
            I take on small to mid-sized projects where I can understand the problem, design the
            solution, and deliver clean, maintainable code — with clear handoff notes. Each offer
            below is backed by a project I&apos;ve actually shipped.
          </p>
        </div>
      </section>

      {/* Productized offers */}
      <section
        className="bg-neutral-950 px-6 pt-12 lg:px-8 lg:pt-16"
        aria-labelledby="offers-heading"
      >
        <div className="mx-auto max-w-4xl">
          <h2 id="offers-heading" className="sr-only">
            Productized offers
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {offers.map((offer) => (
              <div
                key={offer.title}
                className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900 p-6"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10">
                  <offer.icon className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{offer.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-neutral-400">{offer.description}</p>
                <ul className="mb-5 space-y-2">
                  {offer.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-neutral-400">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-col gap-3 border-t border-neutral-800 pt-4">
                  <Link
                    href={`/projects/${offer.proof.slug}`}
                    className="text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                  >
                    {offer.proof.label} →
                  </Link>
                  <span className="text-xs text-neutral-500">Scope-based quote</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowIWork />
      <ContactCTA />
      <Footer />
    </main>
  )
}
