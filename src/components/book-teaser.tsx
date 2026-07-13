import Image from 'next/image'
import Link from 'next/link'
import { BookMarked } from 'lucide-react'

export default function BookTeaser() {
  return (
    <section
      className="border-t border-neutral-800 bg-neutral-950 px-6 py-20 lg:px-8"
      aria-labelledby="book-teaser-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 text-center sm:flex-row sm:items-center sm:gap-10 sm:p-10 sm:text-left">
          <Image
            src="/images/book/cover.svg"
            alt="Production-Grade Data Science book cover"
            width={200}
            height={300}
            className="w-36 shrink-0 rounded-lg border border-neutral-800"
            unoptimized
          />
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400">
              <BookMarked className="h-3.5 w-3.5" aria-hidden="true" />
              Book in progress · coming December 2026
            </span>
            <h2
              id="book-teaser-heading"
              className="mb-2 text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              Production-Grade Data Science
            </h2>
            <p className="mb-5 text-base leading-relaxed text-neutral-400">
              You can train a model. The harder question: can you prove it works, ship it, and know
              the moment it breaks? An engineering handbook, organized as six standards.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/50 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-400 transition-all hover:border-cyan-400 hover:bg-cyan-400/20"
            >
              Read the introduction
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
      </div>
    </section>
  )
}
