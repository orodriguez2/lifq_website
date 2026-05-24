import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animate";

const stats = [
  {
    value: "82",
    label: "Portfolio Score",
    description: "Composite strength rating across all your policies",
  },
  {
    value: "$16,879",
    label: "Avg. savings found",
    description: "Opportunities discovered per household",
  },
  {
    value: "17+",
    label: "Document types",
    description: "Insurance, benefits, warranties & memberships",
  },
];

export function AppShowcase() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <Container>
        <FadeUp className="text-center mb-14">
          <p className="text-sm font-medium tracking-wide text-brand-teal uppercase mb-3">
            See it in action
          </p>
          <h2
            className="text-3xl md:text-4xl font-heading font-medium mb-4"
            style={{ color: "#0D2A47" }}
          >
            Your household&rsquo;s protection, at a glance
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            LifQ turns scattered documents into a clear, actionable picture of your coverage — and
            finds what you&rsquo;re missing.
          </p>
        </FadeUp>

        {/* Stat row */}
        <StaggerContainer className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-16">
          {stats.map((stat) => (
            <StaggerItem key={stat.value} hover={false} className="text-center">
              <p
                className="text-3xl md:text-4xl font-heading font-medium mb-1"
                style={{ color: "#1976D2" }}
              >
                {stat.value}
              </p>
              <p className="text-sm font-medium text-foreground mb-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground hidden md:block">{stat.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Phone screenshots */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-8 md:gap-6 lg:gap-12">
          {/* Dashboard */}
          <FadeUp delay={0} className="flex flex-col items-center gap-5">
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-full blur-3xl opacity-50"
                style={{ background: "radial-gradient(ellipse, #1976D220 0%, transparent 70%)" }}
              />
              <Image
                src="/imgs/app-dashboard.png"
                alt="LifQ Dashboard — portfolio score, savings summary, and annual costs overview"
                width={240}
                height={504}
                className="relative drop-shadow-xl"
              />
            </div>
            <div className="text-center">
              <p className="font-heading font-medium text-sm mb-0.5" style={{ color: "#0D2A47" }}>
                Dashboard
              </p>
              <p className="text-xs text-muted-foreground">
                Portfolio overview &amp; confirmed savings
              </p>
            </div>
          </FadeUp>

          {/* Opportunities — raised on desktop for visual interest */}
          <FadeUp delay={0.14} className="flex flex-col items-center gap-5 md:-mt-12">
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-full blur-3xl opacity-50"
                style={{ background: "radial-gradient(ellipse, #26A69A20 0%, transparent 70%)" }}
              />
              <Image
                src="/imgs/app-opportunities.png"
                alt="LifQ Opportunities — $16,879 in total savings opportunities discovered"
                width={240}
                height={504}
                className="relative drop-shadow-xl"
              />
              {/* callout chip */}
              <div className="absolute -right-5 top-20 bg-white rounded-xl shadow-lg border border-border px-3 py-2 text-center">
                <p className="text-base font-heading font-medium" style={{ color: "#26A69A" }}>
                  $16,879
                </p>
                <p className="text-[10px] text-muted-foreground leading-tight">opportunities</p>
              </div>
            </div>
            <div className="text-center">
              <p className="font-heading font-medium text-sm mb-0.5" style={{ color: "#0D2A47" }}>
                Opportunities
              </p>
              <p className="text-xs text-muted-foreground">
                Savings &amp; actions discovered by AI
              </p>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
