import { Container } from "@/components/layout/Container";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  "Understand their coverage",
  "Optimize their policies",
  "Protect their loved ones",
  "Navigate life events with confidence",
];

export function Vision() {
  return (
    <section
      className="py-20"
      style={{ background: "#0D2A47" }}
    >
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-medium tracking-wide text-brand-teal uppercase mb-4">
            Our vision
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-white mb-6">
            The Personal Protection Operating System for households
          </h2>
          <p className="text-blue-100/80 text-lg mb-10 leading-relaxed">
            At LifQ we are building a world where every family has complete clarity about their
            financial protections — where people can:
          </p>
          <ul className="space-y-3 text-left max-w-sm mx-auto">
            {pillars.map((pillar) => (
              <li key={pillar} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-brand-teal shrink-0" />
                <span className="text-blue-50">{pillar}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
