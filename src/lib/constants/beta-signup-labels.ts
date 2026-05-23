export const AGE_RANGE_OPTIONS = [
  { value: "25-29", label: "25–29" },
  { value: "30-39", label: "30–39" },
  { value: "40-49", label: "40–49" },
  { value: "50-59", label: "50–59" },
  { value: "60+", label: "60 or older" },
] as const;

export const HOUSEHOLD_TYPE_OPTIONS = [
  { value: "single", label: "Single" },
  { value: "married_partnered", label: "Married / Partnered" },
  { value: "married_with_children", label: "Married with children" },
  { value: "single_parent", label: "Single parent" },
] as const;

export const POLICY_COUNT_OPTIONS = [
  { value: "1-2", label: "1–2 policies" },
  { value: "3-5", label: "3–5 policies" },
  { value: "6+", label: "6 or more" },
] as const;

export const POLICY_TYPE_OPTIONS = [
  { value: "auto", label: "Auto" },
  { value: "home_renters", label: "Home / Renters" },
  { value: "health", label: "Health" },
  { value: "life", label: "Life" },
  { value: "credit_card", label: "Credit card with benefits" },
  { value: "warranties", label: "Extended warranties" },
  { value: "other", label: "Other" },
] as const;
