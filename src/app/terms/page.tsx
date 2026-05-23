import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "Terms and conditions for using LifQ.",
};

export default function TermsPage() {
  return (
    <section className="py-16">
      <Container>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-heading font-medium mb-2" style={{ color: "#0D2A47" }}>
            Terms of service
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: January 2026</p>
          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-heading font-medium mb-3" style={{ color: "#0D2A47" }}>
                Beta program
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                LifQ is currently in private beta. Access is by invitation only. Beta features may
                change or be discontinued without notice.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-heading font-medium mb-3" style={{ color: "#0D2A47" }}>
                Use of the service
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You may use LifQ only for lawful purposes related to managing your own household
                insurance, benefits, and warranties. You may not attempt to reverse-engineer the
                service or use it in any way that could harm other users.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-heading font-medium mb-3" style={{ color: "#0D2A47" }}>
                Accuracy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                LifQ uses AI to analyze your documents and provide insights. While we work hard to
                be accurate, LifQ&rsquo;s analysis is informational only and does not constitute
                insurance, legal, or financial advice. Always verify coverage details directly with
                your insurer.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-heading font-medium mb-3" style={{ color: "#0D2A47" }}>
                Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Questions about these terms?{" "}
                <a href="mailto:legal@lifq.ai" className="text-brand-blue hover:underline">
                  legal@lifq.ai
                </a>
              </p>
            </section>
            <p className="text-xs text-muted-foreground border-t border-border pt-6">
              This is a placeholder policy. Full legal language will be added before public launch.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
