import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/Container";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Application received",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="py-24 min-h-screen bg-surface-alt flex items-center">
      <Container>
        <div className="max-w-md mx-auto text-center bg-card rounded-2xl border border-border p-10">
          <div className="w-16 h-16 rounded-full bg-[#E0F7F5] flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-brand-teal" />
          </div>
          <h1 className="text-2xl font-heading font-medium mb-3" style={{ color: "#0D2A47" }}>
            You&rsquo;re on the list!
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Thanks for applying. We review applications carefully to ensure a quality beta
            experience. We&rsquo;ll be in touch when a spot opens up for you.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Check your inbox — we sent a confirmation to the email you provided.
          </p>
          <ButtonLink href="/" variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
