import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/pricing", destination: "/", permanent: false },
      { source: "/privacy", destination: "/", permanent: false },
      { source: "/terms",   destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
