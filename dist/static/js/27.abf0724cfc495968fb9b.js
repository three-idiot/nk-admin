webpackJsonp([27],{b9y1:function(t,a,e){var i=e("iZxe");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("6imX")("48673c19",i,!0)},iZxe:function(t,a,e){(t.exports=e("bKW+")(!1)).push([t.i,"\n.visaDetail[data-v-493a2dcc] {\n  padding-left: 50px;\n}\n.visaDetail .title[data-v-493a2dcc] {\n    font-size: 30px;\n    color: #606266;\n}\n.visaDetail .btn-container[data-v-493a2dcc] {\n    padding-top: 30px;\n    text-align: center;\n}\n.visaDetail .tableTitle[data-v-493a2dcc] {\n    background: #409EFF;\n    min-width: 150px;\n    line-height: 30px;\n    text-align: center;\n    color: #FFFFFF;\n}\n.divide-table td[data-v-493a2dcc] {\n  text-align: center;\n}\n.text-item[data-v-493a2dcc] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.text-item .item-tit[data-v-493a2dcc] {\n    /*box-sizing: border-box;*/\n    /*white-space: normal;*/\n    /*word-break: break-all;*/\n    /*line-height: 23px;*/\n    /*padding-left: 10px;*/\n    /*padding-right: 10px;*/\n    /*overflow: hidden;*/\n    /*text-overflow: ellipsis;*/\n    /*background-color: #EDF3F4;*/\n    color: #336199;\n    font-size: 20px;\n    margin-right: 40px;\n}\n",""])},vhUc:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("qsHl"),s=e("eFoC"),n={name:"index",data:function(){return{data:""}},computed:{processData:function(){var t=[];if(this.data){var a=[];if(this.data.images)for(var e=0;e<this.data.images.length;e++){var i=this.data.images[e];a.push(i.goodPath)}return console.log(a),t.push({key:"商品编号",value:this.data.goodsNo}),t.push({key:"商品状态",value:s.a.status[this.data.status]}),t.push({key:"商品名称",value:this.data.name}),t.push({key:"商品概要",value:this.data.outline}),t.push({key:"商品分类",value:s.a.type[this.data.type]}),t.push({key:"出发日期",value:this.data.leaveTime}),t.push({key:"出发地点",value:this.data.leaveAddress}),t.push({key:"添加图片",value:a,type:"images"}),t.push({key:"报名截至日期",value:this.data.closeDate}),t.push({key:"最低成团人数",value:this.data.peopleMinNum}),t.push({key:"成团人数上限",value:this.data.peopleMaxNum}),t.push({key:"商品价格",value:this.data.realPrice}),t.push({key:"门市价格",value:this.data.salePrice}),t.push({key:"儿童价格",value:this.data.childPrice}),t.push({key:"创建人",value:this.data.publisher}),t.push({key:"创建时间",value:new Date(this.data.createTime).Format("yyyy-MM-dd HH:mm:ss")}),t.push({key:"审核人",value:this.data.approver}),t.push({key:"审核时间",value:new Date(this.data.approveTime).Format("yyyy-MM-dd HH:mm:ss")}),t}}},created:function(){this.fetchData()},components:{PortraitTable:e("TJdw").a},methods:{calPrices:function(t,a){for(var e=0;e<this.data.travelGoodsDividePrices.length;e++){var i=this.data.travelGoodsDividePrices[e];if(i.agentType==t&&i.userType==a)return i.price}},fetchData:function(){var t=this,a=this.$route.query.id;Object(i.e)({id:a}).then(function(a){t.data=a.data,console.log(t.data)})}}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"visaDetail"},[e("p",{staticClass:"title"},[t._v("商品详情")]),t._v(" "),e("hr"),t._v(" "),e("portrait-table",{attrs:{data:t.processData}}),t._v(" "),e("div",{staticClass:"text-item"},[e("div",{staticClass:"item-tit"},[t._v("线路特色：")]),e("div",{domProps:{innerHTML:t._s(t.data.lineDescribe)}})]),t._v(" "),e("div",{staticClass:"text-item"},[e("div",{staticClass:"item-tit"},[t._v("行程介绍：")]),e("div",{domProps:{innerHTML:t._s(t.data.tripDescribe)}})]),t._v(" "),e("div",{staticClass:"text-item"},[e("div",{staticClass:"item-tit"},[t._v("费用与须知：")]),e("div",{domProps:{innerHTML:t._s(t.data.costDescribe)}})]),t._v(" "),e("table",{staticClass:"divide-table"},[t._m(0),t._v(" "),e("tr",[e("td",{staticClass:"tableTitle"},[t._v("成人：")]),t._v(" "),e("td",[t._v("\n                "+t._s(t.calPrices(1,1)?t.calPrices(1,1):"/")+"\n                ")]),t._v(" "),e("td",[t._v("\n                "+t._s(t.calPrices(2,1)?t.calPrices(2,1):"/")+"\n                ")]),t._v(" "),e("td",[t._v("\n                "+t._s(t.calPrices(3,1)?t.calPrices(3,1):"/")+"\n                ")]),t._v(" "),e("td",[t._v("\n                "+t._s(t.calPrices(4,1)?t.calPrices(4,1):"/")+"\n                ")])]),t._v(" "),e("tr",[e("td",{staticClass:"tableTitle"},[t._v("儿童：")]),t._v(" "),e("td",[t._v("\n                "+t._s(t.calPrices(1,2)?t.calPrices(1,2):"/")+"\n                ")]),t._v(" "),e("td",[t._v("\n                "+t._s(t.calPrices(2,2)?t.calPrices(2,2):"/")+"\n                ")]),t._v(" "),e("td",[t._v("\n                "+t._s(t.calPrices(3,2)?t.calPrices(3,2):"/")+"\n                ")]),t._v(" "),e("td",[t._v("\n                "+t._s(t.calPrices(4,2)?t.calPrices(4,2):"/")+"\n                ")])])]),t._v(" "),e("div",{staticClass:"btn-container"},[e("el-button",{attrs:{type:"info"},nativeOn:{click:function(a){t.$router.back()}}},[t._v("返回")])],1)],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",{staticClass:"tableTitle"},[t._v("分成设置(元)")]),t._v(" "),e("th",{staticClass:"tableTitle"},[t._v("省代")]),t._v(" "),e("th",{staticClass:"tableTitle"},[t._v("市县代")]),t._v(" "),e("th",{staticClass:"tableTitle"},[t._v("网点")]),t._v(" "),e("th",{staticClass:"tableTitle"},[t._v("第三方")])])}]};var c=e("D8HT")(n,l,!1,function(t){e("b9y1")},"data-v-493a2dcc",null);a.default=c.exports}});