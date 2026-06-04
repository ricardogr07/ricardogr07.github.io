export interface SyntheticHolding {
  ticker: string
  name: string
  assetClass: 'equity' | 'fixed-income' | 'cash' | 'alternative'
  shares: number
  pricePerShareMXN: number
  marketValueMXN: number
  allocationPct: number
  gainLossMXN: number
  gainLossPct: number
}

export interface MonthlyReturn {
  month: string
  returnPct: number
  benchmarkPct: number
  portfolioValueMXN: number
}

export interface GoalMilestone {
  id: string
  label: string
  targetMXN: number
  currentMXN: number
  targetDate: string
  status: 'on-track' | 'at-risk' | 'achieved'
}

export interface PipelineLogLine {
  ts: string
  level: 'INFO' | 'WARN' | 'SUCCESS'
  message: string
}

export interface DashboardSnapshot {
  generatedAt: string
  reportingCurrency: 'MXN'
  totalValueMXN: number
  monthlyReturnPct: number
  ytdReturnPct: number
  holdings: SyntheticHolding[]
  monthlyReturns: MonthlyReturn[]
  goals: GoalMilestone[]
  pipelineLog: PipelineLogLine[]
}

export const dashboardData: DashboardSnapshot = {
  generatedAt: '2024-07-01T07:00:35Z',
  reportingCurrency: 'MXN',
  totalValueMXN: 919_823,
  monthlyReturnPct: 0.8,
  ytdReturnPct: 9.8,
  holdings: [
    {
      ticker: 'DEMO-GBL',
      name: 'Global Equity Growth Fund A',
      assetClass: 'equity',
      shares: 142,
      pricePerShareMXN: 1840.5,
      marketValueMXN: 261_351,
      allocationPct: 28.4,
      gainLossMXN: 18_240,
      gainLossPct: 7.5,
    },
    {
      ticker: 'DEMO-TMK',
      name: 'Telmex Industrial Holdings',
      assetClass: 'equity',
      shares: 320,
      pricePerShareMXN: 612.0,
      marketValueMXN: 195_840,
      allocationPct: 21.3,
      gainLossMXN: 9_120,
      gainLossPct: 4.9,
    },
    {
      ticker: 'DEMO-EMG',
      name: 'Emerging Markets Basket ETF',
      assetClass: 'equity',
      shares: 410,
      pricePerShareMXN: 388.2,
      marketValueMXN: 159_162,
      allocationPct: 17.3,
      gainLossMXN: -3_280,
      gainLossPct: -2.0,
    },
    {
      ticker: 'DEMO-RIT',
      name: 'Real Estate Income Trust',
      assetClass: 'alternative',
      shares: 200,
      pricePerShareMXN: 445.75,
      marketValueMXN: 89_150,
      allocationPct: 9.7,
      gainLossMXN: 4_150,
      gainLossPct: 4.9,
    },
    {
      ticker: 'DEMO-USD',
      name: 'USD Liquidity Reserve',
      assetClass: 'cash',
      shares: 1,
      pricePerShareMXN: 74_200.0,
      marketValueMXN: 74_200,
      allocationPct: 8.1,
      gainLossMXN: 2_700,
      gainLossPct: 3.8,
    },
    {
      ticker: 'DEMO-BND',
      name: 'MX Government Bond 2029',
      assetClass: 'fixed-income',
      shares: 50,
      pricePerShareMXN: 1120.0,
      marketValueMXN: 56_000,
      allocationPct: 6.1,
      gainLossMXN: 800,
      gainLossPct: 1.4,
    },
    {
      ticker: 'DEMO-LAM',
      name: 'Latin America Midcap Index',
      assetClass: 'equity',
      shares: 180,
      pricePerShareMXN: 234.0,
      marketValueMXN: 42_120,
      allocationPct: 4.6,
      gainLossMXN: -960,
      gainLossPct: -2.2,
    },
    {
      ticker: 'DEMO-CBN',
      name: 'Corporate Bond Laddered',
      assetClass: 'fixed-income',
      shares: 40,
      pricePerShareMXN: 1050.0,
      marketValueMXN: 42_000,
      allocationPct: 4.6,
      gainLossMXN: 1_200,
      gainLossPct: 2.9,
    },
  ],
  monthlyReturns: [
    { month: 'Jan 2023', returnPct: 3.1, benchmarkPct: 2.8, portfolioValueMXN: 820_000 },
    { month: 'Feb 2023', returnPct: 1.8, benchmarkPct: 2.1, portfolioValueMXN: 834_760 },
    { month: 'Mar 2023', returnPct: -0.9, benchmarkPct: -1.4, portfolioValueMXN: 827_254 },
    { month: 'Apr 2023', returnPct: 2.4, benchmarkPct: 1.9, portfolioValueMXN: 847_108 },
    { month: 'May 2023', returnPct: 0.7, benchmarkPct: 0.4, portfolioValueMXN: 853_038 },
    { month: 'Jun 2023', returnPct: 4.2, benchmarkPct: 3.8, portfolioValueMXN: 888_866 },
    { month: 'Jul 2023', returnPct: -1.1, benchmarkPct: -0.8, portfolioValueMXN: 879_085 },
    { month: 'Aug 2023', returnPct: 2.9, benchmarkPct: 3.1, portfolioValueMXN: 904_668 },
    { month: 'Sep 2023', returnPct: -2.3, benchmarkPct: -2.7, portfolioValueMXN: 883_861 },
    { month: 'Oct 2023', returnPct: 1.4, benchmarkPct: 1.2, portfolioValueMXN: 896_235 },
    { month: 'Nov 2023', returnPct: 5.1, benchmarkPct: 4.6, portfolioValueMXN: 941_943 },
    { month: 'Dec 2023', returnPct: 3.8, benchmarkPct: 3.5, portfolioValueMXN: 977_737 },
    { month: 'Jan 2024', returnPct: 1.2, benchmarkPct: 0.9, portfolioValueMXN: 989_490 },
    { month: 'Feb 2024', returnPct: 2.7, benchmarkPct: 2.4, portfolioValueMXN: 1_016_196 },
    { month: 'Mar 2024', returnPct: -0.4, benchmarkPct: 0.2, portfolioValueMXN: 1_012_131 },
    { month: 'Apr 2024', returnPct: 3.6, benchmarkPct: 3.1, portfolioValueMXN: 1_048_568 },
    { month: 'May 2024', returnPct: 1.9, benchmarkPct: 2.2, portfolioValueMXN: 1_068_491 },
    { month: 'Jun 2024', returnPct: 0.8, benchmarkPct: 0.6, portfolioValueMXN: 1_077_039 },
  ],
  goals: [
    {
      id: 'emergency-fund',
      label: 'Emergency Fund',
      targetMXN: 120_000,
      currentMXN: 118_450,
      targetDate: 'Q2 2024',
      status: 'achieved',
    },
    {
      id: 'vacation-fund',
      label: 'Vacation Fund',
      targetMXN: 80_000,
      currentMXN: 52_100,
      targetDate: 'Q4 2024',
      status: 'on-track',
    },
    {
      id: 'home-down-payment',
      label: 'Home Down Payment',
      targetMXN: 500_000,
      currentMXN: 210_000,
      targetDate: 'Q3 2026',
      status: 'on-track',
    },
    {
      id: 'education-fund',
      label: 'Education Fund',
      targetMXN: 300_000,
      currentMXN: 98_400,
      targetDate: 'Q1 2027',
      status: 'at-risk',
    },
  ],
  pipelineLog: [
    { ts: '2024-07-01 07:00:01', level: 'INFO', message: 'Pipeline triggered: monthly-statement-ingestion' },
    { ts: '2024-07-01 07:00:02', level: 'INFO', message: 'Connecting to statement store (synthetic)...' },
    { ts: '2024-07-01 07:00:04', level: 'INFO', message: 'Found 1 new statement: GBM-2024-06.pdf (SYNTHETIC)' },
    { ts: '2024-07-01 07:00:06', level: 'INFO', message: 'Parsing PDF — extracting transaction table...' },
    { ts: '2024-07-01 07:00:08', level: 'INFO', message: 'Found 34 transactions, 8 unique positions' },
    { ts: '2024-07-01 07:00:10', level: 'INFO', message: 'Normalizing tickers to internal schema...' },
    { ts: '2024-07-01 07:00:11', level: 'WARN', message: 'DEMO-LAM: no benchmark match — using proxy' },
    { ts: '2024-07-01 07:00:13', level: 'INFO', message: 'Computing cost basis per holding...' },
    { ts: '2024-07-01 07:00:15', level: 'INFO', message: 'Fetching reference prices (end-of-month close)...' },
    { ts: '2024-07-01 07:00:17', level: 'INFO', message: 'Enriching with asset-class metadata...' },
    { ts: '2024-07-01 07:00:19', level: 'INFO', message: 'Computing allocation percentages...' },
    { ts: '2024-07-01 07:00:21', level: 'INFO', message: 'Computing monthly return vs benchmark...' },
    { ts: '2024-07-01 07:00:23', level: 'INFO', message: 'Writing normalized holdings to DuckDB (synthetic)...' },
    { ts: '2024-07-01 07:00:25', level: 'INFO', message: 'Writing monthly-returns table...' },
    { ts: '2024-07-01 07:00:27', level: 'INFO', message: 'Generating goal-progress metrics...' },
    { ts: '2024-07-01 07:00:29', level: 'INFO', message: 'Validating schema integrity — 0 errors' },
    { ts: '2024-07-01 07:00:31', level: 'INFO', message: 'Exporting dashboard snapshot JSON...' },
    { ts: '2024-07-01 07:00:33', level: 'INFO', message: 'Snapshot written: dashboard_2024-06.json' },
    { ts: '2024-07-01 07:00:34', level: 'INFO', message: 'Sending completion notification...' },
    { ts: '2024-07-01 07:00:35', level: 'SUCCESS', message: 'Pipeline complete — 34s elapsed. All checks passed.' },
  ],
}
