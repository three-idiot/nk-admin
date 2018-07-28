import request from '@/utils/request'

export function getOrderList(params) {
    return request({
        url: '/orderlist',
        method: 'get',
        params
    })
}

export function getOrderDetail(id) {
    return request({
        url: `/orderdetail/${id}`,
        method: 'get'
    })
}

export function updateOrder(params) {
    return request({
        url: `/orderdetailupdte`,
        method: 'post',
        params
    })
}

