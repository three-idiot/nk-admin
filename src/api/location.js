import request from '@/utils/request';

export function getLocation(id=0) {
    return request({
        url: '/area/getLowerAreas',
        method: 'get',
        params: {
            id
        }
    });
}
