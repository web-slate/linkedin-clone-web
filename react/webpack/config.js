const path = require('path')

const {
  HOT_MODULE_PLUGIN,
  ENVIRONMENT_PLUGIN,
  HTML_PLUGIN,
  COPY_PLUGIN,
} = require('./plugins')

const {
  IMAGE_ALIAS,
  COMPONENT_ALIAS,
  UTIL_ALIAS
} = require('./alias')

const {
  CSS_LOADER,
  JS_LOADER,
  SVEG_LOADER,
  FILE_LOADER
} = require('./loaders')

const isProduction = process.argv[process.argv.indexOf('--mode') + 1] === 'production'

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      CSS_LOADER,
      JS_LOADER,
      SVEG_LOADER,
      FILE_LOADER,
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
    alias: {
      ...IMAGE_ALIAS,
      ...COMPONENT_ALIAS,
      ...UTIL_ALIAS,
    },
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: !isProduction ? '/' : '',
    filename: 'linkedin-clone.js',
    chunkFilename: '[name].js',
  },
  plugins: [
    HOT_MODULE_PLUGIN,
    ENVIRONMENT_PLUGIN,
    HTML_PLUGIN,
    COPY_PLUGIN,
  ],
  devServer: {
    open: ['/linkedin-clone-web/react'],
    historyApiFallback: true,
    static: {
      directory: './src/static',
    },
    hot: true,
    port: 3000,
    proxy: {
      '/api': 'http://YOUR_API_URL:9000',
    },
  },
}
