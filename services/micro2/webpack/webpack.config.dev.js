module.exports = {
  entry: './src/index',
  mode: 'development',
  output: {
    filename: '[name].[chunkhash].js',
    publicPath: 'micro2/',
    clean: true,
  },
  optimization: {
    runtimeChunk: false
  },
}