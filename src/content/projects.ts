import type { PortfolioProject } from '@/lib/types'

export const projects: PortfolioProject[] = [
  {
    slug: 'linkedin-webscraper',
    title: 'LinkedIn Job Scraping & Data Export Pipeline',
    repo: 'https://github.com/ricardogr07/LinkedInWebScraper',
    pypiUrl: 'https://pypi.org/project/LinkedInWebScraper/',
    docsUrl: 'https://ricardogr07.github.io/LinkedInWebScraper/',
    visibility: 'public',
    featured: true,
    diagram: '/images/projects/linkedin-webscraper/architecture.svg',
    diagramCaption:
      'Three entry points (CLI, library call, scheduled cron) all route into the same pipeline core. Inside, each job passes through scraping, field cleaning, and title classification before landing in SQLite. The dashed OpenAI branch is opt-in: if an API key is set, each record gets a summary, a detected tech stack, and a seniority level added before persistence.',
    heroImage: '/images/projects/linkedin-webscraper/hero.svg',
    categories: ['web-scraping', 'automation', 'data-engineering'],
    summary:
      'Python scraping pipeline that collects job listings, normalizes records, persists run history in SQLite, and exports datasets through CLI workflows.',
    deliverables: [],
    techStack: ['Python', 'BeautifulSoup', 'SQLAlchemy', 'SQLite', 'OpenAI API', 'GitHub Actions'],
    businessValue: [],
    tldr: 'LinkedIn has no public jobs API. This pipeline scrapes the guest surface daily, null-checks every field instead of crashing when markup shifts, and files its own GitHub issue when a run fails.',
    headlineMetric: "A daily scraper that fixes itself when LinkedIn's markup breaks",
    situation:
      "I built this during my M.Sc. while job hunting and trying to decide which skills to prioritize before graduating. I kept checking LinkedIn manually, but that doesn't scale across cities, roles, and time. There's no public jobs API, so the choices were clear: keep copy-pasting, or build a scraper that runs daily, keeps a queryable history, and actually answers the question.",
    task: "The goal was practical: a daily data feed I could query to track which skills were trending. That meant unattended runs, graceful handling when LinkedIn's markup changed instead of crashes, a queryable run history, and automatic alerts when a run came back empty, all without me having to check.",
    action: [
      'Designed the core scraping and persistence logic to be callable two ways: an Argparse CLI for one-off runs and an importable library API for scripted use, both driving the same underlying code.',
      "Scraped LinkedIn's guest surface via paginated card search and per-job detail calls, with rotating User-Agents, exponential backoff, and per-field null-checks so markup shifts degrade to 'N/A' instead of crashing. Optional OpenAI enrichment adds structured tags (summary, tech stack, seniority) before persisting to SQLite across four tables.",
      'Automated delivery on GitHub Actions: a daily cron commits scrape output and dated CSV exports to an orphan data branch, auto-files an issue on any empty run, and auto-closes it on recovery.',
    ],
    result:
      'Shipped to PyPI as LinkedInWebScraper v1.1.1. The CI schedule has been running every day since March 22, 2026, each committing output and dated CSV exports to the data branch. A multi-city analysis across Mexico City, Monterrey, and Guadalajara covered 285 deduplicated postings: Python dominated skill requirements at roughly 80% of listings, mid-senior roles made up half the market with entry level at 38%, and the work-scheme split was nearly even: on-site 41%, hybrid 30%, remote 29%.',
    learning:
      'Unofficial scrapers have no deprecation notices, so resilience has to be the starting assumption rather than a patch added after the first breakage. The retry policy was the clearest example: a typed, frozen dataclass that models retryable vs. permanent failures is not just safer than ad-hoc retries, it is a contract you can test in isolation. That same thinking scales: null-check every field at parse time, and make the system alert you when it fails rather than silently returning empty.',
    status: 'pypi',
    resultGallery: [
      {
        src: '/images/projects/linkedin-webscraper/skills-insight.svg',
        alt: 'Top skills required across 285 Mexico data science postings',
        caption:
          'Python appeared in roughly 80% of postings. Database management and cloud skills rounded out the top three, with AWS leading among cloud providers.',
      },
      {
        src: '/images/projects/linkedin-webscraper/seniority-insight.svg',
        alt: 'Seniority level distribution across 285 data science postings',
        caption:
          'Half the market sat at mid-senior level. Entry level made up 38%, leaving a thin band at associate and above.',
      },
      {
        src: '/images/projects/linkedin-webscraper/work-scheme-insight.svg',
        alt: 'Work scheme split: on-site vs hybrid vs remote across 285 postings',
        caption:
          'On-site led at 41% but hybrid (30%) and remote (29%) together outweighed it. The market was not defaulting to full office.',
      },
    ],
  },
  {
    slug: 'mx-jobs-insights',
    title: 'Mexico Jobs Analytics Pipeline',
    repo: 'https://github.com/ricardogr07/mx-jobs-insights',
    docsUrl: 'https://ricardogr07.github.io/mx-jobs-insights/',
    docsLabel: 'Live Site',
    visibility: 'public',
    featured: true,
    diagram: '/images/projects/mx-jobs-insights/architecture.svg',
    diagramCaption:
      'Six stages on ephemeral CI: workspace → curate (DuckDB authoritative, CREATE OR REPLACE) → report (one schema-locked OpenAI call → EN/ES) → site → strict MkDocs deploy gate. Cloud delivery is built but dashed; GitHub Actions is the live path.',
    heroImage: '/images/projects/mx-jobs-insights/hero.svg',
    categories: ['data-engineering', 'automation', 'dashboard'],
    summary:
      'Analytics pipeline that transforms raw job snapshots into curated DuckDB/Parquet datasets, bilingual reports, and a public MkDocs documentation site.',
    deliverables: [],
    techStack: ['Python', 'DuckDB', 'Parquet', 'MkDocs', 'GitHub Actions', 'Cloud Run'],
    servicesSupported: [
      'Data Engineering',
      'ETL Pipelines',
      'Business Analytics',
      'Dashboard/Reporting Automation',
      'Cloud Application Development',
    ],
    businessValue: [],
    tldr: 'Runs free on ephemeral CI, rebuilds 9,661 raw job records from scratch on every run, and publishes bilingual analytics reports to a live site. No server. No manual step.',
    headlineMetric: 'A stateless weekly pipeline running on free infrastructure',
    situation:
      "Raw job-listing snapshots are worthless until they're clean, queryable, repeatable analytics assets. Manual reporting is slow and inconsistent. The constraint was free infrastructure: no server, no hosting cost.",
    task: 'Turn periodic raw snapshots into curated datasets + bilingual reports + a public docs site, reproducibly and without manual intervention, on infrastructure that costs nothing to run.',
    action: [
      'A 6-stage pipeline on ephemeral GitHub Actions runners: each run checks out the full upstream snapshot history, rebuilds an authoritative DuckDB store from scratch (CREATE OR REPLACE, no incremental state), and exports Parquet sidecars alongside it.',
      'A single schema-locked API call returns both English and Spanish narrative in one response, with a headline and three bullets per language. Two render passes consume the same object to produce bilingual Markdown and HTML reports that cannot drift from each other.',
      'A strict MkDocs build gates the GitHub Pages deploy, blocking publication on any warning. Runs on a weekly cron plus a monthly rollup; a Cloud Run delivery path is built and contract-tested but GitHub Actions is the live path.',
    ],
    result:
      'Fourteen of fourteen scheduled runs have succeeded since 2026-03-30, roughly ten weeks fully unattended (11 weekly + 3 monthly bilingual bundles, GitHub-API verified). The latest run rebuilt 9,661 raw job snapshots (2026-03-22 → 2026-06-08) into 3 curated DuckDB tables and distilled the closed week (2026-W23) into 398 curated jobs, published as a bilingual report and a public CSV. Backed by 78 tests on Python 3.11.',
    learning:
      "DuckDB-in-CI made compute trivially reproducible. Rebuilding the whole store from upstream history every run was deterministic and debuggable for free at ~9.6k rows, with no server to host Postgres on anyway. But I learned state has to live somewhere: the stateless rebuild quietly turned my 'archive' into 'latest issue only,' so the public history evaporated and took ten backfill runs to restore. Next time the compute stays stateless, but a small hosted DB or a committed-state branch keeps the archive.",
    status: 'live',
    gallery: [
      {
        src: '/images/projects/mx-jobs-insights/data-layer.svg',
        alt: 'DuckDB as authoritative store with CREATE OR REPLACE, three tables, and Parquet sidecars',
        caption:
          'The data layer: DuckDB is the authoritative store, rebuilt whole every run (CREATE OR REPLACE) into three tables (source_runs, job_observations, job_entities), each exported as a DuckDB-native Parquet sidecar. No pyarrow, no incremental state to corrupt.',
      },
    ],
    resultGallery: [
      {
        src: '/images/projects/mx-jobs-insights/metrics.svg',
        alt: 'By the numbers: 14/14 runs, 9,661 snapshots, 398 curated jobs, 78 tests',
        caption: 'All figures GitHub-API and repo-verified.',
      },
    ],
  },
  {
    slug: 'reposage',
    title: 'RepoSage: AI-Assisted Repository Audit Tool',
    repo: 'https://github.com/ricardogr07/reposage',
    pypiUrl: 'https://pypi.org/project/reposage/',
    marketplaceUrl: 'https://github.com/marketplace/actions/reposage-audit',
    visibility: 'public',
    featured: true,
    diagram: '/images/projects/reposage/architecture.svg',
    diagramCaption:
      'The true pipeline: a stdlib-only deterministic core (scan → detect → parse → score → risk) builds an immutable report; the LLM is a dashed amber bolt-on that plugs in at a single one-method Protocol seam, never in the core path. An MCP server is an alternate entry to the same pipeline.',
    heroImage: '/images/projects/reposage/hero.svg',
    categories: ['developer-tooling', 'automation', 'rag-llm'],
    summary:
      'Repository analysis tool that scans codebases, detects language and framework signals, summarizes dependencies, and outputs structured Markdown or JSON audit reports.',
    deliverables: [],
    techStack: ['Python', 'GitHub Actions', 'OpenAI API', 'Anthropic API', 'MCP'],
    servicesSupported: [
      'AI Automation',
      'Developer Tooling',
      'Codebase Audit',
      'Software Quality',
      'Technical Documentation',
    ],
    businessValue: [],
    tldr: 'Zero runtime dependencies, zero API keys: 29 languages, 32 frameworks, 10 manifest parsers, all deterministic',
    headlineMetric: 'Deterministic codebase audit tool: structured evidence, not vibes.',
    situation:
      "Teams want quick codebase audits, but 'chat with your repo' tools give fluent but ungrounded output: no deterministic evidence you can put in a CI gate, a PR review, or a ticket.",
    task: 'A scanner that emits structured, evidence-backed audit reports (Markdown or JSON), reproducible run-to-run, useful with or without an LLM, and safe to drop into CI.',
    action: [
      'A stdlib-only deterministic core: filesystem walk → language and framework detection (29 languages, 32 frameworks) → dependency manifest parsing (10 formats) → quality heuristics (tests, docs, CI, typing, lint) → architecture and risk analysis, all assembled into an immutable typed report rendered to Markdown or JSON.',
      'Optional AI enrichment (Anthropic or OpenAI) plugs in at a single one-method Protocol seam, forced through a JSON tool-use schema. It can annotate the already-complete report but never restructure it. No API key means a clean exit with the full deterministic report still emitted.',
      'Ships three ways: a PyPI package (v0.3.0), a published GitHub Actions marketplace action, and an MCP server. All three drive the same pipeline.',
    ],
    result:
      'Shipped to PyPI (v0.3.0) with a published GitHub Action and an MCP server. The real use cases: auditing every repo in this portfolio and doing instant health checks on vibecoded projects from non-technical collaborators, where the structured Markdown report replaces an hour of code archaeology. The meta proof: RepoSage audits itself and scores 100/100, with 179 tests, strict mypy, Ruff, docs, and CI all detected. The tool works, or it would say so.',
    learning:
      'Deterministic heuristics first, LLM as enrichment, not the other way around. The tool produces a complete, byte-identical report with no API key; the LLM only annotates it. Forcing that enrichment through a JSON-schema tool call meant the AI layer could never break the report schema: the deterministic core and the AI layer share a single ten-line Protocol and nothing else.',
    caveat:
      'Heuristics are signal, not proof: every check is file-presence or regex-based, with no semantic understanding unless you opt into the LLM layer. And LLM output is schema-constrained but not fact-checked against the deterministic report.',
    status: 'active',
    resultGallery: [
      {
        src: '/images/projects/reposage/quality-score.svg',
        alt: 'Six scored quality checks producing an X/100 score, plus five risk rules',
        caption:
          'The quality score is six file-presence checks (tests, CI, docs, packaging, lint config, typing) summed to X/100, alongside five risk rules (no tests, no CI, god modules ≥200 lines, no docs, ≥25 dependencies). Every finding points at the evidence that produced it.',
      },
      {
        src: '/images/projects/reposage/enrichment-seam.svg',
        alt: 'The LLM plugs in at one Protocol seam and is forced through a JSON schema',
        caption:
          'The whole AI surface is one structural Protocol: enrich(report) -> EnrichmentResult. The LLM receives a report that is already complete and is forced through a JSON tool-use schema, so it can annotate but never break the structure. The core and the AI share ten lines of interface and nothing else.',
      },
    ],
  },
  {
    slug: 'rusty-rag-chunker',
    title: 'Rust + Python RAG Chunking Pipeline',
    repo: 'https://github.com/ricardogr07/rusty-rag-chunker',
    visibility: 'public',
    featured: true,
    diagram: '/images/projects/rusty-rag-chunker/architecture.svg',
    diagramCaption:
      'Python orchestrates; Rust owns the hot path. ingest_documents() makes exactly four calls and the only Rust↔Python crossing is the chunker. On the query side, a deterministic similarity cutoff declines before the model is ever called.',
    heroImage: '/images/projects/rusty-rag-chunker/hero.svg',
    categories: ['rag-llm', 'backend-api', 'developer-tooling'],
    summary:
      'Token-aware RAG ingestion pipeline where Rust handles performance-critical chunking via PyO3, Python orchestrates embeddings, and Qdrant stores searchable vectors.',
    deliverables: [],
    techStack: [
      'Rust',
      'PyO3',
      'Python',
      'Qdrant',
      'tiktoken-rs',
      'OpenAI embeddings',
      'sentence-transformers',
      'Docker',
    ],
    servicesSupported: [
      'RAG Pipelines',
      'Python/Rust Integration',
      'Vector Search',
      'LLM Tooling',
      'Performance Optimization',
    ],
    businessValue: [],
    tldr: '0 over-limit chunks at every scale; up to 13,100 for a character-count baseline. 40% faster than Python tiktoken at 50 MB. Measured, committed.',
    situation:
      'RAG quality lives or dies on chunking. Naive splitters blow past embedding-model token limits, truncate silently, and degrade retrieval; the Python tokenize loop becomes the ingestion bottleneck at scale.',
    task: "Build ingestion that is token-exact (never exceeds the model limit) and fast enough for large corpora, without leaving Python's embedding/orchestration ecosystem.",
    action: [
      'Pushed tokenize and chunk into Rust via PyO3 using tiktoken-rs; a chunk is a window over token IDs, so the limit cannot be exceeded by construction.',
      'Python orchestrates embeddings (local sentence-transformers or OpenAI) and writes to Qdrant; a CLI covers init-db, ingest, search, and ask.',
      'A two-layer hallucination guard declines before the model is called: a deterministic similarity cutoff (default 0.50) plus a strict context-only prompt.',
    ],
    headlineMetric: 'Token-exact RAG ingestion where the hot path runs in Rust.',
    result:
      'Token-exact RAG chunking, proven in committed benchmarks: every token-aware variant produced 0 over-limit chunks from 1–50 MB, against up to 13,100 violations for a character-count splitter. The Rayon-parallel Rust path is 40% faster than Python tiktoken at 50 MB (24.99 s vs 35.04 s; 2.00 vs 1.43 MB/s), with a measured crossover between 10 MB and 50 MB below which pure Python wins. Five chunker variants benchmarked across four corpus sizes; 25 tests (8 Rust, 17 Python) cover the chunker and the ingest path.',
    learning:
      "The honest engineering call was knowing when not to reach for Rust. Below a measured 10–50 MB crossover the per-call FFI and BPE-init cost makes Rust slower than pure Python everywhere, so the benchmark keeps that negative result in the table instead of hiding it. The win is real, but it's narrow, and pretending otherwise would have been the easy lie.",
    caveat:
      'The 40% speedup holds only for the Rayon-parallel path at 50 MB+; below the crossover pure Python wins, and the live ingest path actually runs the sequential chunker.',
    status: 'active',
    resultGallery: [
      {
        src: '/images/projects/rusty-rag-chunker/token-exact-guarantee.svg',
        alt: 'Token-aware chunking produces zero over-limit chunks at every scale, versus up to 13,100 for a character-count baseline.',
        caption:
          'Token-exact by construction: a chunk is a window over token IDs, so the limit can never be exceeded. 0 violations at 1/10/50 MB vs 200/2,600/13,100 for a char-count splitter; all from committed benchmark output.',
      },
      {
        src: '/images/projects/rusty-rag-chunker/hallucination-guard.svg',
        alt: 'Two-layer hallucination guard: a deterministic similarity cutoff before the LLM, and a strict context-only prompt.',
        caption:
          'The guard declines before the model runs: a deterministic similarity cutoff (default 0.50) plus a strict context-only prompt. Honestly bounded; no citation verification or post-generation grounding check.',
      },
    ],
  },
  {
    slug: 'clipsmith',
    title: 'Clipsmith: AI-Assisted Twitch Clip Pipeline',
    repo: 'https://github.com/ricardogr07/clipsmith',
    pypiUrl: 'https://pypi.org/project/clipsmith-ai/',
    visibility: 'public',
    featured: true,
    diagram: '/images/projects/clipsmith/architecture.svg',
    diagramCaption:
      'Six stages run in sequence: five free deterministic signals reduce a multi-hour VOD to ≤20 moments, then the LLM adjudicates only those. The same pipeline runs from the local CLI, a FastAPI + Next.js dashboard, or a cloud-batch launcher on ephemeral Azure ACI.',
    heroImage: '/images/projects/clipsmith/hero.svg',
    categories: ['media-automation', 'automation', 'rag-llm'],
    summary:
      'Local media automation pipeline that downloads VODs, transcribes Spanish audio, ranks candidate moments by chat activity, uses an LLM to select highlights, and cuts 9:16 MP4 clips.',
    deliverables: [],
    techStack: [
      'Python',
      'FFmpeg',
      'faster-whisper',
      'chat-downloader',
      'twitch-dl',
      'OpenAI/Anthropic/Ollama',
      'FastAPI',
      'Next.js',
    ],
    servicesSupported: [
      'AI Media Automation',
      'Video Processing',
      'Speech-to-Text Pipelines',
      'LLM-Assisted Content Selection',
      'Creator Tooling',
    ],
    businessValue: [],
    tldr: 'Bounded cost by design: $0/clip on local Ollama, or ≤20 prompt-cached selection calls per VOD.',
    situation:
      'Turning long streams into short vertical clips is repetitive, slow, and hard to prioritize without watching the whole archive.',
    task: 'A local pipeline that finds the best moments and cuts publish-ready 9:16 clips, with no cloud subscription required.',
    action: [
      'Built five deterministic signals (existing Twitch clips, !clip commands, chat-density bursts, transcript hype keywords, audio-RMS spikes) that score and deduplicate candidates within 60 s, normalize to [1,100], and spread the top ≤20 at least 120 s apart; the model never searches the full VOD.',
      'Each candidate gets one cached LLM call over a 90-second transcript window with a strict JSON contract; bad parses are skipped, the run continues. Three providers fully wired: Anthropic (default, prompt-cached), OpenAI, and zero-key local Ollama.',
      'Wired the same pipeline into a Typer CLI, a FastAPI service with SSE progress, and a Next.js approve/reject dashboard; the identical Docker image also runs as an ephemeral Azure ACI cloud-batch job.',
    ],
    status: 'active',
    headlineMetric:
      'Local pipeline that turns a Twitch VOD into publish-ready 9:16 clips using Whisper + LLM selection.',
    result:
      'Shipped clipsmith-ai v0.2.1 to PyPI and Docker Hub with 193 tests and CI green on every push (ruff, mypy, pytest, bandit, pip-audit). Five free signals reduce any VOD to ≤20 candidates before the model runs; the LLM makes one cached call per candidate at cents each. All three providers fully wired: Anthropic by default, OpenAI as a drop-in, and Ollama for $0/clip fully local. The FastAPI service and Next.js dashboard run the same pipeline with SSE progress and an approve/reject loop; a cloud-batch path runs the identical Docker image on ephemeral Azure ACI with Drive upload and teardown.',
    learning:
      'The clips get good from the signal funnel and its plumbing (dedupe, normalization, time-spread), not from the model. The LLM is the last and cheapest step: a yes/no over ≤20 ninety-second windows, never a search over hours of footage. I built per-signal approval analytics and prompt A/B endpoints specifically because I refused to assume which signal earned its weight; instrumenting the question is the honest version of answering it.',
    caveat: "It's an active project mid-sprint, not a finished product.",
    resultGallery: [
      {
        src: '/images/projects/clipsmith/signal-funnel.svg',
        alt: 'The candidate funnel: five deterministic signals (existing clips +100, !clip +25, chat-density bursts, hype keywords, audio-RMS spikes) deduped within 60s, normalized to [1,100], greedily spread to the top 20 candidates ≥120s apart, then adjudicated by one cached LLM call each.',
        caption:
          'Five free signals reduce the VOD to ≤20 moments before the model is ever called; the expensive stage is last and smallest.',
      },
      {
        src: '/images/projects/clipsmith/provider-matrix.svg',
        alt: 'Three LLM providers behind one factory interface: Anthropic claude-sonnet-4-6 (default, explicit ephemeral cache_control), OpenAI gpt-4.1 (json_object), and Ollama llama3.1:8b (zero-key, $0/clip). All share retry, JSON contract, OTel and Prometheus instrumentation.',
        caption:
          'Three swappable providers, one interface; the cheapest runs the whole pipeline fully local at zero API cost.',
      },
    ],
  },
  {
    slug: 'wc26-dashboard',
    title: 'WC26 Dashboard: Live World Cup Pool Forecasting',
    repo: 'https://github.com/ricardogr07/wc26-dashboard',
    liveUrl: 'https://mango-mushroom-0a45d2a0f.7.azurestaticapps.net/',
    visibility: 'public',
    featured: true,
    categories: ['ml', 'dashboard', 'backend-api'],
    summary:
      'Live World Cup 2026 dashboard for a 5-person quiniela: it Monte-Carlo-simulates the rest of the tournament 10,000 times from live Elo ratings to give each player their odds of finishing 1st–5th, with completed results pinned and a scenario builder for what-ifs.',
    deliverables: [
      'Pure Monte Carlo simulation engine (10,000 tournament runs)',
      'Elo-based win-probability model with live K=32 updates',
      'Pool standings UI + scenario builder, bilingual es/en',
      'Azure Cosmos DB cache keyed by tournament progress',
      'Azure Static Web Apps + Functions deployment',
      'Timer-triggered results sync from a sports API',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'Python',
      'Azure Functions',
      'Azure Static Web Apps',
      'Azure Cosmos DB',
      'Pydantic',
      'Recharts',
      'Monte Carlo Simulation',
      'Elo Rating System',
    ],
    servicesSupported: ['Data Engineering', 'Backend API', 'Dashboard & Reporting'],
    businessValue: [
      'Real-time bracket probabilities update automatically when new match results arrive',
      'Cosmos DB caching prevents redundant simulation re-runs — results served instantly until standings change',
      'Elo ratings provide a principled, data-driven baseline for team strength without manual tuning',
    ],
    tldr: 'A live World Cup 2026 dashboard for a 5-person pool — it simulates the rest of the tournament 10,000× from live Elo ratings to show each player their odds of finishing 1st–5th.',
    headlineMetric:
      'The full 104-match tournament simulated 10,000× in under 3 s — pure Python on a free-tier serverless function, with baseline odds cached until the next real match finishes',
    situation:
      'Five of us run a World Cup quiniela — each picks five teams, and whoever’s teams score the most points wins the pool. Everyone wanted to know their live odds, and there was no public, inspectable model that updates as the real tournament unfolds.',
    task: 'Build and ship a live dashboard that, as real results come in, gives each player their probability of finishing 1st–5th in the pool — and lets anyone explore what-if scenarios.',
    action:
      "A Next.js 16 dashboard (static-exported to Azure Static Web Apps) talks to a Python Azure Functions API. The compute core is a pure, seedable simulation engine — an Elo logistic win-probability (1 / (1 + 10^(Δ/400))) driving a Monte Carlo over every remaining match, run 10,000× to tally each player's finish distribution. It imports no cloud or IO, and a contract test fails the build if it ever does. The Functions handler wraps it with state: baseline results are cached in Cosmos DB keyed by the completed-match count and served instantly, while a scenario override always recomputes fresh and is never cached. A timer-triggered job syncs real results from a sports API and live-updates team Elo (K=32).",
    result:
      'Live in three days from conception and serving a real World Cup pool: a Next.js + Azure Functions app with 116 tests across 9 files, green on every CI push. The pure engine simulates the full 104-match tournament 10,000× in under 3 seconds — a bound enforced on every CI run — so baseline odds are cached in Cosmos and recomputed only when a real match finishes, while scenario what-ifs run fresh.',
    learning:
      'The value here was never model sophistication — a 400-point Elo logistic with a flat draw rate is the whole match model. It was engineering the boundary: a pure, seedable, dependency-free simulation engine wrapped in a serverless handler that caches by real-world state and recomputes only for hypotheticals. The artifact I\'m proudest of is the contract test that fails the build if the word "azure" ever appears in the engine — it keeps the model something you can test and reason about offline, no cloud attached.',
    caveat:
      "It's a fast-shipped product for a real pool — strong as engineering, modest as a forecast. The probabilities are modelled, not calibrated; there's no backtest against bookmaker odds or outcomes, and the match model is deliberately simple (a fixed 25% group-draw rate, a random 1–3 goal margin, knockouts as an Elo coin-flip, and random selection among third-place qualifiers rather than the FIFA criteria). Production runs are unseeded (the seed exists only for tests), /simulate is anonymous with an unbounded run count, and deployment is still a manual trigger.",
    status: 'live',
    diagram: '/images/projects/wc26-dashboard/architecture.svg',
    diagramCaption:
      'A pure simulation engine (Elo logistic + Monte Carlo, importing no cloud) behind a Python Azure Functions API, with a Cosmos cache keyed by tournament progress and a timer job that live-updates Elo from a sports feed. The front end is a static-exported Next.js app on Azure SWA.',
    heroImage: '/images/projects/wc26-dashboard/hero.svg',
    gallery: [
      {
        src: '/images/projects/wc26-dashboard/caching-and-state.svg',
        alt: 'A flowchart: scenario overrides bypass the cache; otherwise a baseline request is served from Cosmos when the completed-match count is unchanged, or recomputed when a real match has finished.',
        caption:
          'The most interesting part: the cache is keyed by the number of completed matches, so baseline odds stay cached exactly as long as the real tournament stands still — and a what-if never touches the cache.',
      },
      {
        src: '/images/projects/wc26-dashboard/purity-boundary.svg',
        alt: 'Two zones — a pure simulation engine that imports no cloud, and the serverless IO shell around it — separated by a purity contract test.',
        caption:
          'The compute/IO boundary, enforced by a test: the engine imports no azure/cosmos/httpx, so the model stays unit-testable offline and an accidental cloud dependency becomes a red build, not a code review.',
      },
      {
        src: '/images/projects/wc26-dashboard/simulation-engine.svg',
        alt: 'The match model — Elo logistic win probability, group-stage draw rate, qualification rules, knockout coin-flip, and live Elo ratings — beside the 10,000-run Monte Carlo loop and per-player finish bars.',
        caption:
          "The match model, kept deliberately simple: one Elo logistic and a draw rate, run 10,000× to tally each player's finish distribution. The probabilities are modelled, not calibrated.",
      },
      {
        src: '/images/projects/wc26-dashboard/scope-and-honesty.svg',
        alt: 'Two panels contrasting what is proven and shipped against where the depth ends.',
        caption:
          'What is proven versus where the depth ends — live on Azure with green CI and a real cache, but no calibration, a simple match model, unseeded production runs, and a manual deploy. Named, not hidden.',
      },
    ],
  },
  {
    slug: 'jax-bo',
    title: 'JAX-BO: Bayesian Optimization Library Maintenance',
    repo: 'https://github.com/ricardogr07/JAX-BO',
    pypiUrl: 'https://pypi.org/project/jaxbo/',
    visibility: 'public',
    featured: false,
    diagram: '/images/projects/jax-bo/architecture.svg',
    heroImage: '/images/projects/jax-bo/hero.svg',
    categories: ['ml', 'scientific-python', 'developer-tooling'],
    summary:
      'Took an academic JAX Bayesian-optimization library that no longer installed on modern Python and turned it into an installable, CI-linted, automatically published PyPI package. A maintenance-and-packaging fork: the optimization math is upstream (Predictive Intelligence Lab); the distribution engineering is the contribution.',
    deliverables: [],
    techStack: ['Python', 'JAX', 'Gaussian Processes', 'PyPI', 'GitHub Actions', 'Black / Ruff'],
    servicesSupported: [
      'ML Research Tooling',
      'Bayesian Optimization',
      'Scientific Python',
      'Package Maintenance',
    ],
    businessValue: [],
    tldr: 'Now pip install jaxbo resolves to a real, current release',
    headlineMetric: 'Modernized an academic JAX Bayesian-optimization library into an installable PyPI package',
    situation:
      'A JAX Bayesian-optimization library from the Predictive Intelligence Lab had stopped working on modern Python and JAX: the manifest claimed Python 3.6 compatibility but the package no longer installed, putting the research effectively out of reach.',
    task: 'Fork it, restore modern Python/JAX compatibility, and ship it as a properly packaged, tested, automatically released PyPI library; credit the upstream research, claim only the distribution engineering.',
    action: [
      'Forked the upstream library and restored Python and JAX compatibility; the manifest claimed Python 3.6, which was never real, and the actual working floor is ~3.10.',
      'Packaged it for PyPI with Black and Ruff linting, plus CI on Python 3.10 and 3.12.',
      'Wired up automated releases: release-please reads commits and bumps the version, a tag triggers the publish job, and a PyPI OIDC Trusted Publisher authenticates by identity instead of a stored token. Left the Gaussian-process and acquisition math credited to the upstream authors throughout.',
    ],
    result:
      'pip install jaxbo works today: two releases on PyPI (0.1.1 and 0.1.2, July 2025), shipped automatically via release-please versioning and a PyPI OIDC Trusted Publisher, with CI tests on Python 3.10 & 3.12 and Black + Ruff linting. An academic clone-and-run repo is now an installable, modern-Python package.',
    status: 'pypi',
    learning:
      "In a JAX Gaussian process the hard part isn't differentiating the marginal likelihood: it's keeping that gradient finite. The closed form and its derivative have different domains of numerical safety, so the engineering goes into defending the second one: using a vector-Jacobian product instead of value-and-grad to dodge NaNs, epsilons under every square root, jitter on the Cholesky, and nanargmin across restarts because individual restarts will return NaN, and JIT will propagate that NaN silently through the whole loop before you see it. The surrogate is easy; the differentiable, JIT-able, multi-restart surrogate is where the work lives.",
    resultGallery: [
      {
        src: '/images/projects/jax-bo/how-bo-works.svg',
        alt: 'A chart showing a few tested points, a predicted curve, a shaded uncertainty band that is wide where there is no data, and an orange marker pointing to the next setting to try: high and still uncertain.',
        caption:
          'What Bayesian optimization does in plain terms: when each test is expensive, model both the predicted outcome and how unsure that prediction is, then test where the payoff is most uncertain-but-promising, homing in on the best setting in far fewer tries than a brute-force sweep.',
      },
    ],
  },
  {
    slug: 'purkinje-uv',
    title: 'PurkinjeUV: Python Package for Cardiac Simulation',
    repo: 'https://github.com/ricardogr07/purkinje-uv',
    docsUrl: 'https://ricardogr07.github.io/purkinje-uv/main/',
    colabUrl:
      'https://colab.research.google.com/github/ricardogr07/purkinje-uv/blob/feat%2Fcreate-examples-tutorials/examples/02_crt_demo.ipynb',
    visibility: 'public',
    featured: true,
    diagram: '/images/projects/purkinje-uv/architecture.svg',
    heroImage: '/images/projects/purkinje-uv/hero.svg',
    categories: ['scientific-python', 'automation'],
    summary:
      'Python package for generating Purkinje-network geometries over cardiac surface meshes, with simulation, visualization, and PyPI packaging.',
    deliverables: [],
    techStack: [
      'Python',
      'NumPy',
      'SciPy',
      'VTK',
      'PyVista',
      'meshio',
      'fim-python (eikonal)',
      'GitHub Actions',
      'PyPI',
    ],
    servicesSupported: [
      'Simulation Tools',
      'Research Software Engineering',
      'Package Development',
      'Computational Modeling',
    ],
    businessValue: [],
    tldr: 'Python library for generating Purkinje-network geometries over cardiac meshes.',
    headlineMetric: 'The fractal-Purkinje method as an installable library',
    situation:
      'This package repackages the Purkinje-network growth algorithm from Sahli Costabal et al. [2] as an installable Python library. The method was central to an M.Sc. thesis at PUC Chile on probabilistic reconstruction of the Purkinje network from ECG signals [1]: the research produced working geometry code that needed to be tested, shared, and reproducible beyond a single lab environment.',
    references: [
      {
        citation:
          'Felipe Álvarez-Barrientos, Mariana Salinas-Camus, Simone Pezzuto, and Francisco Sahli Costabal. Probabilistic learning of the Purkinje network from the electrocardiogram. arXiv:2312.09887, 2023.',
        url: 'https://arxiv.org/abs/2312.09887',
      },
      {
        citation:
          'Francisco Sahli Costabal, Daniel E. Hurtado, and Ellen Kuhl. Generating Purkinje networks in the human heart. Journal of Biomechanics, 49(12):2455–2465, 2016.',
        url: 'https://doi.org/10.1016/j.jbiomech.2015.12.025',
      },
    ],
    task: 'Take a published computational method for generating Purkinje networks and turn it into something any researcher can install in one command, run on their own mesh, and cite: a proper Python package with documentation, worked examples, and an automated release pipeline.',
    action: [
      'Built around one idea: grow the tree in a flattened 2D UV chart, then map it back to 3D.',
      'Mesh.uvmap solves two Laplace problems and carries a per-triangle arc-length metric $\\tfrac{1}{2}\\operatorname{trace}(\\mathbf{F}^\\top\\mathbf{F})$ so 2D steps stay correct on the curved surface.',
      'FractalTree.grow_tree runs the fractal growth (trunk → fascicles → ±angle bifurcation → repulsion-gradient growth → collision termination).',
      'PurkinjeTree.activate_fim adds an opt-in eikonal activation solve at a fixed conduction velocity.',
      'Reads OBJ/VTU, emits VTU/VTP line meshes via meshio and VTK.',
    ],
    status: 'pypi',
    result:
      'Published to PyPI as purkinje-uv. The committed end-to-end artifact grows a 3,094-node / 3,093-segment fractal Purkinje network on the ellipsoid demo mesh and runs it through the eikonal activation solve. The package ships with worked examples and a Google Colab notebook, so the method is reproducible without a local install.',
    learning:
      'The hard part was never a model: it was the parameterization. Growing the tree directly in 3D is a misery of projection and collision tests; flattening the surface into a Laplacian UV chart and carrying a per-triangle arc-length metric turns it into tractable 2D geometry you map back at the end.',
    pypiUrl: 'https://pypi.org/project/purkinje-uv/',
    resultGallery: [
      {
        src: '/images/projects/purkinje-uv/uv-parameterization.svg',
        alt: 'A 3D cardiac surface flattened into a 2D Laplacian UV chart, where the fractal tree is grown, then mapped back onto the 3D surface.',
        caption:
          'The core idea: solve the hard 3D problem once with a Laplace UV solve and an arc-length metric, grow on a flat chart, map the result back. No ML step anywhere.',
      },
    ],
  },
  {
    slug: 'myocardial-mesh',
    title: 'Myocardial Mesh: Cardiac Simulation Python Library',
    repo: 'https://github.com/ricardogr07/purkinje-learning-myocardial-mesh',
    visibility: 'public',
    featured: false,
    diagram: '/images/projects/myocardial-mesh/architecture.svg',
    heroImage: '/images/projects/myocardial-mesh/hero.svg',
    pypiUrl: 'https://pypi.org/project/myocardial-mesh/',
    categories: ['scientific-python'],
    deliverables: [],
    businessValue: [],
    summary:
      'A Python research library for computational cardiology: load a myocardial mesh, a Purkinje fibre tree, and electrode positions, run an iterative Purkinje-muscle coupling loop, and synthesise a 12-lead ECG. Used as the forward-simulation backbone in an M.Sc. thesis on probabilistic Purkinje-network reconstruction.',
    techStack: [
      'Python',
      'NumPy / SciPy',
      'VTK / PyVista',
      'fim-python',
      'JAX',
      'pytest',
      'tox',
      'MyPy (strict)',
    ],
    servicesSupported: [
      'Scientific Python',
      'Research Software Engineering',
      'Simulation Tooling',
      'Package Refactoring',
    ],
    headlineMetric: 'From fragile research notebook to a CI-gated, bit-exact Python library',
    tldr: 'Bit-level parity with the original research notebook: all 12 ECG leads within RMSE < 1e-6, reproduced from committed ground truth by an automated baseline test; strictly type-checked and held above 80% coverage across Python 3.10 & 3.12.',
    situation:
      'The M.Sc. thesis on probabilistic Purkinje-network reconstruction needed a reliable forward simulation: given a Purkinje geometry and a myocardial mesh, produce a 12-lead ECG to compare against measured signals. That pipeline lived in Jupyter notebooks, fragile across Python environments and impossible to validate in CI.',
    task: 'Package the notebook simulation as an installable Python library any researcher can import in one line, prove it is identical to the original notebook output, and gate that proof in CI so it can never silently drift.',
    action: [
      'Extracted the notebook into a single-entry-point library (MyocardialMesh): load a 3D myocardial mesh, a Purkinje wiring tree, and electrode positions.',
      'Built an iterative Purkinje-muscle coupling loop: fire the wiring, spread the activation wave through the muscle, synthesise the 12-lead ECG, check convergence, repeat.',
      'Delegated the wave-speed math to an external FIM solver; the library owns orchestration, I/O, coupling, and ECG assembly.',
      'Committed the original notebook output as ground truth and added a baseline regression test asserting RMSE < 1e-6 across all 12 ECG leads, gated in tox on Python 3.10 & 3.12 with strict typing and coverage above 80%.',
    ],
    result:
      'Published to PyPI as myocardial-mesh. The library became the forward-simulation backbone for the M.Sc. thesis: PurkinjeUV generates the Purkinje network geometry; myocardial-mesh loads that geometry, runs the coupling loop, and reads out the 12-lead ECG, forming the full simulation pipeline the thesis depends on. The parity test pins the library to within RMSE < 1e-6 of the original notebook across all 12 ECG leads.',
    learning:
      'Parity-first refactoring: research code becomes trustworthy not by assuming the rewrite is correct, but by pinning the original output as ground truth and asserting bit-level equivalence, which catches the silent numerical drift that domain-specific code hides.',
    status: 'active',
    resultGallery: [
      {
        src: '/images/projects/myocardial-mesh/coupling-loop.svg',
        alt: 'A four-step cycle: fire the wiring, spread the wave through the muscle, read the ECG, check whether it settled, with a dashed arrow looping back to repeat',
        caption:
          'The heart of the library: an iterative Purkinje-muscle coupling loop that runs a beat, reads the ECG, and repeats until activation converges, and can inject an early extra beat (a PVC) to study irregular rhythms.',
      },
    ],
  },
  {
    slug: 'market-lab',
    title: 'MarketLab: Reproducible Market Experiment Platform',
    repo: 'https://github.com/ricardogr07/market-lab',
    pypiUrl: 'https://pypi.org/project/marketlab/',
    visibility: 'public',
    featured: false,
    diagram: '/images/projects/market-lab/architecture.svg',
    diagramCaption:
      'A config-driven research harness: one validated contract layer in, a leak-free rolling walk-forward evaluator at the core, and a deliberately fenced paper-trading edge.',
    heroImage: '/images/projects/market-lab/hero.svg',
    categories: ['ml', 'data-engineering', 'automation'],
    summary:
      'Package-first research toolkit for market experiments: validated YAML configs, data preparation, baselines, scikit-learn training, a leak-free rolling walk-forward evaluator, diagnostics, reports, and a paper-only Alpaca trading path.',
    deliverables: [
      'Validated YAML experiment configs',
      'Data preparation pipeline',
      'Baseline strategies',
      'ML model training workflows',
      'Leak-free rolling walk-forward folds',
      'Diagnostics and calibration',
      'Reports and plots',
      'Paper-only Alpaca trading path',
      'FastMCP server + Docker',
    ],
    techStack: [
      'Python',
      'pandas',
      'scikit-learn',
      'yfinance',
      'Docker',
      'YAML configs',
      'Alpaca paper trading',
      'FastMCP',
      'tox / uv CI',
    ],
    servicesSupported: [
      'ML Prototyping',
      'Data Science Pipelines',
      'Experiment Tracking',
      'Financial Analytics',
      'Python Automation',
    ],
    businessValue: [
      'Package-first structure means experiments are reproducible — not just notebooks that ran once',
      'Walk-forward evaluation avoids look-ahead bias that invalidates most notebook backtests',
      'YAML configs make it easy to hand off experiments to another engineer or stakeholder',
    ],
    tldr: 'A pip-installable research harness for reproducible market experiments: a leak-free rolling walk-forward evaluator, a hand-validated config contract, and an Alpaca path fenced to paper-only in code.',
    situation:
      'Financial experiments rot into messy notebooks with weak validation and unreproducible results. The subtle killer is look-ahead leakage — training on information that would not have existed at decision time — which silently inflates every amateur backtest into optimism.',
    task: 'A package-first toolkit for reproducible market experiments — installable, config-driven, CI-gated, and published. Framed explicitly as research/experimentation, NOT a money-making system: the engineering goal is trustworthiness, not returns.',
    action:
      'Validated YAML config → data prep → scikit-learn training → rolling walk-forward evaluation (fixed-width window that slides and drops old data, NOT expanding), with a leak guard that trains only on rows whose label resolved before the cutoff plus a configurable embargo → calibration/diagnostics → reports + plots → a paper-only Alpaca path whose client refuses any non-paper endpoint in code → packaged behind three CLIs, a FastMCP server, and Docker.',
    headlineMetric:
      'A config-driven, leak-free walk-forward harness that ships as a real package — on PyPI (0.1.0 → 0.2.0), 678 tests across 77 files green on an 8-job tox CI, with look-ahead leakage caught by an executable test rather than a code review.',
    result:
      'Shipped to PyPI as marketlab 0.2.0 via an OIDC trusted-publisher release; 678 tests / 77 files green on an 8-job tox CI; three CLIs, a real FastMCP server, and a Docker image. Results are reproduced from config rather than committed — there is no checked-in P&L number, by design.',
    status: 'pypi',
    learning:
      "The model is the cheap part; the contract around it is the expensive part. The sklearn estimators are one-line imports with a fixed random_state — but the config validation, the leak-free fold builder, and the paper-trading fence are where the real engineering went. In quant tooling, the work that earns trust isn't the model: it's the harness that makes a result trustworthy and a mistake impossible.",
    caveat:
      'It is a research harness, not a forecaster — no calibration/backtest claim and no alpha claim. The walk-forward is rolling (fixed-width, drops old data), not expanding. No coverage is measured and CI runs a single Python version (3.12). No result artifact is committed (reproduced from config, by design). pipeline.py (277 KB) and config.py (88 KB) are acknowledged monoliths — the repo ships its own SOLID-audit and extraction-readiness docs.',
    limitations:
      'Walk-forward results reflect historical data only. The Alpaca path is fenced to paper endpoints in code and has no live-account integration. Educational and paper-trading use only. Past backtest performance does not guarantee future results.',
    gallery: [
      {
        src: '/images/projects/market-lab/walk-forward-leak-guard.svg',
        alt: 'A timeline split into a train block (learns from the past), a gap, and a test block (scored on the future), with a note that a test proves the model cannot peek ahead',
        caption:
          'The leak guard: training is gated on target_end_date ≤ cutoff (not just signal_date), so a row whose label resolves after the cutoff is excluded — and an executable test proves it.',
      },
      {
        src: '/images/projects/market-lab/config-contract.svg',
        alt: 'A three-step flow: your settings file, then a checked stage (weights add up, limits in range, known options only), then anything invalid stops immediately with no quiet wrong results',
        caption:
          'The config contract: YAML becomes a hand-validated dataclass spec. Weights must sum to 1.0, caps stay in range, calibration modes are checked — invalid configs raise before any compute.',
      },
      {
        src: '/images/projects/market-lab/paper-safety-fence.svg',
        alt: 'A trade order passing through a shield-shaped safety gate that allows a practice account and blocks a real-money account',
        caption:
          'The safety fence: a real Alpaca client whose _ensure_paper_endpoint() raises on any non-paper host. The refusal to touch real money is an enforced invariant, not a README disclaimer.',
      },
      {
        src: '/images/projects/market-lab/scope-and-honesty.svg',
        alt: "Two columns contrasting what's solid (installable package, fair testing, validated settings, refuses real money) against where it stops (no claim it makes money, results re-run not saved, single Python version, large files flagged for tidy-up)",
        caption:
          'Honest scope: strong as a shipped engineering story (PyPI, 678 tests, leak-proof, fenced); deliberately modest as a forecaster — every boundary named, all verifiable from the repo.',
      },
    ],
  },
  {
    slug: 'financial-dashboard-demo',
    title: 'Financial Data Dashboard Demo',
    liveUrl: '/demo/financial-dashboard',
    visibility: 'demo-only',
    featured: false,
    categories: ['dashboard', 'data-engineering'],
    summary:
      'End-to-end demo of a personal finance dashboard: synthetic brokerage statements ingested by a Python ETL pipeline into DuckDB, surfaced as a React/Next.js allocation and performance dashboard.',
    problem:
      'Personal finance data is highly sensitive — demonstrating a real brokerage dashboard publicly is not an option. Yet the engineering challenge of ingesting, normalizing, and visualizing statement data is real and worth showing.',
    solution:
      'Built a fully synthetic version of the private dashboard: a pipeline that parses fake PDF statements, normalizes holdings, and publishes a Next.js dashboard with allocation charts, monthly return charts, goal tracking, and an animated ETL pipeline log — all using fabricated data.',
    deliverables: [
      'Synthetic brokerage statement dataset (18 months, 8 positions)',
      'Normalized holdings and monthly-returns schema (DuckDB pattern)',
      'Allocation breakdown chart (hand-written SVG)',
      'Monthly returns chart vs benchmark (hand-written SVG)',
      'Goals and milestones tracker',
      'Animated ETL pipeline rebuild log',
      'OG image for LinkedIn Services media',
    ],
    techStack: [
      'Next.js 16',
      'TypeScript',
      'Tailwind v4',
      'React 19',
      'SVG charts',
      'DuckDB (pipeline pattern)',
      'Python ETL (pipeline pattern)',
    ],
    servicesSupported: [
      'Dashboard Development',
      'Data Engineering',
      'Financial Analytics',
      'ETL Pipelines',
      'Python Automation',
    ],
    businessValue: [
      'Proves dashboard + data pipeline skills without exposing any real financial data',
      'ETL pipeline log makes the architecture visible to non-technical stakeholders',
      'Allocation and performance charts use hand-written SVG — no runtime chart dependency',
      'Directly supports LinkedIn Services portfolio media with a public live URL',
    ],
  },
  {
    slug: 'query-lab-demo',
    title: 'Portfolio Query Lab',
    liveUrl: '/demo/query-lab',
    visibility: 'demo-only',
    featured: false,
    categories: ['data-engineering', 'dashboard'],
    summary:
      'Interactive SQLite query lab running in the browser via sql.js/WebAssembly. Query synthetic portfolio holdings, monthly returns, and goals with plain SQL — no server, no backend.',
    problem:
      'Showing SQL and data-engineering skills on a portfolio requires either a live backend (operational cost, attack surface) or a restricted sandbox. Neither is ideal for an always-on public demo.',
    solution:
      'Embedded SQLite directly in the browser using sql.js (SQLite compiled to WASM). The engine loads once, populates three tables from synthetic portfolio data, and executes arbitrary SQL client-side — zero server required.',
    deliverables: [
      'In-browser SQLite via sql.js/WASM (no backend)',
      'Three queryable tables: holdings, monthly_returns, goals',
      'Seven preset queries covering aggregation, filtering, and alpha calculation',
      'Live SQL editor with syntax-aware results table',
      'Schema reference sidebar',
      'Demo banner — all data synthetic',
    ],
    techStack: ['sql.js', 'WebAssembly', 'Next.js 16', 'TypeScript', 'Tailwind v4', 'React 19'],
    servicesSupported: [
      'Data Engineering',
      'SQL Analytics',
      'Dashboard Development',
      'ETL Pipelines',
      'Python Automation',
    ],
    businessValue: [
      'Proves SQL fluency interactively — visitors run real queries, not just see screenshots',
      'Zero backend means zero ops cost and no attack surface for a public demo',
      'WASM-based SQLite is the same engine used in DuckDB-style analytical pipelines',
      'Preset queries demonstrate aggregation, time-series, and goal-tracking patterns relevant to data-engineering clients',
    ],
  },
]

export const publicProjects = projects.filter((p) => p.visibility === 'public')
export const demoProjects = projects.filter((p) => p.visibility === 'demo-only')
export const visibleProjects = [...publicProjects, ...demoProjects]
export const featuredProjects = publicProjects.filter((p) => p.featured)
export const secondaryProjects = publicProjects.filter((p) => !p.featured)
