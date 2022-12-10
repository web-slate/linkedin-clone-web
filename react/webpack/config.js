// Helpers.
const { HOT_MODULE_PLUGIN, ENVIRONMENT_PLUGIN, HTML_PLUGIN, COPY_PLUGIN } = require('./plugins')
const { IMAGE_ALIAS, COMPONENT_ALIAS, UTIL_ALIAS } = require('./alias')
const { CSS_LOADER, JS_LOADER, SVEG_LOADER, FILE_LOADER } = require('./loaders')

const output = require('./output')
const devServer = require('./devServer')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [ CSS_LOADER, JS_LOADER, SVEG_LOADER, FILE_LOADER ],
  },
  resolve: {
    extensions: ['*', '.js'],
    alias: {
      ...IMAGE_ALIAS,
      ...COMPONENT_ALIAS,
      ...HOOKS_ALIAS,
      ...UTIL_ALIAS,
    },
  },
  output,
  plugins: [ HOT_MODULE_PLUGIN, ENVIRONMENT_PLUGIN, HTML_PLUGIN, COPY_PLUGIN ],
  devServer,
}
