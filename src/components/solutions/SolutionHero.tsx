import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/ui/animate";
import type { Solution } from "@/content/solutions/types";

interface Props {
  solution: Pick<Solution, "category" | "headline" | "subheadline" | "heroCtaLabel">;
}

export function SolutionHero({ solution }: Props) {
  return (
    <section className="bg-gradient-to-b from-[#F8FAFC] to-[#EEF3F9] py-20 md:py-28">
      <Container>
        <FadeUp className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-medium text-brand-blue bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-6">
            {solution.category}
          </span>
          <h1
            className="text-4xl md:text-5xl font-heading font-medium leading-tight mb-6"
            style={{ color: "#0D2A47", letterSpacing: "-0.02em" }}
          >
            {solution.headline}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            {solution.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink
              href="/beta-signup"
              className="bg-brand-blue hover:bg-[#1565C0] text-white px-8 py-3 text-base"
            >
              {solution.heroCtaLabel}
            </ButtonLink>
            <ButtonLink
              href="/solutions"
              variant="outline"
              className="px-8 py-3 text-base"
            >
              See all solutions
            </ButtonLink>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
