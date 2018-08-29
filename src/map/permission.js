export default {
    roleStatus: {
        1: {
            msg: "正常",
            color: "success"
        },
        2: {
            msg: "冻结",
            color: "danger"
        }
    },
    permissionList: [{
        span: 2,
        spanName: '商品管理',
        name: '商品列表',
        status: false,
        id: 'goods-list',
        btns: [{
            id: 'goods-list-add',
            name: '新增商品',
            status: false,
        }, {
            id: 'goods-list-edit',
            name: '编辑',
            status: false,
        }, {
            id: 'goods-list-detail',
            name: '查看详情',
            status: false,
        }, {
            id: 'goods-list-online',
            name: '上架',
            status: false,
        }, {
            id: 'goods-list-offline',
            name: '下架',
            status: false,
        }, {
            id: 'goods-list-refundRule',
            name: '退款规则',
            status: false,
        }, {
            id: 'goods-list-search',
            name: '搜索',
            status: false,
        }]
    }, {
        spanName: '商品管理',
        name: '新增商品',
        status: false,
        id: 'goods-add',
        btns: [{
            id: 'goods-add-cancel',
            name: '取消',
            status: false,
        }, {
            id: 'goods-add-publish',
            name: '发布',
            status: false,
        }]
    }, {
        span: 2,
        spanName: '代理商管理',
        name: '代理商列表',
        status: false,
        id: 'agent-list',
        btns: [{
            id: 'agent-list-add',
            name: '新增代理商',
            status: false,
        }, {
            id: 'agent-list-edit',
            name: '编辑',
            status: false,
        }, {
            id: 'agent-list-detail',
            name: '查看代理商',
            status: false,
        }, {
            id: 'agent-list-search',
            name: '搜索',
            status: false,
        }]
    }, {
        spanName: '代理商管理',
        name: '新增代理商',
        status: false,
        id: 'agent-add',
        btns: [{
            id: 'agent-add-cancel',
            name: '取消',
            status: false,
        }, {
            id: 'agent-add-publish',
            name: '发布',
            status: false,
        }]
    }, {
        span: 3,
        spanName: '订单管理',
        name: '订单列表',
        status: false,
        id: 'travel-order-list',
        btns: [{
            id: 'travel-order-list-detail',
            name: '查看详情',
            status: false,
        }, {
            id: 'travel-order-list-refund',
            name: '退款',
            status: false,
        }, {
            id: 'travel-order-list-search',
            name: '搜索',
            status: false,
        }]
    }, {
        spanName: '订单管理',
        name: '退款订单列表',
        status: false,
        id: 'travel-order-refund-order',
        btns: [{
            id: 'travel-order-refund-order-detail',
            name: '查看详情',
            status: false,
        }, {
            id: 'travel-order-refund-order-audit',
            name: '审核',
            status: false,
        }, {
            id: 'travel-order-refund-order-search',
            name: '搜索',
            status: false,
        }]
    }, {
        spanName: '订单管理',
        name: '退款审核',
        status: false,
        id: 'travel-order-refund-check',
        btns: [{
            id: 'travel-order-refund-check-detail',
            name: '查看详情',
            status: false,
        }, {
            id: 'travel-order-refund-check-batchAudit',
            name: '批量审核',
            status: false,
        }, {
            id: 'travel-order-refund-check-sarch',
            name: '搜索',
            status: false,
        }]
    }, {
        span: 5,
        spanName: '资讯广告管理',
        name: '资讯列表',
        status: false,
        id: 'news-list',
        btns: [{
            id: 'news-list-add',
            name: '新增资讯',
            status: false,
        }, {
            id: 'news-list-detail',
            name: '查看详情',
            status: false,
        }, {
            id: 'news-list-edit',
            name: '编辑',
            status: false,
        }, {
            id: 'news-list-offline',
            name: '下架',
            status: false,
        }, {
            id: 'news-list-setTop',
            name: '置顶',
            status: false,
        }, {
            id: 'news-list-search',
            name: '搜索',
            status: false,
        }]
    },
    {
        spanName: '资讯广告管理',
        name: '新增资讯',
        status: false,
        id: 'news-add',
        btns: [{
            id: 'news-add-cancel',
            name: '取消',
            status: false,
        }, {
            id: 'news-add-publish',
            name: '发布',
            status: false,
        }]
    }, {
        spanName: '资讯广告管理',
        name: '广告列表',
        status: false,
        id: 'ads-list',
        btns: [{
            id: 'ads-list-add',
            name: '新增广告',
            status: false,
        }, {
            id: 'ads-list-detail',
            name: '查看详情',
            status: false,
        }, {
            id: 'ads-list-edit',
            name: '编辑',
            status: false,
        }, {
            id: 'ads-list-offline',
            name: '下架',
            status: false,
        }, {
            id: 'ads-list-audit',
            name: '审核',
            status: false,
        }, {
            id: 'ads-list-search',
            name: '搜索',
            status: false,
        }]
    },
    {
        spanName: '资讯广告管理',
        name: '新增广告',
        status: false,
        id: 'ads-add',
        btns: [{
            id: 'ads-add-cancel',
            name: '取消',
            status: false,
        }, {
            id: 'ads-add-publish',
            name: '发布',
            status: false,
        }]
    },
    {
        spanName: '资讯广告管理',
        name: '广告审核',
        status: false,
        id: 'audit-ads',
        btns: [{
            id: 'audit-ads-detail',
            name: '查看详情',
            status: false,
        }, {
            id: 'audit-ads-batchAudit',
            name: '批量审核',
            status: false,
        }, {
            id: 'audit-ads-audit',
            name: '审核',
            status: false,
        }, {
            id: 'audit-ads-search',
            name: '搜索',
            status: false,
        }]
    },
    {
        span: 2,
        spanName: '账号管理',
        name: '账号列表',
        status: false,
        id: 'account-list',
        btns: [{
            id: 'account-list-add',
            name: '新增账号',
            status: false,
        }, {
            id: 'account-list-edit',
            name: '编辑',
            status: false,
        }, {
            id: 'account-list-detail',
            name: '查看详情',
            status: false,
        }, {
            id: 'account-list-online',
            name: '解冻',
            status: false,
        }, {
            id: 'account-list-offline',
            name: '冻结',
            status: false,
        }, {
            id: 'account-list-search',
            name: '搜索',
            status: false,
        }]
    },
    {
        spanName: '账号管理',
        name: '新增账号',
        status: false,
        id: 'account-add',
        btns: [{
            id: 'account-add-cancel',
            name: '取消',
            status: false,
        }, {
            id: 'account-add-publish',
            name: '保存',
            status: false,
        }]
    },
    {
        span: 2,
        spanName: '角色管理',
        name: '角色列表',
        status: false,
        id: 'permission-list',
        btns: [{
            id: 'permission-list-add',
            name: '新增角色',
            status: false,
        }, {
            id: 'permission-list-edit',
            name: '编辑',
            status: false,
        }, {
            id: 'permission-list-online',
            name: '解冻',
            status: false,
        }, {
            id: 'permission-list-offline',
            name: '冻结',
            status: false,
        }, {
            id: 'permission-list-search',
            name: '搜索',
            status: false,
        }]
    },
    {
        spanName: '角色管理',
        name: '新增角色',
        status: false,
        id: 'permission-add',
        btns: [{
            id: 'permission-add-cancel',
            name: '取消',
            status: false,
        }, {
            id: 'permission-add-publish',
            name: '保存',
            status: false,
        }]
    }, {
        span: 1,
        spanName: '用户管理',
        name: '用户列表',
        status: false,
        id: 'user-list',
        btns: [{
            id: 'user-list-search',
            name: '查询',
            status: false,
        }, {
            id: 'user-list-detail',
            name: '查看',
            status: false,
        }, {
            id: 'user-list-edit',
            name: '编辑',
            status: false,
        }]
    }, {
        span: 2,
        spanName: '签证管理',
        name: '签证列表',
        status: false,
        id: 'visa-list',
        btns: [{
            id: 'visa-list-search',
            name: '查询',
            status: false,
        }, {
            id: 'visa-list-detail',
            name: '查看详情',
            status: false,
        }, {
            id: 'visa-list-editDivide',
            name: '修改分成',
            status: false,
        }, {
            id: 'visa-list-offline',
            name: '违规下架',
            status: false,
        }]
    }, {
        spanName: '签证管理',
        name: '新建签证',
        status: false,
        id: 'visa-add',
        btns: [{
            id: 'visa-add-publish',
            name: '提交',
            status: false,
        }, {
            id: 'visa-add-cancel',
            name: '重置',
            status: false,
        }]
    }
    ],
    type: {
        1: {
            msg: "旅游商品",
            color: "primary"
        },
        2: {
            msg: "商务商品",
            color: "success"
        }
    },
    reFundDtatus: {
        1: {
            msg: "申请中",
            color: "warning"
        },
        2: {
            msg: "退款中",
            color: "primary"
        },
        3: {
            msg: "拒绝",
            color: "danger"
        },
        4: {
            msg: "退款成功",
            color: "success"
        }
    }
};
