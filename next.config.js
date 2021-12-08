const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        url: "https://greensrobotics.co.nz"
      },
      reactStrictMode: true,
      images: {
        domains: ['greensrobotics.co.nz']
      }
    }
  }
  return {
    env: {
      url: "https://greensrobotics.co.nz"
    },
    reactStrictMode: true,
    images: {
      domains: ['greensrobotics.co.nz']
    }
  }
}
