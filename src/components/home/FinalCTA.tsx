import Link from "next/link";
import { TrackedCTA } from "@/components/ui/tracked-cta";
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
          <TrackedCTA
            href="/beta-signup"
            analyticsLocation="final_cta"
            className="bg-brand-blue hover:bg-[#1565C0] text-white px-10 h-12 text-base"
            size="lg"
          >
            Go to beta application
            <ArrowRight className="ml-2 h-4 w-4" />
          </TrackedCTA>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <Lock className="h-3.5 w-3.5" />
            Free during beta. Limited spots.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Not ready yet?{" "}
            <Link href="/solutions" className="text-brand-blue hover:underline font-medium">
              Browse what LifQ solves →
            </Link>
          </p>
        </FadeUp>
      </Container>
    </section>
  );
}
