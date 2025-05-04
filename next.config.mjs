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
      domains: ['stsbackend-1.onrender.com'], // Add this line
    },
  };
  
  export default nextConfig;
  