export default {
    status: {
        0: {
            msg: "正常",
            color: "success"
        },
        1: {
            msg: "失效",
            color: "gray"
        },
        2: {
            msg: "待审核",
            color: "warning"
        },
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
}
