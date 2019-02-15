// vue.config.js


const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'
module.exports = {
  devServer: {
    port: 8888     // 端口

  },
  lintOnSave: false,   // 取消 eslint 验证

  // baseUrl: BASE_URL,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
  outputDir: 'aab',
  assetsDir: '',
  indexPath: 'index.html',

}