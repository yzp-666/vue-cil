//打包运行 npm run build
module.exports = {
  //配置路径
  publicPath: process.env.NODE_ENV === 'production'
      ? './'
      : '/',
  //配置跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://web.juhe.cn:8080', //目标主机
        ws: true,
        changeOrigin: true,  //  虚拟主机站点
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },
  //配置限制内联文件大小
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 1024000 }))
  }

}
