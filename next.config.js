const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        url: "https://greensrobotics.co.nz",
        SITE_URL: "http://localhost:3000"
      },
      reactStrictMode: true,
      images: {
        domains: ['greensrobotics.co.nz']
      }
    }
  }
  return {
    env: {
      url: "https://greensrobotics.co.nz",
      SITE_URL: "https://grobotics.co.nz"
    },
    reactStrictMode: true,
    images: {
      domains: ['greensrobotics.co.nz']
    }
  }
}
