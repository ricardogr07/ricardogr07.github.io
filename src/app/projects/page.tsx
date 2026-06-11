import type { Metadata } from 'next'
import ProjectsClient from '@/components/projects-client'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A full view of public work across automation, data engineering, AI tooling, and scientific software.',
  openGraph: {
    images: [
      {
        url: 'https://ricardogr07.github.io/og/projects.png',
        width: 1200,
        height: 630,
        alt: 'Projects — Ricardo García Ramírez',
      },
    ],
  },
  twitter: {
    images: ['https://ricardogr07.github.io/og/projects.png'],
  },
}

export default function ProjectsPage() {
  return <ProjectsClient />
}
