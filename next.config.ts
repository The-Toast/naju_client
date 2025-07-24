import type { NextConfig } from 'next'

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

export default nextConfig;
