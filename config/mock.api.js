module.exports = {
    //模拟接口调用
    before(app) {
        app.get('/api/user/info' ,function(req, res){
            res.json({
                code:200,
                message:'ok',
                data:{
                    name:'three-idiots',
                    avatar:'http://images2.fanpop.com/image/photos/9400000/avatar-avatar-2009-film-9474591-1280-960.jpg',
                    roles:[1,2,3]
                }
            });
        });

        app.post('/api/agent/list' ,function(req, res){
            res.json({
                code:200,
                message:'ok',
                data:[
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
            });
        });
    }
};

