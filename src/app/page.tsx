import { Hero } from "@/components/home/Hero";
import { ProblemGrid } from "@/components/home/ProblemGrid";
import { SolutionGrid } from "@/components/home/SolutionGrid";
import { AppShowcase } from "@/components/home/AppShowcase";
import { RealWorldQuestions } from "@/components/home/RealWorldQuestions";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PrivacyCommitments } from "@/components/home/PrivacyCommitments";
import { Vision } from "@/components/home/Vision";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "LifQ — Household Protection Intelligence",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemGrid />
      <SolutionGrid />
      <AppShowcase />
      <RealWorldQuestions />
      <HowItWorks />
      <PrivacyCommitments />
      <Vision />
      <FinalCTA />
    </>
  );
}
