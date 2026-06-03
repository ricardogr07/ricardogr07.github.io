import type { Metadata } from 'next'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'CV',
  description:
    'Ricardo García Ramírez — Senior Software Engineer. Resume with experience at MSCI, Rackspace, Python/data engineering, scientific computing, M.Sc. Data Science.',
}

const experience = [
  {
    role: 'Aggregation Services Senior Developer',
    company: 'MSCI',
    dates: 'Sep 2023 – Present',
    bullets: [
      'Build and maintain enterprise backend services, APIs, analytics tooling, operational scripts, dashboards, and data workflows supporting large-scale financial data systems.',
      'Develop Python-oriented automation and data workflows for operational analytics, reporting, validation, documentation, and engineering productivity.',
      'Design telemetry and monitoring solutions using Splunk, Azure DevOps data, database-backed reporting, and Power BI.',
      'Contribute to modernization and technical debt reduction, including Java refactoring and upgrade-readiness work while preserving behavior and release stability.',
      'Contributed to enterprise initiatives with approximately USD 1M in business impact.',
    ],
  },
  {
    role: 'Software Developer II',
    company: 'Rackspace Technology',
    dates: 'Aug 2022 – Sep 2023',
    bullets: [
      'Developed internal and customer-facing APIs, enterprise services, and serverless applications using C#, .NET, and Azure Functions.',
      'Translated functional requirements into conceptual designs, estimates, prototypes, and production-grade software.',
      'Implemented automated tests, Jenkins CI/CD workflows, monitoring, telemetry tooling, and production troubleshooting.',
    ],
  },
  {
    role: '.NET Middle Software Engineer',
    company: 'Parallel Staff / Softeq',
    dates: 'Jan 2022 – Aug 2022',
    bullets: [
      'Built backend services and desktop automation tooling using C#, .NET Core, and .NET Framework.',
      'Performed requirements analysis, authored test scenarios, wrote test scripts, and contributed to code reviews and documentation.',
    ],
  },
  {
    role: 'Hardware and Software Development Specialist',
    company: 'Delee Corp',
    dates: 'Feb 2020 – Dec 2021',
    bullets: [
      'Built C#/.NET backend services and WPF/XAML MVVM desktop tools for laboratory automation, device control, data acquisition, and automated biomedical testing workflows.',
      'Worked with cross-functional stakeholders to capture requirements, deliver reusable software, and support Agile delivery.',
    ],
  },
]

const education = [
  {
    degree: 'M.Sc. in Data Science',
    institution: 'Pontificia Universidad Católica de Chile',
    location: 'Santiago, Chile',
    notes:
      'Graduated with Distinction for outstanding academic performance and thesis excellence. Thesis: Probabilistic reconstruction of the Purkinje network from electrocardiogram signals using computational modeling and Bayesian inference.',
  },
  {
    degree: 'B.Sc. in Biomedical Engineering',
    institution: 'Tecnológico de Monterrey (ITESM)',
    location: 'Monterrey, Mexico',
    notes: 'Minor in Biomedical Microtechnology. Academic Excellence Award — Top 5% GPA.',
  },
]

const teaching = [
  {
    role: 'Adjunct Assistant Professor — Biomedical Engineering Dept.',
    institution: 'Tecnológico de Monterrey (ITESM)',
    dates: 'Aug 2022 – Dec 2023',
    notes: 'Bioinstrumentation courses (TEC20/TEC21): BI2001B, BI2005B, BI3010, BI3011, BI3014.',
  },
  {
    role: 'Physics Laboratory Instructor',
    institution: 'Tecnológico de Monterrey (ITESM)',
    dates: 'Aug 2018 – Dec 2019',
    notes: 'TA for undergraduate Physics lab courses.',
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
    venue: 'Springer Nature (1st ed., p. 178).',
    doi: null,
  },
]

const selectedProjects = [
  {
    title: 'LinkedIn Job Scraping & Data Export Pipeline',
    summary:
      'Python scraping pipeline with SQLite persistence, CLI, and optional OpenAI enrichment.',
    repo: 'https://github.com/ricardogr07/LinkedInWebScraper',
  },
  {
    title: 'Rust + Python RAG Chunking Pipeline',
    summary: 'Token-aware RAG pipeline using Rust/PyO3 for chunking, Qdrant for vector search.',
    repo: 'https://github.com/ricardogr07/rusty-rag-chunker',
  },
  {
    title: 'Clipsmith: AI-Assisted Media Pipeline',
    summary:
      'Local media automation: VOD ingestion, Spanish transcription, LLM clip selection, FFmpeg output.',
    repo: 'https://github.com/ricardogr07/clipsmith',
  },
  {
    title: 'RepoSage: AI-Assisted Repository Audit Tool',
    summary:
      'Codebase scanner that detects language/framework signals and outputs structured audit reports.',
    repo: 'https://github.com/ricardogr07/reposage',
  },
  {
    title: 'PurkinjeUV: Scientific Python Package',
    summary:
      'Modular scientific package for generating Purkinje network geometries over cardiac meshes. Published on PyPI.',
    repo: 'https://github.com/ricardogr07/purkinje-uv',
  },
]

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'C#', 'Java', 'TypeScript', 'Rust (PyO3)', 'SQL', 'Bash'],
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
    items: ['RAG', 'Qdrant', 'OpenAI', 'Anthropic', 'scikit-learn', 'JAX', 'PyTorch'],
  },
  { category: 'Scientific', items: ['NumPy', 'PyVista', 'VTK', 'GMSH', 'Bayesian Optimization'] },
  { category: 'Tooling', items: ['GitHub Actions', 'Azure DevOps', 'PyPI', 'pnpm', 'Next.js'] },
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
              <p className="text-neutral-400">
                Senior Software Engineer · Python · .NET · Data · AI
              </p>
            </div>
            {/* PDF link — place cv.pdf at public/resume/cv.pdf when ready */}
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
          <div className="mb-10 flex flex-wrap gap-x-6 gap-y-1 border-b border-neutral-800 pb-8 text-sm text-neutral-400">
            <a href="mailto:rgr5882@gmail.com" className="hover:text-white">
              rgr5882@gmail.com
            </a>
            <a
              href="https://github.com/ricardogr07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              github.com/ricardogr07
            </a>
            <a
              href="https://www.linkedin.com/in/ricardogarciaramirez/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              linkedin.com/in/ricardogarciaramirez
            </a>
          </div>

          {/* Summary */}
          <section className="mb-10">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Summary
            </h2>
            <p className="text-base leading-relaxed text-neutral-300">
              Senior Software Engineer with 7+ years of experience building backend services, APIs,
              data pipelines, automation tooling, and cloud-based applications across enterprise and
              scientific environments. Strong Python background through data engineering, ETL, ML,
              scientific computing, CLI tooling, and reproducible pipelines. M.Sc. in Data Science
              (PUC Chile, Distinction) with thesis work in Bayesian inference and computational
              cardiac modeling.
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
                    <span className="text-sm text-neutral-600">{entry.dates}</span>
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
              Spanish (Native) · English (Full Professional — TOEFL iBT 109 / ITP 653)
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
