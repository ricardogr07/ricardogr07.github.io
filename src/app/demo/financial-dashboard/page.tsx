import type { Metadata } from 'next'
import { dashboardData } from '@/content/dashboard-data'
import Footer from '@/components/footer'
import { DemoBanner, DashboardShell } from '@/components/dashboard'

export const metadata: Metadata = {
  title: 'Financial Data Dashboard Demo',
  description:
    'End-to-end demo of a personal finance dashboard built from synthetic brokerage statements. Shows allocation charts, monthly performance, goal tracking, and an animated ETL pipeline log.',
  openGraph: {
    images: [
      {
        url: 'https://ricardogr07.github.io/og/demo-financial-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Financial Data Dashboard Demo — Ricardo García Ramírez',
      },
    ],
  },
  twitter: {
    images: ['https://ricardogr07.github.io/og/demo-financial-dashboard.png'],
  },
}

export default function FinancialDashboardPage() {
  return (
    <main>
      <DemoBanner />
      <DashboardShell data={dashboardData} />
      <Footer />
    </main>
  )
}
