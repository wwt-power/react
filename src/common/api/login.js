import request from '../http/request.js'

// 登录
export function requestlogin(data) {
  return request({
    url: '/login',
    method: 'post',
	data: data
  })
}

// get方法
// export function requestlogin(query) {
//   return request({
//     url: '/login',
//     method: 'get',
//     params: query
//   })
// }