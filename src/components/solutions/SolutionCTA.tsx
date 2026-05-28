import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/ui/animate";
import type { Solution } from "@/content/solutions/types";

interface Props {
  cta: Solution["cta"];
}

export function SolutionCTA({ cta }: Props) {
  return (
    <section className="py-16 md:py-24 bg-[#0D2A47]">
      <Container>
        <FadeUp className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-medium text-white mb-4">
            {cta.headline}
          </h2>
          <p className="text-blue-100/80 leading-relaxed mb-8">{cta.body}</p>
          <ButtonLink
            href="/beta-signup"
            className="bg-brand-teal hover:bg-[#1E8E84] text-white px-8 py-3 text-base"
          >
            {cta.buttonLabel}
          </ButtonLink>
          <p className="text-blue-100/50 text-xs mt-4">Free during beta. Limited spots available.</p>
        </FadeUp>
      </Container>
    </section>
  );
}
