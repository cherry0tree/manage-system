module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}

//对devserver属性进行配置 监听访问路径与返回数据
module.exports = {
  devServer: {
    before: require('./src/mock/index.js')
  }
}