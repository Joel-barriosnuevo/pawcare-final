/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/pawcare' : '',
  images: {
    unoptimized: true, // Necesario para export estático
  },
  reactStrictMode: true,
  trailingSlash: true,
}

export default nextConfig;