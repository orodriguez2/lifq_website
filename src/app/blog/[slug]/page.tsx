import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/content/blog";
import { solutions } from "@/content/solutions";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/button-link";
import { articleSchema, breadcrumbSchema, jsonLdScript } from "@/lib/seo/structured-data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${slug}`,
      type: "article",
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderContent(content: string) {
  return content
    .split("\n\n")
    .map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="text-xl font-heading font-medium mt-8 mb-3" style={{ color: "#0D2A47" }}>
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("### ")) {
        return (
          <h3 key={i} className="text-base font-heading font-medium mt-6 mb-2" style={{ color: "#0D2A47" }}>
            {block.replace("### ", "")}
          </h3>
        );
      }
      if (block.startsWith("**") && block.endsWith("**") && !block.includes("\n")) {
        return (
          <p key={i} className="font-medium text-foreground mt-4">
            {block.replace(/\*\*/g, "")}
          </p>
        );
      }
      if (block.startsWith("- ") || block.includes("\n- ")) {
        const items = block.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="list-disc pl-5 space-y-1.5 text-muted-foreground leading-relaxed my-4">
            {items.map((item, j) => (
              <li key={j} dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
            ))}
          </ul>
        );
      }
      if (block.trim() === "") return null;
      return (
        <p key={i} className="text-muted-foreground leading-relaxed my-4" dangerouslySetInnerHTML={{
          __html: block.replace(/\*\*(.+?)\*\*/g, "<strong style='color:#0D2A47'>$1</strong>"),
        }} />
      );
    })
    .filter(Boolean);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedSolutionsList = post.relatedSolutions
    ? solutions.filter((s) => post.relatedSolutions!.includes(s.slug)).slice(0, 3)
    : [];

  const articleLd = articleSchema({
    title: post.title,
    description: post.excerpt,
    slug: post.slug,
    datePublished: post.date,
    author: "LifQ Team",
  });
  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumbLd) }} />

      <section className="bg-[#F8FAFC] pt-12 pb-8 border-b border-border">
        <Container>
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to blog
          </Link>
          <div className="max-w-2xl">
            <span className="text-xs font-medium text-brand-teal uppercase tracking-wider">{post.category}</span>
            <h1 className="text-3xl md:text-4xl font-heading font-medium leading-tight mt-3 mb-4" style={{ color: "#0D2A47", letterSpacing: "-0.02em" }}>
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{formatDate(post.date)}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readingTime} min read
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-background">
        <Container>
          <div className="max-w-2xl">
            <div className="prose-custom">{renderContent(post.content)}</div>
          </div>
        </Container>
      </section>

      {relatedSolutionsList.length > 0 && (
        <section className="py-12 bg-surface-alt border-t border-border">
          <Container>
            <div className="max-w-2xl">
              <h2 className="text-lg font-heading font-medium mb-6" style={{ color: "#0D2A47" }}>
                Related LifQ solutions
              </h2>
              <div className="space-y-3">
                {relatedSolutionsList.map((sol) => (
                  <Link
                    key={sol.slug}
                    href={`/solutions/${sol.slug}`}
                    className="group flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:border-brand-blue/40 transition-all"
                  >
                    <div>
                      <span className="text-xs text-muted-foreground">{sol.category}</span>
                      <p className="text-sm font-medium group-hover:text-brand-blue transition-colors" style={{ color: "#0D2A47" }}>
                        {sol.headline}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-brand-blue group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      <section className="py-12 bg-[#0D2A47]">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-heading font-medium text-white mb-3">
              LifQ organizes your entire protection portfolio automatically
            </h2>
            <p className="text-blue-100/80 text-sm leading-relaxed mb-6">
              Join the beta and get AI-powered analysis of all your insurance, benefits, and warranties in one place.
            </p>
            <ButtonLink href="/beta-signup" className="bg-brand-teal hover:bg-[#1E8E84] text-white px-8">
              Join the beta
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
