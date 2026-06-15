import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { GraduationCap, PenLine, BookOpen, FlaskConical } from 'lucide-react'
import Footer from '@/components/footer'
import { experienceCondensed } from '@/content/experience'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Ricardo García Ramírez — full-stack engineer and data scientist building AI/ML systems that run in production on the cloud. M.Sc. Data Science, peer-reviewed research, former professor.',
  openGraph: {
    images: [
      {
        url: 'https://ricardogr07.github.io/og/about.png',
        width: 1200,
        height: 630,
        alt: 'About — Ricardo García Ramírez',
      },
    ],
  },
  twitter: {
    images: ['https://ricardogr07.github.io/og/about.png'],
  },
}

type SocialLink = {
  label: string
  handle: string
  href: string
  hoverColor: string
  icon: 'github' | 'linkedin' | 'medium' | 'scholar'
}

const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    handle: 'ricardogr07',
    href: 'https://github.com/ricardogr07',
    hoverColor: 'group-hover:text-white',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    handle: 'ricardogarciaramirez',
    href: 'https://www.linkedin.com/in/ricardogarciaramirez/',
    hoverColor: 'group-hover:text-[#0A66C2]',
    icon: 'linkedin',
  },
  {
    label: 'Medium',
    handle: '@ricardogr07',
    href: 'https://medium.com/@ricardogr07',
    hoverColor: 'group-hover:text-white',
    icon: 'medium',
  },
  {
    label: 'Google Scholar',
    handle: 'Garcia-Ramirez',
    href: 'https://scholar.google.com/citations?user=l71XTncAAAAJ&hl=es&oi=ao',
    hoverColor: 'group-hover:text-[#4285F4]',
    icon: 'scholar',
  },
]

function SocialIcon({ icon }: { icon: SocialLink['icon'] }) {
  if (icon === 'github') {
    return (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    )
  }
  if (icon === 'linkedin') {
    return (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  }
  if (icon === 'medium') {
    return <PenLine className="h-6 w-6" aria-hidden="true" />
  }
  return <GraduationCap className="h-6 w-6" aria-hidden="true" />
}

const skillGroups = [
  {
    category: 'Python & Data Engineering',
    skills: ['Python', 'pandas', 'NumPy', 'DuckDB', 'SQLite', 'Parquet', 'ETL', 'CLI tooling'],
  },
  {
    category: 'ML & Data Science',
    skills: [
      'scikit-learn',
      'JAX',
      'PyTorch',
      'Bayesian inference',
      'Gaussian Processes',
      'Bayesian Optimization',
      'Time series',
      'Feature engineering',
    ],
  },
  {
    category: 'AI / LLM & RAG',
    skills: [
      'RAG pipelines',
      'Qdrant',
      'OpenAI',
      'Anthropic',
      'Ollama',
      'Embeddings',
      'faster-whisper',
      'Vector search',
    ],
  },
  {
    category: 'Scientific Computing',
    skills: ['PyVista', 'VTK', 'GMSH', 'COMSOL', 'Simulation', 'Computational modeling'],
  },
  {
    category: 'Backend & APIs',
    skills: ['FastAPI', 'C#', 'ASP.NET Core', 'Azure Functions', 'Rust (PyO3)', 'REST APIs'],
  },
  {
    category: 'DevOps & Tooling',
    skills: ['Docker', 'GitHub Actions', 'Azure DevOps', 'PyPI', 'Splunk', 'Power BI'],
  },
]

const mediumArticles = [
  {
    title: 'Your utils.py Is a Symptom, Not a Solution',
    url: 'https://medium.com/python-in-plain-english/your-utils-py-is-a-symptom-not-a-solution-bb6101c0d31b',
  },
  {
    title: 'Stop Testing Components. Start Testing Outputs.',
    url: 'https://medium.com/write-a-catalyst/stop-testing-components-start-testing-outputs-9120d8728455',
  },
  {
    title: 'What Clean Code Gets Wrong About Data Science',
    url: 'https://medium.com/write-a-catalyst/what-clean-code-gets-wrong-about-data-science-8ec35a1f8711',
  },
  {
    title: 'YAGNI: Your Best Defense Against Scope Creep',
    url: 'https://medium.com/dev-genius/yagni-your-best-defense-against-scope-creep-3efe0e36a8b7',
  },
]

export default function AboutPage() {
  return (
    <main>
      <section className="bg-neutral-950 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          {/* Profile header */}
          <div className="mb-12 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
            <Image
              src="/images/profile.png"
              alt="Ricardo García Ramírez"
              width={112}
              height={112}
              className="h-28 w-28 rounded-full border-2 border-cyan-400/30 object-cover"
              priority
            />
            <div>
              <h1 className="mb-1 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Ricardo García Ramírez
              </h1>
              <p className="mb-2 text-lg text-neutral-400">
                Full-Stack Engineer · Data Scientist · AI/ML · Cloud
              </p>
            </div>
          </div>

          {/* Social link cards */}
          <div className="mb-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 p-4 text-center transition-all hover:border-neutral-700 hover:bg-neutral-800/60"
              >
                <span className={`text-neutral-500 transition-colors ${link.hoverColor}`}>
                  <SocialIcon icon={link.icon} />
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{link.label}</p>
                  <p className="text-xs text-neutral-600">{link.handle}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Bio — four-pillar tone (draft, flagged for Ricardo's review) */}
          <section className="mb-16" aria-labelledby="bio-heading">
            <h2 id="bio-heading" className="mb-6 text-2xl font-bold text-white">
              About
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-neutral-400">
              <p>
                I&apos;m a full-stack engineer and data scientist who builds AI/ML systems that run
                in production on the cloud. Day to day that spans four things — machine learning,
                data engineering, cloud, and full-stack delivery. I&apos;m currently a Senior
                Developer at MSCI, building backend services, analytics tooling, and data workflows
                for large-scale financial data systems, and I hold an M.Sc. in Data Science from
                Pontificia Universidad Católica de Chile (Distinction), with a thesis on
                probabilistic reconstruction of cardiac conduction networks from ECG signals using
                Bayesian inference.
              </p>
              <p>
                My depth sits where data engineering, machine learning, and practical software
                delivery meet. I&apos;ve built reproducible ML pipelines in JAX and scikit-learn for
                real research problems, ETL workflows that take raw files all the way to queryable
                analytics assets, and RAG systems from the vector-chunking layer (Rust/PyO3) through
                retrieval and LLM orchestration. The Bayesian thesis work wasn&apos;t an academic
                detour — it&apos;s why I think carefully about uncertainty, reproducibility, and
                proving a system is correct rather than assuming it.
              </p>
              <p>
                My freelance work focuses on Python tools with clear scope and a real handoff:
                automation pipelines, data-extraction workflows, RAG/LLM applications, dashboards,
                and scientific Python packages. Underneath the engineering is a research-and-teaching
                layer — peer-reviewed publications in biosensing and BioMEMS, bioinstrumentation
                courses taught at Tec de Monterrey, and regular writing on software engineering —
                which is why I default to documented, tested, reproducible code over notebooks.
              </p>
            </div>
          </section>

          {/* Experience (condensed — full version on the CV) */}
          <section className="mb-16" aria-labelledby="experience-heading">
            <div className="mb-8 flex items-baseline justify-between gap-4">
              <h2 id="experience-heading" className="text-2xl font-bold text-white">
                Experience
              </h2>
              <Link
                href="/cv"
                className="shrink-0 text-sm font-medium text-neutral-400 transition-colors hover:text-cyan-400"
              >
                Full CV →
              </Link>
            </div>
            <div className="space-y-6">
              {experienceCondensed.map((entry) => (
                <div key={`${entry.company}-${entry.role}`}>
                  <div className="mb-1 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <span className="font-semibold text-white">{entry.role}</span>
                      <span className="ml-2 text-sm text-neutral-500">{entry.company}</span>
                    </div>
                    <span className="shrink-0 text-sm text-neutral-600">{entry.period}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-400">{entry.summary}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-16" aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="mb-8 text-2xl font-bold text-white">
              Skills &amp; Tools
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-neutral-700 bg-neutral-900 px-2.5 py-1 text-xs text-neutral-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Teaching & Research hub */}
          <section className="mb-16" aria-labelledby="more-heading">
            <h2 id="more-heading" className="mb-8 text-2xl font-bold text-white">
              Teaching &amp; Research
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Link
                href="/teaching"
                className="group flex items-start gap-4 rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-colors hover:border-neutral-700 hover:bg-neutral-800/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 transition-colors group-hover:bg-cyan-400/20">
                  <BookOpen className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-white">Teaching →</p>
                  <p className="mt-1 text-sm text-neutral-400">
                    Adjunct Professor of bioinstrumentation at Tec de Monterrey — courses &amp;
                    curricula.
                  </p>
                </div>
              </Link>
              <Link
                href="/research"
                className="group flex items-start gap-4 rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-colors hover:border-neutral-700 hover:bg-neutral-800/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 transition-colors group-hover:bg-cyan-400/20">
                  <FlaskConical className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-white">Research →</p>
                  <p className="mt-1 text-sm text-neutral-400">
                    M.Sc. thesis, peer-reviewed publications, a Springer book, and research
                    positions.
                  </p>
                </div>
              </Link>
            </div>
          </section>

          {/* Writing */}
          <section aria-labelledby="writing-heading">
            <h2 id="writing-heading" className="mb-8 text-2xl font-bold text-white">
              Writing
            </h2>
            <p className="mb-6 text-sm text-neutral-500">
              Software engineering and Python on Medium — design principles, testing, data science
              workflow.
            </p>
            <div className="space-y-3">
              {mediumArticles.map((article) => (
                <a
                  key={article.url}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  <span className="text-neutral-700">→</span>
                  {article.title}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="https://medium.com/@ricardogr07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-400 transition-colors hover:text-cyan-400"
              >
                View all articles on Medium →
              </a>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  )
}
