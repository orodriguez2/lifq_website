"use client";

import { useEffect } from "react";
import { analytics } from "@/lib/analytics";

// Null-rendering client component — fires landing_page_viewed once per mount.
// Exists only because page.tsx is a Server Component and cannot use useEffect.
export function HomePageTracker() {
  useEffect(() => {
    analytics.landingPageViewed();
  }, []);

  return null;
}
