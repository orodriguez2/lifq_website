import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/ui/animate";
import type { Solution } from "@/content/solutions/types";

interface Props {
  example: Solution["realWorldExample"];
}

export function SolutionExample({ example }: Props) {
  return (
    <section className="py-16 md:py-20 bg-surface-alt">
      <Container>
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2
              className="text-2xl md:text-3xl font-heading font-medium mb-8 text-center"
              style={{ color: "#0D2A47" }}
            >
              {example.heading ?? "See it in action"}
            </h2>
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="bg-[#F8FAFC] border-b border-border px-6 py-5">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Scenario
                </span>
                <p className="mt-2 text-foreground leading-relaxed">{example.scenario}</p>
              </div>
              <div className="bg-card px-6 py-5">
                <span className="text-xs font-medium text-brand-teal uppercase tracking-wider">
                  With LifQ
                </span>
                <p className="mt-2 text-foreground leading-relaxed">{example.result}</p>
              </div>
            </div>
            {example.quote && (
              <blockquote className="mt-6 pl-4 border-l-2 border-brand-teal">
                <p className="text-muted-foreground italic">&ldquo;{example.quote}&rdquo;</p>
              </blockquote>
            )}
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
