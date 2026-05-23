import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

const socialLinks = [
  { href: "https://facebook.com", label: "FB" },
  { href: "https://instagram.com", label: "IG" },
  { href: "https://youtube.com", label: "YT" },
  { href: "https://x.com", label: "X" },
  { href: "https://linkedin.com", label: "LI" },
];

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "mailto:hello@lifq.ai", label: "Contact" },
  { href: "https://lifq.ai", label: "lifq.ai" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="shrink-0">
            <Image
              src="/logos/logo-horizontal.png"
              alt="LifQ"
              width={90}
              height={28}
              className="h-6 w-auto dark:hidden"
            />
            <Image
              src="/logos/logo-horizontal-dark.png"
              alt="LifQ"
              width={90}
              height={28}
              className="h-6 w-auto hidden dark:block"
            />
          </Link>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            {socialLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border py-4">
          <p className="text-xs text-muted-foreground text-center">
            © 2026 LifQ. All rights reserved. Providing clarity and savings for modern households.
          </p>
        </div>
      </Container>
    </footer>
  );
}
