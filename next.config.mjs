/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '192.168.113.145',
          port: '5000',
          pathname: '/static/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  