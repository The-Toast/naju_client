import type { NextConfig } from 'next'

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // 개발 중에는 꺼두기
})


const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push({
        '@prisma/client': '@prisma/client',
        '.prisma/client': '.prisma/client'
      })
    }
    return config
  },
  reactStrictMode: false,
};

export default withPWA(nextConfig);
