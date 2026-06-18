import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import katex from 'katex'
import DiagramZoom from '@/components/diagram-zoom'
import Footer from '@/components/footer'
import { visibleProjects } from '@/content/projects'
import type { PortfolioProject } from '@/lib/types'

function renderWithMath(text: string) {
  const parts = text.split(/(\$[^$]+\$)/g)
  if (parts.length === 1) return text
  return parts.map((part, i) => {
    if (part.startsWith('$') && part.endsWith('$')) {
      const html = katex.renderToString(part.slice(1, -1), { throwOnError: false, output: 'html' })
      return <span key={i} dangerouslySetInnerHTML={{ __html: html }} />
    }
    return <span key={i}>{part}</span>
  })
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return visibleProjects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = visibleProjects.find((p) => p.slug === slug)
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

const linkButtonClass =
  'inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-300 transition-all hover:border-neutral-500 hover:text-white'

const statusLabels: Record<NonNullable<PortfolioProject['status']>, string> = {
  live: 'Live',
  pypi: 'On PyPI',
  active: 'Active',
  archived: 'Archived',
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const index = visibleProjects.findIndex((p) => p.slug === slug)
  const project = index === -1 ? undefined : visibleProjects[index]

  if (!project) return notFound()

  // STARL beats with legacy fallback — degradation logic lives here so the JSX stays clean.
  const situation = project.situation ?? project.problem
  const action = project.action ?? project.solution
  const { task, result, learning } = project
  const hasDeliverables = project.deliverables.length > 0
  const showTldr = Boolean(project.tldr || project.headlineMetric)

  const prev = index > 0 ? visibleProjects[index - 1] : undefined
  const next = index < visibleProjects.length - 1 ? visibleProjects[index + 1] : undefined

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
                className={linkButtonClass}
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
                className={linkButtonClass}
              >
                Live Demo
              </a>
            )}
            {project.docsUrl && (
              <a
                href={project.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkButtonClass}
              >
                {project.docsLabel ? (
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      strokeLinecap="round"
                      d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                )}
                {project.docsLabel ?? 'Documentation'}
              </a>
            )}
            {project.pypiUrl && (
              <a
                href={project.pypiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkButtonClass}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C8.746 0 9 1.53 9 1.53V4.5h6V5.4H5.748C5.748 5.4 3 5.148 3 8.448c0 3.3 2.55 3.15 2.55 3.15H7.2V9.9s-.1-2.55 2.55-2.55h4.2s2.4.05 2.4-2.3V1.55S16.6 0 12 0zM8.85 1.5c.45 0 .75.3.75.75s-.3.75-.75.75-.75-.3-.75-.75.3-.75.75-.75zM12 24c3.254 0 3-1.53 3-1.53V19.5H9v-.9h9.252C18.252 18.6 21 18.852 21 15.552c0-3.3-2.55-3.15-2.55-3.15H16.8v1.698s.1 2.55-2.55 2.55H10.05s-2.4-.05-2.4 2.3v3.5S7.4 24 12 24zm3.15-1.5c-.45 0-.75-.3-.75-.75s.3-.75.75-.75.75.3.75.75-.3.75-.75.75z" />
                </svg>
                PyPI
              </a>
            )}
            {project.colabUrl && (
              <a
                href={project.colabUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkButtonClass}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4.5 9.5 2 7a7 7 0 0 0 0 10l2.5-2.5a3.5 3.5 0 0 1 0-5z" fill="#E8710A" />
                  <path d="M12 5l-2 3a3.5 3.5 0 0 1 0 5.5l2 3a7 7 0 0 0 0-11.5z" fill="#F9AB00" />
                  <path d="M2 7l2.5 2.5a3.5 3.5 0 0 1 5 0L12 7a7 7 0 0 0-10 0z" fill="#F9AB00" />
                  <path d="M9.5 14.5a3.5 3.5 0 0 1-5 0L2 17a7 7 0 0 0 10 0l-2.5-2.5z" fill="#E8710A" />
                </svg>
                Demo
              </a>
            )}
            {project.marketplaceUrl && (
              <a
                href={project.marketplaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkButtonClass}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
                GitHub Action
              </a>
            )}
          </div>

          {/* Hero image */}
          {project.heroImage ? (
            <div className="mb-12 overflow-hidden rounded-xl border border-neutral-800">
              <Image
                src={project.heroImage}
                alt={`${project.title} hero`}
                width={1200}
                height={630}
                className="w-full object-cover"
                priority
                unoptimized
              />
            </div>
          ) : (
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
                <p className="text-sm">Hero image pending</p>
              </div>
            </div>
          )}

          {/* TL;DR block */}
          {showTldr && (
            <div className="mb-12 rounded-xl border border-neutral-800 bg-neutral-900/60 p-6">
              {project.headlineMetric && (
                <p className="mb-2 text-2xl font-bold tracking-tight text-cyan-400 sm:text-3xl">
                  {project.headlineMetric}
                </p>
              )}
              {project.tldr && (
                <p className="text-lg leading-relaxed text-justify text-neutral-200">
                  {project.tldr}
                </p>
              )}
              {project.caveat && (
                <p className="mt-3 text-sm italic text-neutral-500">{project.caveat}</p>
              )}
            </div>
          )}

          {/* Content grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="space-y-10 lg:col-span-2">
              {situation && (
                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">Situation</h2>
                  <p className="text-base leading-relaxed text-justify text-neutral-400">
                    {situation}
                  </p>
                  {project.references && project.references.length > 0 && (
                    <ol className="mt-4 space-y-1.5 list-none">
                      {project.references.map((ref, i) => (
                        <li key={i} className="flex gap-2 text-sm leading-relaxed text-neutral-600">
                          <span className="shrink-0">[{i + 1}]</span>
                          {ref.url ? (
                            <a
                              href={ref.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline underline-offset-2 decoration-neutral-700 hover:text-neutral-400"
                            >
                              {ref.citation}
                            </a>
                          ) : (
                            <span>{ref.citation}</span>
                          )}
                        </li>
                      ))}
                    </ol>
                  )}
                </section>
              )}

              {task && (
                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">Task</h2>
                  <p className="text-base leading-relaxed text-justify text-neutral-400">{task}</p>
                </section>
              )}

              {(action || hasDeliverables) && (
                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">Action</h2>
                  {action &&
                    (Array.isArray(action) ? (
                      <ul className="space-y-3">
                        {action.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-base leading-relaxed text-justify text-neutral-400"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                            <span>{renderWithMath(point)}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-base leading-relaxed text-justify text-neutral-400">
                        {action}
                      </p>
                    ))}
                  {hasDeliverables && (
                    <ul className="mt-4 space-y-2">
                      {project.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-neutral-400">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              )}

              {/* How it works — directly after the Action beat */}
              {project.diagram && (
                <section>
                  <h2 className="mb-4 text-xl font-semibold text-white">How it works</h2>
                  <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60">
                    <DiagramZoom
                      src={project.diagram}
                      alt={`${project.title} architecture diagram`}
                    />
                  </div>
                  {project.diagramCaption && (
                    <p className="mt-3 text-sm text-neutral-500">{project.diagramCaption}</p>
                  )}
                </section>
              )}

              {result && (
                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">Result</h2>
                  <p className="text-base leading-relaxed text-justify text-neutral-400">
                    {result}
                  </p>
                  {project.resultGallery && project.resultGallery.length > 0 && (
                    <div className="mt-6 space-y-4">
                      {project.resultGallery.map((shot) => (
                        <figure key={shot.src}>
                          <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60">
                            {/* eslint-disable-next-line @next/next/no-img-element -- inline SVG chart */}
                            <img src={shot.src} alt={shot.alt} className="h-auto w-full" />
                          </div>
                          {shot.caption && (
                            <figcaption className="mt-2 text-sm text-neutral-500">
                              {shot.caption}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                  )}
                </section>
              )}

              {learning && (
                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">Learning</h2>
                  <p className="text-base leading-relaxed text-justify text-neutral-400">
                    {learning}
                  </p>
                </section>
              )}

              {project.businessValue.length > 0 && (
                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">Why it matters</h2>
                  <ul className="space-y-2">
                    {project.businessValue.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-neutral-400">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Gallery — stacked full-width figures, each at its intrinsic aspect */}
              {project.gallery && project.gallery.length > 0 && (
                <section className="space-y-8">
                  {project.gallery.map((shot) => (
                    <figure key={shot.src}>
                      <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
                        {/* eslint-disable-next-line @next/next/no-img-element -- inline SVG diagram, render at its intrinsic aspect ratio */}
                        <img src={shot.src} alt={shot.alt} className="h-auto w-full" />
                      </div>
                      {shot.caption && (
                        <figcaption className="mt-2 text-sm text-neutral-500">
                          {shot.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </section>
              )}

              {/* CLI snippet */}
              {project.cliSnippet && (
                <section>
                  <pre className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900 p-4 text-sm text-neutral-300">
                    <code>{project.cliSnippet}</code>
                  </pre>
                </section>
              )}

              {/* Limitations disclaimer */}
              {project.limitations && (
                <section>
                  <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5">
                    <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-400/90">
                      Limitations
                    </h2>
                    <p className="text-sm leading-relaxed text-neutral-400">
                      {project.limitations}
                    </p>
                  </div>
                </section>
              )}

              {/* Artifact note */}
              {project.artifactNote && (
                <p className="text-xs italic text-neutral-600">{project.artifactNote}</p>
              )}
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

              {project.servicesSupported && project.servicesSupported.length > 0 && (
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
              )}

              {project.status && (
                <section>
                  <h2 className="mb-1.5 text-sm font-semibold uppercase tracking-wider text-neutral-500">
                    Status
                  </h2>
                  <p className="text-sm text-neutral-300">{statusLabels[project.status]}</p>
                </section>
              )}

              {project.metrics && project.metrics.length > 0 && (
                <section>
                  <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500">
                    Metrics
                  </h2>
                  <dl className="space-y-3">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <dt className="text-xs text-neutral-500">{m.label}</dt>
                        <dd className="text-base font-semibold text-white">{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              )}
            </div>
          </div>

          {/* Prev / next nav */}
          <nav
            aria-label="Project navigation"
            className="mt-16 flex items-center justify-between gap-4 border-t border-neutral-800 pt-8"
          >
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="group flex max-w-[45%] flex-col text-sm text-neutral-500 transition-colors hover:text-white"
              >
                <span className="text-xs uppercase tracking-wider text-neutral-600">Previous</span>
                <span className="mt-1 font-medium text-neutral-300 group-hover:text-white">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}

            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group flex max-w-[45%] flex-col text-right text-sm text-neutral-500 transition-colors hover:text-white"
              >
                <span className="text-xs uppercase tracking-wider text-neutral-600">Next</span>
                <span className="mt-1 font-medium text-neutral-300 group-hover:text-white">
                  {next.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </article>

      <Footer />
    </main>
  )
}
