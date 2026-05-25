import { z } from "zod";

export const betaSignupSchema = z.object({
  first_name: z.string().min(1, "First name is required").max(100),
  last_name: z.string().min(1, "Last name is required").max(100),
  email: z.string().email("Enter a valid email address"),
  age_range: z.enum(["25-29", "30-39", "40-49", "50-59", "60+"]),
  household_type: z.enum([
    "single",
    "married_partnered",
    "married_with_children",
    "single_parent",
  ]),
  policy_count: z.enum(["1-2", "3-5", "6+"]),
  policy_types: z
    .array(
      z.enum(["auto", "home_renters", "health", "life", "credit_card", "warranties", "other"])
    )
    .min(1, "Select at least one policy type"),
  biggest_frustration: z.string().max(1000).optional(),
  honeypot: z.string().max(0).optional(),
  turnstile_token: z.string().min(1, "Please complete the CAPTCHA"),
});

export type BetaSignupInput = z.infer<typeof betaSignupSchema>;
