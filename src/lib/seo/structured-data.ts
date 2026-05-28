import type { SolutionFAQ } from "@/content/solutions/types";
import { SCHEMA_PRICES } from "@/lib/constants/pricing";

const BASE_URL = "https://lifq.ai";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LifQ",
    url: BASE_URL,
    logo: `${BASE_URL}/logos/logo-horizontal.png`,
    description:
      "LifQ is an AI-powered platform that helps families organize, understand, and manage their insurance, benefits, and warranties so they can make smarter protection decisions.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@lifq.ai",
      contactType: "customer support",
    },
  };
}

export function faqSchema(items: SolutionFAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  author = "LifQ Team",
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${BASE_URL}/blog/${slug}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: { "@type": "Organization", name: author },
    publisher: {
      "@type": "Organization",
      name: "LifQ",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logos/logo-horizontal.png` },
    },
  };
}

export function breadcrumbSchema(
  crumbs: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${BASE_URL}${crumb.href}`,
    })),
  };
}

export function productSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LifQ",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web, iOS, Android",
    description:
      "The first AI-powered Household Protection Intelligence platform. Organize, understand, and optimize all your insurance, benefits, and warranties in one place.",
    url: BASE_URL,
    offers: [
      {
        "@type": "Offer",
        name: "Solo Plan",
        price: SCHEMA_PRICES.solo.annual,
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: SCHEMA_PRICES.solo.annual,
          priceCurrency: "USD",
          billingDuration: "P1M",
        },
      },
      {
        "@type": "Offer",
        name: "Family Plan",
        price: SCHEMA_PRICES.family.annual,
        priceCurrency: "USD",
      },
    ],
  };
}

export function jsonLdScript(schema: object) {
  return JSON.stringify(schema);
}
