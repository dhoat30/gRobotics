const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        url: "http://localhost/gRobotics/g-robotics-data"
      },
      reactStrictMode: true,
      images: {
        domains: ['localhost']
      }
    }
  }
  return {
    env: {
      url: "https://data.grobotics.co.nz"
    },
    reactStrictMode: true,
    images: {
      domains: ['data.grobotics.co.nz']
    }
  }
}
