import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { glossaryTerms, getGlossaryTermBySlug } from "@/content/glossary";
import { solutions } from "@/content/solutions";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/button-link";
import { faqSchema, breadcrumbSchema, jsonLdScript } from "@/lib/seo/structured-data";

export function generateStaticParams() {
  return glossaryTerms.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTermBySlug(slug);
  if (!term) return {};
  return {
    title: `${term.term} — LifQ Glossary`,
    description: term.metaDescription,
    alternates: { canonical: `/glossary/${slug}` },
    openGraph: { title: `${term.term} — LifQ Glossary`, description: term.metaDescription, url: `/glossary/${slug}` },
  };
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const term = getGlossaryTermBySlug(slug);
  if (!term) notFound();

  const relatedSolutionsList = solutions.filter((s) => term.relatedSolutions.includes(s.slug)).slice(0, 3);

  const faqLd = faqSchema(term.faqs);
  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Glossary", href: "/glossary" },
    { name: term.term, href: `/glossary/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumbLd) }} />

      <section className="bg-[#F8FAFC] pt-12 pb-8 border-b border-border">
        <Container>
          <Link href="/glossary" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to glossary
          </Link>
          <div className="max-w-2xl">
            <span className="text-xs font-medium text-brand-teal uppercase tracking-wider">{term.category}</span>
            <h1 className="text-3xl md:text-4xl font-heading font-medium mt-3 mb-4" style={{ color: "#0D2A47" }}>
              {term.term}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{term.shortDefinition}</p>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-background">
        <Container>
          <div className="max-w-2xl space-y-8">
            <div>
              <h2 className="text-xl font-heading font-medium mb-4" style={{ color: "#0D2A47" }}>Definition</h2>
              <div className="space-y-4">
                {term.definition.trim().split("\n\n").map((paragraph, i) => {
                  if (paragraph.startsWith("**")) {
                    const parts = paragraph.split("\n");
                    return (
                      <div key={i} className="space-y-2">
                        {parts.map((part, j) => (
                          <p key={j} className={part.startsWith("**") ? "font-medium text-foreground" : "text-muted-foreground leading-relaxed"}
                            dangerouslySetInnerHTML={{ __html: part.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }}
                          />
                        ))}
                      </div>
                    );
                  }
                  return (
                    <p key={i} className="text-muted-foreground leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.+?)\*\*/g, "<strong style='color:#0D2A47'>$1</strong>") }}
                    />
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-heading font-medium mb-4" style={{ color: "#0D2A47" }}>Examples</h2>
              <div className="space-y-3">
                {term.examples.map((example, i) => (
                  <div key={i} className="p-4 rounded-xl border border-border bg-card">
                    <p className="text-sm text-muted-foreground leading-relaxed">{example}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-heading font-medium mb-4" style={{ color: "#0D2A47" }}>
                Frequently asked questions
              </h2>
              <div className="space-y-3">
                {term.faqs.map((faq, i) => (
                  <details key={i} className="group rounded-xl border border-border bg-card overflow-hidden">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-4 text-sm font-medium list-none hover:bg-muted/50 transition-colors" style={{ color: "#0D2A47" }}>
                      {faq.question}
                      <span className="shrink-0 ml-4 text-muted-foreground group-open:rotate-180 transition-transform duration-200">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-4 pt-2">
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {relatedSolutionsList.length > 0 && (
        <section className="py-12 bg-surface-alt border-t border-border">
          <Container>
            <div className="max-w-2xl">
              <h2 className="text-lg font-heading font-medium mb-6" style={{ color: "#0D2A47" }}>
                Related solutions
              </h2>
              <div className="space-y-3">
                {relatedSolutionsList.map((sol) => (
                  <Link key={sol.slug} href={`/solutions/${sol.slug}`}
                    className="group flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:border-brand-blue/40 transition-all">
                    <div>
                      <span className="text-xs text-muted-foreground">{sol.category}</span>
                      <p className="text-sm font-medium group-hover:text-brand-blue transition-colors" style={{ color: "#0D2A47" }}>
                        {sol.headline}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-brand-blue group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      <section className="py-12 bg-[#0D2A47]">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-heading font-medium text-white mb-3">
              LifQ helps you manage {term.term.toLowerCase()} and everything else in one place
            </h2>
            <p className="text-blue-100/80 text-sm leading-relaxed mb-6">
              Join the LifQ beta and get AI-powered analysis of your entire household protection portfolio.
            </p>
            <ButtonLink href="/beta-signup" className="bg-brand-teal hover:bg-[#1E8E84] text-white px-8">
              Join the beta
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
