import axios from 'axios';

export function request(config) {
  const instance = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // baseURL: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',    
    timeout: 5000
  })
  // 判断请求发出来没有
  instance.interceptors.request.use(config => {
    return config
  }, err => {})
  // 响应请求到的数据并返回
  instance.interceptors.response.use(res => {
    return res.data
  }, err => { 
  })

  return instance(config)
}