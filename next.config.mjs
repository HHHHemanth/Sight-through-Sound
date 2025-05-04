/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'https://flat-islands-yell.loca.lt', // ← replace with your actual localtunnel URL
          pathname: '/static/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  