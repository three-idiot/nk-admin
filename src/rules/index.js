export function checkNum (rule, value, callback) {
    if ( !/^[0-9]*$/.test(value) ) {
        return callback(new Error('必须是数字'));
    } else {
        callback();
    }
}

export function checkUsername (rule, value, callback) {
    if ( !/^[a-zA-Z].{5,7}$/.test(value) ) {
        return callback(new Error('用户名必须是6-8位且第1位为字母开头'));
    } else {
        callback();
    }
}




