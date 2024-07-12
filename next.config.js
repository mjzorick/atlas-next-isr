const { withAtlasConfig } = require("@wpengine/atlas-next")

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    incrementalCacheHandlerPath: require.resolve('./.atlas/atlas-cache-handler.js'),
    isrMemoryCacheSize: 0,
  },
  reactStrictMode: true,
  images: {
    domains: ["atlasnextisr.wpenginepowered.com"],
  },
};

module.exports = withAtlasConfig(nextConfig)
