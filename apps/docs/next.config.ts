import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@potatto/react', '@potatto/tokens'],
};

export default nextConfig;
