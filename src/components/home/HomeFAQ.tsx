import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/ui/animate";

const faqs = [
  {
    question: "What is LifQ?",
    answer:
      "LifQ is an AI-powered platform that organizes all your household protections in one place — insurance policies, employer benefits, credit card coverage, warranties, and memberships. It then analyzes them together to find gaps, overlaps, and savings opportunities.",
  },
  {
    question: "How is LifQ different from just storing documents in Google Drive?",
    answer:
      "Google Drive stores files. LifQ reads and understands them. After you upload a policy, LifQ extracts the coverage details, compares it against your other policies, and identifies what you're paying for twice, what you're missing, and where you can save money.",
  },
  {
    question: "What types of documents does LifQ support?",
    answer:
      "Health, auto, home, life, and dental insurance policies; employer benefits guides; credit card benefits documents; product warranties; service contracts; HSA/FSA statements; and membership documents.",
  },
  {
    question: "Is my information safe?",
    answer:
      "Yes. LifQ uses bank-level encryption for all stored documents and data. We never sell your information to insurers, advertisers, or third parties. You control who has access.",
  },
  {
    question: "How much does LifQ cost?",
    answer:
      "LifQ is free during the beta period for accepted applicants. After beta, plans start at $7/month (Solo) and $12/month (Family), billed annually.",
  },
  {
    question: "Can my whole family use LifQ?",
    answer:
      "Yes. The Family plan supports up to 5 family members with shared access to your household protection vault. Each member can see the full picture — so everyone is informed, not just the person who manages everything.",
  },
];

export function HomeFAQ() {
  return (
    <section className="py-16 md:py-24 bg-surface-alt">
      <Container>
        <FadeUp className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-2xl md:text-3xl font-heading font-medium mb-3"
              style={{ color: "#0D2A47" }}
            >
              Common questions
            </h2>
            <p className="text-muted-foreground">
              Everything you want to know before applying.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-border bg-card overflow-hidden"
              >
                <summary
                  className="flex items-center justify-between gap-4 cursor-pointer px-6 py-4 text-sm font-medium list-none hover:bg-muted/50 transition-colors"
                  style={{ color: "#0D2A47" }}
                >
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
          <div className="mt-6 text-center">
            <Link
              href="/faq"
              className="text-sm text-brand-blue hover:underline font-medium"
            >
              See all frequently asked questions →
            </Link>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
