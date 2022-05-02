const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        url: "https://data.grobotics.co.nz",
        SITE_URL: "http://localhost:3000"
      },
      reactStrictMode: true,
      images: {
        domains: ['data.grobotics.co.nz']
      }
    }
  }
  return {
    env: {
      url: "https://data.grobotics.co.nz",
      SITE_URL: "https://grobotics.co.nz"
    },
    reactStrictMode: true,
    images: {
      domains: ['data.grobotics.co.nz']
    }
  }
}
