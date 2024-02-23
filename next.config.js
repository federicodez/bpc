/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bpc-pics.s3.amazonaws.com/BPC+Color+logo+-+transparent.png",
        port: "",
        pathname: "/",
      },
    ],
  },
};

module.exports = nextConfig;
