import request from '@/utils/request';

export function login(username, password) {
    return request({
        url: '/login',
        method: 'post',
        data: {
            username,
            pwd: password
        }
    });
}

export function getInfo() {
    return request({
        url: '/adminUser/permits',
        method: 'get'
    });
    // return new Promise((resolve, reject) => {
    //     resolve({
    //         code: 200,
    //         message: 'ok',
    //         data: {
    //             name: 'Fe-test-name',
    //             avatar: 'http://images2.fanpop.com/image/photos/9400000/avatar-avatar-2009-film-9474591-1280-960.jpg',
    //             roles: ['admin']
    //         }
    //     });
    // });
    // return request({
    //     url: '/user/info',
    //     method: 'get',
    //     params: { token }
    // })
}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'post'
    });
}
