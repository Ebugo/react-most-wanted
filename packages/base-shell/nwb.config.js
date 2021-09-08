const path = require('path')

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false,
  },
  webpack: {
    extra: {
      devtool: 'inline-source-map',
    },
    aliases: {
      'base-shell/lib': path.resolve('src'),
    },
  },
}
