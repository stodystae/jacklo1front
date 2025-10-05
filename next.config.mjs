/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // lejon build edhe me eslint warnings
  },
  experimental: { appDir: true },
  // shto config të tjera këtu nëse nevojitet
}

export default nextConfig
