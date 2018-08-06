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
        // app.post('/api/travelOrder/list' ,function(req, res){
        //     res.json({
        //         code:200,
        //         message:'ok',
        //         data:[{
        //             goodsNo:'1',
        //             goodsName:'name',
        //             goodsType:'type',
        //             goodsUpDate:Date.now().toString(),
        //             goodsCloseDate:Date.now().toString(),
        //             peopleMinNum:1,
        //             peopleMaxNum:10,
        //             buyNum:3,
        //             status:0
        //         }]
        //     });
        // });
    }
};

