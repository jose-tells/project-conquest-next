// const WithBundlerAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === true,
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "images.pexels.com"],
  },
};

module.exports = nextConfig;

// module.exports = WithBundlerAnalyzer({
//   ...nextConfig,
// });
