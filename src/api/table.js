import request from '@/utils/request'

export function getOrderList(params) {
  return request({
    url: '/table/order/list',
    method: 'get',
    params
  })
}

export function getVisaList(params) {
  return request({
    url: '/table/visa/list',
    method: 'get',
    params
  })
}
