/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')(
  // Bu satır next-intl yapılandırma dosyasını belirtir
  './i18n.ts'
);

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/photo-*',
      }
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  sassOptions: {
    includePaths: ['./app'],
  },
  experimental: {
    metadataBase: 'https://yourdomain.com', // Replace with your actual domain
  },
};

module.exports = withNextIntl(nextConfig);