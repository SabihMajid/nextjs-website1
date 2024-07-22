/**
  @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    // remotePatterns:[
    //   {
    //     protocol: "https",
    //     hostname: "cdn.sanity.io",
    //     port:""
    //   }
    // ]
    domains: ['cdn.sanity.io'],
  },
  // Other config options here
};

export default nextConfig;
