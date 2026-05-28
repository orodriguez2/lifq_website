import { Container } from "@/components/layout/Container";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animate";

const testimonials = [
  {
    quote:
      "I had no idea my credit card already covered rental cars. LifQ found that plus $340 in overlapping coverage I was paying for twice. It paid for itself in the first week.",
    name: "Sarah M.",
    role: "Married with two kids, Chicago",
    initials: "SM",
    color: "bg-brand-blue",
  },
  {
    quote:
      "Open enrollment used to stress me out every year. This time I uploaded the benefits guide and LifQ laid out exactly what each plan would cost my family. Made the decision in 20 minutes.",
    name: "David R.",
    role: "Father of three, Austin",
    initials: "DR",
    color: "bg-brand-teal",
  },
  {
    quote:
      "My dishwasher broke and I was ready to pay for the repair. Checked LifQ first — still under manufacturer warranty with 4 months left. Saved $380.",
    name: "Jennifer K.",
    role: "Homeowner, Seattle",
    initials: "JK",
    color: "bg-[#FB8C00]",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <FadeUp className="text-center mb-12">
          <h2
            className="text-2xl md:text-3xl font-heading font-medium"
            style={{ color: "#0D2A47" }}
          >
            Families are finding money they didn&rsquo;t know they had
          </h2>
        </FadeUp>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="flex flex-col gap-4 p-6 rounded-2xl border border-border bg-card h-full">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center shrink-0`}>
                    <span className="text-xs font-medium text-white">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#0D2A47" }}>{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
