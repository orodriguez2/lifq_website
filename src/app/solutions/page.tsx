import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/content/solutions";
import { Container } from "@/components/layout/Container";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { ButtonLink } from "@/components/ui/button-link";
import { breadcrumbSchema, jsonLdScript } from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Solutions — LifQ Household Protection",
  description:
    "Explore LifQ solutions for warranty tracking, open enrollment, insurance savings, employee benefits, credit card perks, HSA/FSA management, travel protection, and family organization.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions — LifQ Household Protection",
    description:
      "AI-powered solutions for every aspect of your household protection portfolio.",
    url: "/solutions",
  },
};

const categories: Record<string, { label: string; color: string }> = {
  "Warranty Management": { label: "Warranties", color: "bg-orange-50 text-orange-700" },
  "Employee Benefits": { label: "Benefits", color: "bg-teal-50 text-teal-700" },
  "Insurance Management": { label: "Insurance", color: "bg-blue-50 text-blue-700" },
  "Financial Organization": { label: "Finance", color: "bg-purple-50 text-purple-700" },
  "Healthcare Savings": { label: "Healthcare", color: "bg-green-50 text-green-700" },
  "Life Organization": { label: "Life Admin", color: "bg-yellow-50 text-yellow-700" },
  "Travel & Insurance": { label: "Travel", color: "bg-indigo-50 text-indigo-700" },
  "Family & Household": { label: "Family", color: "bg-pink-50 text-pink-700" },
};

export default function SolutionsPage() {
  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumbLd) }}
      />
      <section className="bg-gradient-to-b from-[#F8FAFC] to-[#EEF3F9] py-20 md:py-28">
        <Container>
          <FadeUp className="max-w-3xl mx-auto text-center">
            <h1
              className="text-4xl md:text-5xl font-heading font-medium leading-tight mb-6"
              style={{ color: "#0D2A47", letterSpacing: "-0.02em" }}
            >
              Solutions for every aspect of household protection
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              LifQ helps families organize, understand, and act on all their insurance, benefits,
              warranties, and memberships — in one place, with AI guidance.
            </p>
            <ButtonLink
              href="/beta-signup"
              className="bg-brand-blue hover:bg-[#1565C0] text-white px-8 py-3 text-base"
            >
              Get early access
            </ButtonLink>
          </FadeUp>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <Container>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => {
              const cat = categories[solution.category] ?? {
                label: solution.category,
                color: "bg-gray-50 text-gray-600",
              };
              return (
                <StaggerItem key={solution.slug}>
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="group flex flex-col gap-4 p-6 rounded-2xl border border-border bg-card hover:border-brand-blue/40 hover:shadow-md transition-all h-full"
                  >
                    <span
                      className={`self-start text-xs font-medium rounded-full px-2.5 py-1 ${cat.color}`}
                    >
                      {cat.label}
                    </span>
                    <h2
                      className="text-base font-heading font-medium leading-snug group-hover:text-brand-blue transition-colors"
                      style={{ color: "#0D2A47" }}
                    >
                      {solution.headline}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {solution.subheadline}
                    </p>
                    <span className="flex items-center gap-1 text-sm text-brand-blue font-medium mt-auto">
                      Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      <section className="py-16 bg-[#0D2A47]">
        <Container>
          <FadeUp className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-medium text-white mb-4">
              All your household protection in one intelligent platform
            </h2>
            <p className="text-blue-100/80 leading-relaxed mb-8">
              Join the LifQ beta and start organizing, understanding, and optimizing everything
              your household is already paying for.
            </p>
            <ButtonLink
              href="/beta-signup"
              className="bg-brand-teal hover:bg-[#1E8E84] text-white px-8 py-3 text-base"
            >
              Join the beta waitlist
            </ButtonLink>
            <p className="text-blue-100/50 text-xs mt-4">Free during beta. Limited spots.</p>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
