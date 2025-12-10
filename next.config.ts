import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  devIndicators: false,
  images: {
    domains: ["https://qxcsxupcmjfkyulpqcbw.storage.supabase.co", "https://qxcsxupcmjfkyulpqcbw.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qxcsxupcmjfkyulpqcbw.storage.supabase.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "qxcsxupcmjfkyulpqcbw.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
