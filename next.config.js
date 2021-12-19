const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
/** @type {import('next').NextConfig} */

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: false,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
  },
});
