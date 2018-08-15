import request from '@/utils/request'



export function getGoodsList(params) {
    return request({
        url: '/travelGoods/list',
        method: 'post',
        data: params
    })
}

export function addTravelGoods(params) {
    return request({
        url: '/travelGoods/addTravelGoods',
        method: 'post',
        data: params
    })
}

export function changeStatus(params) {
    return request({
        url: '/travelGoods/changeStatus',
        method: 'get',
        params
    })
}
export function travelGoods(params) {
    return request({
        url: '/travelGoods/' + params.id,
        method: 'get',
    })
}
