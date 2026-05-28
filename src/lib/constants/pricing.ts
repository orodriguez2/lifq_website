// Single source of truth for display prices used by the pricing page and
// productSchema JSON-LD. When prices change, update here only.
// See lifq-web-385 to replace this with build-time Stripe price fetching.
export const DISPLAY_PRICES = {
  solo: {
    monthly: { amount: "$9", label: "$9/mo" },
    annual:  { amount: "$7", label: "$7/mo, billed annually" },
  },
  family: {
    monthly: { amount: "$15", label: "$15/mo" },
    annual:  { amount: "$12", label: "$12/mo, billed annually" },
  },
} as const;

// Raw numeric strings for JSON-LD structured data (schema.org/Offer)
export const SCHEMA_PRICES = {
  solo:   { annual: "7.00",  monthly: "9.00"  },
  family: { annual: "12.00", monthly: "15.00" },
} as const;
