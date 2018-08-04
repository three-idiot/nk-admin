import request from '@/utils/request'



export function agentList(params) {
    return request({
        url: '/agent/list',
        method: 'post',
        data: params
    })
}
