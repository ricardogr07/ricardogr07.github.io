import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center overflow-hidden bg-neutral-950 px-6 py-24 text-center"
      aria-label="Hero"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          <span className="text-sm font-medium tracking-wide text-cyan-400">
            ML/AI · Data Engineering · Scientific Computing
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Senior engineer at the intersection of{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            data science, ML/AI,
          </span>{' '}
          and production systems.
        </h1>

        {/* Sub-copy */}
        <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
          M.Sc. Data Science (Distinction). 5 peer-reviewed publications. 7+ years enterprise
          engineering. Now taking freelance projects in ML/AI systems, data engineering, and
          scientific Python.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/projects"
            className="inline-flex h-12 items-center gap-2 rounded-lg bg-cyan-400 px-6 text-sm font-semibold text-neutral-950 transition-all hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="inline-flex h-12 items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-6 text-sm font-semibold text-white transition-all hover:border-neutral-500 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
          >
            About Me
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-neutral-600">
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
