import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,

  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;

