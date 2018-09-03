import request from '@/utils/request';

export function getAccountList(params) {
    return request({
        url: '/adminUser/list',
        method: 'post',
        data: params
    });
}

export function addAccount(params) {
    return request({
        url: `/adminUser/add`,
        method: 'post',
        data: params
    });
}

export function updateAccount(params) {
    return request({
        url: `/adminUser/update`,
        method: 'post',
        data: params
    });
}

export function freeze(params) {
    return request({
        url: '/adminUser/opt',
        method: 'get',
        params
    });
}

export function accountRoleList(params) {
    return request({
        url: '/role/accountRoleList',
        method: 'get'
    });
}
