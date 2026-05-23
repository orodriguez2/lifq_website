"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Container } from "./Container";

const navLinks = [{ href: "/pricing", label: "Pricing" }];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logos/logo-horizontal.png"
              alt="LifQ"
              width={120}
              height={36}
              className="h-8 w-auto dark:hidden"
              priority
            />
            <Image
              src="/logos/logo-horizontal-dark.png"
              alt="LifQ"
              width={120}
              height={36}
              className="h-8 w-auto hidden dark:block"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink
              href="/beta-signup"
              className="bg-brand-blue hover:bg-[#1565C0] text-white px-4"
              size="sm"
            >
              Join the beta
            </ButtonLink>
          </nav>

          {/* Mobile nav */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/" onClick={() => setOpen(false)}>
                  <Image
                    src="/logos/logo-horizontal.png"
                    alt="LifQ"
                    width={100}
                    height={30}
                    className="h-7 w-auto"
                  />
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-base font-medium text-foreground hover:text-brand-blue transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <ButtonLink
                  href="/beta-signup"
                  onClick={() => setOpen(false)}
                  className="bg-brand-blue hover:bg-[#1565C0] text-white w-full justify-center"
                >
                  Join the beta
                </ButtonLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
