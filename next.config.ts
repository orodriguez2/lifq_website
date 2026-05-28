import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  // Next.js hydration + all third-party scripts
  "script-src 'self' 'unsafe-inline' js.stripe.com challenges.cloudflare.com static.cloudflareinsights.com www.googletagmanager.com www.google-analytics.com https://us-assets.i.posthog.com va.vercel-scripts.com www.clarity.ms",
  "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
  "font-src 'self' fonts.gstatic.com",
  "img-src 'self' data: blob: www.google-analytics.com www.googletagmanager.com www.clarity.ms",
  "connect-src 'self' *.supabase.co api.stripe.com https://us.i.posthog.com https://us-assets.i.posthog.com challenges.cloudflare.com www.google-analytics.com www.googletagmanager.com www.clarity.ms",
  // Stripe and Turnstile render iframes
  "frame-src js.stripe.com challenges.cloudflare.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Report-only until CSP is confirmed clean in production
  { key: "Content-Security-Policy-Report-Only", value: csp },
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.54", "lifq-web.pakal.io", "https://lifq-web.pakal.io"],
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
