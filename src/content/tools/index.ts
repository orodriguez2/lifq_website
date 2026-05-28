export interface Tool {
  slug: string;
  title: string;
  description: string;
  metaDescription: string;
  category: string;
  intro: string;
  howItWorks: string[];
  relatedSolutions: string[];
}

export const tools: Tool[] = [
  {
    slug: "insurance-savings-calculator",
    title: "Insurance savings calculator",
    description:
      "Estimate how much you could save by eliminating overlapping coverage and optimizing your policies.",
    metaDescription:
      "Use our free insurance savings calculator to estimate how much you could save on overlapping insurance policies, duplicated coverage, and unused benefits. Takes 60 seconds.",
    category: "Insurance",
    intro:
      "Most households with three or more insurance policies are paying for some coverage twice. This calculator estimates your potential savings based on your policy mix and monthly spend — typical households with complex coverage save $400–$1,200 per year by identifying and eliminating overlapping coverage.",
    howItWorks: [
      "Select how many insurance policies and benefits accounts you currently have",
      "Enter your estimated monthly spend across all policies",
      "See your estimated annual savings potential based on real overlap rates",
    ],
    relatedSolutions: ["insurance-savings", "credit-card-benefits", "employee-benefits"],
  },
  {
    slug: "benefits-checklist",
    title: "Employee benefits checklist",
    description:
      "A printable checklist of common employer benefits — audit which ones you have, use, and may be missing.",
    metaDescription:
      "Free printable employee benefits checklist. Audit your employer benefits to make sure you're using every benefit available to you and not leaving money on the table. 30+ benefits covered.",
    category: "Employee Benefits",
    intro:
      "Most employees use fewer than 40% of the benefits their employer provides. This checklist covers 30+ common benefits so you can quickly see what you have, what you're enrolled in, and what you may be overlooking — from HSAs and FSAs to legal plans and EAP services.",
    howItWorks: [
      "Review each benefit category below",
      "Check off which benefits you are currently enrolled in or using",
      "Review the unchecked items — these may be benefits you have available but haven't taken advantage of",
    ],
    relatedSolutions: ["employee-benefits", "hsa-fsa-management", "open-enrollment"],
  },
  {
    slug: "warranty-tracker",
    title: "Warranty expiration tracker guide",
    description:
      "A practical guide to tracking product warranties before they expire — and how to find warranties you've forgotten about.",
    metaDescription:
      "Learn how to track warranty expiration dates for appliances and electronics. Find, organize, and use warranties before they expire with this practical household inventory guide.",
    category: "Warranties",
    intro:
      "The average home contains $2,000–$5,000 worth of products still under manufacturer warranty. Most families don't know exactly which products are covered or when those warranties expire — until something breaks and it's too late to file a claim.",
    howItWorks: [
      "Use the inventory checklist below to review common household items with warranties",
      "Note the purchase date and standard warranty duration for each item you own",
      "Set calendar reminders 30 days before each warranty expires so you can file claims or consider extensions in time",
    ],
    relatedSolutions: ["warranty-tracker", "credit-card-benefits", "family-financial-organization"],
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
