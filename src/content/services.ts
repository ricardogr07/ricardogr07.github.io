import type { ServiceCard } from '@/lib/types'

export const services: ServiceCard[] = [
  {
    id: 'automation',
    label: 'Automation Scripts',
    description:
      'Python and .NET scripts that eliminate repetitive manual tasks, scheduled jobs, file processors, and workflow orchestration.',
    icon: 'Zap',
  },
  {
    id: 'web-scraping',
    label: 'Web Scraping & Extraction',
    description:
      'Structured data collection from websites and APIs, with normalization, deduplication, and export pipelines.',
    icon: 'Globe',
  },
  {
    id: 'etl',
    label: 'ETL / Data Pipelines',
    description:
      'End-to-end pipelines that ingest messy data, clean and transform it, and deliver reliable analytics-ready outputs.',
    icon: 'Database',
  },
  {
    id: 'dashboards',
    label: 'Dashboards & Reporting',
    description:
      'Interactive dashboards, automated reports, and data visualizations that turn raw data into decisions.',
    icon: 'BarChart3',
  },
  {
    id: 'apis',
    label: 'APIs & Backend Tools',
    description:
      'FastAPI and .NET backend services, data contracts, internal tooling, and integrations with third-party systems.',
    icon: 'Code2',
  },
  {
    id: 'rag-llm',
    label: 'RAG / LLM Systems',
    description:
      'Retrieval-augmented generation pipelines, vector search, prompt engineering, and LLM-assisted tooling.',
    icon: 'Brain',
  },
  {
    id: 'media-automation',
    label: 'AI Media Automation',
    description:
      'Transcription, clip selection, video processing, and content pipeline automation using local and cloud AI models.',
    icon: 'Film',
  },
  {
    id: 'scientific-python',
    label: 'Scientific Python Packages',
    description:
      'Modular, tested, and documented Python packages for simulation, computational modeling, and research software.',
    icon: 'FlaskConical',
  },
]
