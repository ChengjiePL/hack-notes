/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Add this line - replace 'repository-name' with your actual repository name
  basePath: process.env.NODE_ENV === 'production' ? '/hack-notes' : '',
  // This ensures assets use the correct path
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hack-notes/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

