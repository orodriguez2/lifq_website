import posthog from "posthog-js";

type CtaLocation = "hero" | "final_cta" | "nav" | "pricing_free";

function capture(event: string, props?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  posthog.capture(event, props);
}

export const analytics = {
  landingPageViewed: () => capture("landing_page_viewed"),
  ctaClicked: (location: CtaLocation) => capture("cta_clicked", { location }),
  pricingViewed: () => capture("pricing_viewed"),
  signupStarted: () => capture("signup_started"),
  signupCompleted: (props?: Record<string, unknown>) => capture("signup_completed", props),
};
