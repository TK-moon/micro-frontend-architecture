module.exports = {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].js',
    publicPath: 'container/',
    clean: true,
  },
}