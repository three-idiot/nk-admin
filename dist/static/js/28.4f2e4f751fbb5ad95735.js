webpackJsonp([28],{BcvB:function(t,e,a){var n=a("G9V2");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("6imX")("6bd28a0a",n,!0)},CQCP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Edqs"),r=a.n(n),l=a("0fmI"),i=a("TJdw"),o=a("xE3b"),s=a("fJIP"),c={data:function(){return r()({},s.a,{list:null,childList:null,data:[],invoiceData:[]})},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(l.h)(this.$route.params.id).then(function(e){var a=e.data;t.data=[{key:"买家名称",value:a.user.nickName,type:"string"},{key:"地区",value:a.user.proId+"/"+a.user.cityId,type:"string"},{key:"订单状态",value:t.status[a.travelOrder.status].msg,type:"string"},{key:"订单编号",value:a.travelOrder.orderNo,type:"string"},{key:"下单时间",value:a.travelOrder.createTime,type:"dateTime"},{key:"支付单号",value:a.travelOrder.payId,type:"string"},{key:"支付时间",value:a.travelOrder.payTime,type:"dateTime"},{key:"总金额",value:a.travelOrder.orderPrice/100,type:"string"}],t.invoiceData=[{key:"发票抬头",value:a.invoice.title,type:"string"},{key:"纳税识别号",value:a.invoice.taxNo,type:"string"},{key:"电子邮箱",value:a.invoice.email,type:"string"},{key:"地址",value:a.invoice.address,type:"string"},{key:"电话",value:a.invoice.phone,type:"string"}],t.list=[a.travelGoods],t.childList=a.travelChildOrders,t.listLoading=!1})}},components:{PortraitTable:i.a,TitleLine:o.a}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("title-line",{attrs:{txt:"商品订单详情"}}),t._v(" "),a("portrait-table",{staticClass:"portrait-table",attrs:{"key-width":80,data:t.data}}),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{stripe:!0,data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"商品编码"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                "+t._s(e.row.goodsNo)+"\r\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"商品名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                "+t._s(e.row.name)+"\r\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"商品单价"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                "+t._s(e.row.realPrice/100)+"\r\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"购买数量"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                "+t._s(e.row.saleNum)+"\r\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"出行日期",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                "+t._s(new Date(e.row.leaveTime).Format("yyyy-MM-dd HH:mm:ss"))+"\r\n            ")]}}])})],1),t._v(" "),a("hr",{staticClass:"hr"}),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("子订单和用户信息")]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{stripe:!0,data:t.childList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"子订单编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                "+t._s(e.row.travelUserInfo.childOrderNo)+"\r\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"姓名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                "+t._s(e.row.travelUserInfo.name)+"\r\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"身份证号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                "+t._s(e.row.travelUserInfo.cardId)+"\r\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"护照号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                "+t._s(e.row.travelUserInfo.passport)+"\r\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"联系电话"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                "+t._s(e.row.travelUserInfo.phone)+"\r\n            ")]}}])})],1),t._v(" "),a("hr",{staticClass:"hr"}),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("发票信息")]),t._v(" "),a("portrait-table",{staticClass:"portrait-table",attrs:{"key-width":90,data:t.invoiceData}}),t._v(" "),a("div",{staticClass:"btn-container"},[a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.$router.back()}}},[t._v("返回")])],1)],1)},staticRenderFns:[]};var u=a("D8HT")(c,d,!1,function(t){a("BcvB")},"data-v-41f57cc2",null);e.default=u.exports},G9V2:function(t,e,a){(t.exports=a("bKW+")(!1)).push([t.i,"\n.app-container[data-v-41f57cc2] {\n  padding-left: 50px;\n}\n.app-container .title[data-v-41f57cc2] {\n    font-size: 30px;\n    color: #606266;\n}\n.app-container .btn-container[data-v-41f57cc2] {\n    padding-top: 30px;\n    text-align: center;\n}\n.app-container .portrait-table[data-v-41f57cc2] {\n    margin-bottom: 20px;\n}\n.app-container .hr[data-v-41f57cc2] {\n    margin-top: 40px;\n    color: #ebeef5;\n}\n.app-container .subtitle[data-v-41f57cc2] {\n    color: #444;\n    font-size: 20px;\n    font-weight: bold;\n}\n",""])}});