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

GitLab CI drives all deployments via the Vercel CLI (`.gitlab-ci.yml`).

| Git event | Jobs that run | Outcome |
| --- | --- | --- |
| Push to any branch | `typecheck`, `lint`, `build` | Validation gate |
| Push to any non-`master` branch | `deploy-preview` | Vercel preview URL (7-day TTL) |
| Push to `master` | `deploy-production` | Live deploy to `lifq.ai` |

**Required GitLab CI/CD variables** (set in GitLab → Settings → CI/CD → Variables):

| Variable | Value |
| --- | --- |
| `VERCEL_TOKEN` | From Vercel → Account Settings → Tokens |
| `VERCEL_ORG_ID` | From `vercel link` output or Vercel project settings |
| `VERCEL_PROJECT_ID` | From `vercel link` output or Vercel project settings |
| `NEXT_PUBLIC_SUPABASE_URL` | Shared Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Shared Supabase anon key |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |

---

## Key design decisions

**Why does this site talk directly to Supabase and Stripe instead of going through the LifQ API?**
The marketing site is stateless and Vercel-hosted. Routing every request through the homelab FastAPI backend would add latency and a single point of failure. Instead, this site calls Supabase and Stripe directly from Next.js API routes, while the FastAPI backend handles only what it owns: Stripe webhooks and authenticated mobile app operations.

**Why are the Stripe price IDs hardcoded as fallbacks in the pricing page?**
So the pricing page renders correctly without environment variables during local development and CI builds. Set `NEXT_PUBLIC_STRIPE_SOLO_ANNUAL_PRICE_ID` etc. in Vercel to override them in production.

**Why `ButtonLink` instead of `<Button asChild>`?**
This project uses `@base-ui/react` rather than Radix UI, so shadcn's Button does not support the `asChild` prop. `ButtonLink` (`src/components/ui/button-link.tsx`) applies button variant styles directly to a Next.js `<Link>`, achieving the same result without `asChild`.
