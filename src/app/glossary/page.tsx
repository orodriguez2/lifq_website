import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { glossaryTerms } from "@/content/glossary";
import { Container } from "@/components/layout/Container";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { breadcrumbSchema, jsonLdScript } from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Insurance & Benefits Glossary — LifQ",
  description:
    "Plain-language definitions of insurance, benefits, and financial protection terms. Understand open enrollment, HSA, deductibles, coverage gaps, and more.",
  alternates: { canonical: "/glossary" },
  openGraph: {
    title: "Insurance & Benefits Glossary — LifQ",
    description: "Clear definitions of insurance, benefits, and household protection terms.",
    url: "/glossary",
  },
};

export default function GlossaryPage() {
  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Glossary", href: "/glossary" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumbLd) }} />

      <section className="bg-gradient-to-b from-[#F8FAFC] to-[#EEF3F9] py-20 md:py-28">
        <Container>
          <FadeUp className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-heading font-medium leading-tight mb-6" style={{ color: "#0D2A47", letterSpacing: "-0.02em" }}>
              Insurance & benefits glossary
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Plain-language definitions for the terms you encounter in your insurance policies, employer benefits guides, and financial protection documents.
            </p>
          </FadeUp>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <Container>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {glossaryTerms.map((term) => (
              <StaggerItem key={term.slug}>
                <Link
                  href={`/glossary/${term.slug}`}
                  className="group flex flex-col gap-3 p-6 rounded-2xl border border-border bg-card hover:border-brand-blue/40 hover:shadow-md transition-all h-full"
                >
                  <span className="text-xs font-medium text-brand-teal">{term.category}</span>
                  <h2 className="text-base font-heading font-medium group-hover:text-brand-blue transition-colors" style={{ color: "#0D2A47" }}>
                    {term.term}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {term.shortDefinition}
                  </p>
                  <span className="flex items-center gap-1 text-xs text-brand-blue font-medium mt-auto pt-2">
                    Read definition <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
