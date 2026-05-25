import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center">
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
        </div>
      </Container>
    </header>
  );
}
