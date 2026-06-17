import Link from 'next/link'
import { FolderOpen, FileText, Briefcase, BookOpen, FlaskConical, User } from 'lucide-react'

type Persona = {
  icon: React.ElementType
  label: string
  subtitle: string
  href: string
}

const personas: Persona[] = [
  {
    icon: FolderOpen,
    label: 'Shipped projects',
    subtitle: 'Case studies & live demos',
    href: '/projects',
  },
  { icon: FileText, label: 'Full CV', subtitle: 'Experience, skills & education', href: '/cv' },
  { icon: Briefcase, label: 'Services', subtitle: 'Freelance & consulting', href: '/freelance' },
  { icon: BookOpen, label: 'Teaching', subtitle: 'Courses & curricula', href: '/teaching' },
  { icon: FlaskConical, label: 'Research', subtitle: 'Publications & Thesis', href: '/research' },
  { icon: User, label: 'About Me', subtitle: 'Background, writing & more', href: '/about' },
]

export default function PersonaRouter() {
  return (
    <section className="bg-neutral-950 px-6 py-12 lg:px-8 lg:py-16" aria-label="Site navigation">
      <div className="mx-auto max-w-7xl">
        <p className="mx-auto mb-8 max-w-2xl text-center text-base leading-relaxed text-neutral-400">
          I build ML systems, data pipelines, and Python tools that run in production. Day job
          developing features in financial risk software, open-source projects on the weekends, and
          freelancing for clients. Here&apos;s where to go depending on what brought you here.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map(({ icon: Icon, label, subtitle, href }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-900 p-6 text-center transition-colors hover:border-neutral-700 hover:bg-neutral-800/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 transition-colors group-hover:bg-cyan-400/20">
                <Icon className="h-5 w-5 text-cyan-400" aria-hidden="true" />
              </div>
              <div>
                <p className="text-base font-semibold text-white">{label}</p>
                <p className="mt-1 text-sm text-neutral-400">{subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
