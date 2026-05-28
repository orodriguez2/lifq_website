import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/content/blog";
import { Container } from "@/components/layout/Container";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { breadcrumbSchema, jsonLdScript } from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Blog — LifQ Insurance & Benefits Guides",
  description:
    "Practical guides on insurance, employee benefits, HSA/FSA, warranties, and household financial organization — written to help families understand and optimize their coverage.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — LifQ Insurance & Benefits Guides",
    description: "Plain-language guides on insurance, benefits, and household financial protection.",
    url: "/blog",
  },
};

const categoryColors: Record<string, string> = {
  "Employee Benefits": "bg-teal-50 text-teal-700",
  "Financial Organization": "bg-blue-50 text-blue-700",
  "Insurance": "bg-orange-50 text-orange-700",
  "Healthcare Savings": "bg-green-50 text-green-700",
};

export default function BlogPage() {
  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumbLd) }} />

      <section className="bg-gradient-to-b from-[#F8FAFC] to-[#EEF3F9] py-20 md:py-28">
        <Container>
          <FadeUp className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-heading font-medium leading-tight mb-6" style={{ color: "#0D2A47", letterSpacing: "-0.02em" }}>
              Guides for smarter household protection
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Plain-language articles on insurance, employee benefits, warranties, and household financial organization — everything you need to understand and optimize what you already pay for.
            </p>
          </FadeUp>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <Container>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => {
              const color = categoryColors[post.category] ?? "bg-gray-50 text-gray-600";
              return (
                <StaggerItem key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col gap-4 p-6 rounded-2xl border border-border bg-card hover:border-brand-blue/40 hover:shadow-md transition-all h-full"
                  >
                    <span className={`self-start text-xs font-medium rounded-full px-2.5 py-1 ${color}`}>
                      {post.category}
                    </span>
                    <h2 className="text-base font-heading font-medium leading-snug group-hover:text-brand-blue transition-colors flex-1" style={{ color: "#0D2A47" }}>
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-2">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" /> {post.readingTime} min read
                      </span>
                      <span className="flex items-center gap-1 text-xs text-brand-blue font-medium">
                        Read <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
