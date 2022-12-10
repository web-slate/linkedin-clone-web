const path = require('path')

const isProduction = process.argv[process.argv.indexOf('--mode') + 1] === 'production'

module.exports = {
  path: path.resolve(__dirname, '../public'),
  publicPath: !isProduction ? '/' : '',
  filename: 'linkedin-clone.js',
  chunkFilename: '[name].js',
}