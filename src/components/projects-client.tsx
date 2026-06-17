'use client'

import { useState } from 'react'
import ProjectCard from '@/components/project-card'
import Footer from '@/components/footer'
import { visibleProjects } from '@/content/projects'
import type { ProjectCategory } from '@/lib/types'

const filterOptions: { label: string; value: 'all' | ProjectCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Automation', value: 'automation' },
  { label: 'Data Engineering', value: 'data-engineering' },
  { label: 'Web Scraping', value: 'web-scraping' },
  { label: 'RAG / LLM', value: 'rag-llm' },
  { label: 'Scientific Python', value: 'scientific-python' },
  { label: 'Media Automation', value: 'media-automation' },
  { label: 'Developer Tools', value: 'developer-tooling' },
  { label: 'ML', value: 'ml' },
  { label: 'Dashboard', value: 'dashboard' },
]

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all')

  const filtered =
    activeFilter === 'all'
      ? visibleProjects
      : visibleProjects.filter((p) => p.categories.includes(activeFilter))

  return (
    <main>
      <section className="bg-neutral-950 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Projects
            </h1>
            <p className="text-lg text-neutral-400">
              A full view of public work across automation, data engineering, AI tooling, and
              scientific software.
            </p>
          </div>

          {/* Filter tabs */}
          <div
            className="mb-10 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                role="tab"
                aria-selected={activeFilter === opt.value}
                onClick={() => setActiveFilter(opt.value)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                  activeFilter === opt.value
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                    : 'border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="mb-6 text-sm text-neutral-600">
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  featured={project.featured}
                  href={`/projects/${project.slug}`}
                />
              ))}
            </div>
          ) : (
            <p className="text-neutral-500">No projects match this filter.</p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
