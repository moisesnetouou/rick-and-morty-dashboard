/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },
};

module.exports = nextConfig;
