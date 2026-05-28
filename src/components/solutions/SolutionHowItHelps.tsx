import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/ui/animate";
import type { Solution } from "@/content/solutions/types";

interface Props {
  howItHelps: Solution["howItHelps"];
}

export function SolutionHowItHelps({ howItHelps }: Props) {
  return (
    <section className="py-16 md:py-24 bg-surface-alt">
      <Container>
        <FadeUp className="max-w-2xl mb-12">
          <h2
            className="text-2xl md:text-3xl font-heading font-medium mb-4"
            style={{ color: "#0D2A47" }}
          >
            {howItHelps.heading}
          </h2>
          {howItHelps.intro && (
            <p className="text-muted-foreground leading-relaxed">{howItHelps.intro}</p>
          )}
        </FadeUp>
        <div className="space-y-6 max-w-3xl">
          {howItHelps.steps.map((step, i) => (
            <FadeUp key={i} className="flex gap-6 p-6 rounded-xl bg-card border border-border">
              <div className="shrink-0 w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <span className="text-brand-blue font-heading font-medium text-sm">{step.step}</span>
              </div>
              <div>
                <h3
                  className="text-base font-heading font-medium mb-2"
                  style={{ color: "#0D2A47" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
