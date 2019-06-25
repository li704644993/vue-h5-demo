module.exports = {
  // 配置反向代理
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.coffeecola.cn:8010/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // 隐藏source map
  productionSourceMap: false
}
