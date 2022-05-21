const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { MFLiveReloadPlugin } = require("@module-federation/fmr");
const { merge } = require('webpack-merge');
// const path = require('path');

const webpackDevConfig = require('./webpack.config.dev')
const webpackProdConfig = require('./webpack.config.prod')
const webpackLocalConfig = require('./webpack.config.local')

const getWebpackConfigByMode = (mode) => {
  switch(mode) {
    case 'development': return webpackDevConfig
    case 'production': return webpackProdConfig
    default: return webpackLocalConfig
  }
}

module.exports = (env, argv) => {
  const isServe = env.WEBPACK_SERVE
  const PRODUCTION_MODE = argv.mode // production | development | none(localhost)

  const commonConfig = {
    entry: './src/index',
    output: {
      filename: '[name].[chunkhash].js',
      publicPath: 'auto',
      clean: true,
    },
    optimization: {
      runtimeChunk: false
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/i,
          loader: 'esbuild-loader',
          options: {
            loader: 'jsx',
            target: 'es2015'
          },
          exclude: /node_modules/,
        }
      ]
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'micro1',
        library: { type: 'var', name: 'micro1' },
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App',
        },
        shared: {
          react: { singleton: true },
          'react-dom': { singleton: true },
          'react-router-dom': { singleton: true }
        },
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  }

  const webpackConfig = getWebpackConfigByMode(PRODUCTION_MODE)

  if (isServe) {
    webpackConfig.plugins.push(
      new MFLiveReloadPlugin({
        port: 3002, // the port your app runs on
        container: "micro1", // the name of your app, must be unique
        standalone: false, // false uses chrome extention
      })
    )
  }
  
  return merge(commonConfig, webpackConfig);
};
