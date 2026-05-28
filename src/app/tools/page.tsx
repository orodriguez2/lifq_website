import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { tools } from "@/content/tools";
import { breadcrumbSchema, jsonLdScript } from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Free insurance and benefits tools — LifQ",
  description:
    "Free tools to estimate your insurance savings potential, audit your employee benefits, and track warranty expirations. No account required.",
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "Free insurance and benefits tools — LifQ",
    description:
      "Free tools to estimate insurance savings, audit employee benefits, and track warranties.",
    url: "/tools",
  },
};

const categoryColors: Record<string, string> = {
  Insurance: "bg-brand-blue/10 text-brand-blue",
  "Employee Benefits": "bg-brand-teal/10 text-brand-teal",
  Warranties: "bg-[#FB8C00]/10 text-[#FB8C00]",
};

export default function ToolsPage() {
  const crumbs = breadcrumbSchema([
    { name: "Home", href: "https://lifq.ai" },
    { name: "Tools", href: "https://lifq.ai/tools" },
  ]);

  return (
    <>
      {jsonLdScript(crumbs)}
      <section className="py-16 md:py-24 bg-background">
        <Container>
          <FadeUp className="max-w-2xl mx-auto text-center mb-14">
            <h1
              className="text-3xl md:text-4xl font-heading font-medium mb-4"
              style={{ color: "#0D2A47" }}
            >
              Free tools for smarter coverage decisions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Quick, practical tools to help you understand your insurance savings potential, audit
              your employee benefits, and keep track of warranties. No account needed.
            </p>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tools.map((tool) => (
              <StaggerItem key={tool.slug}>
                <Link href={`/tools/${tool.slug}`} className="group block h-full">
                  <div className="flex flex-col gap-4 p-6 rounded-2xl border border-border bg-card h-full hover:border-brand-blue/40 hover:shadow-sm transition-all">
                    <span
                      className={`self-start text-xs font-medium px-2.5 py-1 rounded-full ${
                        categoryColors[tool.category] ?? "bg-muted text-muted-foreground"
                      }`}
                    >
                      {tool.category}
                    </span>
                    <h2
                      className="text-lg font-heading font-medium leading-snug group-hover:text-brand-blue transition-colors"
                      style={{ color: "#0D2A47" }}
                    >
                      {tool.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {tool.description}
                    </p>
                    <span className="text-sm text-brand-blue font-medium">Use tool →</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
