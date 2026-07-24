import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    // Sova serves all imagery locally from /public. If you later host the
    // favicon or product shots on a remote CDN, add its host here.
    remotePatterns: [],
  },
  experimental: {
    // Inline the CSS into the HTML so there's no separate render-blocking
    // stylesheet request (big FCP/LCP win on slow connections).
    inlineCss: true,
  },
};

export default nextConfig;
