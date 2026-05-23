import { Container } from "@/components/layout/Container";
import { MessageCircle } from "lucide-react";

const questions = [
  "I'm renting a car next week. What coverage should I select?",
  "Am I overpaying for overlapping policies?",
  "Does my credit card already cover travel insurance?",
  "What benefits am I not using?",
];

export function RealWorldQuestions() {
  return (
    <section className="py-20 bg-surface-alt">
      <Container>
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-wide text-brand-teal uppercase mb-3">
            Real questions, real answers
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-medium" style={{ color: "#0D2A47" }}>
            Questions LifQ answers for your family
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {questions.map((question) => (
            <div
              key={question}
              className="flex gap-4 p-6 bg-card rounded-xl border border-border shadow-sm"
            >
              <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mt-0.5">
                <MessageCircle className="h-4 w-4 text-brand-blue" />
              </div>
              <p className="text-foreground leading-relaxed">&ldquo;{question}&rdquo;</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
