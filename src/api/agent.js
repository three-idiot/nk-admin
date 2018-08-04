import request from '@/utils/request'



export function getAgentList(params) {
    return request({
        url: '/agent/list',
        method: 'post',
        data: params
    })
}
