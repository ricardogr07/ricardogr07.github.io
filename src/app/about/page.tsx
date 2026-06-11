import type { Metadata } from 'next'
import Image from 'next/image'
import { GraduationCap, PenLine } from 'lucide-react'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Ricardo García Ramírez — Senior Software Engineer focused on Python, Data Science, and AI/ML systems. M.Sc. Data Science, 5 publications, former professor.',
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
    handle: '@rgr5882',
    href: 'https://medium.com/@rgr5882',
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

const timeline = [
  {
    role: 'Aggregation Services Senior Developer',
    context: 'MSCI',
    dates: 'Sep 2023 – Present',
    bullets: [
      'Build and maintain backend services, APIs, analytics tooling, dashboards, and data workflows for large-scale financial data systems.',
      'Design telemetry and monitoring solutions using Splunk, Azure DevOps data, and database-backed reporting.',
      'Develop automation and agent-assisted workflows for operational analytics, documentation, and engineering productivity.',
      'Contributed to enterprise initiatives with approximately USD 1M in business impact.',
    ],
  },
  {
    role: 'Software Developer II',
    context: 'Rackspace Technology',
    dates: 'Aug 2022 – Sep 2023',
    bullets: [
      'Developed APIs, enterprise services, and serverless applications using C#, .NET, and Azure Functions.',
      'Implemented automated tests, Jenkins CI/CD workflows, monitoring, telemetry tooling, and production troubleshooting.',
    ],
  },
  {
    role: '.NET Middle Software Engineer',
    context: 'Parallel Staff / Softeq',
    dates: 'Jan 2022 – Aug 2022',
    bullets: [
      'Built backend services and desktop automation tooling using C# and .NET.',
      'Developed automated test scenarios, validation workflows, and technical documentation.',
    ],
  },
  {
    role: 'Hardware and Software Development Specialist',
    context: 'Delee Corp',
    dates: 'Feb 2020 – Dec 2021',
    bullets: [
      'Built C#/.NET backend services and WPF/XAML desktop tools for laboratory automation and biomedical workflows.',
      'Designed reusable software components for data acquisition, device control, and automated testing.',
    ],
  },
]

const publications = [
  {
    authors: 'Beduk, T., Gomes, M., et al., Garcia-Ramirez, R., et al.',
    year: '2022',
    title:
      'A Portable Molecularly Imprinted Sensor for On-Site and Wireless Environmental Bisphenol A Monitoring',
    venue: 'Frontiers in Chemistry, 10, 833899',
    doi: 'https://doi.org/10.3389/fchem.2022.833899',
  },
  {
    authors: 'Garcia-Ramirez, R., Cerda-Kipper, A. S., Alvarez, D., et al.',
    year: '2021',
    title:
      'Latest Updates on the Advancement of Polymer-Based Biomicroelectromechanical Systems for Animal Cell Studies',
    venue: 'Advances in Polymer Technology, 2021, Article 8816564',
    doi: 'https://doi.org/10.1155/2021/8816564',
  },
  {
    authors: 'González-González, E., Garcia-Ramirez, R., et al.',
    year: '2021',
    title: 'Automated ELISA On-Chip for the Detection of Anti-SARS-CoV-2 Antibodies',
    venue: 'Sensors, 21(20), 6785',
    doi: 'https://doi.org/10.3390/s21206785',
  },
  {
    authors: 'Garcia-Ramirez, R., & Hosseini, S.',
    year: '2021',
    title: 'History of Bio-microelectromechanical Systems (BioMEMS)',
    venue: 'In: BioMEMS. Lecture Notes in Bioengineering. Springer, Singapore',
    doi: 'https://doi.org/10.1007/978-981-15-6382-9_1',
  },
  {
    authors: 'Hosseini, S., Espinosa-Hernandez, M., Garcia-Ramirez, R., et al.',
    year: '2020',
    title: 'BioMEMS: Biosensing Applications',
    venue: 'Springer Nature (Book, p. 178)',
    doi: null,
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
  {
    title: "DRY: The Principle You're Probably Applying Wrong",
    url: 'https://medium.com/dev-genius/dry-the-principle-youre-probably-applying-wrong-a33ff11b41c8',
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
                Senior Software Engineer · Python · Data Science · AI/ML
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

          {/* Bio */}
          <section className="mb-16" aria-labelledby="bio-heading">
            <h2 id="bio-heading" className="mb-6 text-2xl font-bold text-white">
              About
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-neutral-400">
              <p>
                I&apos;m a Senior Software Engineer with 7+ years of experience building data
                systems, ML pipelines, automation tooling, and backend services across enterprise
                and scientific environments. M.Sc. in Data Science from Pontificia Universidad
                Católica de Chile (Distinction) — thesis on probabilistic reconstruction of cardiac
                networks from ECG signals using Bayesian inference and computational modeling.
                Biomedical Engineering background from Tec de Monterrey. Currently at MSCI designing
                analytics and monitoring tools for large-scale financial data systems.
              </p>
              <p>
                My technical depth sits at the intersection of data engineering, machine learning,
                and practical software delivery. I&apos;ve built reproducible ML pipelines using JAX
                and scikit-learn for real research problems, designed ETL workflows that go from raw
                file formats to queryable analytics assets, and implemented RAG systems from the
                vector chunking layer (Rust/PyO3) all the way through to retrieval and LLM
                orchestration. I take Bayesian approaches seriously — the thesis work on Gaussian
                processes and probabilistic inference wasn&apos;t academic detour, it informs how I
                think about uncertainty in ML systems today.
              </p>
              <p>
                My freelance work focuses on Python tools with clear scope and real handoff:
                automation pipelines, data extraction workflows, RAG/LLM applications, dashboards,
                and scientific Python packages. If you have defined inputs, expected outputs, and a
                deadline — I can work with that.
              </p>
              <p>
                I taught bioinstrumentation at Tec de Monterrey, have 5 peer-reviewed publications
                in biosensing and BioMEMS, and write about software engineering and Python on
                Medium. The research background isn&apos;t decoration — it&apos;s why the scientific
                Python work (PurkinjeUV, JAX-BO) exists, and why I default to reproducible,
                documented, tested code over notebooks.
              </p>
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

          {/* Teaching */}
          <section className="mb-16" aria-labelledby="teaching-heading">
            <h2 id="teaching-heading" className="mb-8 text-2xl font-bold text-white">
              Teaching
            </h2>
            <div className="space-y-6">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
                <div className="mb-2 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold text-white">
                    Adjunct Assistant Professor — Biomedical Engineering Dept.
                  </h3>
                  <span className="shrink-0 text-sm text-neutral-600">Aug 2022 – Dec 2023</span>
                </div>
                <p className="mb-3 text-sm text-neutral-500">
                  Tecnológico de Monterrey (ITESM), Mexico
                </p>
                <p className="mb-3 text-sm text-neutral-400">
                  Taught lectures and lab components for the Biomedical Engineering Major with
                  emphasis on bioinstrumentation (Tec20 and TEC21 curricula).
                </p>
                <div className="flex flex-wrap gap-2">
                  {['BI2001B', 'BI2005B', 'BI3010', 'BI3011', 'BI3014'].map((code) => (
                    <span
                      key={code}
                      className="rounded-md border border-neutral-700 bg-neutral-800 px-2 py-0.5 text-xs text-neutral-400"
                    >
                      {code}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
                <div className="mb-2 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold text-white">Physics Laboratory Instructor</h3>
                  <span className="shrink-0 text-sm text-neutral-600">Aug 2018 – Dec 2019</span>
                </div>
                <p className="text-sm text-neutral-500">
                  Tecnológico de Monterrey (ITESM) — Physics Department, Mexico
                </p>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section className="mb-16" aria-labelledby="publications-heading">
            <h2 id="publications-heading" className="mb-8 text-2xl font-bold text-white">
              Publications
            </h2>
            <div className="space-y-5">
              {publications.map((pub, i) => (
                <div key={i} className="flex gap-4">
                  <span className="mt-0.5 shrink-0 text-sm font-bold text-cyan-400">[{i + 1}]</span>
                  <div>
                    <p className="text-sm leading-relaxed text-neutral-300">
                      {pub.authors} ({pub.year}).{' '}
                      {pub.doi ? (
                        <a
                          href={pub.doi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-white transition-colors hover:text-cyan-400"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        <span className="font-medium text-white">{pub.title}</span>
                      )}
                      . <span className="italic text-neutral-500">{pub.venue}.</span>
                      {pub.doi && (
                        <>
                          {' '}
                          <a
                            href={pub.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-neutral-600 transition-colors hover:text-cyan-400"
                          >
                            DOI ↗
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="https://scholar.google.com/citations?user=l71XTncAAAAJ&hl=es&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-400 transition-colors hover:text-cyan-400"
              >
                View all on Google Scholar →
              </a>
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
                href="https://medium.com/@rgr5882"
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
