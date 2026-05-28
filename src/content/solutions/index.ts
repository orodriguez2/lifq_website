import type { Solution } from "./types";

export const solutions: Solution[] = [
  {
    slug: "warranty-tracker",
    title: "Warranty Tracker — Never Let a Warranty Expire Unnoticed",
    headline: "Never let a warranty expire without knowing it",
    subheadline:
      "LifQ automatically tracks every product warranty, manufacturer guarantee, and extended coverage plan you have — and alerts you before they run out.",
    metaDescription:
      "Track all your product warranties in one place. LifQ reads your receipts and warranty documents, alerts you before coverage expires, and helps you file claims before it's too late.",
    category: "Warranty Management",
    heroCtaLabel: "Start tracking your warranties",
    problem: {
      heading: "Warranties expire quietly — and cost you real money",
      intro:
        "The average household has 15–20 products under some form of warranty at any given time. Yet most people can't name more than three of them.",
      points: [
        {
          title: "Receipts get lost",
          description:
            "You need the original receipt or purchase date to make a warranty claim. By the time something breaks, that paper is long gone.",
        },
        {
          title: "Expiration dates are invisible",
          description:
            "Manufacturers don't send reminders. Extended warranty services might, but the original warranty? It just quietly expires.",
        },
        {
          title: "Claims get denied",
          description:
            "Without proof of purchase or documentation, warranty claims fail — even when the product is clearly defective.",
        },
        {
          title: "You pay for repairs that should be free",
          description:
            "Most people who pay for appliance or electronics repairs didn't realize the warranty was still active.",
        },
      ],
    },
    howItHelps: {
      heading: "How LifQ tracks your warranties automatically",
      steps: [
        {
          step: "01",
          title: "Upload your receipts and warranty documents",
          description:
            "Take a photo, forward an email receipt, or upload a PDF. LifQ accepts any format — it reads everything.",
        },
        {
          step: "02",
          title: "AI extracts purchase date, coverage period, and terms",
          description:
            "LifQ's AI identifies what's covered, for how long, and what the claims process looks like — so you don't have to decode the fine print.",
        },
        {
          step: "03",
          title: "Get alerts before warranties expire",
          description:
            "Receive timely reminders before coverage runs out so you can decide whether to extend, replace, or file a claim.",
        },
      ],
    },
    benefits: [
      {
        icon: "shield-check",
        title: "Never pay for covered repairs",
        description:
          "Know exactly which products are still under warranty before you call a repair shop.",
      },
      {
        icon: "bell",
        title: "Expiration alerts before it's too late",
        description: "Get notified 30, 60, and 90 days before a warranty expires.",
      },
      {
        icon: "file-text",
        title: "All documentation in one place",
        description:
          "Receipts, warranty cards, and registration numbers — all organized and searchable.",
      },
      {
        icon: "credit-card",
        title: "See credit card warranty extensions too",
        description:
          "Many credit cards automatically extend manufacturer warranties by 1–2 years. LifQ cross-references this for you.",
      },
    ],
    realWorldExample: {
      scenario:
        "Your dishwasher stops working 18 months after purchase. You're sure the warranty was for 2 years, but you can't find the receipt.",
      result:
        "With LifQ, you open the app, find the dishwasher entry with its warranty dates, download the receipt, and call the manufacturer. The repair is covered — saving you $400.",
    },
    faqs: [
      {
        question: "What types of warranties can LifQ track?",
        answer:
          "LifQ tracks manufacturer warranties, extended warranties, retailer return windows, service contracts, and credit card purchase protection periods.",
      },
      {
        question: "Do I need to keep my physical receipts?",
        answer:
          "No. Once you upload or forward a receipt to LifQ, your digital copy is securely stored. You can access it anytime for a warranty claim.",
      },
      {
        question: "Does LifQ help me file a warranty claim?",
        answer:
          "Yes. LifQ includes Claims Guidance that walks you through the claim process step-by-step, with the right documentation ready.",
      },
      {
        question: "Can LifQ detect if my credit card already extends my warranty?",
        answer:
          "Yes. LifQ analyzes your credit card benefits and cross-references them with your product warranties to show you any automatic extensions you already have.",
      },
    ],
    cta: {
      headline: "Stop leaving warranty protection on the table",
      body: "Join the LifQ beta and start tracking every warranty, guarantee, and protection plan you own.",
      buttonLabel: "Upload your first warranty",
    },
    relatedSolutions: ["credit-card-benefits", "insurance-savings", "life-reminders"],
  },

  {
    slug: "open-enrollment",
    title: "Open Enrollment Help — Make the Right Benefits Decisions",
    headline: "Open enrollment is 30 days to make decisions that affect your entire year",
    subheadline:
      "LifQ helps you analyze your current benefits, compare your options, and make confident enrollment decisions — without spending weekends decoding plan documents.",
    metaDescription:
      "Make smarter open enrollment decisions with LifQ. Compare health plans, understand HSA vs FSA options, and optimize your benefits package using AI analysis of your actual documents.",
    category: "Employee Benefits",
    heroCtaLabel: "Analyze my benefits options",
    problem: {
      heading: "Most people re-enroll without actually comparing options",
      intro:
        "Open enrollment happens once a year, with a deadline that waits for no one. Most people default to whatever they had last year — even when their situation or the plans have changed.",
      points: [
        {
          title: "Benefit documents are dense and confusing",
          description:
            "Summary of Benefits and Coverage documents run 20+ pages of insurance language. Most people scan the first page and move on.",
        },
        {
          title: "You can't see your options side-by-side",
          description:
            "Comparing three health plans with different deductibles, networks, copays, and premiums requires a spreadsheet most people don't build.",
        },
        {
          title: "You don't know how much you'll actually spend",
          description:
            "Premium cost is easy to see. Out-of-pocket exposure if something goes wrong is much harder to calculate.",
        },
        {
          title: "You're making decisions without last year's data",
          description:
            "How much did you actually spend on healthcare last year? Most people don't know — but LifQ does if you've tracked your policies.",
        },
      ],
    },
    howItHelps: {
      heading: "How LifQ makes open enrollment decisions clearer",
      steps: [
        {
          step: "01",
          title: "Upload your employer's benefits guide and plan documents",
          description:
            "Forward the email from HR or upload the PDF. LifQ reads the full document and extracts every plan's key data.",
        },
        {
          step: "02",
          title: "AI compares your options across what matters",
          description:
            "Premiums, deductibles, copays, HSA/FSA eligibility, network coverage — all mapped and compared in plain language.",
        },
        {
          step: "03",
          title: "See the total cost picture, not just the premium",
          description:
            "LifQ models your likely annual costs based on your household's typical healthcare usage, showing you the plan that actually costs less.",
        },
      ],
    },
    benefits: [
      {
        icon: "bar-chart",
        title: "Compare plans in plain language",
        description:
          "No more decoding Summary of Benefits documents. LifQ translates them into clear comparisons.",
      },
      {
        icon: "dollar-sign",
        title: "See your true annual cost",
        description: "Premium + deductible + copay exposure — the real number you should be comparing.",
      },
      {
        icon: "calendar",
        title: "Deadline reminders",
        description: "Never miss an enrollment window. LifQ tracks your open enrollment period and sends reminders.",
      },
      {
        icon: "users",
        title: "Family coverage analysis",
        description:
          "Optimize coverage for your whole household — including dependent coverage and family deductible calculations.",
      },
    ],
    realWorldExample: {
      scenario:
        "Your employer offers three health plans: a low-deductible PPO at $280/month, a mid-tier HMO at $190/month, and a high-deductible HSA-eligible plan at $120/month.",
      result:
        "LifQ analyzes your family's healthcare patterns and shows that for a healthy family who rarely hits the deductible, the HDHP + HSA saves $2,400/year after employer contributions — a choice most people would never make without the data.",
    },
    faqs: [
      {
        question: "Does LifQ work with all employer benefits systems?",
        answer:
          "Yes. LifQ works with any benefits documents you can upload — PDFs, email attachments, or photos of printed materials. It's not connected directly to HR systems.",
      },
      {
        question: "Can LifQ help me decide between an HSA and FSA?",
        answer:
          "Yes. LifQ explains the differences between HSA and FSA accounts, analyzes your healthcare spending patterns, and helps you estimate optimal contribution amounts.",
      },
      {
        question: "What if I miss my open enrollment window?",
        answer:
          "If you miss open enrollment, you typically can only change plans during a qualifying life event (marriage, new child, job change). LifQ tracks these events and reminds you to act when windows open.",
      },
      {
        question: "Can LifQ remind me when open enrollment starts?",
        answer:
          "Yes. Once you've set up your employer benefits in LifQ, it alerts you when your open enrollment window is approaching so you have time to review your options.",
      },
    ],
    cta: {
      headline: "Make this open enrollment your best one yet",
      body: "Join LifQ and spend 15 minutes analyzing your options instead of 15 days second-guessing your decision.",
      buttonLabel: "Start my benefits analysis",
    },
    relatedSolutions: ["employee-benefits", "hsa-fsa-management", "insurance-savings"],
  },

  {
    slug: "insurance-savings",
    title: "Stop Overpaying for Insurance — Find Overlapping Coverage",
    headline: "You may be paying for the same coverage twice without knowing it",
    subheadline:
      "LifQ analyzes all your insurance policies together and finds overlapping coverage, unused benefits, and opportunities to save — without reducing your actual protection.",
    metaDescription:
      "Find insurance overlaps and stop overpaying. LifQ's AI analyzes all your policies together to identify duplicate coverage, bundling opportunities, and savings without sacrificing protection.",
    category: "Insurance Management",
    heroCtaLabel: "Find my savings opportunities",
    problem: {
      heading: "Insurance overlap is costing the average household hundreds per year",
      intro:
        "Most households have policies from multiple providers, purchased at different times, managed separately. Nobody is looking at the whole picture — until LifQ does.",
      points: [
        {
          title: "Rental car coverage you're paying for twice",
          description:
            "Your credit card, auto insurance, and possibly your employer benefits all include rental car coverage. Most people pay for all three.",
        },
        {
          title: "Travel insurance you already have",
          description:
            "Premium credit cards include trip cancellation, lost luggage, and emergency medical coverage. Many people buy separate travel insurance on top of this.",
        },
        {
          title: "Missing bundling discounts",
          description:
            "Bundling home and auto with the same insurer typically saves 10–20%. Many households split these without realizing the cost.",
        },
        {
          title: "Coverage gaps hiding next to the overlaps",
          description:
            "While you're paying twice for some things, there are often critical gaps elsewhere — umbrella liability, flood, or disability coverage that's missing entirely.",
      },
      ],
    },
    howItHelps: {
      heading: "How LifQ finds what you're wasting and what you're missing",
      steps: [
        {
          step: "01",
          title: "Upload all your insurance policies",
          description:
            "Auto, home, life, health, credit cards with benefits, travel policies — everything in one place.",
        },
        {
          step: "02",
          title: "AI maps your coverage portfolio",
          description:
            "LifQ reads and structures each policy, then compares them against each other to find overlaps, gaps, and optimization opportunities.",
        },
        {
          step: "03",
          title: "Get a personalized savings report",
          description:
            "See exactly where you're doubling up, what you might safely eliminate, and what bundling opportunities could save you money.",
        },
      ],
    },
    benefits: [
      {
        icon: "search",
        title: "Complete overlap detection",
        description: "LifQ identifies duplicate coverage across all your policies and benefit programs.",
      },
      {
        icon: "trending-down",
        title: "Concrete savings estimates",
        description: "See estimated annual savings, not vague guidance — real numbers based on your policies.",
      },
      {
        icon: "shield",
        title: "No coverage gaps",
        description: "Savings suggestions only appear where removing coverage won't leave you exposed.",
      },
      {
        icon: "pie-chart",
        title: "Portfolio IQ Score",
        description: "A single score that reflects how well-optimized your overall protection portfolio is.",
      },
    ],
    realWorldExample: {
      scenario:
        "A household is paying $18/month for roadside assistance through their auto insurer, $15/month through a credit card benefit, and is enrolled in a AAA membership at $100/year — all covering the same scenario.",
      result:
        "LifQ identifies the triple overlap and flags that the credit card roadside benefit is the strongest of the three. Eliminating the other two saves $316/year with zero loss of protection.",
    },
    faqs: [
      {
        question: "How does LifQ know what my credit cards cover?",
        answer:
          "You upload your credit card benefits guides (usually a PDF sent by the card issuer). LifQ reads them and maps their benefits alongside your other policies.",
      },
      {
        question: "Will LifQ recommend I cancel insurance policies?",
        answer:
          "LifQ shows you where coverage overlaps and estimates potential savings. It doesn't automatically cancel anything — all decisions are yours. LifQ gives you the information to make informed choices.",
      },
      {
        question: "What is a Portfolio IQ Score?",
        answer:
          "Your Portfolio IQ Score reflects how well-optimized your household's entire protection portfolio is — factoring in gaps, overlaps, cost efficiency, and renewal risks. Higher is better.",
      },
      {
        question: "Can LifQ help me shop for better rates?",
        answer:
          "LifQ focuses on analyzing what you have and finding optimization opportunities within your current coverage. For shopping new policies, it can highlight what coverage levels and terms to look for.",
      },
    ],
    cta: {
      headline: "Find out how much you're overpaying",
      body: "Join the LifQ beta and get a complete analysis of your insurance portfolio in minutes.",
      buttonLabel: "Find my savings",
    },
    relatedSolutions: ["credit-card-benefits", "warranty-tracker", "employee-benefits"],
  },

  {
    slug: "employee-benefits",
    title: "Employee Benefits You're Not Using — Maximize Your Package",
    headline: "Most workers leave thousands in employer benefits unused every year",
    subheadline:
      "LifQ reads your employer benefits guide, identifies everything you qualify for, and shows you exactly how much value you're not capturing.",
    metaDescription:
      "Stop leaving employee benefits on the table. LifQ analyzes your employer benefits package to identify unused benefits, explain your options, and help you maximize every dollar your employer offers.",
    category: "Employee Benefits",
    heroCtaLabel: "Discover my unused benefits",
    problem: {
      heading: "Your employer benefits package is worth more than you realize",
      intro:
        "The average employer benefits package is worth $12,000–$20,000 per year beyond salary. Most employees use less than half of it.",
      points: [
        {
          title: "Benefits guides are 40+ pages of fine print",
          description:
            "HR sends a PDF during enrollment. Most employees read 2 pages and click through the rest.",
        },
        {
          title: "Benefits change every year",
          description:
            "New benefits get added, EAP programs expand, wellness credits appear — and nobody sends a personal notification.",
        },
        {
          title: "Qualifying events get missed",
          description:
            "Had a baby? Changed your living situation? You may qualify for life events that open benefits windows most people don't know exist.",
        },
        {
          title: "Voluntary benefits require active enrollment",
          description:
            "Accident insurance, legal plans, disability upgrades, pet insurance — all require you to proactively opt in, and most employees don't.",
        },
      ],
    },
    howItHelps: {
      heading: "How LifQ maximizes your employer benefits",
      steps: [
        {
          step: "01",
          title: "Upload your employer benefits guide",
          description:
            "Forward the email from HR or upload the benefits PDF. LifQ reads the entire document.",
        },
        {
          step: "02",
          title: "AI identifies every benefit you have and its value",
          description:
            "Health, dental, vision, EAP, legal, tuition reimbursement, wellness credits, gym subsidies, FSA/HSA — LifQ catalogs everything.",
        },
        {
          step: "03",
          title: "See what you're using vs. what you're missing",
          description:
            "LifQ shows the dollar value of unused benefits and explains how to access them before they expire.",
        },
      ],
    },
    benefits: [
      {
        icon: "gift",
        title: "Full benefits inventory",
        description: "Every benefit your employer offers — cataloged, explained, and valued.",
      },
      {
        icon: "alert-circle",
        title: "Use-it-or-lose-it alerts",
        description: "FSA deadlines, wellness credit expirations, and enrollment windows — all tracked.",
      },
      {
        icon: "book-open",
        title: "Plain-language explanations",
        description: "LifQ translates benefits jargon into plain language so you know what you actually have.",
      },
      {
        icon: "dollar-sign",
        title: "Dollar value of unused benefits",
        description: "See exactly how much money you're leaving on the table, in dollars.",
      },
    ],
    realWorldExample: {
      scenario:
        "An employee has access to a $600 annual wellness credit, $2,000 in tuition reimbursement, an EAP with 8 free therapy sessions, and legal plan discounts — but is only using the health insurance.",
      result:
        "LifQ identifies $4,200+ in unused annual benefits and shows step-by-step how to access each one. The employee submits a wellness credit claim the same day.",
    },
    faqs: [
      {
        question: "Does LifQ connect to my HR system?",
        answer:
          "No direct integration is required. You upload your benefits documentation and LifQ reads it. This works with any employer, any HR system.",
      },
      {
        question: "What if I change jobs?",
        answer:
          "You can update your benefits whenever your situation changes. LifQ will compare your old and new benefits so you understand what you're gaining or losing.",
      },
      {
        question: "Does LifQ track when benefits expire?",
        answer:
          "Yes. LifQ monitors FSA deadlines, wellness credit windows, benefit year resets, and enrollment periods — and sends you reminders before you lose dollars.",
      },
      {
        question: "Can LifQ help with COBRA decisions?",
        answer:
          "Yes. If you're evaluating COBRA coverage after leaving a job, LifQ helps you understand what you'd be paying for and compare it against marketplace alternatives.",
      },
    ],
    cta: {
      headline: "Start using every benefit you're already paying for",
      body: "Join the LifQ beta and discover the full value of your employer benefits package in minutes.",
      buttonLabel: "Unlock my benefits",
    },
    relatedSolutions: ["open-enrollment", "hsa-fsa-management", "insurance-savings"],
  },

  {
    slug: "subscription-management",
    title: "Subscription Management — Stop Paying for What You Don't Use",
    headline: "The average household pays for 6 services they forgot they subscribed to",
    subheadline:
      "LifQ catalogs all your memberships, subscriptions, and recurring payments — and shows you which ones are worth keeping and which ones are just draining your account.",
    metaDescription:
      "Track and manage all your subscriptions and memberships in one place. LifQ identifies forgotten recurring payments, calculates their value, and helps you stop paying for things you don't use.",
    category: "Financial Organization",
    heroCtaLabel: "Find my forgotten subscriptions",
    problem: {
      heading: "Subscription creep is real — and it's invisible",
      intro:
        "Free trials convert to paid. Annual renewals happen automatically. Memberships get bundled into other memberships. The average household has dozens of recurring charges they've never reviewed together.",
      points: [
        {
          title: "Automatic renewals are designed to be invisible",
          description:
            "Annual subscription renewals often appear as a single charge on a single day — easy to miss, easy to forget.",
        },
        {
          title: "Benefits overlap between memberships",
          description:
            "Your Amazon Prime, Costco membership, and credit card concierge all include benefits that overlap. You're paying for the same thing multiple times.",
        },
        {
          title: "You've grown out of some subscriptions",
          description:
            "A subscription that made sense two years ago may no longer match your life. But cancellation requires effort, so it stays.",
        },
        {
          title: "Family members don't know what you're paying for",
          description:
            "Household subscriptions are often managed by one person. The rest of the family has no visibility into what's being paid or what's available.",
        },
      ],
    },
    howItHelps: {
      heading: "How LifQ helps you manage every membership",
      steps: [
        {
          step: "01",
          title: "Add your memberships and subscriptions",
          description:
            "Enter them manually or upload membership documents, welcome emails, or benefits guides. LifQ accepts any format.",
        },
        {
          step: "02",
          title: "AI catalogs what each one includes",
          description:
            "LifQ identifies the benefits, renewal date, and monthly/annual cost of each membership — including overlapping benefits across programs.",
        },
        {
          step: "03",
          title: "See your full picture and rationalize",
          description:
            "Review what you're paying for everything together, identify duplicates, and make informed keep/cancel decisions.",
        },
      ],
    },
    benefits: [
      {
        icon: "list",
        title: "Complete membership inventory",
        description: "Every subscription, membership, and recurring service — cataloged in one place.",
      },
      {
        icon: "refresh-cw",
        title: "Renewal date tracking",
        description: "See upcoming renewals before they charge, giving you time to cancel or renew intentionally.",
      },
      {
        icon: "zap",
        title: "Overlap detection",
        description: "Find where multiple memberships include the same benefits so you can consolidate.",
      },
      {
        icon: "users",
        title: "Household visibility",
        description: "Share your membership inventory with family members so everyone knows what's available.",
      },
    ],
    realWorldExample: {
      scenario:
        "A household is paying for Amazon Prime ($14.99/mo), Costco ($65/yr), and a Visa Signature card with concierge services — all of which include travel booking, streaming, and purchase protection.",
      result:
        "LifQ maps the overlapping benefits, values each membership's unique features, and helps the household decide which services to keep, consolidate, or cancel — saving $200+ annually.",
    },
    faqs: [
      {
        question: "Can LifQ automatically detect my subscriptions?",
        answer:
          "LifQ works with documents you upload — welcome emails, membership cards, or benefits guides. For automatic bank transaction scanning, that feature is on our roadmap.",
      },
      {
        question: "Does LifQ cancel subscriptions for me?",
        answer:
          "LifQ gives you the information and reminders to make cancellation decisions. Actual cancellation is done directly with the service provider.",
      },
      {
        question: "Can LifQ track my credit card membership benefits?",
        answer:
          "Yes. Credit card benefits like Priority Pass lounge access, travel credits, and streaming subscriptions can be added to your LifQ membership inventory.",
      },
      {
        question: "Can I share my subscription inventory with my household?",
        answer:
          "Yes. LifQ's Family plan lets you share your complete membership inventory with other household members — so everyone knows what services are available and what's already being paid for.",
      },
    ],
    cta: {
      headline: "Find out what you're actually paying for",
      body: "Join the LifQ beta and get a complete view of every subscription and membership your household has.",
      buttonLabel: "Audit my subscriptions",
    },
    relatedSolutions: ["credit-card-benefits", "employee-benefits", "insurance-savings"],
  },

  {
    slug: "credit-card-benefits",
    title: "Credit Card Benefits — Unlock Hidden Perks Worth Hundreds",
    headline: "Your credit cards include benefits worth hundreds of dollars — most people never use them",
    subheadline:
      "LifQ reads your credit card benefits guides and tells you exactly what you're entitled to — from travel insurance to purchase protection to extended warranties.",
    metaDescription:
      "Discover and use your credit card benefits with LifQ. From travel insurance to extended warranties and purchase protection, LifQ maps all your credit card perks so you never leave value on the table.",
    category: "Financial Organization",
    heroCtaLabel: "Discover my card benefits",
    problem: {
      heading: "Credit card benefits guides run 50+ pages — and nobody reads them",
      intro:
        "Premium credit cards come with a remarkable range of benefits. Most cardholders use rewards points and nothing else — leaving travel insurance, purchase protection, rental car coverage, and extended warranties completely untouched.",
      points: [
        {
          title: "You buy travel insurance you already have",
          description:
            "Many Visa Signature, Mastercard World Elite, and Amex cards include trip cancellation, lost luggage, and emergency evacuation coverage. Most people buy separate travel insurance anyway.",
        },
        {
          title: "You pay for extended warranties you already have",
          description:
            "Most premium cards extend manufacturer warranties by 1–2 years automatically. Most cardholders buy retailer extended warranties on top of this.",
        },
        {
          title: "You pay for rental car coverage three times",
          description:
            "Your auto insurance, credit card, and possibly an employer benefit all include rental car collision coverage. Declining the rental company's CDW is possible — if you know your coverage.",
        },
        {
          title: "Benefits differ by card and nobody explains them",
          description:
            "A Chase Sapphire Reserve, a basic Visa, and an Amex Platinum have wildly different benefit stacks. Most people don't know what tier their card sits at.",
        },
      ],
    },
    howItHelps: {
      heading: "How LifQ unlocks your credit card benefits",
      steps: [
        {
          step: "01",
          title: "Upload your credit card benefits guides",
          description:
            "Forward the PDF from your card issuer or upload it directly. LifQ processes every card you have.",
        },
        {
          step: "02",
          title: "AI maps every benefit across every card",
          description:
            "Travel insurance, purchase protection, extended warranties, concierge services, lounge access, statement credits — all cataloged in plain language.",
        },
        {
          step: "03",
          title: "See which benefits apply to your upcoming plans",
          description:
            "Traveling next month? Buying a new appliance? LifQ shows which of your cards' benefits apply to specific situations.",
        },
      ],
    },
    benefits: [
      {
        icon: "plane",
        title: "Travel benefits mapped and ready",
        description:
          "Know exactly which cards provide trip cancellation, delay compensation, and emergency assistance before you book.",
      },
      {
        icon: "shield-check",
        title: "Purchase protection tracking",
        description:
          "Know which cards protect purchases against theft or damage within the coverage window.",
      },
      {
        icon: "clock",
        title: "Warranty extensions cataloged",
        description:
          "See exactly which products have manufacturer warranties extended by your credit card benefits.",
      },
      {
        icon: "car",
        title: "Rental coverage clarity",
        description:
          "Know whether your card provides primary or secondary rental car coverage — before you're at the counter.",
      },
    ],
    realWorldExample: {
      scenario:
        "You're booking a $3,200 international trip. Your Chase Sapphire Reserve card offers $10,000 in trip cancellation insurance, $500 in trip delay reimbursement, and baggage delay coverage.",
      result:
        "LifQ shows your full travel coverage before you book. You skip the $280 standalone travel insurance — and have better coverage than the policy you would have bought.",
    },
    faqs: [
      {
        question: "Which credit cards work with LifQ?",
        answer:
          "Any credit card that provides a benefits guide document works with LifQ. Visa Signature, Mastercard World Elite, Amex, Discover, and most major issuers all provide benefits documentation.",
      },
      {
        question: "How does LifQ know when my purchase protection window is open?",
        answer:
          "Once you've uploaded a receipt and associated it with a credit card, LifQ tracks the purchase protection period and alerts you before it closes.",
      },
      {
        question: "Can LifQ help me choose which card to use for specific purchases?",
        answer:
          "Yes. LifQ can show which of your cards provides the best protection for a specific type of purchase — useful for big-ticket items or travel bookings.",
      },
      {
        question: "What if my credit card benefits change?",
        answer:
          "Card issuers update benefits periodically. When your benefits guide changes, you can re-upload it to LifQ and it will update your benefits inventory — flagging anything that improved or was removed.",
      },
    ],
    cta: {
      headline: "Start using benefits you're already paying card fees for",
      body: "Join LifQ and discover exactly what every card in your wallet already covers.",
      buttonLabel: "Map my card benefits",
    },
    relatedSolutions: ["warranty-tracker", "travel-protection", "insurance-savings"],
  },

  {
    slug: "life-reminders",
    title: "Life Event Reminders — Never Miss a Renewal or Coverage Deadline",
    headline: "Life events change your coverage needs — and create windows you can't afford to miss",
    subheadline:
      "LifQ tracks renewal dates, policy deadlines, and life events that trigger coverage opportunities — so you never face a gap because you didn't know the clock was running.",
    metaDescription:
      "Stay ahead of insurance renewals, coverage deadlines, and life events with LifQ. Get timely reminders for policy renewals, open enrollment windows, and qualifying life events that affect your coverage.",
    category: "Life Organization",
    heroCtaLabel: "Set up my coverage reminders",
    problem: {
      heading: "Insurance deadlines wait for no one — and most people miss them",
      intro:
        "Coverage gaps often happen not because people can't afford insurance, but because they didn't know a deadline existed or a window was closing.",
      points: [
        {
          title: "Policy renewals sneak up",
          description:
            "Auto and home policies renew annually. If you don't compare and shop before renewal, you're on the hook for another year at whatever rate they set.",
        },
        {
          title: "Life events open short enrollment windows",
          description:
            "Marriage, new baby, job change, or moving — each triggers a Special Enrollment Period that closes within 60 days. Miss it and you wait until next year.",
        },
        {
          title: "Warranties expire quietly",
          description:
            "No manufacturer sends a reminder that your warranty is about to run out. You discover it when something breaks.",
        },
        {
          title: "FSA dollars disappear at year end",
          description:
            "Flexible Spending Account funds are use-it-or-lose-it. Unused dollars simply disappear on December 31st.",
        },
      ],
    },
    howItHelps: {
      heading: "How LifQ keeps you ahead of every deadline",
      steps: [
        {
          step: "01",
          title: "LifQ reads your documents and extracts all key dates",
          description:
            "Policy renewal dates, warranty expirations, enrollment windows, FSA deadlines — LifQ finds every date that matters.",
        },
        {
          step: "02",
          title: "Set up your life events",
          description:
            "Tell LifQ about major life events like a new job, marriage, or new child. LifQ knows what coverage opportunities these events create.",
        },
        {
          step: "03",
          title: "Receive intelligent reminders before deadlines",
          description:
            "Get notified 30, 60, and 90 days ahead of key dates — with guidance on what action to take.",
        },
      ],
    },
    benefits: [
      {
        icon: "calendar",
        title: "All deadlines in one calendar",
        description: "Every renewal, expiration, and enrollment window — organized chronologically.",
      },
      {
        icon: "bell",
        title: "Proactive reminders",
        description: "Notifications arrive before deadlines, not after — giving you time to act.",
      },
      {
        icon: "life-buoy",
        title: "Life event guidance",
        description:
          "When a life event happens, LifQ shows which insurance and benefit windows it opens and how long you have.",
      },
      {
        icon: "trending-up",
        title: "Coverage continuity",
        description: "Never have an unintentional gap in coverage because a renewal slipped through the cracks.",
      },
    ],
    realWorldExample: {
      scenario:
        "You change jobs in March. Your new employer's health insurance doesn't start until April 15th, leaving a 15-day gap. You're not sure if your old COBRA coverage is worth the cost.",
      result:
        "LifQ detects the job change, notifies you of the coverage gap, explains your COBRA election window (60 days), and models the cost comparison between COBRA and marketplace coverage — helping you make the right decision before the window closes.",
    },
    faqs: [
      {
        question: "What life events does LifQ track?",
        answer:
          "LifQ tracks coverage-relevant life events including marriage, divorce, new child, job change, relocation, loss of other coverage, and reaching age milestones that affect eligibility.",
      },
      {
        question: "How far in advance does LifQ remind me of renewals?",
        answer:
          "LifQ sends reminders at 90, 60, and 30 days before key dates by default. You can customize reminder timing in your settings.",
      },
      {
        question: "What happens when I miss a deadline?",
        answer:
          "LifQ will show you what options remain and what the implications are. In some cases, alternative coverage options still exist — LifQ helps you find them.",
      },
      {
        question: "Can I add reminders for things that aren't in my uploaded documents?",
        answer:
          "Yes. You can manually add any date-based reminder to LifQ — an upcoming policy review, a contract renewal, or any coverage deadline you want to track — even without uploading a document.",
      },
    ],
    cta: {
      headline: "Stay ahead of every deadline that affects your family's protection",
      body: "Join LifQ and never miss a renewal, expiration, or coverage window again.",
      buttonLabel: "Set up my reminders",
    },
    relatedSolutions: ["warranty-tracker", "hsa-fsa-management", "open-enrollment"],
  },

  {
    slug: "hsa-fsa-management",
    title: "HSA and FSA Management — Stop Losing Tax-Free Healthcare Dollars",
    headline: "Millions of Americans lose their FSA dollars every year — yours don't have to be among them",
    subheadline:
      "LifQ tracks your HSA and FSA balances, identifies eligible expenses, and reminds you before the use-it-or-lose-it deadline so every tax-free dollar gets used.",
    metaDescription:
      "Maximize your HSA and FSA with LifQ. Track balances, discover eligible expenses, and get use-it-or-lose-it reminders so you never forfeit tax-advantaged healthcare savings again.",
    category: "Healthcare Savings",
    heroCtaLabel: "Maximize my HSA/FSA",
    problem: {
      heading: "The IRS estimates $3 billion in FSA dollars is forfeited every year",
      intro:
        "Health Savings Accounts and Flexible Spending Accounts exist to help you pay for healthcare with tax-free dollars. But most people don't track their balance, don't know what's eligible, and don't realize the deadline until it's too late.",
      points: [
        {
          title: "FSA funds expire and most people don't plan for it",
          description:
            "FSA funds are generally use-it-or-lose-it by December 31st. Many people discover a balance in late December and scramble — or miss the deadline entirely.",
        },
        {
          title: "You don't know what's HSA/FSA eligible",
          description:
            "The eligible expense list is broader than most people know — prescriptions, dental, vision, mental health, even some OTC products. Most people leave eligible expenses unsubmitted.",
        },
        {
          title: "HSA investment potential goes untapped",
          description:
            "HSAs can be invested like a 401(k) — growing tax-free for retirement healthcare expenses. Most people treat them as checking accounts and miss decades of compound growth.",
        },
        {
          title: "Balances are invisible at point of care",
          description:
            "You're at the pharmacy, not sure if your prescription is covered by FSA or how much is left. Without visibility, you use a regular credit card instead.",
        },
      ],
    },
    howItHelps: {
      heading: "How LifQ helps you maximize every tax-free dollar",
      steps: [
        {
          step: "01",
          title: "Connect your HSA/FSA information",
          description:
            "Add your account details and annual contribution amount. LifQ tracks your balance and models your spending rate.",
        },
        {
          step: "02",
          title: "AI identifies eligible expenses you're missing",
          description:
            "LifQ scans your healthcare spending patterns and flags expenses you paid out-of-pocket that were HSA/FSA eligible.",
        },
        {
          step: "03",
          title: "Get deadline reminders and spend-down guidance",
          description:
            "LifQ reminds you of upcoming deadlines and suggests eligible expenses to use remaining balances — avoiding forfeiture.",
        },
      ],
    },
    benefits: [
      {
        icon: "dollar-sign",
        title: "Stop forfeiting FSA dollars",
        description: "Reminders and spend-down guidance before the December 31st deadline.",
      },
      {
        icon: "list",
        title: "Full eligible expense list",
        description: "Discover all the expenses you can pay tax-free — the list is longer than you think.",
      },
      {
        icon: "trending-up",
        title: "HSA investment guidance",
        description:
          "Understand the long-term value of investing your HSA instead of spending it down — with projections.",
      },
      {
        icon: "check-circle",
        title: "Balance visibility when you need it",
        description: "Know your current balance and remaining eligibility period at a glance.",
      },
    ],
    realWorldExample: {
      scenario:
        "It's November 15th. You have $840 remaining in your FSA with six weeks until the December 31st deadline. You've been thinking of scheduling a dentist appointment and your spouse needs new glasses.",
      result:
        "LifQ shows your balance, calculates that the dentist appointment ($280) and glasses ($320) would use $600, and suggests scheduling a vision exam ($200) to use the rest — all before the deadline. Zero dollars forfeited.",
    },
    faqs: [
      {
        question: "What's the difference between an HSA and FSA?",
        answer:
          "An HSA (Health Savings Account) is available with high-deductible health plans, rolls over year to year, and can be invested. An FSA (Flexible Spending Account) is available with most health plans, has use-it-or-lose-it rules, and cannot be invested. LifQ tracks both and explains how to optimize each.",
      },
      {
        question: "Can LifQ help me decide how much to contribute?",
        answer:
          "Yes. LifQ analyzes your household's typical healthcare spending and helps you determine the optimal annual contribution to avoid both over-contributing (losing money) and under-contributing (missing tax savings).",
      },
      {
        question: "What counts as an eligible HSA/FSA expense?",
        answer:
          "Medical, dental, and vision expenses are the most common categories. But the list also includes mental health services, certain OTC medications, medical equipment, and in some cases fertility treatments. LifQ maintains an up-to-date list of eligible expenses.",
      },
      {
        question: "Can both spouses have separate FSA accounts?",
        answer:
          "Yes. If both spouses have access to FSAs through their employers, each can contribute up to the annual limit independently. LifQ can track both accounts together so your household has a unified view of total tax-free healthcare dollars available.",
      },
    ],
    cta: {
      headline: "Never forfeit another healthcare dollar",
      body: "Join LifQ and start maximizing your HSA and FSA contributions today.",
      buttonLabel: "Maximize my healthcare savings",
    },
    relatedSolutions: ["employee-benefits", "open-enrollment", "life-reminders"],
  },

  {
    slug: "travel-protection",
    title: "Travel Protection — Know Your Coverage Before You Book",
    headline: "Know exactly what travel protection you have before you book your next trip",
    subheadline:
      "LifQ maps your travel coverage from credit cards, insurance policies, and employer benefits — so you know what's protected and what's not before you leave home.",
    metaDescription:
      "Understand your complete travel protection before every trip. LifQ consolidates travel insurance from your credit cards, insurance policies, and employer benefits into one clear picture.",
    category: "Travel & Insurance",
    heroCtaLabel: "Check my travel coverage",
    problem: {
      heading: "Most travelers don't know what coverage they already have",
      intro:
        "Before buying a travel insurance policy, most people don't check what their credit cards, existing insurance, or employer benefits already cover. The result is duplicate coverage — or no coverage at all.",
      points: [
        {
          title: "You buy travel insurance you already have",
          description:
            "Premium credit cards often include $10,000+ in trip cancellation coverage, medical evacuation, and baggage protection. Most cardholders buy separate travel insurance anyway.",
        },
        {
          title: "Health insurance abroad varies dramatically",
          description:
            "Some health plans cover emergencies internationally, others don't. Without knowing, you may be uninsured in a foreign hospital — or overpaying for duplicate coverage.",
        },
        {
          title: "You don't know if your rental car is covered",
          description:
            "Your auto insurance, credit card, and sometimes your employer benefits all include rental car protection. The answer changes by card, policy, and country.",
        },
        {
          title: "Claim requirements are invisible until you need them",
          description:
            "Travel insurance claims require specific documentation — police reports, medical records, receipts. Most travelers discover these requirements after the fact.",
        },
      ],
    },
    howItHelps: {
      heading: "How LifQ prepares your travel protection picture",
      steps: [
        {
          step: "01",
          title: "LifQ reads your credit card and insurance documents",
          description:
            "Once your policies are in LifQ, it automatically tracks all travel-related benefits — from trip cancellation to medical coverage to rental car protection.",
        },
        {
          step: "02",
          title: "See your full travel coverage before booking",
          description:
            "Before any trip, check LifQ to see your combined coverage across all sources — credit cards, insurance, employer benefits — in one view.",
        },
        {
          step: "03",
          title: "Know exactly what's covered and what's not",
          description:
            "See coverage limits, excluded countries, coverage conditions, and documentation requirements — before you need them.",
        },
      ],
    },
    benefits: [
      {
        icon: "map",
        title: "Pre-trip coverage summary",
        description: "See your full travel protection picture before every trip — in plain language.",
      },
      {
        icon: "heart",
        title: "Medical coverage clarity",
        description: "Know whether your health insurance covers emergencies internationally — and to what limit.",
      },
      {
        icon: "car",
        title: "Rental car coverage confirmed",
        description: "Know which card provides rental coverage in your destination country before you're at the counter.",
      },
      {
        icon: "file-check",
        title: "Claims preparation",
        description: "Know what documentation to collect during a trip so you can file claims successfully.",
      },
    ],
    realWorldExample: {
      scenario:
        "You're planning a two-week trip to Europe for $4,200. You're considering whether to buy a $180 travel insurance policy.",
      result:
        "LifQ shows that your Chase Sapphire Reserve already covers $10,000 in trip cancellation, $100/day for delays, and medical evacuation. Your BlueCross plan covers emergencies internationally. You skip the standalone policy and save $180 with better coverage.",
    },
    faqs: [
      {
        question: "Does LifQ integrate with travel booking platforms?",
        answer:
          "Not directly. LifQ works by reading your existing policy and credit card documents to map your coverage. You consult LifQ before booking to understand what protection you already have.",
      },
      {
        question: "Does my standard health insurance cover me internationally?",
        answer:
          "It depends on your plan. LifQ reads your health insurance documents and tells you exactly what international coverage applies — including any limitations or excluded regions.",
      },
      {
        question: "What if I need to make a claim during a trip?",
        answer:
          "LifQ's Claims Guidance feature helps you understand what documentation to collect and who to contact for each coverage type — accessible on your phone wherever you are.",
      },
      {
        question: "Does travel coverage differ by destination country?",
        answer:
          "Yes. Some credit card travel benefits have geographic exclusions, and health insurance international coverage varies by plan and country. LifQ surfaces destination-specific limitations based on your actual policy documents so you know exactly what applies to each trip.",
      },
    ],
    cta: {
      headline: "Travel with complete confidence in your coverage",
      body: "Join LifQ and know exactly what protection you have before every trip.",
      buttonLabel: "Check my travel coverage",
    },
    relatedSolutions: ["credit-card-benefits", "insurance-savings", "life-reminders"],
  },

  {
    slug: "family-financial-organization",
    title: "Family Financial Organization — Shared Visibility for the Whole Household",
    headline: "If something happened to you today, would your family know where all your coverage is?",
    subheadline:
      "LifQ gives your household a shared, organized view of every insurance policy, warranty, and benefit — so the people who depend on you are never left searching.",
    metaDescription:
      "Organize your family's complete financial protection in one shared place. LifQ gives every household member visibility into insurance policies, warranties, benefits, and critical documents — ready when it matters most.",
    category: "Family & Household",
    heroCtaLabel: "Organize my family's protection",
    problem: {
      heading: "Most families have one person who knows where everything is — until they don't",
      intro:
        "In most households, one person manages the insurance, pays the premiums, and knows where the policies are. If something happens to that person, the rest of the family starts from zero.",
      points: [
        {
          title: "Critical documents are scattered and inaccessible",
          description:
            "Life insurance policies, home insurance documents, and will locations are known to one person — and invisible to everyone else.",
        },
        {
          title: "Spouses don't know what coverage exists",
          description:
            "In 65% of households, one partner manages all insurance. If something happens to that partner, the other faces enormous administrative burden during an already difficult time.",
        },
        {
          title: "There's no single place that holds everything",
          description:
            "Policies are in email, PDFs on a desktop, paper files in a drawer, and logins in a password manager. None of it is organized for someone else to find.",
        },
        {
          title: "Benefits get missed during crises",
          description:
            "Life insurance has claim procedures. Credit card death benefits exist. Employer benefits include survivor benefits. These go unclaimed when nobody knows they exist.",
        },
      ],
    },
    howItHelps: {
      heading: "How LifQ creates a household protection hub for your whole family",
      steps: [
        {
          step: "01",
          title: "Build your household protection vault",
          description:
            "Upload all your family's policies, benefits, warranties, and important documents into one secure, organized vault.",
        },
        {
          step: "02",
          title: "Share access with family members",
          description:
            "Grant your spouse, adult children, or trusted family members access to view your household's complete protection picture.",
        },
        {
          step: "03",
          title: "Everyone knows where everything is",
          description:
            "In any emergency — medical, financial, or otherwise — your family can find every policy, every contact, and every benefit with no searching required.",
        },
      ],
    },
    benefits: [
      {
        icon: "shield",
        title: "Household-wide visibility",
        description: "Every family member with access can see the complete protection picture.",
      },
      {
        icon: "lock",
        title: "Secure and private",
        description: "Bank-level encryption and you control exactly who has access to what.",
      },
      {
        icon: "users",
        title: "Shared access controls",
        description: "Grant and revoke access by family member — full control stays with you.",
      },
      {
        icon: "heart",
        title: "Peace of mind for everyone",
        description: "Your family will know exactly what protection exists and how to access it when it matters.",
      },
    ],
    realWorldExample: {
      scenario:
        "A spouse is hospitalized unexpectedly. Their partner needs to know: what health insurance policy applies, what the deductible is, whether there's disability insurance, and how to contact the life insurance company just in case.",
      result:
        "With LifQ, the entire household protection picture is available on the other spouse's phone in seconds — policies, contacts, coverage details, and all documentation — during the moment they need it most.",
    },
    faqs: [
      {
        question: "Who can see my LifQ account?",
        answer:
          "Only people you explicitly invite. You control access completely — you can grant and revoke access to specific family members at any time.",
      },
      {
        question: "Is my data safe in LifQ?",
        answer:
          "Yes. LifQ uses bank-level encryption for all documents and data. We never sell your information to third parties. Your documents remain private and are only visible to people you've authorized.",
      },
      {
        question: "Can I control what each family member can see?",
        answer:
          "Yes. Family plan members can be given view-only access to the full household vault, or limited access to specific categories of documents.",
      },
      {
        question: "What happens to my LifQ account if I pass away?",
        answer:
          "Family members you've granted access to can continue to view the household vault. LifQ is designed to ensure your family retains access to critical protection information.",
      },
    ],
    cta: {
      headline: "Give your family the clarity and access they deserve",
      body: "Join LifQ and build the household protection hub your family will be grateful for.",
      buttonLabel: "Organize my family's coverage",
    },
    relatedSolutions: ["insurance-savings", "life-reminders", "employee-benefits"],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export function getRelatedSolutions(slugs: string[]): Solution[] {
  return solutions.filter((s) => slugs.includes(s.slug));
}
