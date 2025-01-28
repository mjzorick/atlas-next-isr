const { withAtlasConfig } = require("@wpengine/atlas-next")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ["atlasnextisr.wpenginepowered.com"],
  },
};

module.exports = withAtlasConfig(nextConfig);

