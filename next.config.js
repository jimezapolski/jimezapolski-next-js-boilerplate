/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify:false,
  reactStrictMode: true,
  images: {
    domains: ['static.tvmaze.com'],
  },
}

module.exports = nextConfig
