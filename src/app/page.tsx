import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/hero'
import PersonaRouter from '@/components/persona-router'
import FourPillars from '@/components/four-pillars'
import ProofStrip from '@/components/proof-strip'
import ProjectCard from '@/components/project-card'
import Footer from '@/components/footer'
import { projects } from '@/content/projects'

export const metadata: Metadata = {
  title: 'Ricardo García Ramírez | Full-Stack Developer & Data Scientist',
  openGraph: {
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
    images: ['https://ricardogr07.github.io/og/home.png'],
  },
}

const featuredSlugs = ['rusty-rag-chunker', 'mx-jobs-insights', 'clipsmith', 'purkinje-uv']
const featuredWork = featuredSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter(Boolean) as (typeof projects)[number][]

export default function Home() {
  return (
    <main>
      <Hero />
      <PersonaRouter />
      <FourPillars />

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
            <p className="text-neutral-500">AI/ML · Data Science · Cloud · Full-Stack</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredWork.map((project) => (
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

      <ProofStrip />
      <Footer />
    </main>
  )
}
