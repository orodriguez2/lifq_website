import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { TrackedCTA } from "@/components/ui/tracked-cta";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/ui/animate";
import { ArrowRight, Lock } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-20"
      style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #EEF3F9 100%)" }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="max-w-xl">
            <FadeUp>
              <p className="text-sm font-medium tracking-wide text-brand-teal uppercase mb-4">
                The first AI-powered Household Protection Intelligence platform
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h1
                className="text-4xl md:text-5xl font-heading font-medium leading-tight tracking-tight mb-6"
                style={{ color: "#0D2A47" }}
              >
                Your family&rsquo;s coverage — organized, understood, and ready when it matters most.
              </h1>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                LifQ is an AI-powered platform that helps families organize, understand, and manage
                their insurance, benefits, and warranties so they can make smarter protection decisions.
              </p>
            </FadeUp>
            <FadeUp delay={0.22}>
              <div className="flex flex-col sm:flex-row gap-3">
                <TrackedCTA
                  href="/beta-signup"
                  analyticsLocation="hero"
                  className="bg-brand-blue hover:bg-[#1565C0] text-white px-8 h-12 text-base"
                  size="lg"
                >
                  Join the beta waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </TrackedCTA>
                <ButtonLink
                  href="/pricing"
                  variant="outline"
                  className="h-12 text-base px-8"
                  size="lg"
                >
                  See pricing
                </ButtonLink>
              </div>
              <p className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Lock className="h-3.5 w-3.5 shrink-0" />
                Access is free for invitees. Limited beta spots available.
              </p>
            </FadeUp>
          </div>

          {/* Right: phone mockup */}
          <FadeUp delay={0.14} className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* ambient glow */}
              <div
                className="absolute -inset-8 rounded-full blur-3xl opacity-40"
                style={{ background: "radial-gradient(ellipse, #1976D230 0%, transparent 70%)" }}
              />
              <Image
                src="/imgs/app-dashboard.png"
                alt="LifQ Dashboard — 17 documents analyzed, Portfolio Score 82, $16,149 in potential savings"
                width={260}
                height={547}
                className="relative drop-shadow-2xl"
                priority
              />
              {/* floating stat chip — top right */}
              <div className="absolute -right-4 top-16 bg-white rounded-xl shadow-lg border border-border px-3 py-2 text-center min-w-[90px]">
                <p className="text-lg font-heading font-medium" style={{ color: "#1976D2" }}>82</p>
                <p className="text-[10px] text-muted-foreground leading-tight">Portfolio Score</p>
              </div>
              {/* floating stat chip — bottom left */}
              <div className="absolute -left-6 bottom-24 bg-white rounded-xl shadow-lg border border-border px-3 py-2 text-center min-w-[100px]">
                <p className="text-base font-heading font-medium" style={{ color: "#26A69A" }}>$16,149</p>
                <p className="text-[10px] text-muted-foreground leading-tight">Potential savings</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>

      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #1976D233, transparent)" }}
      />
    </section>
  );
}
