import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/utils/i18n.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    APPOINTMENT_API_URL: process.env.APPOINTMENT_API_URL,
    IMGBB_API_KEY: process.env.IMGBB_API_KEY
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co'
      }
    ]
  }
}

export default withNextIntl(nextConfig)
