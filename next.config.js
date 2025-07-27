/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  distDir: 'dist',
  env: {
    COSMOS_ENDPOINT: process.env.COSMOS_ENDPOINT,
    COSMOS_KEY: process.env.COSMOS_KEY,
    COSMOS_DATABASE: process.env.COSMOS_DATABASE,
    COSMOS_CONTAINER: process.env.COSMOS_CONTAINER,
  },
}
   
module.exports = nextConfig