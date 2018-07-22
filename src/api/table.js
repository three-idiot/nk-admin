import request from '@/utils/request'

export function getOrderList(params) {
  return request({
    url: '/table/order/list',
    method: 'get',
    params
  })
}
