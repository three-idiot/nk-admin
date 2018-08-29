import request from '@/utils/request';

export function getList(params) {
    return request({
        url: '/role/list',
        method: 'post',
        data: params
    });
}
export function addRole(params) {
    return request({
        url: '/role/add',
        method: 'post',
        data: params
    });
}

export function updateRole(params) {
    return request({
        url: '/role/update',
        method: 'post',
        data: params
    });
}

export function freeze(params) {
    return request({
        url: '/role/opt',
        method: 'get',
        params
    });
}

export function detial(params) {
    return request({
        url: '/role/id',
        method: 'get',
        params
    });
}
