const path = require('path')

const {
  HOT_MODULE_PLUGIN,
  ENVIRONMENT_PLUGIN,
  HTML_PLUGIN,
  COPY_PLUGIN,
} = require('./plugins')
const isProduction = process.argv[process.argv.indexOf('--mode') + 1] === 'production'

const CSS_LOADER = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
}

const JS_LOADER = {
  test: /.(js)$/,
  exclude: [/node_modules/],
  use: ['babel-loader'],
}

const SVEG_LOADER = {
  test: /.svg$/,
  use: ['@svgr/webpack', 'file-loader'],
}

const FILE_LOADER = {
  test: /.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: 'file-loader',
    },
  ],
}

const IMAGE_ALIAS = {
  '@/images': path.resolve(__dirname, 'src', 'static', 'images'),
}

const COMPONENT_ALIAS = {
  '@/components': path.resolve(__dirname, 'src', 'components'),
}

const UTIL_ALIAS = {
  '@/utils': path.resolve(__dirname, 'src', 'utils'),
}

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
