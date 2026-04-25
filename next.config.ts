import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [new URL("https://www.gbmo.go.kr/**")],
  },
};

export default nextConfig;
