/** @type {import('next').NextConfig} */

import("./env.mjs");

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"],
  },
};

export default nextConfig;
