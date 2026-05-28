import type { SolutionFAQ } from "@/content/solutions/types";

export interface GlossaryTerm {
  slug: string;
  term: string;
  shortDefinition: string;
  metaDescription: string;
  category: string;
  definition: string;
  examples: string[];
  faqs: SolutionFAQ[];
  relatedTerms: string[];
  relatedSolutions: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "open-enrollment",
    term: "Open enrollment",
    shortDefinition:
      "The annual period during which employees can enroll in, change, or cancel employer-sponsored benefits.",
    metaDescription:
      "Open enrollment is the annual window to change your employer health insurance and benefits. Learn when it happens, what you can change, and how to make the best decisions for your family.",
    category: "Employee Benefits",
    definition: `Open enrollment is the once-per-year period during which employees can enroll in, change, or cancel their employer-sponsored benefits — including health insurance, dental and vision coverage, life insurance, flexible spending accounts (FSA), health savings accounts (HSA), and various voluntary benefits.

For most employer-sponsored plans, the open enrollment window falls in October–December for plans effective January 1st. Outside this window, changes to coverage are generally not permitted unless you experience a qualifying life event — such as marriage, the birth of a child, or loss of other coverage.

Open enrollment is one of the most consequential financial decisions a household makes each year. The choices made during this period affect healthcare costs, take-home pay, and overall household financial health for the entire following year.`,
    examples: [
      "Your company announces open enrollment runs October 15–November 1. During this period, you can switch from a PPO to an HDHP plan and enroll in an HSA for the first time.",
      "You decide to add your spouse to your employer health plan during open enrollment, increasing your premium by $300/month but eliminating their separate insurance cost.",
      "You miss the open enrollment window and are stuck with your current plan for another year — even though a better option was available.",
    ],
    faqs: [
      {
        question: "What can I change during open enrollment?",
        answer:
          "During open enrollment, you can typically enroll in or change health, dental, vision, and life insurance plans; adjust your HSA or FSA contribution amounts; add or remove dependents; and enroll in voluntary benefits like legal plans, accident insurance, or critical illness coverage.",
      },
      {
        question: "What happens if I miss open enrollment?",
        answer:
          "If you miss open enrollment, you generally cannot change your employer benefits until the next open enrollment period — unless you experience a qualifying life event (marriage, new child, job change, loss of other coverage). Missing open enrollment means keeping whatever coverage you have (or no coverage if you didn't enroll).",
      },
      {
        question: "Can I change my benefits outside of open enrollment?",
        answer:
          "Yes, but only if you have a qualifying life event — such as getting married, having a baby, adopting a child, changing jobs, or losing coverage from another source. You typically have 30–60 days from the event to make changes.",
      },
    ],
    relatedTerms: ["hsa", "fsa", "deductible", "premium"],
    relatedSolutions: ["open-enrollment", "employee-benefits", "hsa-fsa-management"],
  },

  {
    slug: "hsa",
    term: "HSA (Health Savings Account)",
    shortDefinition:
      "A tax-advantaged account that lets you save pre-tax money for qualified medical expenses, available with high-deductible health plans.",
    metaDescription:
      "An HSA (Health Savings Account) is a powerful tax-advantaged tool for healthcare costs. Learn how HSAs work, contribution limits, eligible expenses, and how to invest your HSA for long-term growth.",
    category: "Healthcare Savings",
    definition: `A Health Savings Account (HSA) is a tax-advantaged savings account specifically designed to pay for qualified medical expenses. HSAs are available to people enrolled in high-deductible health plans (HDHPs) and offer a triple tax advantage that makes them one of the most powerful financial tools available.

**The triple tax advantage:**
1. Contributions are made pre-tax (or are tax-deductible if made directly)
2. Money grows tax-free through investments
3. Withdrawals are tax-free when used for qualified medical expenses

Unlike Flexible Spending Accounts (FSAs), HSA funds roll over year to year indefinitely. This means you can accumulate funds over time and use them for healthcare expenses in retirement — when medical costs are typically highest. After age 65, HSA funds can be used for any purpose (with regular income tax applying to non-medical withdrawals, similar to a traditional IRA).

For 2026, the HSA contribution limits are $4,300 for individuals and $8,550 for families (plus an additional $1,000 catch-up contribution if you're 55 or older).`,
    examples: [
      "You enroll in your employer's high-deductible health plan and contribute $4,300 to your HSA. You use $1,500 for medical expenses during the year, and invest the remaining $2,800. Over 10 years, this grows tax-free.",
      "You have $8,000 in your HSA from previous years. After age 65, you use it to pay Medicare Part B premiums — a qualified HSA expense — tax-free.",
      "You pay for glasses, therapy sessions, and prescription medications from your HSA instead of your regular bank account, effectively getting a 25–35% discount (your tax rate) on those expenses.",
    ],
    faqs: [
      {
        question: "What qualifies as an HSA eligible expense?",
        answer:
          "Qualified HSA expenses include most medical, dental, and vision expenses — doctor visits, prescriptions, dental cleanings, glasses and contacts, mental health services, physical therapy, and many over-the-counter medications. The list also includes some less-obvious items like menstrual care products, sunscreen, and certain equipment.",
      },
      {
        question: "What's the difference between an HSA and FSA?",
        answer:
          "The key differences: HSAs require enrollment in a high-deductible health plan; FSAs are available with most health plans. HSA funds roll over indefinitely; FSA funds are generally use-it-or-lose-it. HSAs can be invested and grow tax-free; FSAs typically cannot be invested.",
      },
      {
        question: "Can I use my HSA for non-medical expenses?",
        answer:
          "Before age 65, non-medical withdrawals are subject to income tax plus a 20% penalty. After age 65, non-medical withdrawals are subject only to regular income tax — making the HSA function like a traditional IRA for retirement savings.",
      },
    ],
    relatedTerms: ["fsa", "hdhp", "open-enrollment", "deductible"],
    relatedSolutions: ["hsa-fsa-management", "open-enrollment", "employee-benefits"],
  },

  {
    slug: "coverage-gap",
    term: "Coverage gap",
    shortDefinition:
      "A situation where a household has no insurance or benefit coverage for a specific risk, event, or period of time.",
    metaDescription:
      "A coverage gap is a risk your household faces that isn't covered by any insurance policy or benefit. Learn how to identify, understand, and close common coverage gaps before they become expensive problems.",
    category: "Insurance",
    definition: `A coverage gap is any situation where a household faces a financial risk that isn't protected by any existing insurance policy, benefit, or coverage plan. Coverage gaps can be permanent (you simply don't have a type of insurance you need) or temporary (a lapse or transition period between coverage).

Coverage gaps are dangerous because they're invisible until something goes wrong. Most households discover coverage gaps at the worst possible time — when they need to file a claim and find out they're not covered.

**Types of coverage gaps:**

**Product gaps:** You don't have coverage for a specific risk at all — for example, no flood insurance on a home in a flood-prone area, or no disability income insurance.

**Amount gaps:** You have coverage, but the coverage limit is too low for your actual exposure — for example, $300,000 in umbrella liability coverage when your net worth is $800,000.

**Temporal gaps:** A period where you have no coverage — for example, the 30-day waiting period between starting a new job and your health insurance activating.

**Coordination gaps:** Two policies that you expect to work together don't — for example, primary and secondary coverage that both exclude the same event.`,
    examples: [
      "A homeowner in a flood-prone area has excellent home insurance but no flood insurance (which is always a separate policy). Heavy rains cause $40,000 in flood damage — none of it covered.",
      "A freelancer who left their employer misses the COBRA election window, creating a 3-month coverage gap before marketplace insurance activates.",
      "A family has $300K in auto liability coverage, but gets sued for $450K after a serious accident. The $150K gap comes from their personal assets.",
    ],
    faqs: [
      {
        question: "How do I find my coverage gaps?",
        answer:
          "The most effective way to identify coverage gaps is to review all your policies together and map them against the risks your household actually faces. LifQ does this automatically — analyzing all your policies to identify where you have gaps alongside where you have overlaps.",
      },
      {
        question: "What are the most common coverage gaps?",
        answer:
          "The most common gaps include: lack of umbrella liability insurance (about 65% of households who need it don't have it), no flood coverage on homes in moderate-risk areas, insufficient disability income coverage, no renter's insurance among renters, and gaps between jobs or coverage periods.",
      },
      {
        question: "Is a coverage gap always dangerous?",
        answer:
          "Not always. Some gaps are intentional and acceptable — for example, choosing not to insure a low-value car for collision damage. A gap is concerning when the potential loss exceeds what you can comfortably absorb out of pocket.",
      },
    ],
    relatedTerms: ["deductible", "umbrella-insurance", "open-enrollment"],
    relatedSolutions: ["insurance-savings", "life-reminders", "family-financial-organization"],
  },

  {
    slug: "deductible",
    term: "Deductible",
    shortDefinition:
      "The amount you pay out of pocket for covered services before your insurance begins to pay.",
    metaDescription:
      "A deductible is the amount you pay before your insurance kicks in. Learn how deductibles work for health, auto, and home insurance — and how to choose the right deductible amount for your situation.",
    category: "Insurance",
    definition: `A deductible is the amount you must pay out of pocket for covered services or claims before your insurance company starts paying its share. Once you meet your deductible, insurance kicks in to cover a portion (or all) of additional costs — depending on your plan.

Deductibles reset annually for health insurance and per claim for most property and casualty policies (auto, home).

**Health insurance example:** If your annual deductible is $1,500, you pay the first $1,500 of covered medical expenses each year before your insurance begins sharing costs. After meeting the deductible, you typically pay a copay or coinsurance for each subsequent service.

**Auto insurance example:** If your collision deductible is $500 and you have a $3,000 repair, you pay $500 and your insurer pays $2,500.

**Choosing your deductible:** Higher deductibles mean lower monthly premiums but more out-of-pocket exposure when something happens. Lower deductibles mean higher premiums but less financial shock at claim time. The right balance depends on your savings cushion and expected usage.`,
    examples: [
      "Your health insurance has a $2,000 deductible. You have knee surgery costing $8,000. You pay $2,000; your insurance covers the rest (subject to coinsurance).",
      "Your auto insurance has a $500 collision deductible. A fender bender causes $800 in damage. Your insurance pays $300; you pay $500.",
      "A family with a $6,000 family deductible has two members who each need care. The combined costs count toward the same $6,000 family deductible.",
    ],
    faqs: [
      {
        question: "Does my deductible reset every year?",
        answer:
          "For health insurance, yes — deductibles typically reset on January 1 (or your plan anniversary). For auto and home insurance, deductibles apply per claim rather than annually.",
      },
      {
        question: "Do copays count toward my deductible?",
        answer:
          "It depends on your plan. Some plans count copays toward the deductible; others don't. Check your Summary of Benefits and Coverage (SBC) for your specific plan.",
      },
      {
        question: "What's a family deductible vs. an individual deductible?",
        answer:
          "Individual deductibles apply per person. Family deductibles are the combined limit — once the family collectively meets the family deductible amount, insurance pays for all covered family members regardless of individual deductibles met.",
      },
    ],
    relatedTerms: ["premium", "out-of-pocket-maximum", "coinsurance", "copay"],
    relatedSolutions: ["insurance-savings", "open-enrollment", "employee-benefits"],
  },

  {
    slug: "premium",
    term: "Premium",
    shortDefinition:
      "The recurring payment you make — monthly, quarterly, or annually — to maintain an insurance policy.",
    metaDescription:
      "An insurance premium is what you pay to keep your coverage active. Learn how premiums are calculated, what factors affect them, and how to lower your premium without sacrificing necessary coverage.",
    category: "Insurance",
    definition: `An insurance premium is the amount you pay to an insurance company to maintain your coverage. Premiums can be paid monthly, quarterly, semi-annually, or annually depending on the policy.

Premiums are separate from what you pay when you use insurance (deductibles, copays, coinsurance). You pay your premium whether or not you file a claim — it's the cost of having coverage available.

**What determines your premium:**
- **Health insurance:** Age, location, tobacco use, plan type (metal tier), number of people covered
- **Auto insurance:** Driving record, vehicle type, location, age, credit score (in most states), coverage levels
- **Home insurance:** Home value, location, age, claims history, coverage limits, deductible chosen
- **Life insurance:** Age, health status, coverage amount, term length, policy type

**How to lower your premium:** Increase your deductible, qualify for discounts (multi-policy bundling, safe driver, good student), improve your credit score, maintain a clean claims history, and shop competing insurers every 1–2 years.`,
    examples: [
      "You pay $450/month in health insurance premiums for your family — $5,400/year before using any benefits.",
      "Your auto insurance premium is $180/month. Adding an umbrella policy through the same insurer costs $25/month and bundles for a 10% discount on both.",
      "A 35-year-old in good health pays $35/month for $500,000 in 20-year term life insurance.",
    ],
    faqs: [
      {
        question: "Is a lower premium always better?",
        answer:
          "Not necessarily. A lower premium often means a higher deductible, fewer covered services, or a narrower network. A plan with a $200/month lower premium but a $3,000 higher deductible may cost you more if you actually need care.",
      },
      {
        question: "What happens if I miss a premium payment?",
        answer:
          "Most insurers have a grace period (10–30 days depending on policy type). If you miss payment beyond the grace period, your policy can lapse — meaning you lose coverage and any pending claims may be denied.",
      },
      {
        question: "Do premiums change over time?",
        answer:
          "Yes. Health insurance premiums change annually at renewal. Auto and home insurance premiums can change based on claims history, driving record changes, or market conditions. Term life premiums are typically locked for the term length.",
      },
    ],
    relatedTerms: ["deductible", "out-of-pocket-maximum", "copay", "coinsurance"],
    relatedSolutions: ["insurance-savings", "open-enrollment", "employee-benefits"],
  },

  {
    slug: "out-of-pocket-maximum",
    term: "Out-of-pocket maximum",
    shortDefinition:
      "The most you'll ever pay in a plan year for covered services — after which your insurance pays 100%.",
    metaDescription:
      "The out-of-pocket maximum is the most you pay in a year before insurance covers everything. Learn how out-of-pocket maximums work for health insurance and why they matter for financial planning.",
    category: "Healthcare",
    definition: `The out-of-pocket maximum (also called the out-of-pocket limit) is the most you will pay in a single plan year for covered healthcare services. Once you reach this limit, your insurance company pays 100% of covered services for the rest of the year — no more deductibles, copays, or coinsurance.

The out-of-pocket maximum is a critical financial protection that caps your exposure if you have a major health event.

**What counts toward your out-of-pocket max:** Deductibles, copays, and coinsurance for covered in-network services. Specifics vary by plan — check your Summary of Benefits.

**What usually doesn't count:** Premiums, out-of-network costs (often have a separate limit or no limit), non-covered services, costs above the plan's allowed amount.

**For 2026, ACA-compliant plans have a maximum limit of $9,450 for individuals and $18,900 for families.**

The out-of-pocket max is one of the most important numbers to understand when comparing health plans — especially if you or a family member have significant health needs.`,
    examples: [
      "Your plan has a $5,000 individual out-of-pocket max. After a hospitalization, you've paid $4,200 in deductible and coinsurance. Your next covered medical bill — your insurance pays 100%, you pay nothing.",
      "Your family out-of-pocket max is $10,000. Two family members hit their individual limits of $5,000 each. All covered care for the entire family is now free for the rest of the year.",
      "When choosing between a PPO ($500 premium, $3,000 OOP max) and HDHP ($300 premium, $6,500 OOP max), the HDHP saves $2,400/year in premiums — but exposes you to $3,500 more in worst-case costs.",
    ],
    faqs: [
      {
        question: "Is the out-of-pocket maximum the same as the deductible?",
        answer:
          "No. The deductible is what you pay before insurance starts sharing costs. The out-of-pocket maximum is the total cap on everything you'll pay in a year (including deductible, copays, and coinsurance combined).",
      },
      {
        question: "Does the out-of-pocket max reset every year?",
        answer:
          "Yes — for health insurance, the out-of-pocket maximum resets on January 1 (or your plan anniversary date).",
      },
      {
        question: "Do out-of-network costs count toward my out-of-pocket max?",
        answer:
          "Usually not, or they count toward a separate (higher) out-of-network limit. Using in-network providers is critical to getting the benefit of your out-of-pocket maximum protection.",
      },
    ],
    relatedTerms: ["deductible", "coinsurance", "copay", "premium"],
    relatedSolutions: ["insurance-savings", "open-enrollment", "employee-benefits"],
  },

  {
    slug: "copay",
    term: "Copay",
    shortDefinition:
      "A fixed dollar amount you pay for a specific healthcare service — like $25 for a doctor visit — regardless of the total bill.",
    metaDescription:
      "A copay is a fixed payment for a healthcare service. Learn how copays work, the difference between copays and coinsurance, and how they factor into your total healthcare costs.",
    category: "Healthcare",
    definition: `A copay (or copayment) is a fixed dollar amount you pay for a specific healthcare service at the time of the visit. Common copay amounts are $20–$50 for primary care visits, $40–$80 for specialist visits, and $10–$50 for prescriptions.

Copays are predictable — you know exactly what you'll pay before the appointment. They're separate from your deductible and may or may not count toward it depending on your plan.

**Common copay types:**
- **Primary care visit:** $20–$40
- **Specialist visit:** $40–$80
- **Urgent care:** $50–$100
- **Emergency room:** $150–$350
- **Generic prescriptions:** $5–$15
- **Brand-name prescriptions:** $30–$100+
- **Mental health visit:** $20–$60

Some services are covered with no copay (preventive care on ACA-compliant plans). Some plans waive copays after you meet your deductible. Check your Summary of Benefits for your specific plan.`,
    examples: [
      "You visit your primary care doctor. Your plan has a $30 copay for primary care. You hand over $30 at the front desk — regardless of how much the visit actually costs.",
      "Your plan has a $250 copay for emergency room visits after meeting your deductible. Before meeting it, you pay your deductible first, then the copay kicks in.",
      "Your plan charges a $15 copay for generic drugs and $45 for preferred brand-name drugs. Asking your doctor for the generic equivalent saves you $30 per refill.",
    ],
    faqs: [
      {
        question: "Do copays count toward my deductible?",
        answer:
          "It depends on your plan. Some plans count copays toward the deductible; others keep them separate. Check your Summary of Benefits and Coverage (SBC) to see your plan's rules.",
      },
      {
        question: "Do I still pay a copay after I meet my deductible?",
        answer:
          "Usually yes — copays typically continue after your deductible is met. However, once you reach your out-of-pocket maximum, copays stop and insurance covers 100% of covered services.",
      },
      {
        question: "What's the difference between a copay and coinsurance?",
        answer:
          "A copay is a fixed dollar amount ($30). Coinsurance is a percentage of the total cost (20% of a $500 bill = $100). Copays are predictable; coinsurance varies with the cost of the service.",
      },
    ],
    relatedTerms: ["coinsurance", "deductible", "out-of-pocket-maximum", "premium"],
    relatedSolutions: ["open-enrollment", "employee-benefits", "insurance-savings"],
  },

  {
    slug: "coinsurance",
    term: "Coinsurance",
    shortDefinition:
      "The percentage of costs you share with your insurer after meeting your deductible — for example, you pay 20%, your insurer pays 80%.",
    metaDescription:
      "Coinsurance is the percentage of healthcare costs you pay after meeting your deductible. Learn how coinsurance works with deductibles and out-of-pocket maximums to determine your true cost of care.",
    category: "Healthcare",
    definition: `Coinsurance is the percentage of covered healthcare costs that you pay after meeting your deductible, with your insurer paying the remaining percentage. Common splits are 80/20 (insurer pays 80%, you pay 20%) or 70/30.

Unlike a copay (a fixed dollar amount), coinsurance is a percentage — so your share scales with the cost of the service. A 20% coinsurance on a $10,000 surgery means you owe $2,000; on a $500 procedure, you owe $100.

**The sequence for a typical health insurance claim:**
1. You pay 100% until you meet your deductible
2. After the deductible, you pay your coinsurance percentage (e.g., 20%) and the insurer pays the rest (80%)
3. Once you reach your out-of-pocket maximum, the insurer pays 100%

Coinsurance is one of the most important cost drivers for major medical events. A 20% coinsurance on a $50,000 hospitalization is $10,000 — which is why the out-of-pocket maximum exists as a backstop.`,
    examples: [
      "After meeting your $1,500 deductible, you have a $5,000 procedure. With 20% coinsurance, you pay $1,000 (20% of $5,000); your insurer pays $4,000.",
      "Your plan is 70/30. You've met your deductible. A $300 specialist visit costs you $90 (30% of $300).",
      "You've met both your deductible and your $6,000 out-of-pocket max. All remaining covered services this year are 100% covered by insurance — coinsurance no longer applies.",
    ],
    faqs: [
      {
        question: "When does coinsurance apply?",
        answer:
          "Coinsurance applies after you've met your deductible. Before meeting the deductible, you pay 100% of covered costs. After meeting the out-of-pocket max, you pay 0%.",
      },
      {
        question: "Is coinsurance the same for all services?",
        answer:
          "No. Plans can have different coinsurance rates for different services — for example, 20% for primary care but 30% for out-of-network specialists. Always check your plan's Summary of Benefits.",
      },
      {
        question: "What's better — copay or coinsurance?",
        answer:
          "Copays are predictable (fixed dollar amounts). Coinsurance is unpredictable but may be cheaper for low-cost services. For expensive care (surgeries, hospitalizations), coinsurance can be significantly higher than a flat copay. Plans with copays for common services and coinsurance for major care offer a balance of predictability and protection.",
      },
    ],
    relatedTerms: ["copay", "deductible", "out-of-pocket-maximum", "premium"],
    relatedSolutions: ["open-enrollment", "insurance-savings", "employee-benefits"],
  },

  {
    slug: "fsa",
    term: "FSA (Flexible Spending Account)",
    shortDefinition:
      "A pre-tax account for healthcare expenses available with most employer-sponsored health plans — but funds typically must be used within the plan year.",
    metaDescription:
      "An FSA (Flexible Spending Account) lets you pay for healthcare expenses with pre-tax dollars. Learn how FSAs work, contribution limits, eligible expenses, and the use-it-or-lose-it rule.",
    category: "Healthcare Savings",
    definition: `A Flexible Spending Account (FSA) is a special account you contribute to through payroll deductions, allowing you to pay for eligible healthcare expenses with pre-tax dollars. Because contributions are pre-tax, you effectively save your marginal tax rate (typically 22–32%) on every dollar you spend through the FSA.

**Key FSA characteristics:**
- Available with most employer-sponsored health plans (not limited to HDHPs like HSAs)
- Contributions are pre-tax through payroll; you can't contribute directly
- Funds are available immediately at the start of the year (even before you've contributed them through payroll)
- Use-it-or-lose-it rule: funds not used by year-end are forfeited (with some plan flexibility — see below)

**2026 FSA contribution limit:** $3,300 per individual (employer may also contribute)

**Rollover and grace period rules:** Employers can allow one of two options: roll over up to $660 to the next year, OR offer a 2.5-month grace period to spend the remaining balance. Not all plans offer these — check your plan.

**Types of FSAs:**
- Health FSA — for medical, dental, and vision expenses
- Dependent Care FSA — for childcare and eldercare expenses (separate account, separate limit of $5,000)
- Limited Purpose FSA — dental and vision only; compatible with an HSA`,
    examples: [
      "You contribute $2,400 to your FSA ($200/month). You use those funds for doctor visits, prescriptions, and glasses — all tax-free, saving you ~$600 in taxes you'd otherwise owe.",
      "You have $400 remaining in your FSA in late November. Your plan has a grace period through March 15. You stock up on FSA-eligible items (contact solution, first aid supplies, OTC medications) before the deadline.",
      "You use $1,800 of FSA funds for dental work in January, before you've contributed that amount through payroll. The full election amount was available on January 1.",
    ],
    faqs: [
      {
        question: "What's the difference between an FSA and an HSA?",
        answer:
          "The key differences: FSAs are available with most health plans; HSAs require an HDHP. FSA funds are use-it-or-lose-it annually; HSA funds roll over forever. HSAs can be invested; FSAs cannot. HSAs can be contributed to directly; FSAs only through payroll.",
      },
      {
        question: "What can I use FSA funds for?",
        answer:
          "Eligible expenses include doctor visits, prescriptions, dental care, vision care, medical equipment, menstrual products, many OTC medications, and more. A full list is available from IRS Publication 502.",
      },
      {
        question: "Can I have both an FSA and an HSA?",
        answer:
          "Generally no — you can't have a standard Health FSA and an HSA simultaneously. The exception is a Limited Purpose FSA (dental and vision only), which is compatible with an HSA.",
      },
    ],
    relatedTerms: ["hsa", "open-enrollment", "deductible", "hdhp"],
    relatedSolutions: ["hsa-fsa-management", "open-enrollment", "employee-benefits"],
  },

  {
    slug: "cobra",
    term: "COBRA",
    shortDefinition:
      "A federal law that lets you keep your employer-sponsored health coverage for a limited time after leaving a job — at your own expense.",
    metaDescription:
      "COBRA lets you continue employer health insurance after job loss or other qualifying events. Learn how COBRA works, how much it costs, when to elect it, and whether marketplace insurance is a better alternative.",
    category: "Healthcare",
    definition: `COBRA (Consolidated Omnibus Budget Reconciliation Act) is a federal law that requires most employers with 20+ employees to offer continued health insurance coverage to employees (and their dependents) who lose coverage due to certain qualifying events.

**Qualifying events that trigger COBRA eligibility:**
- Voluntary or involuntary job termination (except gross misconduct)
- Reduction in hours (below the threshold for benefits eligibility)
- Divorce or legal separation from a covered employee
- A dependent child aging off a parent's plan (typically at 26)
- Death of the covered employee
- Employee becoming eligible for Medicare

**COBRA basics:**
- You can continue the exact same employer plan you had
- You pay the full premium — your share plus what your employer was paying — plus up to 2% administrative fee
- COBRA coverage lasts 18 months for most qualifying events (up to 36 months for certain dependent events)
- You have 60 days to elect COBRA after receiving the notice
- You can elect COBRA retroactively — meaning you can wait to elect until you actually have a medical bill

**The cost reality:** When your employer pays 70–80% of the premium, COBRA can cost $500–$2,000/month for a family — significantly more than marketplace insurance for many households.`,
    examples: [
      "You leave your job in May. You were paying $200/month for health coverage; your employer was paying $600. COBRA costs you $816/month ($800 + 2% admin fee) for the same coverage.",
      "You're between jobs and generally healthy. You elect COBRA but don't pay — using the 60-day window to compare marketplace options. A marketplace plan is cheaper, so you never activate COBRA.",
      "You experience a health emergency two weeks after your job ends. You retroactively elect COBRA within the 60-day window, pay the back premiums, and your claim is covered.",
    ],
    faqs: [
      {
        question: "Is COBRA usually worth it?",
        answer:
          "It depends. COBRA makes sense if you have ongoing medical needs, pending procedures, or established specialists you can't lose access to. For healthy individuals, a marketplace plan (especially with an ACA subsidy) is often significantly cheaper. Always compare before electing.",
      },
      {
        question: "How long do I have to decide on COBRA?",
        answer:
          "You have 60 days from the date of your qualifying event (or the date of your COBRA notice, whichever is later) to elect coverage. You can elect retroactively, so there's usually no rush — compare your options first.",
      },
      {
        question: "Can I switch from COBRA to marketplace insurance?",
        answer:
          "Losing job-based insurance (including voluntarily not electing COBRA) triggers a Special Enrollment Period — giving you 60 days to enroll in marketplace coverage. However, once you elect COBRA, you can only switch to marketplace insurance during Open Enrollment or if you experience another qualifying life event.",
      },
    ],
    relatedTerms: ["premium", "deductible", "qualifying-life-event", "special-enrollment-period"],
    relatedSolutions: ["employee-benefits", "open-enrollment", "insurance-savings"],
  },

  {
    slug: "umbrella-insurance",
    term: "Umbrella insurance",
    shortDefinition:
      "Liability coverage that kicks in after your auto or home insurance limits are exhausted — typically providing $1M+ in additional protection.",
    metaDescription:
      "Umbrella insurance provides extra liability coverage beyond your auto and home policies. Learn who needs umbrella insurance, how much it costs, and what it covers.",
    category: "Insurance",
    definition: `Umbrella insurance is a type of personal liability insurance that provides coverage beyond the limits of your existing auto, home, boat, and other policies. If you're sued and the judgment exceeds your underlying policy limits, umbrella coverage pays the excess — up to its own limit.

**Why it matters:** A serious car accident, a slip-and-fall at your home, or a defamation lawsuit can result in judgments of $1M or more. Standard auto policies carry $100K–$500K in liability; home policies typically $100K–$300K. If a judgment exceeds those limits, your personal assets — savings, investments, home equity — are at risk.

**Umbrella insurance basics:**
- Usually available in $1M increments; most households get $1M–$3M in coverage
- Costs $150–$400/year for the first $1M — exceptionally affordable for what you get
- Requires minimum underlying liability limits on auto and home policies
- Covers you, your household members, and your pets
- Also covers certain situations your underlying policies might not (e.g., libel, slander, certain rental property liability)

**Who needs it most:** Homeowners, parents (who are liable for their minor children's actions), dog owners, anyone with significant assets, people with pools or trampolines, and those with teen drivers.`,
    examples: [
      "You're at fault in a serious car accident. Medical bills for the other driver total $650,000. Your auto policy covers the first $300,000; your umbrella policy covers the remaining $350,000.",
      "A guest slips and falls at your home. They sue for $800,000. Your homeowner's liability limit is $300,000. Your umbrella pays the $500,000 gap — instead of your retirement savings.",
      "Your teenage son is in a fight and the other family sues for $200,000. Your umbrella policy covers you — not just accidents involving your cars and home.",
    ],
    faqs: [
      {
        question: "Do I really need umbrella insurance?",
        answer:
          "If your net worth exceeds your underlying liability limits, you likely need umbrella coverage. At $150–$400/year for $1M of protection, it's one of the most cost-effective insurance purchases you can make — especially if you own a home, have teen drivers, or own a dog.",
      },
      {
        question: "What does umbrella insurance not cover?",
        answer:
          "Umbrella insurance does not cover your own injuries or property damage (only liability to others), intentional harmful acts, business-related liability, and typically excludes professional liability. It also won't cover liability assumed under a contract.",
      },
      {
        question: "How much umbrella coverage do I need?",
        answer:
          "A common rule of thumb is to match your umbrella coverage to your net worth — if you have $500,000 in assets, carry at least $1M in umbrella coverage. Many advisors recommend $1M–$2M as a standard starting point given the cost.",
      },
    ],
    relatedTerms: ["coverage-gap", "deductible", "premium"],
    relatedSolutions: ["insurance-savings", "family-financial-organization", "life-reminders"],
  },

  {
    slug: "disability-insurance",
    term: "Disability insurance",
    shortDefinition:
      "Insurance that replaces a portion of your income if you're unable to work due to illness or injury.",
    metaDescription:
      "Disability insurance replaces income if illness or injury prevents you from working. Learn how short-term and long-term disability insurance works, what employer coverage typically provides, and whether you need supplemental coverage.",
    category: "Insurance",
    definition: `Disability insurance replaces a portion of your income if you become unable to work due to a covered illness or injury. It's often called "income protection" — because that's exactly what it protects.

**Two main types:**
- **Short-term disability (STD):** Covers 50–80% of income for a short period (typically 3–6 months). Kicks in after a short elimination period (the waiting period before benefits begin — usually 0–14 days).
- **Long-term disability (LTD):** Covers 50–70% of income after short-term benefits end. Can last for 2–5 years (own occupation, to retirement age, or to age 65 depending on the policy).

**Employer-provided vs. individual:**
Most employers provide some group disability coverage, but it's often limited — typically 60% of base salary, with a 90-day elimination period, and benefits may be taxable if the employer paid the premiums. Individual policies are more comprehensive but more expensive.

**Own occupation vs. any occupation:** "Own occupation" policies pay if you can't perform your specific job. "Any occupation" policies only pay if you can't perform any job for which you're reasonably qualified. Own occupation definitions are significantly more protective.

**The risk most people ignore:** You're 3x more likely to become disabled during your working years than to die. Social Security disability is notoriously difficult to qualify for. Without disability insurance, a long illness or injury can be financially catastrophic.`,
    examples: [
      "A surgeon develops essential tremor and can no longer perform surgery. An own-occupation disability policy pays benefits even if she could still work as a consultant.",
      "Your employer provides short-term disability covering 60% of your salary for up to 26 weeks. After 26 weeks, long-term disability kicks in at 60% until you return to work or reach 65.",
      "A freelancer has no employer-provided disability coverage. An individual policy costs $150/month but would pay $5,000/month if they're unable to work — a financial lifeline for a self-employed household.",
    ],
    faqs: [
      {
        question: "Does my employer's disability insurance cover everything I need?",
        answer:
          "Often not. Employer LTD typically caps at 60% of base salary (bonuses and commissions excluded), may have a dollar maximum, and often uses an 'any occupation' definition after 2 years. Supplemental individual coverage can fill those gaps.",
      },
      {
        question: "How long is the elimination period?",
        answer:
          "The elimination period is the waiting time between becoming disabled and when benefits begin. Short-term policies often have 7–14 days; long-term policies typically have 90-day elimination periods. The longer the elimination period, the lower the premium.",
      },
      {
        question: "Is disability insurance worth it if I have savings?",
        answer:
          "That depends on your savings. If you can fund 2–3 years of expenses from savings alone, you may be able to self-insure short-term disabilities. Long-term disability (5+ years) is harder to self-insure — even with substantial savings.",
      },
    ],
    relatedTerms: ["coverage-gap", "cobra", "umbrella-insurance"],
    relatedSolutions: ["insurance-savings", "employee-benefits", "family-financial-organization"],
  },

  {
    slug: "hdhp",
    term: "HDHP (High-Deductible Health Plan)",
    shortDefinition:
      "A health insurance plan with lower premiums but a higher deductible than traditional plans — and the only plan type that makes you eligible for an HSA.",
    metaDescription:
      "An HDHP (High-Deductible Health Plan) features lower premiums and higher deductibles — and unlocks access to an HSA. Learn if an HDHP is right for your family and how to use it effectively.",
    category: "Healthcare",
    definition: `A High-Deductible Health Plan (HDHP) is a health insurance plan with higher deductibles and lower premiums than traditional PPO or HMO plans. HDHPs are the only plan type that qualifies you to open and contribute to a Health Savings Account (HSA).

**IRS thresholds for 2026:**
- Minimum deductible: $1,650 (individual) / $3,300 (family)
- Maximum out-of-pocket: $8,300 (individual) / $16,600 (family)

**The HDHP + HSA strategy:** The lower premium saves money every month. Those savings, invested in an HSA, grow tax-free. If you're healthy and don't use much healthcare, you can accumulate significant tax-advantaged funds over time. If you need care, the HSA covers the higher deductible tax-free.

**Who benefits most from an HDHP:**
- Relatively healthy individuals and families who don't expect high medical usage
- People who want to invest through an HSA for future healthcare costs (including retirement)
- Those whose out-of-pocket costs in a year are consistently below the premium savings

**Who may be better served by a lower-deductible plan:**
- People with chronic conditions requiring frequent care
- Families with young children who have high healthcare utilization
- Anyone who can't absorb the high deductible if a major medical event occurs`,
    examples: [
      "Your HDHP saves you $3,600/year in premiums vs. a PPO. You contribute $3,600 to your HSA. After a year with no major health events, you've kept the $3,600 in your HSA — effectively making healthcare free that year.",
      "Your HDHP has a $2,000 individual deductible. A $4,000 appendectomy means you pay the $2,000 deductible from your HSA (tax-free), then 20% coinsurance on the remaining $2,000 — capped by your out-of-pocket maximum.",
      "A healthy 38-year-old contributes the maximum to an HDHP + HSA for 10 years and invests all HSA funds. At 65, they have a substantial tax-free healthcare reserve for retirement medical expenses.",
    ],
    faqs: [
      {
        question: "Is an HDHP always better if I'm healthy?",
        answer:
          "Not always. You need to be able to cover the deductible if something unexpected happens — the HDHP savings strategy breaks down if you'd have to go into debt to cover the deductible. Have at least 1 year's deductible in savings before relying on an HDHP.",
      },
      {
        question: "Can I use an HSA to pay my HDHP deductible?",
        answer:
          "Yes. HSA funds can be used for any qualified medical expense, including payments toward your HDHP deductible. This is the core of the HDHP + HSA strategy.",
      },
      {
        question: "Do preventive services cost anything on an HDHP?",
        answer:
          "On ACA-compliant plans, preventive services (annual physical, recommended screenings, immunizations) are covered at no cost even before meeting the deductible — the same as traditional plans.",
      },
    ],
    relatedTerms: ["hsa", "deductible", "out-of-pocket-maximum", "open-enrollment"],
    relatedSolutions: ["hsa-fsa-management", "open-enrollment", "employee-benefits"],
  },

  {
    slug: "beneficiary",
    term: "Beneficiary",
    shortDefinition:
      "The person (or entity) you designate to receive benefits from a life insurance policy, retirement account, or other financial instrument when you pass away.",
    metaDescription:
      "A beneficiary is who receives your life insurance or retirement account when you die. Learn how to designate beneficiaries correctly, common mistakes, and why keeping beneficiaries updated matters.",
    category: "Insurance",
    definition: `A beneficiary is the person, people, trust, or organization you designate to receive assets or benefits after your death. Beneficiary designations are used for life insurance policies, retirement accounts (401k, IRA, 403b), annuities, bank accounts (payable-on-death), and HSA accounts.

**Primary vs. contingent beneficiaries:**
- Primary beneficiary receives the assets first
- Contingent (secondary) beneficiary receives assets if the primary beneficiary has died or can't be located

**Why beneficiary designations matter:**
Beneficiary designations override your will. If your will says one person should inherit your life insurance but your policy names someone else as beneficiary, the policy beneficiary gets the money. This is why keeping designations updated is critical — especially after marriage, divorce, birth of a child, or a family death.

**Common mistakes:**
- Naming a minor child directly (they can't legally receive large sums; a custodian or trust is better)
- Forgetting to update after a divorce (your ex may still be named as beneficiary)
- Leaving the designation blank (assets go to your estate and through probate)
- Naming your estate as beneficiary (loses the ability to bypass probate and causes tax complications for retirement accounts)`,
    examples: [
      "You name your spouse as primary beneficiary and your children as contingent beneficiaries on your life insurance. If your spouse predeceases you, your children split the benefit equally.",
      "You divorce and forget to update your 401k beneficiary. When you die, your ex-spouse receives the balance — regardless of what your will says.",
      "You name your 8-year-old daughter as direct beneficiary of a $500,000 life insurance policy. Courts appoint a guardian to manage the funds until she turns 18 — a complicated and avoidable process. A trust would have been cleaner.",
    ],
    faqs: [
      {
        question: "How often should I review my beneficiary designations?",
        answer:
          "Review beneficiaries annually and after any major life event: marriage, divorce, birth or adoption of a child, death of a named beneficiary, or significant change in your financial situation.",
      },
      {
        question: "Can I name multiple beneficiaries?",
        answer:
          "Yes. You can name multiple primary beneficiaries and specify percentages (e.g., 50% to spouse, 25% each to two children). Percentages must add up to 100%.",
      },
      {
        question: "Does a beneficiary have to pay taxes on what they receive?",
        answer:
          "Life insurance death benefits are generally income-tax free for beneficiaries. Retirement account distributions (traditional 401k, IRA) are taxable as ordinary income. Roth distributions are generally tax-free.",
      },
    ],
    relatedTerms: ["coverage-gap", "disability-insurance", "umbrella-insurance"],
    relatedSolutions: ["family-financial-organization", "life-reminders", "insurance-savings"],
  },

  {
    slug: "qualifying-life-event",
    term: "Qualifying life event",
    shortDefinition:
      "A major life change — like marriage, having a baby, or losing job-based insurance — that allows you to change your health coverage outside of open enrollment.",
    metaDescription:
      "A qualifying life event lets you change health insurance outside of open enrollment. Learn which events qualify, how long you have to act, and what coverage changes you can make.",
    category: "Employee Benefits",
    definition: `A qualifying life event (QLE) is a change in your life circumstances that makes you eligible for a Special Enrollment Period — allowing you to enroll in, change, or drop health insurance outside of the standard open enrollment window.

**Common qualifying life events:**

**Family status changes:**
- Marriage or entering a domestic partnership
- Divorce or legal separation
- Birth, adoption, or placement of a foster child
- Death of a dependent
- A dependent child turning 26 and losing parental coverage

**Coverage changes:**
- Losing job-based health coverage (voluntary or involuntary termination)
- Losing eligibility for Medicaid or CHIP
- A significant change in your current plan (plan cancellation, substantial benefit change)

**Residence changes:**
- Moving to a new state or coverage area
- Returning from outside the US

**Income changes (for marketplace plans):**
- A significant income change that affects subsidy eligibility

You typically have 30–60 days from the qualifying event to make coverage changes. Documentation (marriage certificate, birth certificate, letter of coverage termination) is usually required.`,
    examples: [
      "You get married in April — well outside open enrollment. Marriage is a qualifying life event, giving you 30 days to add your spouse to your employer's health plan.",
      "You leave your job in August. Losing job-based coverage is a qualifying life event, opening a 60-day special enrollment period for marketplace plans.",
      "Your daughter turns 26 in March and can no longer stay on your family plan. This is her qualifying life event — she has 30 days to enroll in her own coverage.",
    ],
    faqs: [
      {
        question: "How long do I have to act on a qualifying life event?",
        answer:
          "For employer-sponsored plans, you typically have 30 days from the qualifying event. For marketplace plans, you generally have 60 days. Missing the window usually means waiting until the next open enrollment.",
      },
      {
        question: "What documentation do I need?",
        answer:
          "Required documents vary by event: marriage certificate for marriage, birth certificate for a new child, termination letter or COBRA notice for job loss, etc. Your employer's HR department or the marketplace will specify what's required.",
      },
      {
        question: "Can I drop coverage using a qualifying life event?",
        answer:
          "Yes, in certain cases — primarily if you're gaining coverage elsewhere (e.g., getting married and joining a spouse's employer plan). You generally can't drop coverage without a replacement plan.",
      },
    ],
    relatedTerms: ["open-enrollment", "cobra", "special-enrollment-period", "premium"],
    relatedSolutions: ["open-enrollment", "employee-benefits", "life-reminders"],
  },

  {
    slug: "special-enrollment-period",
    term: "Special enrollment period",
    shortDefinition:
      "A window outside of open enrollment when you can sign up for or change health insurance, triggered by a qualifying life event.",
    metaDescription:
      "A Special Enrollment Period (SEP) lets you enroll in health insurance outside of open enrollment after a qualifying life event. Learn what triggers an SEP, how long it lasts, and how to use it.",
    category: "Healthcare",
    definition: `A Special Enrollment Period (SEP) is a limited time window outside of open enrollment during which you can enroll in, change, or drop health insurance coverage. SEPs are triggered by qualifying life events — major life changes like getting married, having a baby, or losing employer-sponsored insurance.

**For employer-sponsored plans:** SEPs are generally 30 days from the qualifying life event. Some employers extend this to 60 days.

**For marketplace (ACA) plans:** SEPs are generally 60 days from the qualifying event. Some events (like losing Medicaid eligibility) have different timelines.

**Why SEPs matter:** Without an SEP, you're locked into your current coverage (or no coverage) until the next open enrollment period. Missing your SEP window means potentially going uninsured or waiting months to make necessary changes.

**Important:** You can't use an SEP preemptively — you need the qualifying event to actually occur. And documentation is required — you can't simply claim you had a qualifying event.`,
    examples: [
      "You have a baby in July. This triggers a 30-day SEP to add your child to your employer's health plan. Miss the 30 days and your child may go uncovered until open enrollment.",
      "You move from New York to Texas in September. Leaving your plan's coverage area is a qualifying event — you have 60 days to find new marketplace coverage in Texas.",
      "You lose your job in March. The loss of employer coverage gives you 60 days to enroll in a marketplace plan. If you also elect COBRA, you can switch to a marketplace plan during open enrollment or with another qualifying event.",
    ],
    faqs: [
      {
        question: "Can I enroll in any plan during my SEP?",
        answer:
          "For marketplace plans, you can choose any plan available in your area. For employer plans, you're generally limited to the plan options your employer offers.",
      },
      {
        question: "Do I lose my SEP if I don't act immediately?",
        answer:
          "Your SEP lasts for a set window (30 or 60 days). You can enroll or make changes anytime within that window — you don't have to act on day 1. But once the window closes, you lose the opportunity.",
      },
      {
        question: "What if I miss my SEP?",
        answer:
          "If you miss your SEP window, your options are limited. You may be able to apply for Medicaid if you qualify. Otherwise, you'll generally need to wait until the next open enrollment period — unless another qualifying event occurs.",
      },
    ],
    relatedTerms: ["open-enrollment", "qualifying-life-event", "cobra", "premium"],
    relatedSolutions: ["open-enrollment", "employee-benefits", "life-reminders"],
  },

  {
    slug: "network",
    term: "Network (in-network vs. out-of-network)",
    shortDefinition:
      "The group of doctors, hospitals, and providers that have a contract with your insurance company — in-network providers cost significantly less than out-of-network.",
    metaDescription:
      "Understanding in-network vs. out-of-network providers can save you thousands. Learn how insurance networks work, what happens when you go out of network, and how to check if a provider is in-network.",
    category: "Healthcare",
    definition: `An insurance network is the set of doctors, hospitals, specialists, labs, and other healthcare providers that have contracted with your insurance company to provide services at negotiated rates. Using in-network providers means your insurance applies its standard cost-sharing. Using out-of-network providers means paying significantly more — or potentially paying everything yourself.

**Plan types and network flexibility:**
- **HMO (Health Maintenance Organization):** Requires using in-network providers except in emergencies. Referrals required to see specialists. No out-of-network coverage.
- **PPO (Preferred Provider Organization):** Prefer in-network for lower costs, but you can see out-of-network providers at higher cost without referrals.
- **EPO (Exclusive Provider Organization):** Must use in-network providers (like HMO) but no referrals needed (like PPO).
- **POS (Point of Service):** HMO-PPO hybrid; requires referrals but allows out-of-network coverage.

**Why networks matter so much:** The same procedure at the same hospital can cost you $500 in-network or $5,000 out-of-network — depending solely on whether your specific surgeon participates in your plan's network. Surprise billing protections have helped for emergency care, but in-network is still significantly cheaper for planned procedures.`,
    examples: [
      "Your PPO plan has a $30 in-network copay and 40% out-of-network coinsurance. Seeing your in-network therapist costs $30; seeing an out-of-network therapist costs you $120 (40% of $300).",
      "You're having surgery. Your surgeon is in-network, but the anesthesiologist who shows up is out-of-network. This is a common situation — always verify all providers for any procedure.",
      "You move to a new state. Your current PPO may not have in-network providers in your new city, making it effectively useless. This is why a move is a qualifying life event for new coverage.",
    ],
    faqs: [
      {
        question: "How do I check if a provider is in-network?",
        answer:
          "Use your insurer's online provider directory (available on your insurer's website or app). Call the provider's office and ask them directly. And call your insurer to verify — provider directories can be outdated.",
      },
      {
        question: "What if I'm in an emergency and can't choose an in-network provider?",
        answer:
          "Federal surprise billing protections require that emergency care be covered at in-network rates, regardless of the facility. You should not be billed more than in-network cost-sharing for emergency services.",
      },
      {
        question: "Can I see any specialist in a PPO without a referral?",
        answer:
          "Yes — PPOs do not require referrals for specialists. However, you'll pay less if the specialist is in-network. Some PPOs have tiered networks (preferred vs. non-preferred in-network) with different cost-sharing.",
      },
    ],
    relatedTerms: ["copay", "coinsurance", "deductible", "out-of-pocket-maximum"],
    relatedSolutions: ["insurance-savings", "open-enrollment", "employee-benefits"],
  },

  {
    slug: "rider",
    term: "Rider",
    shortDefinition:
      "An optional add-on to an insurance policy that modifies or expands coverage — often for an additional premium.",
    metaDescription:
      "An insurance rider is an optional add-on that customizes your coverage. Learn about common riders for life, disability, and home insurance — and how to decide which riders are worth the extra cost.",
    category: "Insurance",
    definition: `An insurance rider (also called an endorsement) is an optional provision added to an insurance policy that modifies, expands, or restricts the standard coverage. Riders allow you to customize a policy to fit your specific needs — for an additional premium.

**Common riders by policy type:**

**Life insurance riders:**
- **Waiver of premium:** Waives premiums if you become disabled and can't work
- **Accelerated death benefit:** Allows early access to the death benefit if terminally ill
- **Child rider:** Extends coverage to your children
- **Return of premium:** Returns all premiums paid if you outlive the term (significantly more expensive)

**Disability insurance riders:**
- **Own occupation definition:** Pays if you can't perform your specific occupation
- **Cost of living adjustment (COLA):** Increases benefit to keep pace with inflation
- **Non-cancelable / guaranteed renewable:** Insurer can't cancel or change premiums

**Homeowners riders:**
- **Scheduled personal property:** Covers specific high-value items (jewelry, art, electronics) at stated value
- **Home business coverage:** Extends coverage to business equipment at home
- **Water backup coverage:** Covers damage from sewer or drain backup (not included in standard policies)

**The question to ask:** What specific risk does this rider address? What does it cost? Is that risk covered another way (another policy, credit card benefit)?`,
    examples: [
      "You add a waiver of premium rider to your life insurance for $8/month. If you become disabled, your life insurance premiums are waived — you keep coverage without paying.",
      "A violinist schedules her $15,000 instrument as a rider on her homeowner's policy. The standard policy would only cover it up to $1,500; the rider covers the full $15,000 with no deductible.",
      "You add water backup coverage to your homeowner's policy for $50/year. A sump pump failure causes $12,000 in water damage — covered by the rider, not covered by the standard policy.",
    ],
    faqs: [
      {
        question: "Are riders always worth it?",
        answer:
          "Not always. Evaluate each rider on its own merits: what specific risk does it cover, what does it cost, and is there a cheaper way to cover that risk? Some riders (like scheduled personal property) are excellent value; others (like return of premium on term life) are usually poor value.",
      },
      {
        question: "Can I add a rider after I buy a policy?",
        answer:
          "Some riders can be added later; others must be elected at policy inception. For life and disability insurance riders, adding later may require additional underwriting.",
      },
      {
        question: "Do riders increase my deductible?",
        answer:
          "Usually no — many riders (like scheduled personal property) have their own deductible or no deductible at all. The specific terms depend on the rider.",
      },
    ],
    relatedTerms: ["premium", "coverage-gap", "umbrella-insurance", "deductible"],
    relatedSolutions: ["insurance-savings", "family-financial-organization", "life-reminders"],
  },

  {
    slug: "coordination-of-benefits",
    term: "Coordination of benefits",
    shortDefinition:
      "The process that determines which insurance policy pays first when you're covered by more than one health plan — preventing you from receiving more than 100% of your actual costs.",
    metaDescription:
      "Coordination of benefits determines how multiple health plans work together. Learn how COB rules work, what 'primary' and 'secondary' payer means, and how to use dual coverage effectively.",
    category: "Healthcare",
    definition: `Coordination of benefits (COB) is the process used when a person is covered by more than one health insurance plan to determine which plan pays first (primary payer) and which pays second (secondary payer). COB rules ensure that total reimbursement doesn't exceed 100% of the actual medical costs.

**Common dual-coverage situations:**
- Spouses who both have employer health insurance and add each other to their plans
- A dependent child covered by both parents' employer plans
- Medicare beneficiaries who also have employer or retiree coverage
- A person covered by both their own employer plan and a spouse's employer plan

**How COB typically works:**
1. The primary plan pays its standard benefit (what it would normally cover)
2. The secondary plan can then pay some or all of the remaining costs — up to the total actual cost
3. You generally cannot receive more than 100% reimbursement from both plans combined

**Who pays first — common rules:**
- Your own employer plan is primary over a plan where you're a dependent
- For children covered by both parents: the birthday rule (parent whose birthday comes first in the calendar year has the primary plan)

**Is dual coverage worth it?** Dual coverage can significantly reduce out-of-pocket costs — but only if the secondary plan has meaningful benefits and the combined premium cost is worthwhile.`,
    examples: [
      "Both spouses have employer health insurance. The husband's plan is primary for him; the wife's plan is primary for her. For dependents (children), the birthday rule determines which parent's plan is primary.",
      "Your procedure costs $10,000. Your primary plan covers $8,000. Your secondary plan covers $1,500 of the remaining $2,000 (according to its own benefit schedule). You pay $500 instead of $2,000.",
      "A couple both have employer plans and add each other as dependents. Combined premiums cost $400/month extra. But their out-of-pocket costs drop $2,400/year. Dual coverage makes financial sense.",
    ],
    faqs: [
      {
        question: "Does dual coverage mean I pay nothing?",
        answer:
          "Rarely. The secondary plan covers some of what the primary plan didn't — but often not everything. You may still have copays, coinsurance, or costs that don't meet the secondary plan's requirements. But out-of-pocket costs are usually significantly reduced.",
      },
      {
        question: "What is the birthday rule?",
        answer:
          "The birthday rule determines which parent's plan is primary for a dependent child when both parents have coverage. The parent whose birthday (month and day, not year) falls earlier in the calendar year has the primary plan.",
      },
      {
        question: "Does the secondary plan's deductible still apply?",
        answer:
          "It depends on the plan. Some secondary payers have their own deductible that applies; others coordinate as though no deductible exists and simply cover costs not covered by the primary plan. Check your secondary plan's COB provisions.",
      },
    ],
    relatedTerms: ["deductible", "copay", "coinsurance", "out-of-pocket-maximum", "network"],
    relatedSolutions: ["insurance-savings", "employee-benefits", "family-financial-organization"],
  },
];

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getGlossaryTermsByCategory(category: string): GlossaryTerm[] {
  return glossaryTerms.filter((t) => t.category === category);
}
