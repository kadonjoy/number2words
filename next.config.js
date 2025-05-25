/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment the following line if you want to deploy to GitHub Pages
  // basePath: '/your-repo-name',
}

module.exports = nextConfig