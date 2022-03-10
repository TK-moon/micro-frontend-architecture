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
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  }
}