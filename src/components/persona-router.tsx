import Link from 'next/link'
import { FolderOpen, FileText, Briefcase, BookOpen, FlaskConical, User } from 'lucide-react'

const personas = [
  {
    icon: FolderOpen,
    label: 'Projects',
    audience: 'For hiring managers',
    href: '/projects',
  },
  {
    icon: FileText,
    label: 'CV / hire',
    audience: 'For recruiters',
    href: '/cv',
  },
  {
    icon: Briefcase,
    label: 'Freelance',
    audience: 'For clients',
    href: '/freelance',
  },
  {
    icon: BookOpen,
    label: 'Teaching',
    audience: 'Courses & curricula',
    href: '/about#teaching',
  },
  {
    icon: FlaskConical,
    label: 'Research',
    audience: 'Publications & thesis',
    href: '/about#research',
  },
  {
    icon: User,
    label: 'About / writing',
    audience: 'For peers',
    href: '/about',
  },
]

export default function PersonaRouter() {
  return (
    <section
      className="bg-neutral-950 px-6 py-20 lg:px-8 lg:py-28"
      aria-labelledby="persona-router-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2
            id="persona-router-heading"
            className="mb-3 text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            Choose your path
          </h2>
          <p className="text-neutral-500">Find what you&apos;re looking for.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map(({ icon: Icon, label, audience, href }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-4 rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-colors hover:border-neutral-700 hover:bg-neutral-800/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 transition-colors group-hover:bg-cyan-400/20">
                <Icon className="h-5 w-5 text-cyan-400" aria-hidden="true" />
              </div>
              <div>
                <p className="text-base font-semibold text-white">{label}</p>
                <p className="mt-1 text-sm text-neutral-400">{audience}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
