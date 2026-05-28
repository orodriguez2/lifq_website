import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/ui/animate";
import { getToolBySlug, tools } from "@/content/tools";
import { solutions } from "@/content/solutions";
import { breadcrumbSchema, jsonLdScript } from "@/lib/seo/structured-data";
import { SavingsCalculator } from "@/components/tools/SavingsCalculator";
import { BenefitsChecklist } from "@/components/tools/BenefitsChecklist";
import { WarrantyGuide } from "@/components/tools/WarrantyGuide";

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  return {
    title: `${tool.title} — LifQ`,
    description: tool.metaDescription,
    alternates: { canonical: `/tools/${slug}` },
    openGraph: {
      title: `${tool.title} — LifQ`,
      description: tool.metaDescription,
      url: `/tools/${slug}`,
    },
  };
}

function ToolComponent({ slug }: { slug: string }) {
  if (slug === "insurance-savings-calculator") return <SavingsCalculator />;
  if (slug === "benefits-checklist") return <BenefitsChecklist />;
  if (slug === "warranty-tracker") return <WarrantyGuide />;
  return null;
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const crumbs = breadcrumbSchema([
    { name: "Home", href: "https://lifq.ai" },
    { name: "Tools", href: "https://lifq.ai/tools" },
    { name: tool.title, href: `https://lifq.ai/tools/${slug}` },
  ]);

  const related = solutions.filter((s) => tool.relatedSolutions.includes(s.slug));

  return (
    <>
      {jsonLdScript(crumbs)}
      <section className="py-12 md:py-20 bg-background">
        <Container>
          <FadeUp className="max-w-3xl mx-auto">
            <nav className="text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
              <Link href="/tools" className="hover:text-brand-blue transition-colors">
                Tools
              </Link>
              <span className="mx-2">›</span>
              <span>{tool.title}</span>
            </nav>

            <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-brand-blue/10 text-brand-blue mb-4">
              {tool.category}
            </span>
            <h1
              className="text-3xl md:text-4xl font-heading font-medium mb-4"
              style={{ color: "#0D2A47" }}
            >
              {tool.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{tool.intro}</p>

            <div className="mb-10">
              <h2 className="text-base font-semibold mb-3" style={{ color: "#0D2A47" }}>
                How it works
              </h2>
              <ol className="space-y-3">
                {tool.howItWorks.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center font-medium mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <ToolComponent slug={slug} />

            {related.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <h2 className="text-base font-semibold mb-4" style={{ color: "#0D2A47" }}>
                  Related solutions
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/solutions/${s.slug}`}
                      className="p-4 rounded-xl border border-border hover:border-brand-blue/40 transition-colors"
                    >
                      <p className="text-sm font-medium" style={{ color: "#0D2A47" }}>
                        {s.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{s.headline}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
