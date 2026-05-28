import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { ButtonLink } from "@/components/ui/button-link";
import { breadcrumbSchema, productSchema, jsonLdScript } from "@/lib/seo/structured-data";
import {
  FolderOpen, Brain, BarChart2, TrendingDown, Users, Bell, MessageSquare, ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features — LifQ Household Protection Intelligence",
  description:
    "Explore LifQ's full feature set: AI policy interpretation, coverage gap detection, family sharing, renewal alerts, claims guidance, savings tracking, and more.",
  alternates: { canonical: "/features" },
  openGraph: {
    title: "Features — LifQ Household Protection Intelligence",
    description: "AI-powered features that organize, analyze, and optimize your entire household protection portfolio.",
    url: "/features",
  },
};

const pillars = [
  {
    icon: FolderOpen,
    name: "Coverage Hub",
    color: "bg-blue-50 text-brand-blue",
    tagline: "All your protection in one secure vault",
    features: [
      "Secure centralized document storage",
      "Structured summary of every policy",
      "Extracted coverage data and key terms",
      "Search across all your documents",
      "Upload by photo, email, or PDF",
    ],
  },
  {
    icon: Brain,
    name: "AI Intelligence",
    color: "bg-teal-50 text-brand-teal",
    tagline: "Understand what you actually have",
    features: [
      "AI Policy interpretation in plain language",
      "Benefit identification across all plans",
      "Document parsing for any insurance type",
      "LifQ Assistant for on-demand questions",
      "Bill analysis and rate comparison",
    ],
  },
  {
    icon: BarChart2,
    name: "Portfolio Insights",
    color: "bg-purple-50 text-purple-600",
    tagline: "See the full picture, not just each piece",
    features: [
      "Portfolio IQ Score for your whole household",
      "Coverage gap detection across all policies",
      "Overlap analysis to eliminate duplicates",
      "Cost efficiency analysis and bundling",
      "Renewal risk tracking",
    ],
  },
  {
    icon: TrendingDown,
    name: "Action & Savings",
    color: "bg-orange-50 text-orange-600",
    tagline: "Turn insights into real money saved",
    features: [
      "Savings Tracker with dollar estimates",
      "Step-by-step guidance for each opportunity",
      "Claims guidance and documentation prep",
      "Benefit follow-through checklists",
      "Opportunity tracking to completion",
    ],
  },
  {
    icon: Users,
    name: "Family Protection",
    color: "bg-pink-50 text-pink-600",
    tagline: "Your whole family, fully informed",
    features: [
      "Shared household vault access",
      "Per-member access controls",
      "Family-wide protection visibility",
      "Emergency access for trusted members",
      "Up to 5 family members on Family plan",
    ],
  },
  {
    icon: Bell,
    name: "Smart Reminders",
    color: "bg-yellow-50 text-yellow-700",
    tagline: "Never miss a deadline again",
    features: [
      "Policy renewal alerts (30, 60, 90 days)",
      "Warranty expiration reminders",
      "FSA use-it-or-lose-it warnings",
      "Life event coverage windows",
      "Open enrollment period tracking",
    ],
  },
];

const comparison = [
  { feature: "All protection types in one place", lifq: true, digitalVaults: false, insuranceApps: false, warrantyApps: false },
  { feature: "AI analysis and interpretation", lifq: true, digitalVaults: false, insuranceApps: "Partial", warrantyApps: false },
  { feature: "Coverage gap detection", lifq: true, digitalVaults: false, insuranceApps: false, warrantyApps: false },
  { feature: "Employer benefits tracking", lifq: true, digitalVaults: false, insuranceApps: false, warrantyApps: false },
  { feature: "Credit card benefits analysis", lifq: true, digitalVaults: false, insuranceApps: false, warrantyApps: false },
  { feature: "Warranty management", lifq: true, digitalVaults: false, insuranceApps: false, warrantyApps: true },
  { feature: "Family sharing", lifq: true, digitalVaults: true, insuranceApps: false, warrantyApps: false },
  { feature: "Proactive savings alerts", lifq: true, digitalVaults: false, insuranceApps: "Partial", warrantyApps: false },
  { feature: "Portfolio-level optimization", lifq: true, digitalVaults: false, insuranceApps: false, warrantyApps: false },
];

export default function FeaturesPage() {
  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
  ]);
  const productLd = productSchema();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(productLd) }} />

      <section className="bg-gradient-to-b from-[#F8FAFC] to-[#EEF3F9] py-20 md:py-28">
        <Container>
          <FadeUp className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-medium leading-tight mb-6" style={{ color: "#0D2A47", letterSpacing: "-0.02em" }}>
              The personal protection OS for your household
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              LifQ organizes every insurance policy, employer benefit, warranty, and membership you have — then applies AI to find gaps, overlaps, and savings across your entire portfolio.
            </p>
            <ButtonLink href="/beta-signup" className="bg-brand-blue hover:bg-[#1565C0] text-white px-8 py-3 text-base">
              Get early access
            </ButtonLink>
          </FadeUp>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <Container>
          <FadeUp className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-medium" style={{ color: "#0D2A47" }}>
              Five pillars of household protection intelligence
            </h2>
            <p className="text-muted-foreground mt-2">Everything works together — not as separate apps, but as one integrated system.</p>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <StaggerItem key={pillar.name}>
                  <div className="p-6 rounded-2xl border border-border bg-card h-full flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${pillar.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-heading font-medium" style={{ color: "#0D2A47" }}>{pillar.name}</h3>
                        <p className="text-xs text-muted-foreground">{pillar.tagline}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {pillar.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ShieldCheck className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-surface-alt">
        <Container>
          <FadeUp className="mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-medium" style={{ color: "#0D2A47" }}>
              How LifQ compares
            </h2>
            <p className="text-muted-foreground mt-2">No other platform manages all of this together.</p>
          </FadeUp>
          <FadeUp>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm bg-card">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left px-4 py-3 font-medium" style={{ color: "#0D2A47" }}>Feature</th>
                    <th className="px-4 py-3 font-medium text-brand-blue">LifQ</th>
                    <th className="px-4 py-3 font-medium text-muted-foreground">Digital vaults</th>
                    <th className="px-4 py-3 font-medium text-muted-foreground">Insurance apps</th>
                    <th className="px-4 py-3 font-medium text-muted-foreground">Warranty apps</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="px-4 py-3 text-foreground">{row.feature}</td>
                      {[row.lifq, row.digitalVaults, row.insuranceApps, row.warrantyApps].map((val, j) => (
                        <td key={j} className="px-4 py-3 text-center">
                          {val === true ? (
                            <span className="text-brand-teal font-bold">✓</span>
                          ) : val === false ? (
                            <span className="text-muted-foreground/40">—</span>
                          ) : (
                            <span className="text-muted-foreground text-xs">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-[#0D2A47]">
        <Container>
          <FadeUp className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-medium text-white mb-4">
              Ready to see what LifQ can do for your household?
            </h2>
            <p className="text-blue-100/80 leading-relaxed mb-8">
              Join the beta and get AI-powered intelligence across your entire protection portfolio.
            </p>
            <ButtonLink href="/beta-signup" className="bg-brand-teal hover:bg-[#1E8E84] text-white px-8 py-3 text-base">
              Join the beta waitlist
            </ButtonLink>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
