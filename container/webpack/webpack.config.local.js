const path = require('path')

const DEV_PORT = 3001

module.exports = {
  mode: 'development',
  devtool: 'source-map', // or inline-source-map 실 개발 시 필요한 경우 변경
  devServer: {
    static: { directory: path.join(__dirname, 'dist') },
    port: DEV_PORT,
    historyApiFallback: true,
  },
}
