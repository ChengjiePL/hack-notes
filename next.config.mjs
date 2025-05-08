/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for GitHub Pages
  output: "export",

  // Set the base path for GitHub Pages
  basePath: "/hack-notes",
  assetPrefix: "/hack-notes",

  // Configure image optimization
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },

  // Disable unnecessary features for static sites
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Optimize bundle size
  swcMinify: true,

  // Add webpack optimization
  webpack: (config) => {
    // This helps reduce bundle size
    config.optimization.minimize = true;
    return config;
  },
};

export default nextConfig;
