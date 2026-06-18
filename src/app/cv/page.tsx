import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import Footer from '@/components/footer'
import { experience } from '@/content/experience'

export const metadata: Metadata = {
  title: 'CV',
  description:
    'Ricardo García Ramírez: full-stack developer and data scientist. CV with experience at MSCI, Rackspace, and Delee Corp. M.Sc. in Data Science, publications in biosensing and BioMEMS.',
  openGraph: {
    images: [
      {
        url: 'https://ricardogr07.github.io/og/cv.png',
        width: 1200,
        height: 630,
        alt: 'CV, Ricardo García Ramírez',
      },
    ],
  },
  twitter: {
    images: ['https://ricardogr07.github.io/og/cv.png'],
  },
}

const education = [
  {
    degree: 'M.Sc. in Data Science',
    institution: 'Pontificia Universidad Católica de Chile',
    location: 'Santiago, Chile',
    notes: 'Graduated with Distinction.',
  },
  {
    degree: 'B.Sc. in Biomedical Engineering',
    institution: 'Tecnológico de Monterrey (ITESM)',
    location: 'Monterrey, Mexico',
    notes: 'Minor in Biomedical Microtechnology. Academic Excellence Award, Top 5% GPA.',
  },
]

const teaching = [
  {
    role: 'Adjunct Assistant Professor, Biomedical Engineering Dept.',
    institution: 'Tecnológico de Monterrey (ITESM)',
    dates: 'Aug 2022 – Dec 2023',
    notes: 'Bioinstrumentation courses (TEC20/TEC21): BI2001B, BI2005B, BI3010, BI3011, BI3014.',
  },
]

const publications = [
  {
    ref: '[1]',
    text: 'Beduk, T., Gomes, M., et al., Garcia-Ramirez, R., et al. (2022). A Portable Molecularly Imprinted Sensor for On-Site and Wireless Environmental Bisphenol A Monitoring.',
    venue: 'Frontiers in Chemistry, 10, 833899.',
    doi: 'https://doi.org/10.3389/fchem.2022.833899',
  },
  {
    ref: '[2]',
    text: 'Garcia-Ramirez, R., Cerda-Kipper, A. S., Alvarez, D., et al. (2021). Latest Updates on the Advancement of Polymer-Based Biomicroelectromechanical Systems for Animal Cell Studies.',
    venue: 'Advances in Polymer Technology, 2021, Article 8816564.',
    doi: 'https://doi.org/10.1155/2021/8816564',
  },
  {
    ref: '[3]',
    text: 'González-González, E., Garcia-Ramirez, R., et al. (2021). Automated ELISA On-Chip for the Detection of Anti-SARS-CoV-2 Antibodies.',
    venue: 'Sensors, 21(20), 6785.',
    doi: 'https://doi.org/10.3390/s21206785',
  },
  {
    ref: '[4]',
    text: 'Garcia-Ramirez, R., & Hosseini, S. (2021). History of Bio-microelectromechanical Systems (BioMEMS).',
    venue: 'In: BioMEMS. Lecture Notes in Bioengineering. Springer, Singapore.',
    doi: 'https://doi.org/10.1007/978-981-15-6382-9_1',
  },
  {
    ref: '[5]',
    text: 'Hosseini, S., Espinosa-Hernandez, M., Garcia-Ramirez, R., et al. (2020). BioMEMS: Biosensing Applications.',
    venue: 'Springer Nature (1st ed., 178 pp.).',
    doi: null,
  },
]

const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'C#', 'Java', 'TypeScript', 'SQL', 'Bash', 'C'],
  },
  {
    category: 'Backend / Cloud',
    items: ['FastAPI', 'ASP.NET Core', 'Azure Functions', 'Docker', 'CI/CD'],
  },
  {
    category: 'Data',
    items: ['pandas', 'DuckDB', 'SQLite', 'Parquet', 'ETL', 'Splunk', 'Power BI'],
  },
  {
    category: 'AI / ML',
    items: ['RAG', 'Qdrant', 'OpenAI', 'Anthropic', 'FastMCP', 'scikit-learn', 'JAX'],
  },
  { category: 'Scientific', items: ['NumPy', 'PyVista', 'Bayesian Optimization'] },
  { category: 'Tooling', items: ['GitHub Actions', 'Azure DevOps', 'PyPI', 'Next.js'] },
]

export default function CVPage() {
  return (
    <main>
      <div className="bg-neutral-950 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Header + PDF download */}
          <div className="mb-10 flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Ricardo García Ramírez</h1>
              <p className="text-neutral-400">AI/ML · Data Science · Cloud · Full-Stack</p>
            </div>
            <a
              href="/resume/RicardoGarcia_CV.pdf"
              download
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-300 transition-all hover:border-cyan-400/50 hover:text-cyan-400"
              aria-label="Download CV as PDF"
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download PDF
            </a>
          </div>

          {/* Contact */}
          <div className="mb-10 flex flex-wrap gap-x-5 gap-y-2 border-b border-neutral-800 pb-8 text-sm text-neutral-400">
            <a
              href="mailto:rgr.5882@gmail.com"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              rgr.5882@gmail.com
            </a>
            <a
              href="https://github.com/ricardogr07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              ricardogr07
            </a>
            <a
              href="https://www.linkedin.com/in/ricardogarciaramirez/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              ricardogarciaramirez
            </a>
          </div>

          {/* Summary */}
          <section className="mb-10">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Summary
            </h2>
            <p className="text-base leading-relaxed text-neutral-300">
              Full-stack developer and data scientist with 7+ years of experience at the intersection
              of backend systems, cloud infrastructure, and applied AI/ML. I build production
              systems: backend services and APIs in Python and C#/.NET, data pipelines from raw
              files to queryable analytics assets, and RAG systems from the vector-chunking layer
              through LLM orchestration. M.Sc. in Data Science with thesis work in Bayesian
              inference and computational modeling.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((entry, i) => (
                <div key={i}>
                  <div className="mb-1 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <span className="font-semibold text-white">{entry.role}</span>
                      <span className="ml-2 text-sm text-neutral-500">{entry.company}</span>
                    </div>
                    <span className="text-sm text-neutral-600">{entry.period}</span>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {entry.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-neutral-400">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-10">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Education
            </h2>
            <div className="space-y-5">
              {education.map((entry, i) => (
                <div key={i}>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <span className="font-semibold text-white">{entry.degree}</span>
                      <span className="ml-2 text-sm text-neutral-500">{entry.institution}</span>
                    </div>
                    <span className="text-sm text-neutral-600">{entry.location}</span>
                  </div>
                  <p className="mt-1 text-sm text-neutral-400">{entry.notes}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Teaching */}
          <section className="mb-10">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Teaching
            </h2>
            <div className="space-y-4">
              {teaching.map((entry, i) => (
                <div key={i}>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <span className="font-semibold text-white">{entry.role}</span>
                      <span className="ml-2 text-sm text-neutral-500">{entry.institution}</span>
                    </div>
                    <span className="text-sm text-neutral-600">{entry.dates}</span>
                  </div>
                  <p className="mt-1 text-sm text-neutral-400">{entry.notes}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-10">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Skills
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {skills.map((group) => (
                <div key={group.category}>
                  <p className="mb-1.5 text-xs text-neutral-500">{group.category}</p>
                  <p className="text-sm text-neutral-300">{group.items.join(', ')}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="mb-10">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Languages
            </h2>
            <p className="text-sm text-neutral-300">
              Spanish (Native) · English (Full Professional: TOEFL iBT 109 / ITP 653)
            </p>
          </section>

          {/* Publications */}
          <section className="mb-10">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Publications
            </h2>
            <div className="space-y-4">
              {publications.map((pub) => (
                <div key={pub.ref} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-xs font-bold text-cyan-400">{pub.ref}</span>
                  <p className="text-sm leading-relaxed text-neutral-400">
                    {pub.text} <span className="italic">{pub.venue}</span>
                    {pub.doi && (
                      <>
                        {' '}
                        <a
                          href={pub.doi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-600 transition-colors hover:text-cyan-400"
                        >
                          DOI ↗
                        </a>
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
