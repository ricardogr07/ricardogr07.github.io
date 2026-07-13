import { GitBranch, Package, BookMarked, PenLine, type LucideIcon } from 'lucide-react'
import { stats, type StatIcon } from '@/content/stats'

const icons: Record<StatIcon, LucideIcon> = {
  repos: GitBranch,
  pypi: Package,
  publications: BookMarked,
  medium: PenLine,
}

export default function ProofStrip() {
  return (
    <section
      className="border-t border-neutral-800 bg-neutral-950 px-6 py-12 lg:px-8"
      aria-label="Proof strip"
    >
      <div className="mx-auto max-w-7xl">
        <ul className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          {stats.map(({ icon, label, value, href, external }) => {
            const Icon = icons[icon]
            return (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-3 text-neutral-500 transition-colors hover:text-white"
                >
                  <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span className="text-sm">
                    <span className="font-semibold text-white">{value}</span> {label}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
