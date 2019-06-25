import axios from 'axios'
import { Notify } from 'vant'

// 请求前拦截
axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    Notify('请求超时!')
    return Promise.resolve(err)
  }
)

// 返回后拦截
axios.interceptors.response.use(
  data => {
    return data
  },
  err => {
    if (err.response.status === 504 || err.response.status === 404) {
      Notify('服务器被吃了⊙﹏⊙∥')
    } else if (err.response.status === 401) {
      Notify('登录信息失效⊙﹏⊙∥')
    } else if (err.response.status === 500) {
      Notify('服务器开小差了⊙﹏⊙∥')
    }
    return Promise.reject(err)
  }
)

let base = '/api'

const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'application/json',
      charset: 'utf-8'
    }
  })
}

const getRequest = url => {
  return axios({
    method: 'get',
    url: `${base}${url}`
  })
}

const multipleRequest = function (requsetArray, callback) {
  axios.all(requsetArray).then(axios.spread(callback))
}

export { getRequest, postRequest, multipleRequest }
