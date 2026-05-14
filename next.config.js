/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/video-templates", destination: "/vt", permanent: true },
      { source: "/video-templates/", destination: "/vt", permanent: true },
      /** Legacy paths from the split E–H / I–L pages; do not add `/vt` → `/vt/1` (main catalog stays on `/vt`). */
      { source: "/vt/e", destination: "/vt/1", permanent: true },
      { source: "/vt/e/", destination: "/vt/1", permanent: true },
      { source: "/vt/i", destination: "/vt/1", permanent: true },
      { source: "/vt/i/", destination: "/vt/1", permanent: true },
    ];
  },
  turbopack: {
    root: __dirname
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
