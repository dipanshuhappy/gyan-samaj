/** @type {import('next').NextConfig} */
import pwa from 'next-pwa';
const withPWA = pwa({
  dest: 'public',

  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});
const nextConfig = withPWA({
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  // next.js config
});

export default nextConfig;
