"use client";

import { useState, useEffect } from "react";
import { analytics } from "@/lib/analytics";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { TrackedCTA } from "@/components/ui/tracked-cta";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PRICE_IDS = {
  solo: {
    annual: process.env.NEXT_PUBLIC_STRIPE_SOLO_ANNUAL_PRICE_ID ?? "price_1TZcsO2WR09lqacdsaG2iSuh",
    monthly: process.env.NEXT_PUBLIC_STRIPE_SOLO_MONTHLY_PRICE_ID ?? "price_1TZcsO2WR09lqacd2b3XRMbZ",
  },
  family: {
    annual: process.env.NEXT_PUBLIC_STRIPE_FAMILY_ANNUAL_PRICE_ID ?? "price_1TZcsY2WR09lqacdvBxn0Ql0",
    monthly: process.env.NEXT_PUBLIC_STRIPE_FAMILY_MONTHLY_PRICE_ID ?? "price_1TZcsZ2WR09lqacddMtBCg4f",
  },
};

const plans = [
  {
    key: "free",
    name: "Free",
    monthly: { price: "$0", priceId: null },
    annual: { price: "$0", priceId: null },
    description: "Get started with the basics.",
    cta: "Join the beta",
    ctaHref: "/beta-signup",
    featured: false,
    features: [
      "Up to 3 documents",
      "Basic policy summary",
      "Manual policy entry",
    ],
  },
  {
    key: "solo",
    name: "Solo",
    monthly: { price: "$9", priceId: PRICE_IDS.solo.monthly },
    annual: { price: "$7", priceId: PRICE_IDS.solo.annual },
    description: "Complete coverage clarity for individuals.",
    cta: "Start Solo",
    ctaHref: null,
    featured: true,
    features: [
      "Unlimited document uploads",
      "AI coverage analysis",
      "Gap & overlap detection",
      "Renewal alerts",
      "Savings opportunities",
      "AI chat agent",
    ],
  },
  {
    key: "family",
    name: "Family",
    monthly: { price: "$15", priceId: PRICE_IDS.family.monthly },
    annual: { price: "$12", priceId: PRICE_IDS.family.annual },
    description: "Protection intelligence for your whole household.",
    cta: "Start Family",
    ctaHref: null,
    featured: false,
    features: [
      "Everything in Solo",
      "Up to 5 family members",
      "Shared household vault",
      "Family member access controls",
      "Household-wide savings view",
    ],
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");
  const [loading, setLoading] = useState<string | null>(null);

  useEffect(() => {
    analytics.pricingViewed();
  }, []);

  async function handleCheckout(priceId: string, planKey: string) {
    setLoading(planKey);
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId }),
    });
    const json = await res.json();
    if (json.url) {
      window.location.assign(json.url);
    } else {
      setLoading(null);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="py-20 bg-surface-alt min-h-screen">
      <Container>
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-wide text-brand-teal uppercase mb-3">
            Simple pricing
          </p>
          <h1 className="text-4xl font-heading font-medium mb-4" style={{ color: "#0D2A47" }}>
            Know what you&rsquo;re covered for
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Start free. Upgrade when you&rsquo;re ready for complete household protection intelligence.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                billing === "monthly"
                  ? "bg-brand-blue text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                billing === "annual"
                  ? "bg-brand-blue text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Annual
              <span className="ml-1.5 rounded-full bg-[#E0F7F5] text-brand-teal text-xs px-2 py-0.5">
                Save ~20%
              </span>
            </button>
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => {
            const tier = billing === "annual" ? plan.annual : plan.monthly;
            return (
              <div
                key={plan.key}
                className={cn(
                  "relative rounded-2xl border p-7 flex flex-col bg-card",
                  plan.featured
                    ? "border-brand-blue shadow-lg shadow-blue-100"
                    : "border-border shadow-sm"
                )}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-blue text-white text-xs font-medium px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="font-heading font-medium text-xl mb-1" style={{ color: "#0D2A47" }}>
                    {plan.name}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-heading font-medium" style={{ color: "#0D2A47" }}>
                      {tier.price}
                    </span>
                    {tier.price !== "$0" && (
                      <span className="text-muted-foreground mb-1">
                        /mo{billing === "annual" ? ", billed annually" : ""}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-brand-teal shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.ctaHref ? (
                  <TrackedCTA
                    href={plan.ctaHref}
                    analyticsLocation="pricing_free"
                    className={cn(
                      "w-full justify-center",
                      plan.featured
                        ? "bg-brand-blue hover:bg-[#1565C0] text-white"
                        : ""
                    )}
                    variant={plan.featured ? "default" : "outline"}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </TrackedCTA>
                ) : (
                  <Button
                    onClick={() => tier.priceId && handleCheckout(tier.priceId, plan.key)}
                    disabled={loading === plan.key || !tier.priceId}
                    className={cn(
                      "w-full",
                      plan.featured
                        ? "bg-brand-blue hover:bg-[#1565C0] text-white"
                        : ""
                    )}
                    variant={plan.featured ? "default" : "outline"}
                  >
                    {loading === plan.key ? "Loading…" : plan.cta}
                    {loading !== plan.key && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          All paid plans include a 14-day free trial. Cancel anytime.
        </p>
      </Container>
    </section>
  );
}
