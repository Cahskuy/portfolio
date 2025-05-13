import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["github.com"], // Add github.com as a valid image domain
  },
};

export default nextConfig;
