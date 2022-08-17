/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cdn0.iconfinder.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
    ]
  }
}

module.exports = nextConfig
