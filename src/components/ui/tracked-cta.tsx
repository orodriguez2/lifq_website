"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { analytics } from "@/lib/analytics";
import type { ComponentProps } from "react";

type CtaLocation = "hero" | "final_cta" | "nav" | "pricing_free";

type Props = ComponentProps<typeof ButtonLink> & {
  analyticsLocation: CtaLocation;
};

export function TrackedCTA({ analyticsLocation, onClick, ...props }: Props) {
  return (
    <ButtonLink
      {...props}
      onClick={(e) => {
        analytics.ctaClicked(analyticsLocation);
        onClick?.(e);
      }}
    />
  );
}
