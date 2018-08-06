import request from '@/utils/request';

export function getOrderList(params) {
    return request({
        url: '/travelOrder/list',
        method: 'post',
        data: params
    });
}

export function getOrderDetail(id) {
    return request({
        url: `/orderdetail/${id}`,
        method: 'get'
    });
}

export function updateOrder(params) {
    return request({
        url: `/orderdetailupdte`,
        method: 'post',
        data: params
    });
}

