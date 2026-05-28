import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/ui/animate";
import { ButtonLink } from "@/components/ui/button-link";
import { breadcrumbSchema, jsonLdScript } from "@/lib/seo/structured-data";
import { Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — LifQ",
  description:
    "Get in touch with the LifQ team. We'd love to hear from you — whether you have questions about the beta, the product, or just want to say hello.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumbLd) }} />

      <section className="bg-gradient-to-b from-[#F8FAFC] to-[#EEF3F9] py-20 md:py-28">
        <Container>
          <FadeUp className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-heading font-medium leading-tight mb-6" style={{ color: "#0D2A47", letterSpacing: "-0.02em" }}>
              Get in touch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We&rsquo;re a small team building something we genuinely believe in. We read every message and respond personally.
            </p>
          </FadeUp>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            <FadeUp>
              <div className="p-6 rounded-2xl border border-border bg-card h-full flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h2 className="text-base font-heading font-medium mb-1" style={{ color: "#0D2A47" }}>
                    Email us
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    For general questions, beta program inquiries, press, or partnerships — email is the best way to reach us.
                  </p>
                </div>
                <ButtonLink
                  href="mailto:hello@lifq.ai"
                  variant="outline"
                  className="self-start"
                >
                  hello@lifq.ai
                </ButtonLink>
              </div>
            </FadeUp>

            <FadeUp>
              <div className="p-6 rounded-2xl border border-border bg-card h-full flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <h2 className="text-base font-heading font-medium mb-1" style={{ color: "#0D2A47" }}>
                    Apply for beta access
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Ready to try LifQ? Fill out the short application form and we&rsquo;ll review your request personally.
                  </p>
                </div>
                <ButtonLink
                  href="/beta-signup"
                  className="bg-brand-blue hover:bg-[#1565C0] text-white self-start"
                >
                  Apply for beta
                </ButtonLink>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>
    </>
  );
}
