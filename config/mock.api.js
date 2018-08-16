module.exports = {
    //模拟接口调用
    before(app) {
        app.get('/api/user/info', function (req, res) {
            res.json({
                code: 200,
                message: 'ok',
                data: {
                    name: 'three-idiots',
                    avatar: 'http://images2.fanpop.com/image/photos/9400000/avatar-avatar-2009-film-9474591-1280-960.jpg',
                    roles: [1, 2, 3]
                }
            });
        });

        app.post('/api/travelOrder/list', function (req, res) {
            res.json({
                code: 200,
                message: 'ok',
                data: [{
                    goodsNo: '1',
                    goodsName: 'name',
                    goodsType: 'type',
                    goodsUpDate: Date.now().toString(),
                    goodsCloseDate: Date.now().toString(),
                    peopleMinNum: 1,
                    peopleMaxNum: 10,
                    buyNum: 3,
                    status: 10
                }]
            });
        });
        app.post('/api/travelOrder/groupOrderDetail', function (req, res) {
            res.json({
                code: 200,
                message: 'ok',
                data: {
                    travelGoods: {
                        goodsNo: '1',
                        name: 'name',
                        status: 10,
                    },
                    travelOrders: [
                        {
                            orderNo: 'orderNo',
                            userId: 1,
                            createTime: 1,
                            payId: 1,
                            payTime: 1,
                            salePrice: 1,
                            buyNum :1,
                            orderPrice: 1,
                            status: 10
                        }
                    ]
                }
            });
        });
        app.post('/api/travelOrder/travelOrderDetail', function (req, res) {
            res.json({
                code: 200,
                message: 'ok',
                data: {
                    travelGoods: {
                        goodsNo: '1',
                        name:'name',
                        realPrice: 1,
                        leaveTime: 1
                    },
                    travelOrder: {
                        goodsNo: '1',
                        name:'name',
                        orderNo: 'orderNo',
                        userId: 1,
                        createTime: 1,
                        payId: 1,
                        payTime: 1,
                        buyNum: 1,
                        orderPrice: 1,
                        status : 10,
                        realPrice: 1,
                        leaveTime: 1
                    },
                    travelChildOrders: [
                        {
                            status: 10,
                            userType: 1,
                            unitPrice: 1,
                            travelUserInfo: {
                                name: 'name',
                                cardType: 1,
                                cardId: 'cardId',
                                phone: 'phone'
                            }
                        }
                    ],
                    invoice: {
                        title: 1,
                        taxNo: 'taxNo',
                        phone: 'phone',
                        address: 'address',
                        content: 'content'
                    },
                    user: {
                        nickName: 'nickName',
                        proId: 'proId',
                        cityId: 'cityId'
                    }
                }
            });
        });
        app.post('/api/travelOrder/refundOrderList', function (req, res) {
            res.json({
                code: 200,
                message: 'ok',
                data: [
                    {
                        refundNo: 1,
                        userName: 'userName',
                        goodsNo: 1,
                        provinceId: 1,
                        cityId: 1,
                        createTime: 1,
                        orderFee: 1,
                        refundReason: '',
                        status: 10,
                        refundId: 1,
                    }
                ]
            });
        });
        app.get('/api/role/list', function (req, res) {
            res.json({
                code: 200,
                message: 'ok',
                data: {
                    data:[{
                        id: 1,
                        name: 'name',
                        remark: 'remark',
                        level: 1,
                        status: 1,
                        createTime: 1,
                        createUser: 1,
                        updateTime: 11,
                        updateUser: 1,
                    }]
                }
            });
        });

        app.post('/api/agent/list' ,function(req, res){
            res.json({
                code:200,
                message:'ok',
                data:{
                    data: [
                        {
                            agent_no: 'bjb000001',
                            Role: '省代理',
                            name: '河北xx公司',
                            province: "河北省",
                            city:'',
                            county:'',
                            street:'',
                            contractor: '张',
                            phone: '13800138000',
                            mail: '',
                            type: 1,
                            bizLicenseCode:'',
                            bizLicenseImagePath:'',
                            idCardNo:'',
                            idCardFrontImagePath:'',
                            idCardBackImagePath:'',
                            bankAccountName:'',
                            bankName: '',
                            bankCoupletNo: '',
                            bankAccountNo: '',
                            expireTime: '2019.12.31',
                            uniqueCode: '',
                            createTime: '',
                            updateTime: '',
                            createUser: '',
                            auditTime: '',
                            auditUser:'',
                            status: 0,
                            updateUser:'',
                            invalidType: 1,
                            remark: '',
                            AdminUser: '',
                        },
                        {
                            agent_no: 'bjb000003',
                            Role: '市县代理',
                            name: '河北xx公司',
                            province: "河北省",
                            city:'',
                            county:'',
                            street:'',
                            contractor: '张',
                            phone: '13800138000',
                            mail: '',
                            type: 1,
                            bizLicenseCode:'',
                            bizLicenseImagePath:'',
                            idCardNo:'',
                            idCardFrontImagePath:'',
                            idCardBackImagePath:'',
                            bankAccountName:'',
                            bankName: '',
                            bankCoupletNo: '',
                            bankAccountNo: '',
                            expireTime: '2019.12.31',
                            uniqueCode: '',
                            createTime: '',
                            updateTime: '',
                            createUser: '',
                            auditTime: '',
                            auditUser:'',
                            status: 0,
                            updateUser:'',
                            invalidType: 1,
                            remark: '',
                            AdminUser: '',
                        },
                        {
                            agent_no: 'bjb000004',
                            Role: '网点',
                            name: '王五',
                            province: "河北省",
                            city:'',
                            county:'',
                            street:'',
                            contractor: '张',
                            phone: '13800138000',
                            mail: '',
                            type: 1,
                            bizLicenseCode:'',
                            bizLicenseImagePath:'',
                            idCardNo:'',
                            idCardFrontImagePath:'',
                            idCardBackImagePath:'',
                            bankAccountName:'',
                            bankName: '',
                            bankCoupletNo: '',
                            bankAccountNo: '',
                            expireTime: '2019.12.31',
                            uniqueCode: '',
                            createTime: '',
                            updateTime: '',
                            createUser: '',
                            auditTime: '',
                            auditUser:'',
                            status: 0,
                            updateUser:'',
                            invalidType: 1,
                            remark: '',
                            AdminUser: '',
                        },
                    ]
                }
            });
        });

        // app.post('/api/travelOrder/list', function (req, res) {
        //     res.json({
        //         code: 200,
        //         message: 'ok',
        //         data: [{
        //             goodsNo: '1',
        //             goodsName: 'name',
        //             goodsType: 'type',
        //             goodsUpDate: Date.now().toString(),
        //             goodsCloseDate: Date.now().toString(),
        //             peopleMinNum: 1,
        //             peopleMaxNum: 10,
        //             buyNum: 3,
        //             status: 10
        //         }]
        //     });
        // });
        // app.post('/api/travelOrder/groupOrderDetail', function (req, res) {
        //     res.json({
        //         code: 200,
        //         message: 'ok',
        //         data: {
        //             travelGoods: {
        //                 goodsNo: '1',
        //                 name: 'name',
        //                 status: 10,
        //             },
        //             travelOrders: [
        //                 {
        //                     orderNo: 'orderNo',
        //                     userId: 1,
        //                     createTime: 1,
        //                     payId: 1,
        //                     payTime: 1,
        //                     salePrice: 1,
        //                     buyNum :1,
        //                     orderPrice: 1,
        //                     status: 10
        //                 }
        //             ]
        //         }
        //     });
        // });
        // app.post('/api/travelOrder/travelOrderDetail', function (req, res) {
        //     res.json({
        //         code: 200,
        //         message: 'ok',
        //         data: {
        //             travelGoods: {
        //                 goodsNo: '1',
        //                 name:'name',
        //                 realPrice: 1,
        //                 leaveTime: 1
        //             },
        //             travelOrder: {
        //                 goodsNo: '1',
        //                 name:'name',
        //                 orderNo: 'orderNo',
        //                 userId: 1,
        //                 createTime: 1,
        //                 payId: 1,
        //                 payTime: 1,
        //                 buyNum: 1,
        //                 orderPrice: 1,
        //                 status : 10,
        //                 realPrice: 1,
        //                 leaveTime: 1
        //             },
        //             travelChildOrders: [
        //                 {
        //                     status: 10,
        //                     userType: 1,
        //                     unitPrice: 1,
        //                     travelUserInfo: {
        //                         name: 'name',
        //                         cardType: 1,
        //                         cardId: 'cardId',
        //                         phone: 'phone'
        //                     }
        //                 }
        //             ],
        //             invoice: {
        //                 title: 1,
        //                 taxNo: 'taxNo',
        //                 phone: 'phone',
        //                 address: 'address',
        //                 content: 'content'
        //             },
        //             user: {
        //                 nickName: 'nickName',
        //                 proId: 'proId',
        //                 cityId: 'cityId'
        //             }
        //         }
        //     });
        // });
        // app.post('/api/travelOrder/refundOrderList', function (req, res) {
        //     res.json({
        //         code: 200,
        //         message: 'ok',
        //         data: [
        //             {
        //                 refundNo: 1,
        //                 userName: 'userName',
        //                 goodsNo: 1,
        //                 provinceId: 1,
        //                 cityId: 1,
        //                 createTime: 1,
        //                 orderFee: 1,
        //                 refundReason: '',
        //                 status: 10,
        //                 refundId: 1,
        //             }
        //         ]
        //     });
        // });
        // app.get('/api/role/list', function (req, res) {
        //     res.json({
        //         code: 200,
        //         message: 'ok',
        //         data: {
        //             data:[{
        //                 id: 1,
        //                 name: 'name',
        //                 remark: 'remark',
        //                 level: 1,
        //                 status: 1,
        //                 createTime: 1,
        //                 createUser: 1,
        //                 updateTime: 11,
        //                 updateUser: 1,
        //             }]
        //         }
        //     });
        // });

    }
};

