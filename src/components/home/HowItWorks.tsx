import { Container } from "@/components/layout/Container";
import { Upload, ScanSearch, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload",
    description:
      "Upload insurance policies, benefits, warranty documents, or add membership information.",
  },
  {
    number: "02",
    icon: ScanSearch,
    title: "Analyze",
    description:
      "LifQ AI reads and structures your documents, then analyzes your entire portfolio for coverage gaps, overlapping policies, renewal risk, and cost optimization.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Protect",
    description:
      "LifQ helps families act on insights — optimizing coverage, avoiding overpaying, preparing for claims, and sharing protection information with loved ones.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-wide text-brand-teal uppercase mb-3">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-medium" style={{ color: "#0D2A47" }}>
            Three steps to complete clarity
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map(({ number, icon: Icon, title, description }) => (
            <div key={number} className="relative text-center">
              {/* Step number */}
              <div className="text-6xl font-heading font-medium text-border mb-4 leading-none">
                {number}
              </div>
              <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center mx-auto mb-4">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-heading font-medium text-xl mb-3" style={{ color: "#0D2A47" }}>
                {title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
