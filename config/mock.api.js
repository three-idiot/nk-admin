module.exports = {
    //模拟接口调用
    before(app) {
        app.get('/user/info' ,function(req, res){
            res.json({
                code:200,
                message:'ok',
                data:{
                    name:'three-idiots',
                    avatar:'mock-avatar',
                    roles:[1,2,3]
                }
            });
        });
        app.post('/user/login', function (req, res) {
            res.json({ 
                code:200,
                message:'ok',
                data: {token:'abcdefg'} 
            });
        });
    }
};
