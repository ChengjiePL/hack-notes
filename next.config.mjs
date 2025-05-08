/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Use the correct repository name for your GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/hack-notes' : '',
  // This ensures assets use the correct path
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hack-notes/' : '',
  images: {
    unoptimized: true,
  },
  // GitHub Pages works better without trailing slashes
  trailingSlash: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
