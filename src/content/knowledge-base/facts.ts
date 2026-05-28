// Extracted from LifQ product knowledge base (knowledge/LifQ.pdf)
// Reference this file for consistent claims across all content

export const LIFQ_FACTS = {
  positioning: {
    category: "Personal Protection Operating System for Households",
    tagline: "Your family's coverage — organized, understood, and ready when it matters most.",
    valueProp:
      "LifQ is an AI-powered platform that helps families organize, understand, and manage their insurance, benefits, and warranties so they can make smarter protection decisions.",
    vision:
      "A world where every family has complete clarity about their financial protections.",
    mission:
      "Help individuals and families organize, understand, and confidently manage the systems that protect their lives.",
    differentiator:
      "Intelligence layer on top of organized life data — not passive storage.",
  },

  idealCustomer: {
    description: "Financially responsible parent",
    ageRange: "32–52",
    income: "$85K–$250K household",
    typicalPolicies: ["Home", "Auto", "Life", "Credit Cards", "Memberships"],
    emotionalTrigger: "I just want to know we're covered and not waste money",
  },

  marketStats: {
    tamHouseholds: "120M–175M US households",
    tamValue: "$7.2B at $60/yr",
    samHouseholds: "40M households",
    samValue: "$2.4B",
    healthInsurancePenetration: "85% of Americans have health insurance",
    carInsurancePenetration: "54% of Americans have car insurance",
    lifeInsurancePenetration: "38% of Americans have life insurance",
    homeInsurancePenetration: "34% of Americans have home insurance",
    multipleHealthCoverage: "61.9% of Americans age 65+ have multiple types of health coverage",
  },

  corePillars: [
    {
      name: "Coverage Hub",
      description:
        "Secure centralized document storage with structured policy summaries and extracted coverage data. Solves information fragmentation.",
    },
    {
      name: "AI Intelligence",
      description:
        "Analyzes policies, interprets documents, identifies benefits, and provides guidance. Features: Opportunities Analysis, Bill Analysis, LifQ Assistant.",
    },
    {
      name: "Portfolio Insights",
      description:
        "Portfolio IQ Score, Coverage Analysis, Cost efficiency analysis, Renewal tracking. Analyzes the entire protection portfolio for gaps, overlaps, renewal risks, and bundling savings.",
    },
    {
      name: "Action & Savings",
      description:
        "Savings Tracker, Step-by-Step guidance, Claim guidance, Opportunity and benefit follow-through. Turns insights into real actions.",
    },
    {
      name: "Family Protection",
      description:
        "Family access and coordination so every household member can access critical protection information.",
    },
  ],

  coreCapabilities: [
    "Policy aggregation across all providers",
    "Secure document vault (LifQ Vault)",
    "AI Policy interpretation",
    "Coverage gap and synergies detection",
    "Claims guidance",
    "Family access and coordination",
    "Portfolio IQ Score",
    "Savings Tracker",
    "Benefit reminders and renewal alerts",
  ],

  ahaMonments: [
    {
      moment: "LifQ understands my policies",
      timing: "Immediately after first document upload",
      userReaction: "The system actually understood my policies",
    },
    {
      moment: "I didn't realize this about my coverage",
      timing: "Right after the system processes 1–2 documents",
      userReaction: "I had no idea!",
    },
    {
      moment: "This could actually save me money",
      timing: "After the system analyzes the first policy",
      userReaction: "This could pay for itself",
    },
    {
      moment: "My family should have access to this",
      timing: "End of onboarding",
      userReaction: "If something happens to me, my spouse wouldn't know where all this is!",
    },
  ],

  adoptionRisks: [
    "High setup effort — solved with email forwarding, mobile capture, guided onboarding",
    "Trust and privacy concerns — solved with bank-level encryption, no data selling, privacy-first architecture",
    "Perceived value vs frequency of use — solved with ongoing value signals (coverage updates, reminders, life event guidance)",
    "Looks like a Document Vault — emphasis on Intelligence Not Storage",
  ],

  competitiveAdvantages: [
    "No single platform owns the personal benefits OS space",
    "Only platform that consolidates ALL protection types: insurance + warranties + employer benefits + credit card benefits",
    "AI portfolio analysis across the entire household (not single-carrier siloed)",
    "Synergy detection across all policies",
    "Family sharing with full household visibility",
    "Proactive alerts before money-losing events (renewals, expirations, deadlines)",
  ],

  competitors: {
    insuranceShipping: {
      examples: ["Policygenius", "Jerry"],
      weakness: "Transactional apps, not ongoing management tools. No warranty tracking, no employer benefit coordination.",
    },
    digitalVaults: {
      examples: ["Everplans", "Trustworthy", "GoodTrust"],
      weakness: "Passive digital filing cabinets. No intelligence, no AI, no insurance optimization.",
    },
    warrantyApps: {
      examples: ["Itemtopia", "TrackWarranty"],
      weakness: "Asset trackers, not coverage analyst managers. No bundling analysis with credit card or membership benefits.",
    },
    agentCarrierApps: {
      examples: ["InsuredMine", "Blue Cross / Blue Shield"],
      weakness: "Company portals, not personal control centers. Siloed by insurer, built for agencies not consumers.",
    },
  },

  privacyCommitments: [
    "Your documents remain private",
    "No selling of data to third parties",
    "Bank-level encryption",
    "You control your information",
  ],
} as const;
