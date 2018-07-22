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
                    "timestamp": 596641851981,
                    "author": "Timothy",
                    "reviewer": "Paul",
                    "title": "Xsutiud Dkkx Nwvwso Flywurwyh Xxeohxi",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 46.54,
                    "importance": 2,
                    "type": "EU",
                    "status": "draft",
                    "display_time": "1998-12-16 02:11:51",
                    "comment_disabled": true,
                    "pageviews": 855,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 2,
                    "timestamp": 1394142166152,
                    "author": "John",
                    "reviewer": "Jeffrey",
                    "title": "Ldefjpo Gkqtjtckj Yphwfysh Ulhd Dojgxnvna Blssafhpb Kmepmiyl Gtpdniwrk Revh Sutrfr",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 57.05,
                    "importance": 1,
                    "type": "JP",
                    "status": "draft",
                    "display_time": "1997-07-05 23:50:34",
                    "comment_disabled": true,
                    "pageviews": 1423,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 3,
                    "timestamp": 911370904647,
                    "author": "Larry",
                    "reviewer": "Linda",
                    "title": "Vmxjfrdwi Nlepicqhg Oijb Zddkrhl Iwuvprmgq Olrko",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 26.64,
                    "importance": 3,
                    "type": "CN",
                    "status": "draft",
                    "display_time": "1996-06-08 03:25:56",
                    "comment_disabled": true,
                    "pageviews": 3500,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 4,
                    "timestamp": 566764664267,
                    "author": "Sarah",
                    "reviewer": "Melissa",
                    "title": "Iobicqq Ftt Hcmdbmbk Rrpdb Avoxx Yreqlbfdk Rutlk Frkghelj",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 95.44,
                    "importance": 2,
                    "type": "US",
                    "status": "deleted",
                    "display_time": "1992-08-02 08:22:25",
                    "comment_disabled": true,
                    "pageviews": 3728,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 5,
                    "timestamp": 9887977047,
                    "author": "Jeffrey",
                    "reviewer": "Michael",
                    "title": "Tknecpcr Bfcnwbbjw Zbehckogp Ivipwdtqnu Ftg Svcybau Wvnaakvrrx",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 13.67,
                    "importance": 2,
                    "type": "CN",
                    "status": "draft",
                    "display_time": "1984-07-22 09:49:03",
                    "comment_disabled": true,
                    "pageviews": 1077,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 6,
                    "timestamp": 1119131595505,
                    "author": "Michelle",
                    "reviewer": "Jeffrey",
                    "title": "Sfkri Bnxbx Zubja Nlbnkdsrx Iva Ojhl Jtxho Lwze Sby",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 57.86,
                    "importance": 2,
                    "type": "JP",
                    "status": "deleted",
                    "display_time": "1980-03-25 12:14:04",
                    "comment_disabled": true,
                    "pageviews": 2020,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 7,
                    "timestamp": 1206626503848,
                    "author": "Donna",
                    "reviewer": "Robert",
                    "title": "Ouhc Tgs Uiospb Mxhvtkdyv Dnw Gqcmb Ksiemj Yzgtbgh Qqte",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 2.46,
                    "importance": 2,
                    "type": "JP",
                    "status": "published",
                    "display_time": "1977-07-03 23:18:06",
                    "comment_disabled": true,
                    "pageviews": 4038,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 8,
                    "timestamp": 435762059510,
                    "author": "Maria",
                    "reviewer": "Larry",
                    "title": "Mgqnqaesl Nknvzvl Sgpxvgwt Qsjn Pjogeow Cqnc Esfy Ufmuykjqb",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 79.52,
                    "importance": 2,
                    "type": "JP",
                    "status": "draft",
                    "display_time": "1977-10-21 21:30:32",
                    "comment_disabled": true,
                    "pageviews": 4000,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 9,
                    "timestamp": 1341700491313,
                    "author": "Michael",
                    "reviewer": "Karen",
                    "title": "Eivbcbj Enr Urobbw Yugsmpsa Dilk",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 2.65,
                    "importance": 3,
                    "type": "US",
                    "status": "draft",
                    "display_time": "2017-07-25 11:43:16",
                    "comment_disabled": true,
                    "pageviews": 815,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 10,
                    "timestamp": 33632893979,
                    "author": "Eric",
                    "reviewer": "Jose",
                    "title": "Huehvty Qdgucgqe Zsfnukm Ldxrynkyvb Oesrwwtv Pejodwrq Mmsvjk",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 46.64,
                    "importance": 3,
                    "type": "US",
                    "status": "published",
                    "display_time": "1997-05-05 16:46:01",
                    "comment_disabled": true,
                    "pageviews": 2410,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 11,
                    "timestamp": 158206375924,
                    "author": "Kevin",
                    "reviewer": "William",
                    "title": "Mbwysiyeq Tjpln Tsexhllq Wijjp Ioyg Ffgsj Nuhrqjgicf",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 40.53,
                    "importance": 2,
                    "type": "JP",
                    "status": "published",
                    "display_time": "2017-08-25 20:32:55",
                    "comment_disabled": true,
                    "pageviews": 3364,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 12,
                    "timestamp": 1256152713449,
                    "author": "Sandra",
                    "reviewer": "Laura",
                    "title": "Hfyblr Cpkpsk Stgwiv Hce Weugjhquw Ujnc Qecdxra Pwuczd Lloy Oxwnye",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 83.12,
                    "importance": 2,
                    "type": "US",
                    "status": "draft",
                    "display_time": "1970-06-10 17:26:45",
                    "comment_disabled": true,
                    "pageviews": 3633,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 13,
                    "timestamp": 768429383342,
                    "author": "Lisa",
                    "reviewer": "Sandra",
                    "title": "Yyuusrsm Skrextjuq Fszsjutfc Aonjfvr Lsivv Dsekwnto Efwaaho",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 50.56,
                    "importance": 2,
                    "type": "US",
                    "status": "draft",
                    "display_time": "2013-10-22 19:53:15",
                    "comment_disabled": true,
                    "pageviews": 2756,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 14,
                    "timestamp": 640812764039,
                    "author": "Donald",
                    "reviewer": "Karen",
                    "title": "Dewcvvwex Nxbqkkw Oihx Nncnb Fsltdqbm Voe Eddywpb Zba Wddhg",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 4.32,
                    "importance": 2,
                    "type": "EU",
                    "status": "published",
                    "display_time": "1988-11-28 21:06:51",
                    "comment_disabled": true,
                    "pageviews": 2310,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 15,
                    "timestamp": 1458561480965,
                    "author": "Anthony",
                    "reviewer": "Larry",
                    "title": "Cunisjugz Nsmrghti Hrnry Nblpn Xsqxyjxx Twjwrg Ofbwshpr Wavuixw",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 87.13,
                    "importance": 3,
                    "type": "US",
                    "status": "draft",
                    "display_time": "1982-07-02 18:44:18",
                    "comment_disabled": true,
                    "pageviews": 3185,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 16,
                    "timestamp": 564076320480,
                    "author": "Jeffrey",
                    "reviewer": "Donna",
                    "title": "Lorsps Vsxtcz Ouuji Bdzlpymti Jujcoc",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 87.22,
                    "importance": 1,
                    "type": "CN",
                    "status": "draft",
                    "display_time": "1997-12-31 19:16:41",
                    "comment_disabled": true,
                    "pageviews": 3340,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 17,
                    "timestamp": 978872296272,
                    "author": "Thomas",
                    "reviewer": "Barbara",
                    "title": "Vjdfj Dwv Tigt Vxxjfwotuc Sdpaqnq Sydljak Ujvoj Rxkuubqwo",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 18.73,
                    "importance": 2,
                    "type": "JP",
                    "status": "published",
                    "display_time": "2012-06-25 06:25:58",
                    "comment_disabled": true,
                    "pageviews": 2152,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 18,
                    "timestamp": 258149451956,
                    "author": "Barbara",
                    "reviewer": "Linda",
                    "title": "Lgukoo Ekjqytmm Efhqnxsyj Ywupbgp Ouqxlqw Hvjjnyjs Ibqddbt",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 34.13,
                    "importance": 3,
                    "type": "JP",
                    "status": "draft",
                    "display_time": "1973-03-22 11:16:43",
                    "comment_disabled": true,
                    "pageviews": 4622,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 19,
                    "timestamp": 353739832216,
                    "author": "Robert",
                    "reviewer": "Scott",
                    "title": "Klhh Aiodea Xbmg Fvic Ffpaoorb Jqlkmftbdn Llqbxuqhtr",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 8.82,
                    "importance": 2,
                    "type": "CN",
                    "status": "published",
                    "display_time": "1973-01-13 10:33:38",
                    "comment_disabled": true,
                    "pageviews": 956,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  },
                  {
                    "id": 20,
                    "timestamp": 147648295959,
                    "author": "Richard",
                    "reviewer": "Anthony",
                    "title": "Sncovnxnu Weggxekyb Deljoxzac Xzktlroym Lgulj Xjrxunq Ynhjkxqqh Ykeoyjd Sffcf Egixkcm",
                    "content_short": "我是测试数据",
                    "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                    "forecast": 34.59,
                    "importance": 1,
                    "type": "JP",
                    "status": "draft",
                    "display_time": "2004-04-06 01:53:57",
                    "comment_disabled": true,
                    "pageviews": 320,
                    "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                    "platforms": [
                      "a-platform"
                    ]
                  }
                ]
              }
            });
         });
    }
};
