# LiFQ Marketing Website — VS Code / Claude Code Handoff Plan

**Goal:** Move the LiFQ marketing website from Wix to a Next.js + Vercel project owned in your VS Code workspace, built with Claude Code, integrating with your existing Supabase + Stripe (Vercel) work.

**Source:** https://octaviorodriguez68.wixsite.com/my-site-1 (Home + Beta Signup)

**Complete content extraction:** See `06-WIX-CONTENT-EXTRACTION.md` — every page, section, copy block, form field, and rebuild improvement captured. Drop this into your VS Code project at `docs/wix-content-extraction.md` so Claude Code has it as a reference.

---

## Architecture decision

**One Next.js project on Vercel** that serves three audiences over time:

| Surface | Path | Status |
|---|---|---|
| Marketing site | `/`, `/beta-signup`, `/privacy`, `/terms` | Build now |
| Stripe billing flows | `/api/stripe/*`, `/billing`, `/checkout` | Your existing work — merge in |
| Customer dashboard (post-MVP) | `/app/*` (gated by Supabase auth) | Future |

The Expo mobile app stays separate. The marketing site, billing pages, and (later) web dashboard share auth via Supabase and deploy together to Vercel.

---

## Phase 0 — Decide the repo strategy (5 min, before Claude Code)

Open your existing Vercel payment project and answer:

1. **Is the existing payment work already a Next.js 14+ App Router project?**
   - **Yes** → Add marketing routes to it. Skip Phase 1 below; jump to Phase 2.
   - **No** (it's Pages Router, separate scaffolding, or starter template) → Create a new `lifq-web` Next.js project and migrate the payment work into it. Easier than retrofitting.

2. **Where does the brand document live in your VS Code workspace?**
   - Note the path (e.g., `~/projects/lifq/docs/brand-guidelines.pdf` or wherever). You'll point Claude Code at it.

3. **Do you have the Supabase project URL and anon key handy?**
   - You'll need them for `.env.local`. Get from supabase.com → Project Settings → API.

---

## Phase 1 — Bootstrap the Next.js project (10 min)

In VS Code terminal:

```bash
# In your workspace root
npx create-next-app@latest lifq-web --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd lifq-web

# Install shadcn/ui
npx shadcn@latest init
# Choose: New York style, Slate base color, CSS variables YES

# Add components we'll need
npx shadcn@latest add button input textarea select label card radio-group checkbox

# Install supporting libraries
npm install @supabase/supabase-js @supabase/ssr
npm install lucide-react
npm install -D @types/node

# (If integrating Stripe work) install Stripe SDKs
npm install stripe @stripe/stripe-js
```

**Initialize the brand tokens** — copy `tailwind.config.ts` from artifact `03-tailwind-config.ts` over the generated one.

**Add the project rules** — drop `CLAUDE.md` (artifact `02-CLAUDE.md`) at the repo root. Claude Code reads this automatically and uses it as project context for every prompt.

**Add the content extraction** — create a `docs/` folder at the repo root and drop `06-WIX-CONTENT-EXTRACTION.md` there as `docs/wix-content-extraction.md`. This is the source of truth for all marketing copy and form structure.

**Add your brand document** — drop your existing brand guidelines PDF into `docs/` as well (e.g., `docs/brand-guidelines.pdf`).

**Open Claude Code in VS Code** and paste the kickoff prompt from artifact `04-claude-code-kickoff-prompt.md`.

---

## Phase 2 — File-by-file build order

Tell Claude Code to build in this order. Each step is one prompt; review and commit between steps.

### Step 1: Brand foundation
- Read brand document from `/docs/brand-guidelines.pdf` (or wherever)
- Update `tailwind.config.ts` with exact tokens
- Update `src/app/globals.css` with CSS variables for brand colors
- Set up font loading (Poppins + Source Sans 3 via `next/font/google`)

### Step 2: Layout & shared components
- `src/components/layout/Nav.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/Container.tsx`
- Update `src/app/layout.tsx` with Nav + Footer

### Step 3: Homepage sections
- `src/components/home/Hero.tsx`
- `src/components/home/ProblemGrid.tsx`
- `src/components/home/SolutionGrid.tsx`
- `src/components/home/RealWorldQuestions.tsx`
- `src/components/home/HowItWorks.tsx`
- `src/components/home/PrivacyCommitments.tsx`
- `src/components/home/FinalCTA.tsx`
- Assemble in `src/app/page.tsx`

### Step 4: Beta signup
- Supabase migration for `beta_signups` table
- `src/lib/supabase/server.ts` and `src/lib/supabase/client.ts`
- `src/app/beta-signup/page.tsx` — form UI
- `src/app/api/beta-signup/route.ts` — POST handler with validation (Zod) → Supabase insert → Resend confirmation email
- Success state / thank-you page

### Step 5: Legal pages
- `src/app/privacy/page.tsx`
- `src/app/terms/page.tsx`
- Placeholder content you can replace with real legal copy

### Step 6: SEO & analytics
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- Open Graph metadata in `layout.tsx` and per-page
- Install Vercel Analytics: `npm install @vercel/analytics` and add to root layout

### Step 7: Merge Stripe payment work
- Bring your existing Stripe code into `src/app/api/stripe/` and `src/app/billing/`
- Wire from Nav (a "Pricing" or "Upgrade" link) or from the marketing page CTAs once you're past beta
- Verify webhooks still work after the move

### Step 8: Deploy
- Push to GitHub
- Connect repo to Vercel
- Set environment variables in Vercel dashboard (see `.env.example` in artifact 05)
- Deploy preview → test beta signup end-to-end → promote to production
- Update DNS for `lifq.ai` to point at Vercel (or set up Vercel domain)

---

## Phase 3 — Cut over from Wix (1 day)

1. Verify Vercel deployment on `lifq-web.vercel.app` works completely
2. Test beta signup writes to Supabase and triggers email
3. Add custom domain `lifq.ai` in Vercel project settings
4. Update DNS A/CNAME records at your domain registrar
5. Wait for propagation (usually <1 hour)
6. Cancel Wix subscription

---

## Database schema for beta signups

```sql
-- Run in Supabase SQL editor
create table public.beta_signups (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  age_range text check (age_range in ('25-29','30-39','40-49','50-59','60+')),
  household_type text check (household_type in ('single','married_partnered','married_with_children','single_parent')),
  policy_count text check (policy_count in ('1-2','3-5','6+')),
  policy_types text[] not null default '{}',
  biggest_frustration text,
  status text not null default 'pending' check (status in ('pending','invited','accepted','declined')),
  invited_at timestamptz,
  notes text,
  unique (email)
);

create index beta_signups_status_idx on public.beta_signups (status);
create index beta_signups_created_at_idx on public.beta_signups (created_at desc);

-- RLS: nobody reads from the client; only service role writes via API route
alter table public.beta_signups enable row level security;
-- No policies = no client access. The API route uses service role key server-side.
```

---

## What stays in scope vs. out of scope

**In scope for this rebuild:**
- Pixel-reasonable rebuild of current Wix homepage and beta signup form
- Brand identity properly applied (currently weak on Wix)
- Working Supabase-backed form with email confirmation
- SEO foundations (sitemap, robots, OG tags)
- Vercel deploy with custom domain

**Out of scope (later):**
- Customer dashboard / authenticated app surface
- Blog / content marketing
- A/B testing infrastructure
- Internationalization
- Full design system documentation

---

## Estimated time

| Phase | Time |
|---|---|
| Bootstrap (Phase 1) | 10–20 min |
| Build with Claude Code (Phase 2 steps 1–6) | 2–4 hours of active work |
| Merge Stripe work (Step 7) | 30–60 min depending on existing code |
| Deploy + cutover (Phase 3) | 1–2 hours including DNS propagation |

**Total: ~one focused day** to fully replace the Wix site with a production Vercel deployment.
