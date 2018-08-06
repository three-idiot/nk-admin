import request from '@/utils/request';

export function getNewsList(params) {
  return request({
    url: '/news/list',
    method: 'get',
    params
  });
}

export function getNewsDetail(id) {
  return request({
    url: '/news/' + id,
    method: 'get'
  });
}

export function editNews(params) {
  return request({
    url: '/news/updateNews',
    method: 'post',
    data: params
  });
}

export function addNews(params) {
  return request({
      url: '/news/addNews',
      method: 'post',
      data: params
  });
}

export function changeNewsStatus(params) {
  return request({
      url: '/news/changeStatus',
      method: 'post',
      data: params
  });
}


