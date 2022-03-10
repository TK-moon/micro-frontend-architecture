module.exports = {
  mode: 'development',
  devtool: 'source-map', // or inline-source-map 실 개발 시 필요한 경우 변경
  // devServer: {
  //   static: { directory: path.join(__dirname, 'dist') },
  //   port: DEV_PORT,
  // },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/i,
        use: [
          { loader: 'ts-loader' },
        ],
        exclude: /node_modules/,
      },
    ],
  },
}
