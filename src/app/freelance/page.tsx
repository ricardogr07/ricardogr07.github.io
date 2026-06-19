import type { Metadata } from 'next'
import Link from 'next/link'
import { Brain, Database, ClipboardCheck } from 'lucide-react'
import HowIWork from '@/components/how-i-work'
import ContactCTA from '@/components/contact-cta'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Productized freelance offers: AI/RAG pipeline build or audit, data pipeline to reporting site, and engineering/repo audits. Each backed by a shipped project example.',
  openGraph: {
    images: [
      {
        url: 'https://ricardogr07.github.io/og/freelance.png',
        width: 1200,
        height: 630,
        alt: 'Freelance, Ricardo García Ramírez',
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
    title: 'AI / RAG Pipeline: build or audit',
    description:
      'Token-aware ingestion, vector search, hallucination guards, and an eval harness. Built right or reviewed against the failure modes that quietly wreck retrieval quality.',
    bullets: [
      'Token-aware chunking that respects model limits',
      'Vector search + retrieval that returns the right context',
      'Hallucination guards and an evaluation harness',
    ],
    proof: { label: 'Example: rusty-rag-chunker', slug: 'rusty-rag-chunker' },
  },
  {
    icon: Database,
    title: 'Data Pipeline → reporting site',
    description:
      'Raw, messy data turned into curated, queryable analytics assets and automated reports, running unattended so the numbers stay fresh without anyone touching them.',
    bullets: [
      'ETL from raw files to clean, queryable analytics assets',
      'Automated reports + a published docs/dashboard site',
      'Scheduled and unattended: no manual refresh',
    ],
    proof: { label: 'Example: mx-jobs-insights', slug: 'mx-jobs-insights' },
  },
  {
    icon: ClipboardCheck,
    title: 'Engineering / repo audit',
    description:
      'A structured audit of your codebase: language and framework signals, dependencies, tests, docs, CI, and typing. Delivered as a prioritized remediation plan. A low-commitment way to start.',
    bullets: [
      'Targets fast-prototyped and AI-assisted codebases that need hardening',
      'Covers types, tests, dependencies, CI, docs, and structure',
      'Delivers a prioritized fix list you can act on or hand off',
    ],
    proof: { label: 'Example: RepoSage', slug: 'reposage' },
  },
]

export default function FreelancePage() {
  return (
    <main>
      <section className="bg-neutral-950 px-6 pt-16 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Services
          </h1>
          <p className="text-justify text-lg text-neutral-400">
            I take on projects where I can own the problem end to end: understand the scope, design
            the solution, and ship clean, maintainable code with clear handoff notes. Each offer
            below is backed by a project I&apos;ve actually shipped.
          </p>
        </div>
      </section>

      {/* Typical deliverables */}
      <section className="bg-neutral-950 px-6 pt-8 pb-0 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-neutral-500">
            What a typical engagement delivers
          </p>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                service: 'RAG pipeline',
                deliverable:
                  'Working ingestion pipeline with chunking benchmarks, a vector store, retrieval eval harness, and a handoff README runnable on day one.',
              },
              {
                service: 'Data pipeline',
                deliverable:
                  'Clean, queryable analytics assets, automated report publishing, CI-scheduled runs, and full documentation.',
              },
              {
                service: 'Repo audit',
                deliverable:
                  'Structured findings across types, tests, CI, and docs — with a prioritized fix list organized by effort and impact.',
              },
            ].map(({ service, deliverable }) => (
              <div
                key={service}
                className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4"
              >
                <dt className="mb-1 text-xs font-semibold uppercase tracking-wide text-cyan-400">
                  {service}
                </dt>
                <dd className="text-sm leading-relaxed text-neutral-400">{deliverable}</dd>
              </div>
            ))}
          </dl>
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
                className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-all hover:border-neutral-700 hover:bg-neutral-800/60"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10">
                  <offer.icon className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{offer.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-justify text-neutral-400">
                  {offer.description}
                </p>
                <ul className="mb-5 space-y-2">
                  {offer.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-neutral-400">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto border-t border-neutral-800 pt-4">
                  <Link
                    href={`/projects/${offer.proof.slug}`}
                    className="text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                  >
                    {offer.proof.label} →
                  </Link>
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
