import request from '@/utils/request'

export function getOrderList(params) {
  return request({
    url: '/orderlist',
    method: 'get',
    params
  })
}

export function getOrderDetail(id) {
  return request({
    url: `/orderdetail/${id}`,
    method: 'get'
  })
}
