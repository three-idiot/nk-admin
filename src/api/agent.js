import request from '@/utils/request'



export function getAgentList(params) {
    return request({
        url: '/agent/list',
        method: 'post',
        data: params
    })
}

export function getLowerAreas(params) {
    return request({
        url: '/area/getLowerAreas',
        method: 'get',
        params
    })
}

export function getUniqueCode(params) {
    return request({
        url: '/agent/getUniqueCode',
        method: 'get',
        params
    })
}



