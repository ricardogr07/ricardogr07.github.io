import { dashboardData } from './dashboard-data'

export interface SchemaColumn {
  name: string
  type: string
}

export interface SchemaTable {
  name: string
  columns: SchemaColumn[]
}

export interface PresetQuery {
  label: string
  sql: string
}

export const schemaInfo: SchemaTable[] = [
  {
    name: 'holdings',
    columns: [
      { name: 'ticker', type: 'TEXT' },
      { name: 'name', type: 'TEXT' },
      { name: 'asset_class', type: 'TEXT' },
      { name: 'shares', type: 'REAL' },
      { name: 'price_per_share_mxn', type: 'REAL' },
      { name: 'market_value_mxn', type: 'REAL' },
      { name: 'allocation_pct', type: 'REAL' },
      { name: 'gain_loss_mxn', type: 'REAL' },
      { name: 'gain_loss_pct', type: 'REAL' },
    ],
  },
  {
    name: 'monthly_returns',
    columns: [
      { name: 'month', type: 'TEXT' },
      { name: 'return_pct', type: 'REAL' },
      { name: 'benchmark_pct', type: 'REAL' },
      { name: 'portfolio_value_mxn', type: 'REAL' },
    ],
  },
  {
    name: 'goals',
    columns: [
      { name: 'id', type: 'TEXT' },
      { name: 'label', type: 'TEXT' },
      { name: 'target_mxn', type: 'REAL' },
      { name: 'current_mxn', type: 'REAL' },
      { name: 'target_date', type: 'TEXT' },
      { name: 'status', type: 'TEXT' },
    ],
  },
]

export const presetQueries: PresetQuery[] = [
  {
    label: 'Holdings by value',
    sql: `SELECT ticker, name, asset_class, market_value_mxn, allocation_pct, gain_loss_pct
FROM holdings
ORDER BY market_value_mxn DESC`,
  },
  {
    label: 'By asset class',
    sql: `SELECT asset_class,
  COUNT(*) AS positions,
  SUM(market_value_mxn) AS total_mxn,
  ROUND(SUM(allocation_pct), 1) AS alloc_pct
FROM holdings
GROUP BY asset_class
ORDER BY total_mxn DESC`,
  },
  {
    label: 'Winners only',
    sql: `SELECT ticker, name, gain_loss_mxn, gain_loss_pct
FROM holdings
WHERE gain_loss_pct > 0
ORDER BY gain_loss_pct DESC`,
  },
  {
    label: 'vs Benchmark',
    sql: `SELECT month,
  return_pct AS portfolio_pct,
  benchmark_pct,
  ROUND(return_pct - benchmark_pct, 2) AS alpha
FROM monthly_returns
ORDER BY month`,
  },
  {
    label: 'Best months',
    sql: `SELECT month, return_pct, portfolio_value_mxn
FROM monthly_returns
WHERE return_pct > 0
ORDER BY return_pct DESC
LIMIT 5`,
  },
  {
    label: 'Goal progress',
    sql: `SELECT label, status, target_mxn, current_mxn,
  ROUND(100.0 * current_mxn / target_mxn, 1) AS pct_complete,
  target_date
FROM goals
ORDER BY pct_complete DESC`,
  },
  {
    label: 'Summary stats',
    sql: `SELECT
  COUNT(*) AS positions,
  ROUND(SUM(market_value_mxn), 0) AS total_value_mxn,
  ROUND(AVG(gain_loss_pct), 2) AS avg_gain_loss_pct,
  ROUND(MIN(gain_loss_pct), 2) AS worst_pct,
  ROUND(MAX(gain_loss_pct), 2) AS best_pct
FROM holdings`,
  },
]

function q(s: string): string {
  return `'${s.replace(/'/g, "''")}'`
}

function buildInitSql(): string {
  const lines: string[] = [
    `CREATE TABLE holdings (ticker TEXT, name TEXT, asset_class TEXT, shares REAL, price_per_share_mxn REAL, market_value_mxn REAL, allocation_pct REAL, gain_loss_mxn REAL, gain_loss_pct REAL);`,
    `CREATE TABLE monthly_returns (month TEXT, return_pct REAL, benchmark_pct REAL, portfolio_value_mxn REAL);`,
    `CREATE TABLE goals (id TEXT, label TEXT, target_mxn REAL, current_mxn REAL, target_date TEXT, status TEXT);`,
  ]

  for (const h of dashboardData.holdings) {
    lines.push(
      `INSERT INTO holdings VALUES (${q(h.ticker)}, ${q(h.name)}, ${q(h.assetClass)}, ${h.shares}, ${h.pricePerShareMXN}, ${h.marketValueMXN}, ${h.allocationPct}, ${h.gainLossMXN}, ${h.gainLossPct});`
    )
  }

  for (const r of dashboardData.monthlyReturns) {
    lines.push(
      `INSERT INTO monthly_returns VALUES (${q(r.month)}, ${r.returnPct}, ${r.benchmarkPct}, ${r.portfolioValueMXN});`
    )
  }

  for (const g of dashboardData.goals) {
    lines.push(
      `INSERT INTO goals VALUES (${q(g.id)}, ${q(g.label)}, ${g.targetMXN}, ${g.currentMXN}, ${q(g.targetDate)}, ${q(g.status)});`
    )
  }

  return lines.join('\n')
}

export const initSql = buildInitSql()
