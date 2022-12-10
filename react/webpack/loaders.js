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

module.exports = {
  CSS_LOADER,
  JS_LOADER,
  SVEG_LOADER,
  FILE_LOADER
}