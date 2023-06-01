/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.cozey.ca',
        port: '',
        pathname: '/_next/image**',
      },
    ],
  },
};

module.exports = nextConfig;
