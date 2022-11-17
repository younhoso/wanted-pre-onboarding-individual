const BASE_URL = process.env.BASE_URL;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/users/signup',
        destination: `${BASE_URL}/users/signup`
      },
      {
        source: '/login',
        destination: `${BASE_URL}/login`
      },
      {
        source: '/accounts',
        destination: `${BASE_URL}/accounts`
      },
      {
        source: '/users',
        destination: `${BASE_URL}/users`
      },
      {
        source: '/userSetting',
        destination: `${BASE_URL}/userSetting`
      },
    ]
  }
};

module.exports = nextConfig;
