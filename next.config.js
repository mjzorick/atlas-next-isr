const { withAtlasConfig } = require("@wpengine/atlas-next")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["atlasnextisr.wpenginepowered.com"],
  },
};

module.exports = withAtlasConfig(nextConfig, { remoteCacheHandler: false })
