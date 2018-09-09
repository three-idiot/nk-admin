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

export function validateUsername (rule, value, callback) {
    if (!value) {
        callback(new Error('请输入账号'));
    } else if (!(/^[A-Za-z\u4e00-\u9fa5]{3,15}$/.test(value))) {
        callback(new Error('用户名为 3 到 15 个字符组成，包括汉字，大小写字母（不区分大小写）'));
    } else {
        callback();
    }
}

export function checkPassword (rule, value, callback) {
    if ( !/^.{8}$/.test(value) ) {
        return callback(new Error('密码最小长度为 8 个字符'));
    } else {
        callback();
    }
}




