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
      'Build and maintain enterprise backend services, APIs, analytics tooling, operational scripts, dashboards, and data workflows supporting large-scale financial data systems.',
      'Develop Python-oriented automation and data workflows for operational analytics, reporting, validation, documentation, and engineering productivity.',
      'Design telemetry and monitoring solutions using Splunk, Azure DevOps data, database-backed reporting, and Power BI to improve visibility into throughput, failures, delays, and system health.',
      'Use GenAI-assisted SDLC tools (Claude Code, Cursor, Copilot) in approved engineering workflows for PR preparation, code planning, refactoring, debugging, test generation, and documentation.',
      'Contribute to modernization and technical debt reduction, including Java refactoring and upgrade-readiness work while preserving behavior, testability, and release stability.',
      'Contributed to enterprise initiatives with approximately USD 1M in business impact.',
      'Provide 3rd-tier production support for uninterrupted service.',
    ],
  },
  {
    company: 'Rackspace Technology',
    role: 'Software Developer II',
    period: 'Aug 2022 – Sep 2023',
    summary: 'APIs, enterprise services, and Azure serverless applications in C#/.NET.',
    bullets: [
      'Developed internal and customer-facing APIs, enterprise services, and Azure-based serverless applications using C#, .NET, and Azure Functions.',
      'Translated functional requirements into conceptual and detailed technical designs, estimates, proof-of-concepts, prototypes, and production-grade software.',
      'Implemented unit and acceptance tests, Jenkins-based CI/CD workflows, deployment automation support, monitoring, telemetry tooling, and production troubleshooting.',
    ],
  },
  {
    company: 'Parallel Staff / Softeq',
    role: '.NET Middle Software Engineer',
    period: 'Jan 2022 – Aug 2022',
    summary: 'Backend services and desktop automation tooling in C#/.NET.',
    bullets: [
      'Built backend services and desktop automation tooling using C#, .NET Core, and .NET Framework.',
      'Performed requirements analysis, authored positive/negative/boundary scenarios, wrote test scripts, supported existing automated tests, documented workflows, and contributed to code reviews.',
    ],
  },
  {
    company: 'Delee Corp',
    role: 'Hardware and Software Development Specialist',
    period: 'Feb 2020 – Dec 2021',
    summary:
      'C#/.NET backend services and WPF/XAML desktop tools for laboratory and biomedical automation.',
    bullets: [
      'Built C#/.NET backend services and WPF/XAML MVVM tools for laboratory automation, device control, data acquisition, and automated biological testing workflows.',
      'Worked with cross-functional stakeholders to capture requirements, deliver reusable software, manage Git-based project workflows, and support Scrum/Agile delivery.',
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
