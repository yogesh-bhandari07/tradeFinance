import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    domains: ['images.unsplash.com'], // ✅ whitelist the domain
  },
  /* config options here */
};

export default nextConfig;
