import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { ArrowRight, Lock } from "lucide-react";

export const metadata = {
  title: "LifQ — Coming Soon",
  description:
    "LifQ is an AI-powered platform that helps families organize, understand, and manage their insurance, benefits, and warranties. Coming soon.",
};

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #EEF3F9 100%)" }}
    >
      <div className="max-w-lg w-full flex flex-col items-center gap-8">
        <Image
          src="/logos/logo-horizontal.png"
          alt="LifQ"
          width={160}
          height={48}
          className="h-10 w-auto"
          priority
        />

        <div className="flex flex-col gap-4">
          <h1
            className="text-3xl md:text-4xl font-heading font-medium leading-tight tracking-tight"
            style={{ color: "#0D2A47" }}
          >
            Your family&rsquo;s coverage — organized, understood, and ready when it matters most.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We&rsquo;re putting the finishing touches on something great.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <ButtonLink
            href="/beta-signup"
            className="bg-brand-blue hover:bg-[#1565C0] text-white px-8 h-12 text-base"
            size="lg"
          >
            Request early access
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Lock className="h-3.5 w-3.5 shrink-0" />
            Free during beta. Limited spots.
          </p>
        </div>
      </div>
    </main>
  );
}
