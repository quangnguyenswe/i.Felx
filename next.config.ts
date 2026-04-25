import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

/** @type {import('next').NextConfig} */
const config: NextConfig = {
  output: "export",
  serverExternalPackages: ["typescript", "shiki"],
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

const withMDX = createMDX({
  // customise the config file path
  // configPath: "source.config.ts"
});
export default withMDX(config);
