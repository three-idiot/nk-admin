import request from '@/utils/request';

export function getOrderList(params) {
    return request({
        url: '/travelOrder/list',
        method: 'post',
        data: params
    });
}

export function getGroupOrderDetail(id) {
    return request({
        url: `/travelOrder/groupOrderDetail`,
        method: 'post',
        data: {
            groupOrderId: id
        }
    });
}

export function getTravelOrderDetail(id) {
    return request({
        url: `/travelOrder/travelOrderDetail`,
        method: 'post',
        data: {
            orderId: id
        }
    });
}

export function getRefundOrderList(params) {
    return request({
        url: `/travelOrder/refundOrderList`,
        method: 'post',
        data: params
    });
}
