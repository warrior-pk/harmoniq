/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lovely-flamingo-139.convex.cloud'
      },
      {
        protocol: 'https',
        hostname: 'sleek-capybara-771.convex.cloud'
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com'
      },
      {
        protocol: "https",
        hostname: "posh-husky-514.convex.cloud"
      }
    ]
  },
  typescript:{
    ignoreBuildErrors: true
  }
};

export default nextConfig;
