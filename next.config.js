/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  distDir: 'dist',
  output: 'standalone',
  //TODO: remove this when not needed
  // This is used to ensure that the output directory is correctly traced
  // for serverless deployments, especially when using Docker.
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
  env: {
    COSMOS_ENDPOINT: process.env.COSMOS_ENDPOINT,
    COSMOS_KEY: process.env.COSMOS_KEY,
    COSMOS_DATABASE: process.env.COSMOS_DATABASE,
    COSMOS_CONTAINER: process.env.COSMOS_CONTAINER,
  },
}
   
module.exports = nextConfig