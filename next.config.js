/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://37.230.195.26:3000/api/:path*',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
