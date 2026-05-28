"use client";

import { useState } from "react";

const OVERLAP_RATES: Record<string, number> = {
  "1-2": 0.03,
  "3-5": 0.08,
  "6+": 0.14,
};

const POLICY_COUNT_OPTIONS = ["1-2", "3-5", "6+"] as const;

export function SavingsCalculator() {
  const [policyCount, setPolicyCount] = useState<string>("");
  const [monthlySpend, setMonthlySpend] = useState<string>("");

  const annualSpend = parseFloat(monthlySpend) * 12;
  const rate = policyCount ? OVERLAP_RATES[policyCount] : 0;
  const lowEstimate = Math.round(annualSpend * rate * 0.5);
  const highEstimate = Math.round(annualSpend * rate * 1.5);
  const hasResult = policyCount && monthlySpend && annualSpend > 0;

  return (
    <div className="bg-card border border-border rounded-2xl p-8 max-w-lg mx-auto">
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium mb-3" style={{ color: "#0D2A47" }}>
            How many insurance or benefits policies do you have?
          </p>
          <div className="grid grid-cols-3 gap-3">
            {POLICY_COUNT_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setPolicyCount(opt)}
                className={`py-3 rounded-xl border text-sm font-medium transition-colors ${
                  policyCount === opt
                    ? "border-brand-blue bg-brand-blue text-white"
                    : "border-border hover:border-brand-blue text-foreground"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Count: health, auto, home/renters, life, dental, vision, credit card benefits, warranties
          </p>
        </div>

        <div>
          <label
            htmlFor="monthly-spend"
            className="block text-sm font-medium mb-2"
            style={{ color: "#0D2A47" }}
          >
            Estimated monthly spend across all policies ($)
          </label>
          <input
            id="monthly-spend"
            type="number"
            min="0"
            step="10"
            value={monthlySpend}
            onChange={(e) => setMonthlySpend(e.target.value)}
            placeholder="e.g. 650"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
          />
          <p className="text-xs text-muted-foreground mt-2">
            Include health, auto, home, life, dental, and subscriptions with embedded coverage
          </p>
        </div>

        {hasResult ? (
          <div className="rounded-xl bg-brand-blue/5 border border-brand-blue/20 p-6 text-center">
            <p className="text-sm text-muted-foreground mb-1">Estimated annual savings potential</p>
            <p className="text-3xl font-heading font-medium" style={{ color: "#0D2A47" }}>
              ${lowEstimate.toLocaleString()} – ${highEstimate.toLocaleString()}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Based on typical overlap rates for households with {policyCount} policies
            </p>
            <a
              href="/beta-signup"
              className="mt-4 inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-brand-blue text-white text-sm font-medium hover:bg-[#1565C0] transition-colors"
            >
              Get your personalized analysis →
            </a>
          </div>
        ) : (
          <div className="rounded-xl bg-muted/50 p-6 text-center text-sm text-muted-foreground">
            Select your policy count and enter monthly spend to see your savings estimate.
          </div>
        )}
      </div>
    </div>
  );
}
