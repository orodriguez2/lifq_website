import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How LifQ collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <section className="py-16">
      <Container>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-heading font-medium mb-2" style={{ color: "#0D2A47" }}>
            Privacy policy
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: January 2026</p>
          <div className="prose prose-slate max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-heading font-medium mb-3" style={{ color: "#0D2A47" }}>
                What we collect
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                When you apply for the LifQ beta, we collect your name, email, and information about
                your household and policies. When you use the app, we collect documents you upload
                and the coverage information extracted from them.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-heading font-medium mb-3" style={{ color: "#0D2A47" }}>
                How we use it
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use your information to provide LifQ&rsquo;s core features: organizing your
                coverage, analyzing your policies, and generating personalized insights. We use your
                email to communicate about your account and beta status.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-heading font-medium mb-3" style={{ color: "#0D2A47" }}>
                What we don&rsquo;t do
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information or your documents to third parties. We do
                not use your documents to train AI models without your explicit consent.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-heading font-medium mb-3" style={{ color: "#0D2A47" }}>
                Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your data is stored in Supabase with row-level security and encrypted at rest and in
                transit. Documents are stored in encrypted cloud storage.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-heading font-medium mb-3" style={{ color: "#0D2A47" }}>
                Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy questions, contact us at{" "}
                <a href="mailto:privacy@lifq.ai" className="text-brand-blue hover:underline">
                  privacy@lifq.ai
                </a>
                .
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
