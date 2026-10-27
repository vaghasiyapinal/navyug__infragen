/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['10.183.87.25', 'localhost:3000', '10.183.87.25:3000'],
  images: {
    unoptimized: true
  }
};

export default nextConfig;
