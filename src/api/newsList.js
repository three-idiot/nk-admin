import request from '@/utils/request'

export function getNewsList(reqObj) {
  return request({
    url: '/news/list',
    method: 'post',
    params: reqObj
  })
}

