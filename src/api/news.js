import request from '@/utils/request';

export function getNewsList(params) {
  return request({
    url: '/news/list',
    method: 'post',
    data: params
  });
}

export function getNewsDetail(id) {
  return request({
    url: '/news/' + id + '?t=' + new Date().getTime(),
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

export function stickNews(params) {
  return request({
      url: '/news/topNews',
      method: 'post',
      data: params
  });
}
/* 下面是广告的 */
export function getAdsList(params) {
  return request({
    url: '/adInfo/list',
    method: 'post',
    data: params
  });
}

export function getAdsDetail(id) {
  return request({
    url: '/adInfo/' + id + '?t=' + new Date().getTime(),
    method: 'get'
  });
}

export function editAds(params) {
  return request({
    url: '/adInfo/updateAdInfo',
    method: 'post',
    data: params
  });
}

export function addAds(params) {
  return request({
      url: '/adInfo/addAdInfo',
      method: 'post',
      data: params
  });
}

export function changeAdsStatus(params) {
  return request({
      url: '/adInfo/changeStatus',
      method: 'post',
      data: params
  });
}

