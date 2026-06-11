import { GitBranch, Package, BookMarked, PenLine } from 'lucide-react'

const stats = [
  {
    icon: GitBranch,
    label: 'GitHub repos',
    value: '31',
    href: 'https://github.com/ricardogr07',
    external: true,
  },
  {
    icon: Package,
    label: 'PyPI packages',
    value: '7',
    href: 'https://pypi.org/user/ricardogr07',
    external: true,
  },
  {
    icon: BookMarked,
    label: 'Publications',
    value: '5',
    href: '/about#publications',
    external: false,
  },
  {
    icon: PenLine,
    label: 'Medium writing',
    value: '127',
    href: 'https://medium.com/@ricardogr07',
    external: true,
  },
]

export default function ProofStrip() {
  return (
    <section
      className="border-t border-neutral-800 bg-neutral-950 px-6 py-12 lg:px-8"
      aria-label="Proof strip"
    >
      <div className="mx-auto max-w-7xl">
        <ul className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          {stats.map(({ icon: Icon, label, value, href, external }) => (
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
          ))}
        </ul>
      </div>
    </section>
  )
}
