import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/ui/animate";
import { ArrowRight, Lock } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <FadeUp className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium mb-4" style={{ color: "#0D2A47" }}>
            Ready for clarity?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our beta application is a brief 2-minute step to request your private invite.
          </p>
          <ButtonLink
            href="/beta-signup"
            className="bg-brand-blue hover:bg-[#1565C0] text-white px-10 h-12 text-base"
            size="lg"
          >
            Go to beta application
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <Lock className="h-3.5 w-3.5" />
            Free during beta. Limited spots.
          </p>
        </FadeUp>
      </Container>
    </section>
  );
}
