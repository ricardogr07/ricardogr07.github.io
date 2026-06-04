import Link from 'next/link'

const pillars = [
  {
    name: 'AI/ML',
    oneliner: 'RAG pipelines, LLM tooling, vector search, model training, Bayesian methods',
    proofLabel: 'rusty-rag-chunker',
    proofHref: '/projects/rusty-rag-chunker',
  },
  {
    name: 'Data Engineering',
    oneliner: 'ETL, DuckDB/Parquet datasets, scraping infra, end-to-end data products',
    proofLabel: 'mx-jobs-insights',
    proofHref: '/projects/mx-jobs-insights',
  },
  {
    name: 'Cloud',
    oneliner: 'Azure Functions, Cloud Run, Docker, CI/CD, serverless + static deploy',
    proofLabel: 'mx-jobs-insights',
    proofHref: '/projects/mx-jobs-insights',
  },
  {
    name: 'Full-Stack',
    oneliner: 'FastAPI + Next.js/React, typed TS, tested + deployed apps',
    proofLabel: 'clipsmith',
    proofHref: '/projects/clipsmith',
  },
]

export default function FourPillars() {
  return (
    <section
      className="bg-neutral-900/40 px-6 py-20 lg:px-8 lg:py-28"
      aria-labelledby="pillars-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2
            id="pillars-heading"
            className="mb-3 text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            What I work on
          </h2>
          <p className="text-neutral-500">Building across the full engineering stack.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ name, oneliner, proofLabel, proofHref }) => (
            <div
              key={name}
              className="flex flex-col gap-4 rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-colors hover:border-neutral-700"
            >
              <h3 className="text-base font-semibold text-cyan-400">{name}</h3>
              <p className="flex-1 text-sm leading-relaxed text-neutral-400">{oneliner}</p>
              <Link
                href={proofHref}
                className="text-xs font-medium text-neutral-500 underline-offset-2 transition-colors hover:text-cyan-400 hover:underline"
              >
                {proofLabel} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
