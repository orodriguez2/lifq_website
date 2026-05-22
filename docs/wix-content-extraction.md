# LiFQ Wix Site — Complete Content Extraction

**Purpose:** Single source of truth for rebuilding the LiFQ marketing site in Next.js. Every piece of copy, structure, navigation, metadata, and asset reference from the live Wix site is captured here verbatim. Claude Code should use this as the authoritative content reference — no need to re-fetch the Wix site.

**Source URLs:**
- Home: https://octaviorodriguez68.wixsite.com/my-site-1
- Beta Signup: https://octaviorodriguez68.wixsite.com/my-site-1/beta-signup

**Extracted:** May 22, 2026

---

## Site-wide elements

### Site title / branding
- Site name: **LifQ** (note the capitalization: lowercase "if", uppercase "Q")
- Tagline (subtitle in social previews): "Providing clarity and savings for modern households."
- Logo asset on Wix: `LifQ-logo` (image, exact file not accessible — you'll use the brand doc version from your VS Code workspace)
- Logo placement: top-left of nav, links to homepage; also appears in footer linking to `#SCROLL_TO_TOP`

### Top nav
- Currently only contains: logo (left) + (no visible nav links on the live Wix site beyond the logo)
- "Built on" badge by Wix — remove in rebuild
- **Recommendation for rebuild:** Add a single primary CTA button on the right: "Join the beta"

### Footer (appears on every page)
- Small logo (top of footer, linked to scroll-to-top)
- Inline text links: **Privacy • Terms • Contact • lifq.ai**
- Social media links (all currently placeholder URLs pointing to root domains):
  - Facebook: http://www.facebook.com
  - Instagram: http://www.instagram.com
  - YouTube: http://www.youtube.com
  - X (Twitter): http://www.x.com
  - LinkedIn: http://www.linkedin.com
- Copyright line: **© 2026 LifQ. All rights reserved. Providing clarity and savings for modern households.**

**Action item:** The social URLs on Wix are placeholders. Replace with real LiFQ social handles before launch, or remove until accounts exist.

### Metadata (both pages)
- Viewport: `width=device-width, initial-scale=1`
- OG image: `https://static.wixstatic.com/media/c5e413_035ae15b0d30440487c7ebd22a05b910~mv2.png` (2500×1330) — replace with a proper branded OG image in the rebuild
- Twitter card type: `summary_large_image`
- Page titles use format: `{Page Name} | LifQ`

---

## Page 1: Home (`/`)

**Page title:** `Home | LifQ`
**Canonical:** Same as URL

### Section 1: Hero

**H1:**
> Your family's coverage - organized, understood, and ready when it matters most.

*(Note: original uses a hyphen `-`; recommend rebuilding with an em dash `—` for typography polish.)*

**Subhead / supporting copy:**
> LifQ is an AI powered platform that helps families organize, understand, and manage their insurance, benefits and warranties so they can make smarter protection decisions

*(Note: original missing the hyphen in "AI-powered" and missing terminal period. Recommend fixing both.)*

**Primary CTA button:**
- Label: **Join the Beta Waitlist**
- Links to: `/beta-signup`

**Supporting microcopy under CTA:**
> Access is free for invitees. Limited beta spots available.

**Hero supporting image:** Present on the live page, asset URL not resolvable (Wix-hosted). Brand-document hero imagery should be used in the rebuild.

### Section 2: Positioning eyebrow

**Eyebrow / tagline above problem section:**
> The first AI-powered Household Protection Intelligence platform.

*(Note: "Household Protection Intelligence" is a distinctive product-category phrase — keep it exact.)*

### Section 3: Problem statement

**Section H2:**
> Insurance and benefits shouldn't feel this complicated.

**Four problem cards (each with a small icon/image on Wix):**

The Wix page has the body copy mis-paired with the headings due to Wix layout quirks. The intended pairings (cleaned up for the rebuild) are:

| Card | Heading | Body |
|---|---|---|
| 1 | **Fragmented** | Policies across apps, emails, PDFs, portals. |
| 2 | **Confusing** | Deductibles, exclusions, overlapping coverage. |
| 3 | **Expensive** | You may already be paying for coverage twice. |
| 4 | **Uncertain** | If something happens, will your family know what protection you have? |

**Use this cleaned version in the rebuild.**

### Section 4: Solution

**Section H2:**
> Clarity across everything you already pay for.

**Three solution cards:**

| Card | Heading | Body |
|---|---|---|
| 1 | **Clarity** | See all your insurance, benefits, and warranties in one place - clearly organized and easy to understand. |
| 2 | **Intelligence** | AI analyzes your policies to identify coverage gaps, overlaps, renewal risks, and savings opportunities. |
| 3 | **Family Confidence** | Ensure the people who depend on you stay informed and prepared with shared access and AI guidance across your protection portfolio. |

**CTA button below solution grid:**
- Label: **Get Early Access**
- Links to: `/beta-signup`

### Section 5: Real-world questions

**Section H2:**
> Real-world questions LifQ answers

**Four questions (each accompanied by a small LifQ icon — `LifQ Icon 1024.png`):**
1. "I'm renting a car next week. What coverage should I select?"
2. "Am I overpaying for overlapping policies?"
3. "Does my credit card already cover travel insurance?"
4. "What benefits am I not using?"

### Section 6: How it works

**Section H2:**
> How It Works

**Three steps:**

| # | Heading | Body |
|---|---|---|
| **01** | **Upload** | Users upload insurance policies, benefits, warranty documents or add membership information. |
| **02** | **Analyze** | LifQ AI reads and structures the documents, then analysis the entire portfolio for: coverage gaps, overlapping policies, renewal risk, cost optimization. |
| **03** | **Protect** | LifQ helps families act on insights by optimizing coverage, avoid overpaying prepare for claims and share protection information with loved ones. |

**Copy edits recommended for rebuild:**
- Step 02: "then **analysis** the entire portfolio" → "then **analyzes** the entire portfolio"
- Step 03: "avoid overpaying prepare for claims and share" → "avoid overpaying, prepare for claims, and share"

### Section 7: Privacy commitments

**Section H2:**
> Built with privacy first.

**Supporting line:**
> We built LifQ because we manage our own households too.

**Four commitments (presented as bullet items / cards on Wix):**
- Your documents remain private
- No selling of data
- Bank-level encryption
- You control your information

### Section 8: Final beta CTA (mid-page)

**H3:**
> Ready for Clarity?

**Body:**
> Our beta application is a brief 2-minute step to request your private invite. Join the waitlist to start optimizing your household benefits.

**CTA:**
- Label: **Go to Beta Application**
- Links to: `/beta-signup`

### Section 9: Vision statement

**H1 (acts as a secondary hero deeper in the page):**
> At LifQ we are building the Personal Protection Operating System for households

**Supporting image:** Present on Wix, asset URL not resolvable.

**Body:**
> A world where every family has complete clarity about their financial protections, where people can:
> - Understand their coverage
> - Optimize their policies
> - Protect their loved ones
> - Navigate life events with confidence

**CTA:**
- Label: **Join the Private Beta**
- Links to: `/beta-signup`

**Microcopy below CTA:**
> Free during beta. Limited spots.

---

## Page 2: Beta Signup (`/beta-signup`)

**Page title:** `Beta Signup | LifQ`
**Canonical:** Same as URL

### Page heading

**H2:**
> Request Your Invite

### Intro paragraph

> LifQ helps households understand and maximize the insurance and benefits they already have. This is a private beta with limited capacity; applications are reviewed to ensure quality, so acceptance is not guaranteed for everyone.

### Form fields (in order, as presented on Wix)

**1. First name**
- Type: text input
- Required: yes (inferred)
- Label: "First name"

**2. Last name**
- Type: text input
- Required: yes (inferred)
- Label: "Last name"

**3. Email**
- Type: email input
- Required: yes (inferred)
- Label: "Email"

**4. Age**
- Type: single-select (radio or dropdown — Wix renders as flat options)
- Label: "Age"
- Options:
  - `25-29`
  - `30-39`
  - `40-49`
  - `50-59`
  - `60+`
- **Note:** No "Under 25" option. The product appears targeted at established households (25+).

**5. Household**
- Type: single-select
- Label: "Household"
- Options:
  - `Single`
  - `Married/Partnered`
  - `Married with Children`
  - `Single Parent`

**6. Policy count**
- Type: single-select
- Label: **"How many policies (insurance or benefits) do you have?"**
- Options:
  - `1-2`
  - `3-5`
  - `6+`

**7. Policy types**
- Type: **multi-select** (checkboxes — multiple selections allowed)
- Label: **"Which types do you have?"**
- Options:
  - `Auto`
  - `Home/Renters`
  - `Health`
  - `Life`
  - `Credit Card w/Benefits`
  - `Extended Warranties`
  - `Other`

**8. Biggest frustration (open-ended)**
- Type: textarea
- Label: **"What's your biggest frustration when dealing with insurance or benefits?"**
- Required: no (inferred — qualitative research input)

### Submit
- Button label: **Submit**

### Post-submission
- The Wix site doesn't expose a visible thank-you page in the extracted content. Build a `/beta-signup/thank-you` page in the rebuild with confirmation messaging.

---

## Recommended copy refinements for the rebuild

These are improvements to bake in as Claude Code builds the components. None change meaning — they fix punctuation, grammar, and typography for a more professional finish.

| Location | Original | Refined |
|---|---|---|
| Hero H1 | "organized, understood, and ready" with hyphen `-` | em dash `—` between "coverage" and "organized" |
| Hero subhead | "AI powered" | "AI-powered" |
| Hero subhead | Missing terminal period | Add period |
| Step 02 | "then analysis the entire portfolio" | "then analyzes the entire portfolio" |
| Step 03 | "avoid overpaying prepare for claims and share" | "avoid overpaying, prepare for claims, and share" |
| Cards | Inconsistent terminal periods | Standardize: every card body ends with a period |
| Headings | Mix of sentence case and Title Case | Standardize to **sentence case** throughout (matches brand voice in your project memory) |

---

## Assets to source from your brand document

The Wix site references several image assets that aren't accessible in the extraction. These need to be sourced from your VS Code brand document or created fresh:

- [ ] LifQ logo (SVG preferred, with light + dark variants)
- [ ] LifQ icon at 1024×1024 (used 4× in the "Real-world questions" section)
- [ ] Hero illustration / image (top of homepage)
- [ ] Vision section illustration (next to "Personal Protection Operating System" heading)
- [ ] Section accent images for Fragmented / Confusing / Expensive / Uncertain (4 small icons)
- [ ] Section accent images for Clarity / Intelligence / Family Confidence (3 small icons)
- [ ] OG image at 2500×1330 (currently a Wix-hosted default)

If the brand document doesn't include these, lucide-react icons are a good free fallback (already in the stack) — `Layers`, `HelpCircle`, `DollarSign`, `ShieldAlert` for the problem cards, and `Eye`, `Brain`, `Users` for the solution cards.

---

## Page structure summary

```
Homepage (/)
├── Nav
├── Hero (H1 + CTA → /beta-signup)
├── Positioning eyebrow
├── Problem grid (4 cards)
├── Solution grid (3 cards) + CTA → /beta-signup
├── Real-world questions (4 quotes)
├── How it works (3 steps)
├── Privacy commitments (4 bullets)
├── Mid-page CTA → /beta-signup
├── Vision statement + CTA → /beta-signup
└── Footer

Beta Signup (/beta-signup)
├── Nav
├── H2 + intro paragraph
├── Form (8 fields)
├── Submit
└── Footer

(To be created in rebuild:)
Thank You (/beta-signup/thank-you)
Privacy (/privacy)
Terms (/terms)
Contact (/contact or mailto link)
```

---

## What's NOT on the current Wix site (gaps to fill or defer)

Captured during extraction so they're explicit decisions, not oversights:

- No pricing page (consistent with beta-only positioning)
- No about / team page
- No blog or content marketing
- No actual privacy policy or terms of service content (links exist in footer but pages aren't built on Wix)
- No contact page (footer says "Contact" but it's text, not a link)
- No FAQ section
- No testimonials, press, or social proof
- No real OG image (using Wix default)

**Recommendation:** For the v1 Vercel launch, ship: Home + Beta Signup + Thank You + Privacy + Terms + Contact (as a `mailto:hello@lifq.ai` link or basic form). Defer About, Blog, Pricing, FAQ until after the beta.
