import request from '@/utils/request'

export function uploadFile(params) {
  return request({
    url: '/image/uploadfile',
    method: 'post',
    params
  })
}
