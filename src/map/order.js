export default {
    status: {
        10: {
            msg: "待付款",
            color: "warning"
        },
        20: {
            msg: "办理中",
            color: "primary"
        },
        30: {
            msg: "已送签",
            color: "primary"
        },
        40: {
            msg: "已签发",
            color: "success"
        },
        41: {
            msg: "已拒签",
            color: "danger"
        },
        50: {
            msg: "已登记",
            color: "success"
        },
        60: {
            msg: "已过期",
            color: "danger"
        },
        70: {
            msg: "已取消",
            color: "info"
        }
    },
    payTypes: {
        0: {
            msg: "未支付",
            color: "warning"
        },
        1: {
            msg: "微信支付",
            color: "success"
        }
    },
    renewTypes: {
        0: {
            msg: "正常订单",
            color: "success"
        },
        1: {
            msg: "续签订单",
            color: "primary"
        }
    },
    isStamp: {
        0: '否',
        1: '是'
    }
};
