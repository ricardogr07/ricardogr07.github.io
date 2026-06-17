import Image from 'next/image'
import type { PortfolioProject } from '@/lib/types'

interface ProjectCardProps {
  project: PortfolioProject
  featured?: boolean
  href?: string
}

export default function ProjectCard({ project, featured = false, href }: ProjectCardProps) {
  return (
    <article
      className="group flex flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 transition-all hover:border-neutral-700 hover:bg-neutral-800/60"
      data-testid="project-card"
    >
      {/* Thumbnail */}
      {project.heroImage && (
        <div className="aspect-video overflow-hidden border-b border-neutral-800">
          <Image
            src={project.heroImage}
            alt={`${project.title} thumbnail`}
            width={640}
            height={360}
            className="h-full w-full object-cover"
            unoptimized
          />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          {href ? (
            <a
              href={href}
              className="text-base font-semibold leading-snug text-white transition-colors group-hover:text-cyan-400"
            >
              {project.title}
            </a>
          ) : (
            <h3 className="text-base font-semibold leading-snug text-white transition-colors group-hover:text-cyan-400">
              {project.title}
            </h3>
          )}
          {featured && (
            <span className="shrink-0 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 text-xs font-medium text-cyan-400">
              Featured
            </span>
          )}
        </div>

        {/* Headline metric */}
        {project.headlineMetric && (
          <p className="text-sm font-semibold text-cyan-400">{project.headlineMetric}</p>
        )}

        {/* Summary */}
        <p className="flex-1 text-sm leading-relaxed text-neutral-400">{project.summary}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-neutral-700 bg-neutral-800 px-2 py-0.5 text-xs text-neutral-300"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="rounded-md border border-neutral-700 bg-neutral-800 px-2 py-0.5 text-xs text-neutral-500">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-1">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 transition-colors hover:text-cyan-400"
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg
                className="h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 transition-colors hover:text-cyan-400"
            >
              Live Demo
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
          {project.docsUrl && (
            <a
              href={project.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 transition-colors hover:text-cyan-400"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
              </svg>
              {project.docsLabel ?? 'Docs'}
            </a>
          )}
          {project.pypiUrl && (
            <a
              href={project.pypiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 transition-colors hover:text-cyan-400"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C8.746 0 9 1.53 9 1.53V4.5h6V5.4H5.748C5.748 5.4 3 5.148 3 8.448c0 3.3 2.55 3.15 2.55 3.15H7.2V9.9s-.1-2.55 2.55-2.55h4.2s2.4.05 2.4-2.3V1.55S16.6 0 12 0zM8.85 1.5c.45 0 .75.3.75.75s-.3.75-.75.75-.75-.3-.75-.75.3-.75.75-.75zM12 24c3.254 0 3-1.53 3-1.53V19.5H9v-.9h9.252C18.252 18.6 21 18.852 21 15.552c0-3.3-2.55-3.15-2.55-3.15H16.8v1.698s.1 2.55-2.55 2.55H10.05s-2.4-.05-2.4 2.3v3.5S7.4 24 12 24zm3.15-1.5c-.45 0-.75-.3-.75-.75s.3-.75.75-.75.75.3.75.75-.3.75-.75.75z"/>
              </svg>
              PyPI
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
