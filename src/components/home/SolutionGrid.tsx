import { Container } from "@/components/layout/Container";
import { Eye, Brain, Users } from "lucide-react";

const solutions = [
  {
    icon: Eye,
    title: "Clarity",
    description:
      "See all your insurance, benefits, and warranties in one place — clearly organized and easy to understand.",
    color: "bg-blue-50",
    iconColor: "text-brand-blue",
  },
  {
    icon: Brain,
    title: "Intelligence",
    description:
      "AI analyzes your policies to identify coverage gaps, overlaps, renewal risks, and savings opportunities.",
    color: "bg-[#E0F7F5]",
    iconColor: "text-brand-teal",
  },
  {
    icon: Users,
    title: "Family confidence",
    description:
      "Ensure the people who depend on you stay informed and prepared with shared access and AI guidance across your protection portfolio.",
    color: "bg-[#FFF3E0]",
    iconColor: "text-brand-orange",
  },
];

export function SolutionGrid() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-wide text-brand-teal uppercase mb-3">
            The solution
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-medium" style={{ color: "#0D2A47" }}>
            Clarity across everything you already pay for
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map(({ icon: Icon, title, description, color, iconColor }) => (
            <div
              key={title}
              className="text-center p-8 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow"
            >
              <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mx-auto mb-5`}>
                <Icon className={`h-7 w-7 ${iconColor}`} />
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
