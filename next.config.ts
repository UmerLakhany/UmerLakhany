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
  // Old routes from the previous version of the site.
  async redirects() {
    return [
      { source: "/services", destination: "/about", permanent: true },
      { source: "/services/:slug", destination: "/about", permanent: true },
      { source: "/journey", destination: "/experience", permanent: true },
    ];
  },
};

export default nextConfig;
