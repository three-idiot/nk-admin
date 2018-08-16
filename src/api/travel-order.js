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

export function getTravelOrderDetail(orderId) {
    return request({
        url: `/travelOrder/travelOrderDetail`,
        method: 'get',
        params: {
            orderId
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

export function getRefundOrderDetail(refundOrderId) {
    return request({
        url: `/travelOrder/refundOrderDetail`,
        method: 'get',
        params: {
            refundOrderId
        }
    });
}

export function forceSuccess(groupOrderId) {
    return request({
        url: `/travelOrder/modifyGroupOrder`,
        method: 'get',
        params: { groupOrderId, status: 5 }
    });
}
