import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/ui/animate";
import type { SolutionFAQ } from "@/content/solutions/types";

interface Props {
  faqs: SolutionFAQ[];
}

export function SolutionFAQ({ faqs }: Props) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <div className="max-w-2xl mx-auto">
          <FadeUp className="mb-10">
            <h2
              className="text-2xl md:text-3xl font-heading font-medium"
              style={{ color: "#0D2A47" }}
            >
              Frequently asked questions
            </h2>
          </FadeUp>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeUp key={i}>
                <details className="group rounded-xl border border-border bg-card overflow-hidden">
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
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
