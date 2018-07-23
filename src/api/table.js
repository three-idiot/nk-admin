import request from '@/utils/request'

export function getOrderList(params) {
  return request({
    url: '/getuserlist',
    method: 'get',
    params
  })
}
