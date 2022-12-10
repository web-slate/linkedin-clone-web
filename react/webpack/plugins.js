const webpack = require('webpack')
const path = require('path')

// WebPack Plugins.
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const PACKAGE = require('../package.json')

const HOT_MODULE_PLUGIN = new webpack.HotModuleReplacementPlugin()

const ENVIRONMENT_PLUGIN = new webpack.EnvironmentPlugin({
  VERSION: PACKAGE.version,
})

const HTML_PLUGIN = new HtmlWebpackPlugin({
  inject: true,
  favicon: './src/static/favicon.svg',
  template: path.resolve(__dirname, 'src/static/index.html'),
  APP_ROOT_ID: 'linkedin-clone-web',
  DEFAULT_TITLE: 'Feed | LinkedIn',
  APP_VERSION: PACKAGE.version,
})

const COPY_PLUGIN = new CopyPlugin({
  patterns: [{ from: './src/static/images', to: 'images' }],
})

module.exports = {
  HOT_MODULE_PLUGIN,
  ENVIRONMENT_PLUGIN,
  HTML_PLUGIN,
  COPY_PLUGIN
}