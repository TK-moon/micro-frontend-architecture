const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3002,
  },
  output: {
    filename: '[name].[chunkhash].js',
    publicPath: 'auto',
    clean: true,
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [],
}
