import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // This allows Next.js to download Google Fonts on Windows
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;