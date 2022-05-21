module.exports = {
  entry: './src/index',
  mode: 'development',
  output: {
    filename: '[name].[chunkhash].js',
    publicPath: 'micro1/',
    clean: true,
  },
  optimization: {
    runtimeChunk: false
  }
}