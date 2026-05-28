import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { solutions, getSolutionBySlug, getRelatedSolutions } from "@/content/solutions";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SolutionProblem } from "@/components/solutions/SolutionProblem";
import { SolutionHowItHelps } from "@/components/solutions/SolutionHowItHelps";
import { SolutionBenefits } from "@/components/solutions/SolutionBenefits";
import { SolutionExample } from "@/components/solutions/SolutionExample";
import { SolutionFAQ } from "@/components/solutions/SolutionFAQ";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { RelatedSolutions } from "@/components/solutions/RelatedSolutions";
import { faqSchema, breadcrumbSchema, jsonLdScript } from "@/lib/seo/structured-data";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};

  return {
    title: solution.title,
    description: solution.metaDescription,
    alternates: { canonical: `/solutions/${slug}` },
    openGraph: {
      title: solution.title,
      description: solution.metaDescription,
      url: `/solutions/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: solution.title,
      description: solution.metaDescription,
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const related = getRelatedSolutions(solution.relatedSolutions).slice(0, 3);

  const faqLd = faqSchema(solution.faqs);
  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: solution.category, href: `/solutions/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumbLd) }}
      />
      <SolutionHero solution={solution} />
      <SolutionProblem problem={solution.problem} />
      <SolutionHowItHelps howItHelps={solution.howItHelps} />
      <SolutionBenefits benefits={solution.benefits} />
      <SolutionExample example={solution.realWorldExample} />
      <SolutionFAQ faqs={solution.faqs} />
      {related.length > 0 && <RelatedSolutions solutions={related} />}
      <SolutionCTA cta={solution.cta} />
    </>
  );
}
