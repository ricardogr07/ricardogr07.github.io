import type { Metadata } from 'next'
import Link from 'next/link'
import { Wallet, CalendarClock, CheckCircle2, Database } from 'lucide-react'
import DiagramZoom from '@/components/diagram-zoom'
import ContactCTA from '@/components/contact-cta'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Case study: data pipeline to reporting site',
  description:
    'A weekly analytics report site that runs itself, for $0 a month. Raw job data in, a clean bilingual report site out, fully unattended. The buyer-facing case study behind Offer 2.',
  openGraph: {
    images: [
      {
        url: 'https://ricardogr07.github.io/og/case-mx-jobs-insights.png',
        width: 1200,
        height: 630,
        alt: 'Case study: data pipeline to reporting site',
      },
    ],
  },
  twitter: {
    images: ['https://ricardogr07.github.io/og/case-mx-jobs-insights.png'],
  },
}

// Pinned snapshot as of July 2026 (sourced from the latest scheduled run + repo).
const outcomes = [
  { icon: Wallet, value: '$0 / mo', label: 'Infrastructure cost' },
  { icon: CalendarClock, value: 'Weekly', label: 'Fully unattended cadence' },
  { icon: CheckCircle2, value: '20 / 20', label: 'Scheduled runs green' },
  { icon: Database, value: '13,152', label: 'Raw records rebuilt every run' },
]

const constraints = [
  {
    h: 'No infrastructure budget',
    p: 'No server to rent, no database to host, no monthly bill.',
  },
  {
    h: 'Fully unattended',
    p: 'It runs on a schedule and publishes itself. If it needs a human to start it, it drifts.',
  },
  {
    h: 'Trustworthy output',
    p: 'The numbers are reproducible, and the site refuses to publish if anything looks wrong.',
  },
]

const deliverables = [
  'A clean, queryable dataset built from your messy source data, rebuilt reproducibly so you can trace any number back to its source.',
  'Automated reports in the languages and format your audience actually reads.',
  'A published site that updates itself on a schedule, with no manual refresh.',
  'A build that fails loudly instead of shipping wrong numbers quietly.',
  'Handoff notes so your team can run it, or I keep it running. Either way it costs close to nothing to operate.',
]

const linkBtn =
  'inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-300 transition-all hover:border-neutral-500 hover:text-white'

export default function MxJobsCaseStudyPage() {
  return (
    <main>
      <section className="bg-neutral-950 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Back link */}
          <Link
            href="/freelance"
            className="mb-8 flex w-fit items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-white"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Services
          </Link>

          {/* Header */}
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400">
            Case study · Offer 2: data pipeline to reporting site
          </span>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A weekly analytics report site that runs itself, for $0 a month
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-400">
            Raw job data in, a clean bilingual report site out. Every week. No server, no manual
            step, no invoice.
          </p>

          {/* Outcome band */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {outcomes.map(({ icon: Icon, value, label }) => (
              <div key={label} className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
                <Icon className="mb-2 h-5 w-5 text-cyan-400" aria-hidden="true" />
                <p className="text-2xl font-bold tracking-tight text-white">{value}</p>
                <p className="mt-1 text-xs leading-snug text-neutral-500">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-neutral-600">Figures as of July 2026.</p>

          {/* The problem */}
          <section className="mt-14" aria-labelledby="problem-heading">
            <h2 id="problem-heading" className="mb-3 text-xl font-semibold text-white">
              The problem
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-justify text-neutral-400">
              <p>
                Most teams sit on a stream of raw data that is technically valuable and practically
                useless. It arrives messy, in files nobody wants to open, and it goes stale the day
                it lands. Turning it into something a person can actually read, a clean dataset, a
                chart, a report they trust, is manual work that someone has to remember to do. So it
                happens late, or inconsistently, or it quietly stops happening at all.
              </p>
              <p className="text-neutral-300">
                You do not want a dashboard you have to babysit. You want the numbers to be current
                when you look, without anyone touching them, and you want to trust that they are
                right.
              </p>
            </div>
          </section>

          {/* Constraints */}
          <section className="mt-14" aria-labelledby="constraints-heading">
            <h2 id="constraints-heading" className="mb-4 text-xl font-semibold text-white">
              The constraints I worked under
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {constraints.map((c) => (
                <div key={c.h} className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
                  <h3 className="mb-1 text-sm font-semibold text-white">{c.h}</h3>
                  <p className="text-sm leading-relaxed text-neutral-400">{c.p}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Approach */}
          <section className="mt-14" aria-labelledby="approach-heading">
            <h2 id="approach-heading" className="mb-3 text-xl font-semibold text-white">
              The approach, in plain terms
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-justify text-neutral-400">
              <p>
                Raw snapshots go in one end. A clean, queryable dataset and a published report site
                come out the other, on a schedule, with a gate that blocks any bad build from going
                live.
              </p>
              <p>
                Under the hood it rebuilds the entire dataset from source on every run, so the
                result is always reproducible from scratch and there is no fragile running state to
                corrupt. The written summary is generated once and rendered in both English and
                Spanish from the same source, so the two language versions can never disagree. A
                strict build step checks the whole site before anything is published: one warning
                and the deploy is blocked.
              </p>
              <p className="text-neutral-300">
                That is the machinery. What matters to you is what it produces and what it costs to
                keep running, which is nothing.
              </p>
            </div>
            <div className="mt-6 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60">
              <DiagramZoom
                src="/images/projects/mx-jobs-insights/architecture.svg"
                alt="mx-jobs-insights pipeline architecture: workspace to curate to report to site, on ephemeral CI"
              />
            </div>
          </section>

          {/* Outcome */}
          <section className="mt-14" aria-labelledby="outcome-heading">
            <h2 id="outcome-heading" className="mb-3 text-xl font-semibold text-white">
              The outcome, with numbers
            </h2>
            <p className="mb-4 text-sm text-neutral-500">
              Snapshot as of July 2026; the schedule keeps running, so these keep climbing.
            </p>
            <ul className="space-y-3">
              {[
                'Runs entirely on free tooling. Infrastructure cost is $0 a month. There is no server.',
                '20 of 20 scheduled runs have finished cleanly since March 30, 2026, about 15 weeks of fully unattended operation: 16 weekly report bundles and 4 monthly rollups.',
                'Each run rebuilds 13,152 raw job snapshots (covering March 22 to July 13, 2026) into 3 curated tables and distills the latest closed week to 342 clean, deduplicated records, published as a report and a downloadable CSV.',
                'Every report ships in English and Spanish automatically, from a single source, so the two never drift.',
                'Backed by 78 automated tests, with a build gate that refuses to publish a broken site.',
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-base leading-relaxed text-justify text-neutral-400"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* What you get */}
          <section className="mt-14" aria-labelledby="deliver-heading">
            <h2 id="deliver-heading" className="mb-3 text-xl font-semibold text-white">
              What Offer 2 delivers for you
            </h2>
            <p className="mb-4 text-base leading-relaxed text-neutral-400">
              The same engagement, applied to your data instead of a job feed:
            </p>
            <ul className="space-y-2">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2 text-neutral-400">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  {d}
                </li>
              ))}
            </ul>
          </section>

          {/* Honest note */}
          <section className="mt-10">
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-400/90">
                One honest note
              </h2>
              <p className="text-sm leading-relaxed text-neutral-400">
                The first version ran fully stateless, and I had wrongly assumed that rebuilding
                from source also preserved the published archive. It did not, so I gave the archive
                a deliberate home and backfilled the history. I would rather flag the sharp edge
                than hide it.
              </p>
            </div>
          </section>

          {/* CTA + deep-dive */}
          <section className="mt-14 rounded-2xl border border-cyan-400/20 bg-neutral-900/50 p-8 text-center">
            <p className="mb-2 text-lg font-semibold text-white">This is Offer 2 in practice.</p>
            <p className="mx-auto mb-6 max-w-xl text-sm leading-relaxed text-neutral-400">
              If you have recurring data that should be a living report and is not, that is the
              engagement.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/freelance"
                className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/50 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-400 transition-all hover:border-cyan-400 hover:bg-cyan-400/20"
              >
                See the offer and get in touch
              </Link>
              <Link href="/projects/mx-jobs-insights" className={linkBtn}>
                Read the technical deep-dive
              </Link>
            </div>
          </section>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  )
}
