import type { Metadata } from "next";
import { Poppins, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lifq.ai"),
  title: {
    default: "LifQ — Household Protection Intelligence",
    template: "%s | LifQ",
  },
  description:
    "LifQ is an AI-powered platform that helps families organize, understand, and manage their insurance, benefits, and warranties so they can make smarter protection decisions.",
  keywords: ["insurance", "benefits", "warranties", "household", "AI", "coverage", "family"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lifq.ai",
    siteName: "LifQ",
    title: "LifQ — Household Protection Intelligence",
    description:
      "Know what you're covered for. Use what you already pay for. LifQ organizes all your insurance, benefits, and warranties in one place.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LifQ — Household Protection Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LifQ — Household Protection Intelligence",
    description:
      "Know what you're covered for. AI-powered platform for insurance, benefits, and warranties.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${sourceSans3.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
