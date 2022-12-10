module.exports = {
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
}