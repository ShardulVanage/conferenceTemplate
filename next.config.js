/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ['images.unsplash.com','assets.aceternity.com','images.pexels.com'],
  },
};

module.exports = nextConfig;