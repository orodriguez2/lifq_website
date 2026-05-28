import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/ui/animate";
import { ButtonLink } from "@/components/ui/button-link";
import { breadcrumbSchema, jsonLdScript } from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "About LifQ — The Personal Protection Operating System",
  description:
    "LifQ is building the Personal Protection Operating System for households — helping families organize, understand, and confidently manage every insurance policy, benefit, warranty, and membership they own.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About LifQ",
    description: "Our mission is to give every family complete clarity about their financial protections.",
    url: "/about",
  },
};

const stats = [
  { value: "120M+", label: "US households managing insurance and benefits" },
  { value: "85%", label: "Americans have health insurance" },
  { value: "$3B+", label: "FSA dollars forfeited annually" },
  { value: "5+", label: "Fragmented categories most households manage separately" },
];

const values = [
  {
    name: "Clarity over complexity",
    description:
      "Insurance and benefits documents are intentionally dense. LifQ translates them into language that any household can act on.",
  },
  {
    name: "Intelligence, not just storage",
    description:
      "Storing documents is easy. Analyzing them, finding connections across your entire portfolio, and surfacing what matters — that's where LifQ creates real value.",
  },
  {
    name: "Family-first design",
    description:
      "Protection decisions affect everyone in a household. LifQ is built so the whole family can have visibility and confidence — not just the one person who manages everything.",
  },
  {
    name: "Privacy as a foundation",
    description:
      "Your financial documents are among the most sensitive information you own. LifQ is built privacy-first: bank-level encryption, no data selling, and you control everything.",
  },
];

export default function AboutPage() {
  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumbLd) }} />

      <section className="bg-gradient-to-b from-[#F8FAFC] to-[#EEF3F9] py-20 md:py-28">
        <Container>
          <FadeUp className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-medium leading-tight mb-6" style={{ color: "#0D2A47", letterSpacing: "-0.02em" }}>
              We&rsquo;re building the personal protection operating system for households
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              LifQ exists because every family deserves to understand and optimize the financial protections
              they&rsquo;re already paying for — without needing a financial advisor, an insurance agent,
              or hours of research.
            </p>
          </FadeUp>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat) => (
              <FadeUp key={stat.value} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-medium text-brand-blue mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground leading-snug">{stat.label}</div>
              </FadeUp>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <h2 className="text-2xl md:text-3xl font-heading font-medium mb-6" style={{ color: "#0D2A47" }}>
                The problem we&rsquo;re solving
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Households today manage protections across insurance policies, employer benefits, credit card
                  coverage, warranties, and memberships — from dozens of different providers, in dozens of
                  different formats, without any unified view.
                </p>
                <p>
                  Most people cannot answer the basic question: &ldquo;What coverage do I actually have?&rdquo;
                  They pay for overlapping coverage without knowing it. They leave employer benefits unused.
                  They miss FSA deadlines. Warranties expire unnoticed. And when something goes wrong,
                  their family doesn&rsquo;t know where to find anything.
                </p>
                <p>
                  This isn&rsquo;t a failure of intelligence — it&rsquo;s a failure of tooling. The problem
                  is fragmentation, not capability. LifQ fixes the fragmentation.
                </p>
              </div>
            </FadeUp>

            <FadeUp>
              <h2 className="text-2xl md:text-3xl font-heading font-medium mb-6" style={{ color: "#0D2A47" }}>
                Our vision
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A world where every family has complete clarity about their financial protections — where
                  people can understand their coverage, optimize their policies, protect their loved ones,
                  and navigate life events with confidence.
                </p>
                <p>
                  We call this the Personal Protection Operating System. A single, intelligent hub that
                  manages every protection your household relies on — always updated, always analyzed,
                  always ready when it matters.
                </p>
              </div>
              <blockquote className="mt-6 pl-4 border-l-2 border-brand-teal">
                <p className="text-sm italic text-muted-foreground">
                  &ldquo;I just want to know we&rsquo;re covered and not waste money.&rdquo;
                </p>
                <cite className="text-xs text-muted-foreground/70 mt-1 block">— The emotinal trigger every LifQ customer shares</cite>
              </blockquote>
            </FadeUp>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-surface-alt">
        <Container>
          <FadeUp className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-medium" style={{ color: "#0D2A47" }}>
              What we believe
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <FadeUp key={v.name}>
                <div className="p-6 rounded-xl border border-border bg-card h-full">
                  <h3 className="text-base font-heading font-medium mb-2" style={{ color: "#0D2A47" }}>{v.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-[#0D2A47]">
        <Container>
          <FadeUp className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-medium text-white mb-4">
              We&rsquo;re in beta — and looking for founding families
            </h2>
            <p className="text-blue-100/80 leading-relaxed mb-8">
              LifQ is a private beta with limited capacity. We review every application to build a founding
              community that will help shape the product.
            </p>
            <ButtonLink href="/beta-signup" className="bg-brand-teal hover:bg-[#1E8E84] text-white px-8 py-3 text-base">
              Apply for beta access
            </ButtonLink>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
