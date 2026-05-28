import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request your invite — LifQ Beta",
  description:
    "Apply for early access to LifQ — the AI-powered platform that helps families organize, understand, and optimize their insurance, benefits, and warranties. Limited beta spots available.",
  alternates: { canonical: "/beta-signup" },
  openGraph: {
    title: "Request your invite — LifQ Beta",
    description:
      "Apply for early access to LifQ. Organize all your household protections in one intelligent platform. Free during beta, limited spots.",
    url: "/beta-signup",
  },
  robots: { index: true, follow: true },
};

export default function BetaSignupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
