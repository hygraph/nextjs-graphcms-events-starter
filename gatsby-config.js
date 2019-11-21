let userConfig = {}

userConfig = require('./__now_gatsby_config_user.js')

module.exports = {
  ...userConfig,
  plugins: [
    ...(userConfig.plugins || []),
    'gatsby-plugin-now'
  ]
}