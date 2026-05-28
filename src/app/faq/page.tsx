import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/ui/animate";
import { ButtonLink } from "@/components/ui/button-link";
import { faqSchema, breadcrumbSchema, jsonLdScript } from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "FAQ — LifQ Household Protection Intelligence",
  description:
    "Answers to common questions about LifQ: how it works, what documents it supports, privacy, pricing, the beta program, and how AI analysis keeps your family protected.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — LifQ",
    description: "Everything you need to know about LifQ — the household protection intelligence platform.",
    url: "/faq",
  },
};

const faqs = [
  {
    category: "About LifQ",
    items: [
      {
        question: "What is LifQ?",
        answer:
          "LifQ is an AI-powered platform that helps families organize, understand, and manage all their financial protections in one place — including insurance policies, employer benefits, credit card benefits, warranties, and memberships. Think of it as the operating system for your household's protection portfolio.",
      },
      {
        question: "How is LifQ different from a digital vault or document storage app?",
        answer:
          "Digital vaults store documents passively. LifQ actively analyzes them. After you upload a policy, LifQ reads it, interprets it in plain language, compares it against your other coverage, and identifies gaps, overlaps, and savings opportunities. Intelligence — not just storage — is the core value.",
      },
      {
        question: "Who is LifQ built for?",
        answer:
          "LifQ is built for financially responsible households — typically families aged 32–52 with $85K–$250K income who have multiple insurance policies, employer benefits, and warranties, and want to stop overpaying and start actually understanding their coverage.",
      },
      {
        question: "Is LifQ an insurance company or broker?",
        answer:
          "No. LifQ doesn't sell or broker insurance. We're a neutral intelligence platform that helps you understand and optimize what you already have. We're on your side, not the insurer's.",
      },
    ],
  },
  {
    category: "How it works",
    items: [
      {
        question: "How do I add my documents to LifQ?",
        answer:
          "You can upload documents by photo (using your phone camera), PDF upload, or email forwarding. LifQ accepts any format — scanned PDFs, email attachments from insurers, benefit guides from HR, warranty cards, and more.",
      },
      {
        question: "What types of documents does LifQ support?",
        answer:
          "LifQ works with health, auto, home, life, and dental insurance policies; employer benefits guides; credit card benefits documents; product warranties; service contracts; HSA/FSA statements; and membership or subscription documents.",
      },
      {
        question: "How does the AI analysis work?",
        answer:
          "LifQ uses AI to read and interpret your documents — extracting key coverage details, deductibles, benefit limits, expiration dates, and exclusions. It then analyzes your entire portfolio together to find gaps, overlaps, and optimization opportunities that no single policy view can reveal.",
      },
      {
        question: "Do I need to manually enter all my policy details?",
        answer:
          "No. LifQ's AI extracts the key data from your documents automatically. You upload the document and LifQ handles the interpretation.",
      },
    ],
  },
  {
    category: "Privacy & security",
    items: [
      {
        question: "Is my data safe with LifQ?",
        answer:
          "Yes. LifQ uses bank-level encryption for all stored documents and data. We follow security practices comparable to major financial institutions.",
      },
      {
        question: "Does LifQ sell my data?",
        answer:
          "Never. Your documents and financial information remain private. We do not sell, share, or monetize your data with insurers, advertisers, or third parties.",
      },
      {
        question: "Who can see my LifQ account?",
        answer:
          "Only you — and family members you explicitly invite. You control access entirely. You can grant and revoke access to specific family members at any time.",
      },
      {
        question: "Can my insurance company access my LifQ account?",
        answer:
          "No. LifQ has no relationship with insurance carriers and does not share data with them. Your account is completely private.",
      },
    ],
  },
  {
    category: "Beta program & pricing",
    items: [
      {
        question: "What is the beta program?",
        answer:
          "LifQ is currently in private beta with limited capacity. Beta applicants fill out a short form and are reviewed by our team. Acceptance is not guaranteed — we're selecting families who can best help shape the product.",
      },
      {
        question: "Is the beta free?",
        answer:
          "Yes. Beta access is free for accepted applicants during the beta period.",
      },
      {
        question: "What happens after the beta?",
        answer:
          "After the beta period, LifQ will offer subscription plans starting at $7/month (Solo) and $12/month (Family) billed annually. Beta users will receive advance notice and special pricing.",
      },
      {
        question: "How do I apply for the beta?",
        answer:
          "Click the 'Join the beta' button on any page and fill out the short application form. It takes about 2 minutes. We review applications to ensure quality and will contact you when a spot is available.",
      },
    ],
  },
];

export default function FAQPage() {
  const allFaqs = faqs.flatMap((cat) => cat.items);
  const faqLd = faqSchema(allFaqs);
  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "FAQ", href: "/faq" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumbLd) }} />

      <section className="bg-gradient-to-b from-[#F8FAFC] to-[#EEF3F9] py-20 md:py-28">
        <Container>
          <FadeUp className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-heading font-medium leading-tight mb-6" style={{ color: "#0D2A47", letterSpacing: "-0.02em" }}>
              Frequently asked questions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Everything you want to know about LifQ — how it works, what it costs, and how we protect your information.
            </p>
          </FadeUp>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            {faqs.map((category) => (
              <FadeUp key={category.category}>
                <h2 className="text-lg font-heading font-medium mb-6 pb-3 border-b border-border" style={{ color: "#0D2A47" }}>
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.items.map((faq, i) => (
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
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-surface-alt">
        <Container>
          <FadeUp className="max-w-lg mx-auto text-center">
            <h2 className="text-2xl font-heading font-medium mb-3" style={{ color: "#0D2A47" }}>
              Still have questions?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We&rsquo;d love to hear from you. Reach out directly and we&rsquo;ll get back to you quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <ButtonLink href="mailto:hello@lifq.ai" variant="outline" className="px-6">
                Email us
              </ButtonLink>
              <ButtonLink href="/beta-signup" className="bg-brand-blue hover:bg-[#1565C0] text-white px-6">
                Join the beta
              </ButtonLink>
            </div>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
