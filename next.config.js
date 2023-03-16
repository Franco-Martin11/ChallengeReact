/** @type {import('next').NextConfig} */

module.exports = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          { key: "Content-Type", value: "application/json; charset=utf-8" },
        ],
      },
    ];
  },
};
