import request from '@/utils/request'

export function getUserList(nickName = '', status = 0, page = 1, size = 10000) {
  return request({
    url: '/getuserlist',
    method: 'get',
    params: { nickName, status, page, size }
  })
}

