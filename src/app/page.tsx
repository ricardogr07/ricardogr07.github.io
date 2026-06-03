import type { Metadata } from 'next'
import Link from 'next/link'
import { Brain, Database, Cloud } from 'lucide-react'
import Hero from '@/components/hero'
import ProjectCard from '@/components/project-card'
import Footer from '@/components/footer'
import { featuredProjects } from '@/content/projects'

export const metadata: Metadata = {
  title: 'Ricardo García | Full Stack · Data Science · Cloud',
}

const focusAreas = [
  {
    Icon: Brain,
    title: 'Data Science & ML/AI',
    description:
      'Data cleaning, EDA, ML model training, RAG pipelines, LLM tooling, vector search, Bayesian methods, and AI-assisted automation.',
  },
  {
    Icon: Database,
    title: 'Full Stack Engineering',
    description:
      'Python/FastAPI backends, Next.js web apps, REST APIs, dashboards, CLI tools, web scraping, and end-to-end automation workflows.',
  },
  {
    Icon: Cloud,
    title: 'Cloud & Automation',
    description:
      'ETL pipelines, GitHub Actions CI/CD, serverless functions, Docker deployments, data infrastructure, and reproducible workflows.',
  },
]

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Focus areas */}
      <section
        className="bg-neutral-900/40 px-6 py-20 lg:px-8 lg:py-28"
        aria-labelledby="focus-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2
              id="focus-heading"
              className="mb-3 text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              What I work on
            </h2>
            <p className="text-neutral-500">
              Building at the intersection of research and production engineering.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {focusAreas.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-4 rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-colors hover:border-neutral-700"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10">
                  <Icon className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-neutral-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section
        id="featured-work"
        className="bg-neutral-950 px-6 py-20 lg:px-8 lg:py-28"
        aria-labelledby="featured-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2
              id="featured-heading"
              className="mb-3 text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              Featured Work
            </h2>
            <p className="text-neutral-500">
              A cross-domain sample — AI pipelines, data engineering, and full-stack automation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                featured
                href={`/projects/${project.slug}`}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-6 py-3 text-sm font-medium text-neutral-300 transition-all hover:border-neutral-500 hover:text-white"
            >
              View all projects
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

<Footer />
    </main>
  )
}
