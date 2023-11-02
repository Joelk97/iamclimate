/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["it", "en"],
    defaultLocale: "it",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

module.exports = nextConfig;
