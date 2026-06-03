import {
  Zap,
  Globe,
  Database,
  BarChart3,
  Code2,
  Brain,
  Film,
  FlaskConical,
  type LucideIcon,
} from 'lucide-react'
import type { ServiceCard } from '@/lib/types'

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Globe,
  Database,
  BarChart3,
  Code2,
  Brain,
  Film,
  FlaskConical,
}

interface ServiceCardProps {
  service: ServiceCard
}

export default function ServiceCardComponent({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Zap

  return (
    <article className="group flex flex-col gap-4 rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-all hover:border-cyan-400/40 hover:bg-neutral-800/60">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400 transition-colors group-hover:bg-cyan-400/20">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-white">{service.label}</h3>
      <p className="text-sm leading-relaxed text-neutral-400">{service.description}</p>
    </article>
  )
}
