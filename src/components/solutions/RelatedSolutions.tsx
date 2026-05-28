import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import type { Solution } from "@/content/solutions/types";

interface Props {
  solutions: Pick<Solution, "slug" | "headline" | "category">[];
}

export function RelatedSolutions({ solutions }: Props) {
  if (solutions.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-surface-alt">
      <Container>
        <FadeUp className="mb-8">
          <h2
            className="text-xl md:text-2xl font-heading font-medium"
            style={{ color: "#0D2A47" }}
          >
            Related solutions
          </h2>
        </FadeUp>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {solutions.map((solution) => (
            <StaggerItem key={solution.slug}>
              <Link
                href={`/solutions/${solution.slug}`}
                className="group flex flex-col gap-2 p-5 rounded-xl border border-border bg-card hover:border-brand-blue/40 hover:bg-blue-50/40 transition-all"
              >
                <span className="text-xs font-medium text-brand-teal">{solution.category}</span>
                <p className="text-sm font-medium leading-snug group-hover:text-brand-blue transition-colors" style={{ color: "#0D2A47" }}>
                  {solution.headline}
                </p>
                <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-brand-blue transition-colors mt-auto pt-2">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
