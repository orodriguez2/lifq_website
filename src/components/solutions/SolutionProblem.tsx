import { Container } from "@/components/layout/Container";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import type { Solution } from "@/content/solutions/types";

interface Props {
  problem: Solution["problem"];
}

export function SolutionProblem({ problem }: Props) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <FadeUp className="max-w-2xl mb-12">
          <h2
            className="text-2xl md:text-3xl font-heading font-medium mb-4"
            style={{ color: "#0D2A47" }}
          >
            {problem.heading}
          </h2>
          <p className="text-muted-foreground leading-relaxed">{problem.intro}</p>
        </FadeUp>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {problem.points.map((point, i) => (
            <StaggerItem key={i}>
              <div className="p-6 rounded-xl border border-border bg-card h-full">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center mb-4">
                  <span className="text-red-500 text-sm font-bold">{i + 1}</span>
                </div>
                <h3
                  className="text-base font-heading font-medium mb-2"
                  style={{ color: "#0D2A47" }}
                >
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
