import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Improves tree-shaking for barrel-style imports (e.g. `import { X } from
  // "lucide-react"`) so only the icons actually used end up in the bundle.
  experimental: {
    optimizePackageImports: ["lucide-react", "react-toastify"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
};

export default nextConfig;
