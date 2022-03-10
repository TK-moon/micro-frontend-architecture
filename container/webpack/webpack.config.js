const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { merge } = require('webpack-merge');
const path = require('path');
const dotenv = require('dotenv')

const webpackDevConfig = require('./webpack.config.dev')
const webpackProdConfig = require('./webpack.config.prod')
const webpackLocalConfig = require('./webpack.config.local')

function getRemoteEntryUrl(appName) {
  switch (appName) {
    case "micro1": return `${process.env.MFE_SERVICE_1_URL}/remoteEntry.js`
    case "micro2": return `${process.env.MFE_SERVICE_2_URL}/remoteEntry.js`
  }
}

const getDotEnvPath = (mode) => {
  switch(mode) {
    case 'development': return './env/.env.development'
    case 'production': return './env/.env.production'
    default: return './env/.env.localhost'
  }
}

const getWebpackConfigByMode = (mode) => {
  switch(mode) {
    case 'development': return webpackDevConfig
    case 'production': return webpackProdConfig
    default: return webpackLocalConfig
  }
}


module.exports = (env, argv) => {
  const PRODUCTION_MODE = argv.mode // production | development | none(localhost)
  const ENV_PATH = getDotEnvPath(PRODUCTION_MODE)

  dotenv.config({ path: ENV_PATH })

  const commonConfig = {
    entry: './src/index.ts',
    target: 'web',
    output: {
      filename: '[name].[chunkhash].js',
      publicPath: 'auto',
      clean: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'container',
        remotes: {
          micro1: `micro1@${getRemoteEntryUrl('micro1')}`,
          micro2: `micro2@${getRemoteEntryUrl('micro2')}`
        },
        shared: {
          react: { singleton: true },
          'react-dom': { singleton: true },
          'react-router-dom': { singleton: true },
          'react-router-dom': { singleton: true }
        },
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  }

  const webpackConfig = getWebpackConfigByMode(PRODUCTION_MODE)

  return merge(commonConfig, webpackConfig);
};