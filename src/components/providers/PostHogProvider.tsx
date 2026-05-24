"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;

    posthog.init(key, {
      api_host: "https://us.i.posthog.com",
      // Privacy: no session replays, no autocapture, no automatic page events
      disable_session_recording: true,
      autocapture: false,
      capture_pageview: false,
      capture_pageleave: false,
      persistence: "localStorage",
      loaded(ph) {
        if (process.env.NODE_ENV === "development") ph.debug();
      },
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
