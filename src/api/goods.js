import request from '@/utils/request';


export function getGoodsList(params) {
    return request({
        url: '/travelGoods/list',
        method: 'post',
        data: params
    });
}
