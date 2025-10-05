import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@app": require("path").resolve(__dirname, "src"),
    };
    return config;
  },
};

export default nextConfig;
