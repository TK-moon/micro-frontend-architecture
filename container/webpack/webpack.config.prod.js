module.exports = {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].js',
    publicPath: 'container/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  { modules: false, useBuiltIns: 'usage', corejs: 3 },
                ],
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
}