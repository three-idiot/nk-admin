webpackJsonp([36],{"3MXD":function(e,t,n){(e.exports=n("bKW+")(!1)).push([e.i,"\n.app-container[data-v-1bd00461] {\n  padding-left: 50px;\n}\n.app-container .title[data-v-1bd00461] {\n    font-size: 30px;\n    color: #606266;\n}\n.app-container .btn-container[data-v-1bd00461] {\n    padding-top: 30px;\n    text-align: center;\n}\n.app-container .portrait-table[data-v-1bd00461] {\n    margin-bottom: 20px;\n}\n.app-container .hr[data-v-1bd00461] {\n    margin-top: 40px;\n    color: #ebeef5;\n}\n.app-container .subtitle[data-v-1bd00461] {\n    color: #444;\n    font-size: 20px;\n    font-weight: bold;\n}\n",""])},QSuu:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Edqs"),r=n.n(a),l=n("0fmI"),o=n("TJdw"),i=n("xE3b"),s=n("fJIP"),d={data:function(){return r()({},s.a,{list:null,childList:null,data:[],checkData:[]})},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(l.f)(this.$route.params.id).then(function(t){var n=t.data;e.data=[{key:"买家名称",value:n.user.nickName,type:"string"},{key:"地区",value:n.user.proId+"/"+n.user.cityId,type:"string"},{key:"退款状态",value:e.reFundDtatus[n.refundOrder.status].msg,type:"string"},{key:"退款订单编号",value:n.refundOrder.refundNo,type:"string"},{key:"申请时间",value:n.refundOrder.createTime,type:"dateTime"},{key:"退款支付单号",value:n.refundOrder.refundPayNo,type:"string"},{key:"退款到帐时间",value:n.refundOrder.finishTime,type:"dateTime"},{key:"退款金额",value:n.refundOrder.refundFee/100,type:"string"}],e.checkData=[{key:"审核人",value:n.refundOrder.approver,type:"string"},{key:"审核时间",value:n.refundOrder.approveTime,type:"dateTime"},{key:"审核意见",value:n.refundOrder.approveOpinion,type:"string"},{key:"备注",value:n.refundOrder.approveRemark,type:"string"}],e.list=[r()({},n.travelGoods,{duration:new Date(n.travelGoods.closeDate)-new Date(n.refundOrder.createTime),money:"接口木有"})],e.childList=n.travelChildOrders,e.listLoading=!1})}},components:{PortraitTable:o.a,TitleLine:i.a}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("title-line",{attrs:{txt:"退款详情"}}),e._v(" "),n("portrait-table",{staticClass:"portrait-table",attrs:{"key-width":100,data:e.data}}),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{stripe:!0,data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"商品编码"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\r\n                "+e._s(t.row.goodsNo)+"\r\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"商品名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\r\n                "+e._s(t.row.name)+"\r\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"商品单价"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\r\n                "+e._s(t.row.realPrice/100)+"\r\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"购买数量"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\r\n                "+e._s(t.row.saleNum)+"\r\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"报名截止日期",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\r\n                "+e._s(new Date(t.row.closeDate).Format("yyyy-MM-dd HH:mm:ss"))+"\r\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"距截至日期时长",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[Math.floor(t.row.duration/1e3/3600/24)?n("span",[e._v(e._s(Math.floor(t.row.duration/1e3/3600/24)+"天"))]):e._e(),e._v(" "),Math.floor(t.row.duration/1e3/3600%24)?n("span",[e._v(e._s(Math.floor(t.row.duration/1e3/3600%24)+"小时"))]):e._e(),e._v(" "),Math.floor(t.row.duration/1e3/60%60)?n("span",[e._v(e._s(Math.floor(t.row.duration/1e3/60%60)+"分钟"))]):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"支付金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\r\n                "+e._s("木有")+"\r\n            ")]}}])})],1),e._v(" "),n("hr",{staticClass:"hr"}),e._v(" "),n("p",{staticClass:"subtitle"},[e._v("出行用户信息")]),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{stripe:!0,data:e.childList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"姓名"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\r\n                "+e._s(t.row.travelUserInfo.name)+"\r\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"身份证号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\r\n                "+e._s(t.row.travelUserInfo.cardId)+"\r\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"护照号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\r\n                "+e._s(t.row.travelUserInfo.passport)+"\r\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"联系电话"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\r\n                "+e._s(t.row.travelUserInfo.phone)+"\r\n            ")]}}])})],1),e._v(" "),n("hr",{staticClass:"hr"}),e._v(" "),n("p",{staticClass:"subtitle"},[e._v("审核信息")]),e._v(" "),n("portrait-table",{staticClass:"portrait-table",attrs:{"key-width":90,data:e.checkData}}),e._v(" "),n("div",{staticClass:"btn-container"},[n("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){e.$router.back()}}},[e._v("返回")])],1)],1)},staticRenderFns:[]};var c=n("D8HT")(d,u,!1,function(e){n("sHy3")},"data-v-1bd00461",null);t.default=c.exports},sHy3:function(e,t,n){var a=n("3MXD");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("6imX")("63238850",a,!0)}});