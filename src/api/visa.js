import request from '@/utils/request'

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

export function goodsratio(params) {
  return request({
    url: '/goodsratio',
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    data: params
  })
}

export function goodsfoul(params) {
  return request({
    url: '/goodsfoul',
    method: 'post',
    params
  })
}
