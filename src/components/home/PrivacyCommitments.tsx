import { Container } from "@/components/layout/Container";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { Lock, EyeOff, ShieldCheck, Sliders } from "lucide-react";

const commitments = [
  { icon: EyeOff, text: "Your documents remain private" },
  { icon: ShieldCheck, text: "We never sell your data" },
  { icon: Lock, text: "Bank-level encryption throughout" },
  { icon: Sliders, text: "You control your information" },
];

export function PrivacyCommitments() {
  return (
    <section className="py-16 bg-surface-alt">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <FadeUp className="md:w-1/3">
            <p className="text-sm font-medium tracking-wide text-brand-teal uppercase mb-3">
              Privacy first
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-medium" style={{ color: "#0D2A47" }}>
              Your family&rsquo;s data stays yours
            </h2>
          </FadeUp>
          <StaggerContainer className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {commitments.map(({ icon: Icon, text }) => (
              <StaggerItem
                key={text}
                hover={false}
                className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4 text-brand-blue" />
                </div>
                <span className="text-sm font-medium text-foreground">{text}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
