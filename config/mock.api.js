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
        app.get('/table/order/list' ,function(req, res){
            res.json({
                code:200,
                message:'ok',
                data:{
                    items:[{title:'title'}]
                }
            });
        });
        app.get('/table/visa/list' ,function(req, res){
            res.json({
              code:200,
              message:'ok',
              data:{
                items: [
                  {
                    "id": 1,
                    "timestamp": 357360228584,
                    "author": "Michelle",
                    "reviewer": "Shirley",
                    "title": "Igoctcvm Xkxsorn Rfpbdydd Lushmxoe Nblhjv Qsfmfibu Gewkjuxs Aszvtyexm",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 78.13,
                    "importance": 3,
                    "type": "US",
                    "status": "draft",
                    "display_time": "1991-07-16 23:51:44",
                    "comment_disabled": true,
                    "pageviews": 3747,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 2,
                    "timestamp": 687038087738,
                    "author": "Steven",
                    "reviewer": "Frank",
                    "title": "Kfoxhes Gitkl Emvgbpehnv Fcre Ujprjfdrv Jvcd",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 14.54,
                    "importance": 2,
                    "type": "JP",
                    "status": "draft",
                    "display_time": "1998-05-10 15:07:31",
                    "comment_disabled": true,
                    "pageviews": 639,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 3,
                    "timestamp": 741780010389,
                    "author": "David",
                    "reviewer": "Robert",
                    "title": "Sud Iajxkvoj Ysuniecj Ppwk Lqpf Xqtv Mblrrwe",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 80.15,
                    "importance": 2,
                    "type": "JP",
                    "status": "draft",
                    "display_time": "1973-05-28 05:15:52",
                    "comment_disabled": true,
                    "pageviews": 4605,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 4,
                    "timestamp": 670715338065,
                    "author": "Edward",
                    "reviewer": "Scott",
                    "title": "Tcfwjfn Weve Eypsreer Mbryxvxf Garmuw Sggujeknbk",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 50.76,
                    "importance": 2,
                    "type": "US",
                    "status": "draft",
                    "display_time": "1977-05-12 08:20:36",
                    "comment_disabled": true,
                    "pageviews": 2615,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 5,
                    "timestamp": 616962531237,
                    "author": "William",
                    "reviewer": "Melissa",
                    "title": "Zwkexrinr Mkbqmcf Luwojlvi Tkxjgqcquf Rukzqxzf Osndlaeomg Byh Uikfv",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 92.76,
                    "importance": 2,
                    "type": "JP",
                    "status": "deleted",
                    "display_time": "2002-02-09 14:44:16",
                    "comment_disabled": true,
                    "pageviews": 3252,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 6,
                    "timestamp": 873272268682,
                    "author": "Deborah",
                    "reviewer": "Timothy",
                    "title": "Gipro Keier Xumcld Uplkerazv Oqyhuwp Mxxuk Xlrwkplh Zsmkmgerd",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 64.92,
                    "importance": 1,
                    "type": "JP",
                    "status": "draft",
                    "display_time": "2016-06-29 11:03:34",
                    "comment_disabled": true,
                    "pageviews": 4983,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 7,
                    "timestamp": 1055854524483,
                    "author": "Joseph",
                    "reviewer": "William",
                    "title": "Etnnbcnu Cdcsff Jqecjicuxi Rbxo Aqc Nwjp Vysjf Dofalu",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 79.79,
                    "importance": 2,
                    "type": "JP",
                    "status": "published",
                    "display_time": "2002-10-19 19:26:39",
                    "comment_disabled": true,
                    "pageviews": 2097,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 8,
                    "timestamp": 43933729856,
                    "author": "Daniel",
                    "reviewer": "Karen",
                    "title": "Uemkqlisd Dalqrcbvym Thul Lrn Jalk Vcik",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 14.47,
                    "importance": 2,
                    "type": "JP",
                    "status": "published",
                    "display_time": "1976-11-21 15:07:16",
                    "comment_disabled": true,
                    "pageviews": 2343,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 9,
                    "timestamp": 1292216321688,
                    "author": "Ronald",
                    "reviewer": "Karen",
                    "title": "Uooi Qnutl Qbsnfijbp Agkvunrx Dngr Wdsybxupqc Qgmfvmmf Ozb Lwezuhforv",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 23.48,
                    "importance": 2,
                    "type": "JP",
                    "status": "draft",
                    "display_time": "1985-11-05 02:53:59",
                    "comment_disabled": true,
                    "pageviews": 2907,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 10,
                    "timestamp": 7254089080,
                    "author": "Thomas",
                    "reviewer": "Gary",
                    "title": "Wisfgrjspn Usrzn Rvx Jznixqw Rte Csbikowk Wkhrde Olatvq",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 50.88,
                    "importance": 2,
                    "type": "JP",
                    "status": "draft",
                    "display_time": "2004-10-17 19:38:21",
                    "comment_disabled": true,
                    "pageviews": 3871,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                ]
              }
            });
         });
    }
};
