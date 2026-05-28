"use client";

import { useState } from "react";

const BENEFITS_CATEGORIES = [
  {
    category: "Health coverage",
    items: [
      "Medical / health insurance (PPO, HMO, HDHP)",
      "Dental insurance",
      "Vision insurance",
      "Mental health / therapy coverage",
      "Prescription drug coverage",
      "Telehealth access",
    ],
  },
  {
    category: "Healthcare savings accounts",
    items: [
      "HSA (Health Savings Account)",
      "FSA (Flexible Spending Account)",
      "Dependent Care FSA (for childcare expenses)",
      "Limited Purpose FSA (for dental/vision with an HSA)",
    ],
  },
  {
    category: "Income protection",
    items: [
      "Short-term disability insurance",
      "Long-term disability insurance",
      "Life insurance (group term)",
      "Supplemental life insurance (additional coverage you purchase)",
      "Accidental death & dismemberment (AD&D)",
    ],
  },
  {
    category: "Retirement",
    items: [
      "401(k) or 403(b) plan",
      "Employer match — are you contributing enough to get the full match?",
      "Roth 401(k) option",
      "Pension or defined benefit plan",
    ],
  },
  {
    category: "Voluntary and supplemental benefits",
    items: [
      "Critical illness insurance",
      "Accident insurance",
      "Hospital indemnity insurance",
      "Legal plan (will preparation, attorney consultations)",
      "Pet insurance",
      "Identity theft protection",
      "Group home or auto insurance discounts",
    ],
  },
  {
    category: "Work-life and wellness benefits",
    items: [
      "Employee Assistance Program (EAP) — free counseling and support",
      "Gym membership or fitness reimbursement",
      "Childcare assistance or backup care",
      "Student loan repayment assistance",
      "Tuition reimbursement or education assistance",
      "Commuter benefits (transit passes, parking pre-tax)",
      "Work-from-home stipend or equipment allowance",
    ],
  },
];

const totalItems = BENEFITS_CATEGORIES.reduce((sum, c) => sum + c.items.length, 0);

export function BenefitsChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const unchecked = totalItems - checked.size;

  return (
    <div className="max-w-2xl mx-auto">
      {checked.size > 0 && (
        <div className="mb-6 rounded-xl bg-brand-blue/5 border border-brand-blue/20 p-4 text-center">
          <p className="text-sm" style={{ color: "#0D2A47" }}>
            <span className="font-medium">{checked.size}</span> of{" "}
            <span className="font-medium">{totalItems}</span> benefits checked
            {unchecked > 0 && (
              <span className="text-muted-foreground">
                {" "}
                — {unchecked} to review with your HR team or benefits portal
              </span>
            )}
          </p>
        </div>
      )}

      <div className="space-y-8">
        {BENEFITS_CATEGORIES.map((cat) => (
          <div key={cat.category}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              {cat.category}
            </h3>
            <div className="space-y-2">
              {cat.items.map((item) => {
                const id = `${cat.category}:${item}`;
                const isChecked = checked.has(id);
                return (
                  <label
                    key={id}
                    className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                      isChecked
                        ? "border-brand-blue/30 bg-brand-blue/5"
                        : "border-border hover:border-brand-blue/30"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggle(id)}
                      className="mt-0.5 h-4 w-4 rounded accent-brand-blue shrink-0"
                    />
                    <span
                      className={`text-sm leading-relaxed ${isChecked ? "line-through text-muted-foreground" : ""}`}
                    >
                      {item}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-border bg-card p-6 text-center">
        <p className="text-sm text-muted-foreground mb-3">
          Want LifQ to automatically identify which of these benefits you have enrolled in vs. missing?
        </p>
        <a
          href="/beta-signup"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-brand-blue text-white text-sm font-medium hover:bg-[#1565C0] transition-colors"
        >
          Get early access →
        </a>
      </div>
    </div>
  );
}
