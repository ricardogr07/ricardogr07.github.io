// Canonical work-experience data — the single source of truth for both the CV page
// (full bullets) and the About page (condensed: role + company + period + one-line summary).
// The `WorkExperience` type lives here (not in src/lib/types.ts) to keep this independent of
// the projects/STARL type surface.

export interface WorkExperience {
  company: string
  role: string
  period: string
  location?: string
  /** One-line condensation used by the About page. */
  summary: string
  /** Full responsibility bullets used by the CV page. */
  bullets: string[]
}

export const experience: WorkExperience[] = [
  {
    company: 'MSCI',
    role: 'Aggregation Services Senior Developer',
    period: 'Sep 2023 – Present',
    location: 'Monterrey, Mexico',
    summary:
      'Backend services, APIs, analytics tooling, and data workflows for large-scale financial data systems.',
    bullets: [
      'Build and maintain Python-based backend services, APIs, data pipelines, analytics tooling, and operational workflows for large-scale financial data systems, including 3rd-tier production support.',
      'Contributed to cross-team initiatives with ~$1M in business impact.',
      'Designed observability and monitoring solutions using Splunk, Power BI, and Azure DevOps data surfacing throughput, failure rate, and latency trends across production systems, enabling data-driven incident response and capacity planning.',
      'Introduced AI-assisted development workflows (Claude Code, Cursor, Copilot) for refactoring, test generation, and documentation, accelerating the Java modernization initiative.',
      'Lead Java modernization and technical debt reduction: refactoring legacy services for upgrade-readiness while preserving behavior, testability, and release stability.',
    ],
  },
  {
    company: 'Rackspace Technology',
    role: 'Software Developer II',
    period: 'Aug 2022 – Sep 2023',
    summary: 'APIs, enterprise services, and Azure serverless applications in C#/.NET.',
    bullets: [
      'Built internal and customer-facing APIs, enterprise services, and Azure-based serverless applications in C#, .NET, and Azure Functions.',
      'Owned technical design for new features: scoping, architecture decisions, proof-of-concept work, and delivery through production.',
      'Implemented unit and acceptance test suites, Jenkins CI/CD pipelines, deployment automation, and production monitoring and telemetry tooling.',
    ],
  },
  {
    company: 'Parallel Staff / Softeq',
    role: '.NET Middle Software Engineer',
    period: 'Jan 2022 – Aug 2022',
    summary: 'Backend services and desktop automation tooling in C#/.NET.',
    bullets: [
      'Built backend services and desktop automation tooling in C#, .NET Core, and .NET Framework.',
      'Contributed to requirements analysis, test scenario coverage, workflow documentation, and code reviews.',
    ],
  },
  {
    company: 'Delee Corp',
    role: 'Hardware and Software Development Specialist',
    period: 'Feb 2020 – Dec 2021',
    summary:
      'C#/.NET backend services and WPF/XAML desktop tools for laboratory and biomedical automation.',
    bullets: [
      'Built C#/.NET backend services and WPF/XAML MVVM desktop applications for laboratory automation and biomedical device control.',
      'Programmed microcontrollers in C to drive microfluidic devices and automate microscope control for cell imaging and blood sample analysis.',
      'Automated assay workflows for blood sample processing: cell counting, imaging pipelines, and data acquisition from laboratory instrumentation.',
      'Developed Python tooling to bridge hardware instrumentation output with desktop reporting and analysis workflows.',
    ],
  },
]

/** Condensed projection for the About page hub. */
export const experienceCondensed = experience.map(({ company, role, period, summary }) => ({
  company,
  role,
  period,
  summary,
}))
