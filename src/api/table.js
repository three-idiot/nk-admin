import request from '@/utils/request'

export function getOrderList(params) {
  return request({
    url: '/getuserlist',
    method: 'get',
    params
  })
}

export function getVisaList(params) {
  return request({
    url: '/goodslist',
    method: 'get',
    params
  })
}

export function getVisaDetail(url) {
  return request({
    url: url,
    method: 'get'
  })
}
