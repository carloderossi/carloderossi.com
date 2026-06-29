/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // When on custom domain, no basePath needed.
  // When on github.io subdirectory, we need /carloderossi.com
  basePath: isCustomDomain ? '' : (isProd ? '/carloderossi.com' : ''),
  assetPrefix: isCustomDomain ? '' : (isProd ? '/carloderossi.com' : ''),
}

export default nextConfig
