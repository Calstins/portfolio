/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.postimg.cc'], // Add all domains you want to allow
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
