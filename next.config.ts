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
};

export default nextConfig;
