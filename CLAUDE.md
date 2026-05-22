# LiFQ Marketing Website — Project Instructions for Claude Code

This file is read by Claude Code on every prompt. Keep it current as the project evolves.

## What this project is

The LiFQ marketing website and post-marketing app surfaces. LiFQ is an AI-powered platform that helps families organize, understand, and manage their insurance, benefits, and warranties. This Next.js project replaces a Wix site at https://octaviorodriguez68.wixsite.com/my-site-1 and will eventually host:
- Marketing pages (current focus)
- Stripe billing and payment flows (in progress, merging in)
- Authenticated customer dashboard (future)

The mobile app (Expo / React Native) is a separate project. Do not modify it from this codebase.

## Stack

- **Framework:** Next.js 15 (App Router, TypeScript, Server Components by default)
- **Styling:** Tailwind CSS + shadcn/ui (New York style)
- **Database/Auth:** Supabase (Postgres + Auth + RLS)
- **Payments:** Stripe (subscriptions, Run-based metering)
- **Email:** Resend
- **Analytics:** Vercel Analytics + PostHog
- **Deployment:** Vercel
- **Validation:** Zod
- **Forms:** React Hook Form + Zod resolvers

## Brand identity

Read `/docs/brand-guidelines.pdf` (or wherever the brand doc lives in this workspace) before any visual work. Confirmed tokens:

**Colors**
- Trust Blue `#1976D2` — primary, CTAs, links
- Community Teal `#26A69A` — accent, "intelligence" / AI themes
- Friendly Orange `#FB8C00` — warm accent, secondary CTAs
- Deep Navy `#0D2A47` — text headings, dark sections
- Off-white `#FAFBFC` — alternating section backgrounds

**Typography**
- Headings: Poppins, weight 500, letter-spacing -0.01em to -0.02em
- Body: Source Sans 3, weight 400, line-height 1.6
- Load via `next/font/google` in `src/app/layout.tsx`

**Voice**
- Plain-spoken, calm, family-oriented
- Sentence case for all headings — never Title Case, never ALL CAPS
- Avoid insurance jargon when explaining the product

## Coding conventions

- TypeScript strict mode. No `any` without justification in a comment.
- Server Components by default. Add `"use client"` only when needed (interactivity, hooks, browser APIs).
- Route handlers in `src/app/api/*/route.ts` use named exports (`GET`, `POST`).
- Validate every API input with Zod before touching the database.
- Use Supabase service role key only in server-side code (API routes, Server Actions). Never expose it to the client.
- Tailwind utility classes inline; extract a component when JSX is reused or exceeds ~80 lines.
- shadcn/ui components live in `src/components/ui/`. Don't modify them in place — wrap them.
- Prefer Server Actions over API routes for form mutations triggered from React components. Use API routes for webhooks and third-party callbacks.

## File organization

```
src/
├── app/
│   ├── layout.tsx                 # Root layout, fonts, Nav, Footer
│   ├── page.tsx                   # Marketing homepage
│   ├── beta-signup/
│   │   ├── page.tsx               # Form page
│   │   └── thank-you/page.tsx     # Success state
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── api/
│   │   ├── beta-signup/route.ts   # POST handler
│   │   └── stripe/                # Stripe webhooks (merged in)
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css
├── components/
│   ├── ui/                        # shadcn primitives
│   ├── layout/                    # Nav, Footer, Container
│   ├── home/                      # Homepage sections
│   └── forms/                     # Reusable form components
├── lib/
│   ├── supabase/
│   │   ├── client.ts              # Browser client
│   │   ├── server.ts              # Server-side client (cookies)
│   │   └── admin.ts               # Service role client (API routes only)
│   ├── validations/               # Zod schemas
│   └── utils.ts                   # cn() helper, etc.
└── types/                         # Shared TypeScript types
```

## Source content reference

**Complete content extraction lives in `docs/wix-content-extraction.md`** (copy this from the handoff package). It contains every page, section, form field, copy block, and rebuild recommendation captured from the Wix site. Read it before any content work.

Quick reference below — full detail in the extraction doc.

### Hero
- **H1:** Your family's coverage — organized, understood, and ready when it matters most.
- **Subhead:** LifQ is an AI-powered platform that helps families organize, understand, and manage their insurance, benefits and warranties so they can make smarter protection decisions.
- **CTA:** Join the beta waitlist
- **Note:** Access is free for invitees. Limited beta spots available.

### Problem section — "Insurance and benefits shouldn't feel this complicated"
- **Fragmented** — Policies across apps, emails, PDFs, and portals.
- **Confusing** — Deductibles, exclusions, overlapping coverage.
- **Expensive** — You may already be paying for coverage twice.
- **Uncertain** — If something happens, will your family know what protection you have?

### Solution section — "Clarity across everything you already pay for"
- **Clarity** — See all your insurance, benefits, and warranties in one place — clearly organized and easy to understand.
- **Intelligence** — AI analyzes your policies to identify coverage gaps, overlaps, renewal risks, and savings opportunities.
- **Family Confidence** — Ensure the people who depend on you stay informed and prepared with shared access and AI guidance across your protection portfolio.

### Real-world questions LifQ answers
- "I'm renting a car next week. What coverage should I select?"
- "Am I overpaying for overlapping policies?"
- "Does my credit card already cover travel insurance?"
- "What benefits am I not using?"

### How it works
- **01 Upload** — Users upload insurance policies, benefits, warranty documents or add membership information.
- **02 Analyze** — LifQ AI reads and structures the documents, then analyzes the entire portfolio for coverage gaps, overlapping policies, renewal risk, and cost optimization.
- **03 Protect** — LifQ helps families act on insights by optimizing coverage, avoiding overpaying, preparing for claims, and sharing protection information with loved ones.

### Privacy commitments
- Your documents remain private
- No selling of data
- Bank-level encryption
- You control your information

### Vision statement
At LifQ we are building the Personal Protection Operating System for households — a world where every family has complete clarity about their financial protections, where people can:
- Understand their coverage
- Optimize their policies
- Protect their loved ones
- Navigate life events with confidence

### Final CTA
- **Headline:** Ready for clarity?
- **Body:** Our beta application is a brief 2-minute step to request your private invite.
- **CTA:** Go to beta application
- **Note:** Free during beta. Limited spots.

### Beta signup page

**Heading:** Request your invite

**Intro:** LifQ helps households understand and maximize the insurance and benefits they already have. This is a private beta with limited capacity; applications are reviewed to ensure quality, so acceptance is not guaranteed for everyone.

**Form fields (in display order):**
1. First name — text, required
2. Last name — text, required
3. Email — email, required, unique
4. Age range — select, required: 25-29 / 30-39 / 40-49 / 50-59 / 60+
5. Household — select or radio, required: Single / Married/Partnered / Married with Children / Single Parent
6. Policy count — radio, required: 1-2 / 3-5 / 6+
7. Policy types — checkbox group, multi-select, ≥1 required: Auto / Home/Renters / Health / Life / Credit Card w/Benefits / Extended Warranties / Other
8. Biggest frustration — textarea, optional, max 1000 chars
9. Honeypot field — hidden, must be empty (bot protection)

**Submit button label:** Request my invite (improved from Wix's plain "Submit")

**Full Zod schema, database schema, and display label mappings are in `docs/wix-content-extraction.md`.**

## Environment variables

See `.env.example`. Never commit `.env.local`. Service role keys go only in Vercel project env vars, never in client-accessible code.

## When in doubt

- Match Apple/Linear-tier visual quality, not Wix-tier
- Prefer fewer, sharper sections over more, weaker ones
- Mobile-first responsive — test at 380px viewport before assuming a layout works
- Accessibility: every form input has a `<label>`, every image has `alt`, keyboard nav works
- Performance: lighthouse score >95 on mobile is the bar


<!-- BEGIN BEADS INTEGRATION v:1 profile:minimal hash:ca08a54f -->
## Beads Issue Tracker

This project uses **bd (beads)** for issue tracking. Run `bd prime` to see full workflow context and commands.

### Quick Reference

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --claim  # Claim work
bd close <id>         # Complete work
```

### Rules

- Use `bd` for ALL task tracking — do NOT use TodoWrite, TaskCreate, or markdown TODO lists
- Run `bd prime` for detailed command reference and session close protocol
- Use `bd remember` for persistent knowledge — do NOT use MEMORY.md files

## Session Completion

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd dolt push
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds
<!-- END BEADS INTEGRATION -->
