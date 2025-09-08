import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "flagcdn.com",
      "res.cloudinary.com",
    ],
  },
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
