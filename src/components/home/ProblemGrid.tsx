import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { Layers, HelpCircle, DollarSign, AlertCircle } from "lucide-react";

const problems = [
  {
    icon: Layers,
    title: "Fragmented",
    description: "Policies across apps, emails, PDFs, and portals.",
  },
  {
    icon: HelpCircle,
    title: "Confusing",
    description: "Deductibles, exclusions, overlapping coverage.",
  },
  {
    icon: DollarSign,
    title: "Expensive",
    description: "You may already be paying for coverage twice.",
  },
  {
    icon: AlertCircle,
    title: "Uncertain",
    description: "If something happens, will your family know what protection you have?",
  },
];

export function ProblemGrid() {
  return (
    <section className="py-20 bg-surface-alt">
      <Container>
        <FadeUp className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-heading font-medium"
            style={{ color: "#0D2A47" }}
          >
            Insurance and benefits shouldn&rsquo;t feel this complicated
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {problems.map(({ icon: Icon, title, description }) => (
            <StaggerItem
              key={title}
              className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-brand-blue" />
              </div>
              <h3
                className="font-heading font-medium text-lg mb-2"
                style={{ color: "#0D2A47" }}
              >
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Problem → solution visual */}
        <FadeUp>
          <div className="rounded-2xl overflow-hidden shadow-md border border-border">
            <Image
              src="/imgs/problem-solution.png"
              alt="Protection fragmentation problem and LifQ solution — from scattered policies to a unified Protection Score"
              width={1536}
              height={1024}
              className="w-full h-auto"
            />
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
