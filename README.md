# LifQ Marketing Website

The public marketing site and subscription entry point for [LifQ](https://lifq.ai) — the AI-powered Household Protection Intelligence platform. Built with Next.js 16 on Vercel.

---

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router, TypeScript, Server Components) |
| Styling | Tailwind CSS v4 + shadcn/ui (New York style) |
| Animations | Framer Motion 12 |
| Database / Auth | Supabase (Postgres + RLS) |
| Payments | Stripe (subscriptions) |
| Email | Resend |
| Analytics | Vercel Analytics + PostHog |
| Deployment | Vercel (preview per branch, production on `master`) |
| CI/CD | GitLab CI → Vercel CLI |
| Issue tracking | Beads (`bd`) |
| Forms | React Hook Form + Zod |

---

## Project structure

```text
src/
├── app/
│   ├── layout.tsx               # Root layout — fonts, Nav, Footer, Analytics
│   ├── page.tsx                 # Marketing homepage
│   ├── pricing/page.tsx         # Pricing page (Free / Solo / Family tiers)
│   ├── beta-signup/
│   │   ├── page.tsx             # Beta application form
│   │   └── thank-you/page.tsx   # Confirmation page
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── api/
│   │   ├── beta-signup/route.ts # POST — validates, inserts to Supabase, sends email
│   │   └── checkout/route.ts    # POST — creates Stripe Checkout session
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/                      # shadcn primitives + ButtonLink wrapper + animate.tsx
│   ├── layout/                  # Nav, Footer, Container
│   └── home/                    # Homepage sections (Hero, AppShowcase, etc.)
├── lib/
│   ├── supabase/
│   │   ├── client.ts            # Browser client (anon key)
│   │   ├── server.ts            # Server client (cookies)
│   │   └── admin.ts             # Service role client (API routes only)
│   ├── validations/             # Zod schemas
│   └── utils.ts                 # cn() helper
└── types/
```

---

## How this site connects to the LifQ app

LifQ is two separate codebases that share the same backend infrastructure:

```text
lifq.ai  (this repo — Next.js / Vercel)
    │
    ├── Shared Supabase project  ──►  api-lifq.pakal.io  (FastAPI, homelab)
    │                                          │
    └── Shared Stripe account   ──►  LifQ mobile app  (React Native / Expo)
```

### Shared Supabase project

Both the marketing site and the LifQ backend point at the **same** Supabase project (`dfnemjldftwzwjturglh.supabase.co`). All user data lives in one place:

| Table | Written by | Read by |
| --- | --- | --- |
| `beta_signups` | `lifq-web` API route | LifQ team via Supabase dashboard |
| `auth.users` | LifQ mobile app (Supabase Auth) | Both apps |
| `subscriptions` | LifQ FastAPI backend (Stripe webhook) | Both apps |
| `policies`, `documents`, etc. | LifQ mobile app | LifQ mobile app |

**Beta → app onboarding flow:**

1. Applicant submits the beta signup form on this site → row inserted into `beta_signups`.
2. Team reviews applications and accepts candidates.
3. Team creates the user's Supabase Auth account (same project — no migration needed).
4. User installs the mobile app, signs in, and their account is already in the database.
5. Subscription status managed by Stripe is visible to both the API and the app.

### Shared Stripe account

The pricing page on this site creates Stripe Checkout sessions using the **same price IDs** already configured in the LifQ backend:

| Plan | Billing | Price ID |
| --- | --- | --- |
| Solo | Annual | `price_1TZcsO2WR09lqacdsaG2iSuh` |
| Solo | Monthly | `price_1TZcsO2WR09lqacd2b3XRMbZ` |
| Family | Annual | `price_1TZcsY2WR09lqacdvBxn0Ql0` |
| Family | Monthly | `price_1TZcsZ2WR09lqacddMtBCg4f` |

**Subscription flow:**

1. User clicks a plan on `/pricing` → `POST /api/checkout` creates a Stripe Checkout session.
2. Stripe redirects the user to its hosted checkout page.
3. On successful payment, Stripe fires a webhook → **the LifQ FastAPI backend** handles it and writes the subscription record to Supabase.
4. The mobile app reads subscription status from Supabase to unlock premium features.

> The Stripe webhook handler lives in the LifQ FastAPI backend, not in this repo. Stripe must be configured to send events to `https://api-lifq.pakal.io/stripe/webhook`.

### Shared services

| Service | Purpose in this site | Purpose in LifQ app |
| --- | --- | --- |
| Resend (`RESEND_API_KEY`) | Beta signup confirmation emails | Transactional app emails |
| PostHog (`NEXT_PUBLIC_POSTHOG_KEY`) | Web analytics | Mobile app analytics |

Both apps share the same Resend sender domain and PostHog project, giving a unified view of the full user funnel from marketing site visit through mobile app usage.

### Domain architecture

| Domain | Destination | Codebase |
| --- | --- | --- |
| `lifq.ai` | Vercel | This repo — marketing + billing entry |
| `app.lifq.ai` | Vercel (planned) | Future authenticated web dashboard |
| `api-lifq.pakal.io` | Cloudflare tunnel → homelab | LifQ FastAPI backend |
| `lifq://` (deep link) | Device | React Native (Expo) mobile app |

---

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and fill in values (see the LifQ backend .env for shared keys)
cp .env.example .env.local

# 3. Start the dev server
npm run dev
# Accessible at http://localhost:3001
# Also reachable on your LAN at http://<machine-ip>:3001
```

### Required environment variables

| Variable | Where to get it |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Project Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Project Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Project Settings → API (service role) |
| `STRIPE_SECRET_KEY` | Stripe Dashboard → API Keys |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe Dashboard → API Keys |
| `STRIPE_WEBHOOK_SECRET` | Stripe Dashboard → Webhooks |
| `RESEND_API_KEY` | Resend Dashboard |
| `RESEND_FROM_EMAIL` | A verified Resend sender (e.g. `hello@lifq.ai`) |
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog → Project Settings |

> All keys are **shared** with the LifQ backend. Copy them from the LifQ `.env` file — do not create a new Supabase or Stripe project.

### Database setup

The `beta_signups` table must exist in Supabase before the signup form works. Run the migration once:

```bash
# Option A — Supabase CLI
supabase db push

# Option B — paste the file contents into the Supabase SQL editor
# File: supabase/migrations/0001_beta_signups.sql
```

---

## CI/CD

### Architecture

```text
git push → GitLab (source of truth, gitlab.pakal.io)
               │
               ├── GitLab CI pipeline (validate → build → test)
               │     ├── typecheck  (tsc --noEmit)
               │     ├── lint       (eslint)
               │     ├── build      (next build — artifact: .next/)
               │     └── e2e        (Playwright / Chromium)
               │
               └── Push mirror — automatic, seconds
                         │
                         ▼
                   GitHub (read-only mirror)
                         │
                         └── Vercel webhook
                               ├── feature branch → preview URL (7-day TTL)
                               └── master → lifq.ai (production)
```

GitLab is the **source of truth**. GitHub is a read-only push mirror. Vercel watches GitHub and deploys automatically — no Vercel tokens are needed in GitLab CI.

### Pipeline stages

| Stage | Jobs | Triggered by |
| --- | --- | --- |
| validate | `typecheck`, `lint` | every push |
| build | `build` — produces `.next/` artifact | every push |
| test | `e2e` — Playwright / Chromium against prod build | every push |

### E2E tests (Playwright)

Tests live in `e2e/`. Each spec covers a key user flow:

| Spec | What it covers |
| --- | --- |
| `e2e/home.spec.ts` | Homepage renders, hero copy, AppShowcase, FinalCTA, CTA links |
| `e2e/nav.spec.ts` | Pricing link, Log in link, Join the beta, logo navigation |
| `e2e/pricing.spec.ts` | 3 plan cards, Annual/Monthly toggle, Most popular badge |
| `e2e/beta-signup.spec.ts` | Form fields, honeypot hidden, validation errors, submit button |

**Run locally** (dev server starts automatically if not already running):

```bash
npm run test:e2e          # headless run
npm run test:e2e:ui       # interactive UI mode
npm run test:e2e:report   # open last HTML report
```

In CI, tests run against `npm run start` (production build) using the official Playwright Docker image (`mcr.microsoft.com/playwright:v1.60.0-jammy`). Reports are stored as job artifacts for 7 days.

### Pre-commit hooks (Husky + lint-staged)

Every commit runs ESLint (with auto-fix) and `tsc --noEmit` against staged `.ts`/`.tsx` files before the commit is recorded. Bypass with `git commit --no-verify` for WIP commits.

### Vercel deployment

Vercel connects to the **GitHub mirror** (not GitLab directly) and deploys automatically on push.

| Git event | Vercel action | Result |
| --- | --- | --- |
| Push to any non-`master` branch | Preview build | Preview URL |
| Push to `master` | Production build | `lifq.ai` |

Vercel environment variables are managed in **Vercel Dashboard → Project Settings → Environment Variables**. They are not set in GitLab CI.

### GitLab CI/CD variables

Set these in GitLab → Settings → CI/CD → Variables:

| Variable | Used by |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | `build`, `e2e` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `build`, `e2e` |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `build`, `e2e` |

`VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` are **not needed** — Vercel deploys independently from GitHub.

### One-time mirror setup

1. Create an empty GitHub repo (no README, no `.gitignore`)
2. Generate a GitHub PAT with `repo` scope
3. GitLab → Settings → Repository → Mirroring → **Add push mirror**
   - URL: `https://github.com/<handle>/lifq-web.git`
   - Auth: GitHub username + PAT as password
   - Mirror protected branches only: **No** (Vercel needs all branches for previews)
4. Vercel → Project Settings → Git → connect to the GitHub repo → production branch: `master`

---

## Key design decisions

**Why does this site talk directly to Supabase and Stripe instead of going through the LifQ API?**
The marketing site is stateless and Vercel-hosted. Routing every request through the homelab FastAPI backend would add latency and a single point of failure. Instead, this site calls Supabase and Stripe directly from Next.js API routes, while the FastAPI backend handles only what it owns: Stripe webhooks and authenticated mobile app operations.

**Why are the Stripe price IDs hardcoded as fallbacks in the pricing page?**
So the pricing page renders correctly without environment variables during local development and CI builds. Set `NEXT_PUBLIC_STRIPE_SOLO_ANNUAL_PRICE_ID` etc. in Vercel to override them in production.

**Why `ButtonLink` instead of `<Button asChild>`?**
This project uses `@base-ui/react` rather than Radix UI, so shadcn's Button does not support the `asChild` prop. `ButtonLink` (`src/components/ui/button-link.tsx`) applies button variant styles directly to a Next.js `<Link>`, achieving the same result without `asChild`.
