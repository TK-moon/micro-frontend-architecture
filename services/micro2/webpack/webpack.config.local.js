const { MFLiveReloadPlugin } = require("@module-federation/fmr");

const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3003,
  },
  output: {
    filename: '[name].[chunkhash].js',
    publicPath: 'auto',
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
  },
  plugins: [],
}
