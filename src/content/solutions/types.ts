export interface SolutionFAQ {
  question: string;
  answer: string;
}

export interface SolutionBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface SolutionStep {
  step: string;
  title: string;
  description: string;
}

export interface SolutionProblemPoint {
  title: string;
  description: string;
}

export interface Solution {
  slug: string;
  title: string;
  headline: string;
  subheadline: string;
  metaDescription: string;
  category: string;
  heroCtaLabel: string;
  problem: {
    heading: string;
    intro: string;
    points: SolutionProblemPoint[];
  };
  howItHelps: {
    heading: string;
    intro?: string;
    steps: SolutionStep[];
  };
  benefits: SolutionBenefit[];
  realWorldExample: {
    heading?: string;
    scenario: string;
    result: string;
    quote?: string;
  };
  faqs: SolutionFAQ[];
  cta: {
    headline: string;
    body: string;
    buttonLabel: string;
  };
  relatedSolutions: string[];
}
