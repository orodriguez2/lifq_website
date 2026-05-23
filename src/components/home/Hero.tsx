import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/Container";
import { ArrowRight, Lock } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #EEF3F9 100%)" }}
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium tracking-wide text-brand-teal uppercase mb-4">
            The first AI-powered Household Protection Intelligence platform
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium leading-tight tracking-tight mb-6"
            style={{ color: "#0D2A47" }}
          >
            Your family&rsquo;s coverage — organized, understood, and ready when it matters most.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            LifQ is an AI-powered platform that helps families organize, understand, and manage
            their insurance, benefits, and warranties so they can make smarter protection decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <ButtonLink
              href="/beta-signup"
              className="bg-brand-blue hover:bg-[#1565C0] text-white px-8 h-12 text-base"
              size="lg"
            >
              Join the beta waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
          </div>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <Lock className="h-3.5 w-3.5" />
            Access is free for invitees. Limited beta spots available.
          </p>
        </div>
      </Container>
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #1976D233, transparent)" }}
      />
    </section>
  );
}
