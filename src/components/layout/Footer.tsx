import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="py-4">
          <p className="text-xs text-muted-foreground text-center">
            © 2026 LifQ. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
