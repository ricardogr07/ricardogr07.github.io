import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Footer from '@/components/footer'
import { publicProjects } from '@/content/projects'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return publicProjects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = publicProjects.find((p) => p.slug === slug)
  if (!project) return {}
  const imageUrl = `https://ricardogr07.github.io/og/project-${project.slug}.png`
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      images: [{ url: imageUrl, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      images: [imageUrl],
    },
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = publicProjects.find((p) => p.slug === slug)

  if (!project) return notFound()

  return (
    <main>
      <article className="bg-neutral-950 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Back link */}
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-white"
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
            All projects
          </Link>

          {/* Title */}
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>

          {/* Category badges */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-neutral-700 bg-neutral-800 px-3 py-1 text-xs text-neutral-400"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mb-10 flex flex-wrap items-center gap-4">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-300 transition-all hover:border-neutral-500 hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-300 transition-all hover:border-neutral-500 hover:text-white"
              >
                Live Demo
              </a>
            )}
            {project.docsUrl && (
              <a
                href={project.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-300 transition-all hover:border-neutral-500 hover:text-white"
              >
                Documentation
              </a>
            )}
          </div>

          {/* Screenshot placeholder */}
          <div className="mb-12 flex h-64 items-center justify-center rounded-xl border border-dashed border-neutral-700 bg-neutral-900/50 text-neutral-600">
            <div className="text-center">
              <svg
                className="mx-auto mb-2 h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M3 9.75h18"
                />
              </svg>
              <p className="text-sm">Screenshot coming in Phase 3</p>
            </div>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="space-y-10 lg:col-span-2">
              <section>
                <h2 className="mb-3 text-xl font-semibold text-white">Problem</h2>
                <p className="text-base leading-relaxed text-neutral-400">{project.problem}</p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-white">Solution</h2>
                <p className="text-base leading-relaxed text-neutral-400">{project.solution}</p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-white">Deliverables</h2>
                <ul className="space-y-2">
                  {project.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-neutral-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <section>
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-neutral-700 bg-neutral-800 px-2.5 py-1 text-xs text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  Services
                </h2>
                <div className="flex flex-col gap-2">
                  {project.servicesSupported.map((svc) => (
                    <span key={svc} className="text-sm text-neutral-400">
                      {svc}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
