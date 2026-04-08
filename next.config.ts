import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "developer.apple.com",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "tools.applemediaservices.com",
        pathname: "/api/**",
      },
    ],
  },
};

export default nextConfig;
