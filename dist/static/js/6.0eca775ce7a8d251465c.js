webpackJsonp([6],{"+vt4":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("3cXf"),s=a.n(n),o=a("qsHl"),i={data:function(){return{id:null,undercarriage:!1,shelfDialog:!1,remark:null,listLoading:!0,refundDialog:!1,chooseTravelGoodsId:[],total_count:0,RefundRule:[{hour:null,ratio:null}],type:{1:"一般",2:"推荐"},statusPerform:{1:"库存中",2:"已上架",3:"已下架"},status:{"全部":null,"库存中":1,"已上架":2,"已下架":3},salePriceRule:{0:"=",1:">","-1":"<"},salePrice:null,goodsParams:{type:null,name:null,publisher:null,status:null,publishStartTime:null,publishEndTime:null,upStartTime:null,upEndTime:null,salePrice:null,salePriceRule:null,pageIndex:1,pageSize:20},goodsList:null}},computed:{},filters:{statusFilter:function(t){return{1:"success",2:"success",3:"danger",4:"warning",5:"danger"}[t]}},created:function(){this.fetchData(this.goodsParams)},methods:{jumpAdd:function(){this.$router.push({name:"goods-add"})},refundDialogShow:function(){0!=this.chooseTravelGoodsId.length?this.refundDialog=!0:alert("当前没有选中任何商品!!!")},changeRule:function(){for(var t=[],e=0;e<this.chooseTravelGoodsId.length;e++)for(var a=this.chooseTravelGoodsId[e],n=0;n<this.RefundRule.length;n++){var i=this.RefundRule[n],l=JSON.parse(s()(i));l.travelGoodsId=a.id,l.sort=e+n,t.push(l)}console.log(t),Object(o.a)({refundRules:t}).then(function(t){console.log(t),200==t.code&&(alert("修改成功"),window.location.reload())}),this.refundDialog=!1},handleSelectionChange:function(t){this.chooseTravelGoodsId=t},cancelRefund:function(){this.RefundRule=[].push({sort:0,hour:null,ratio:null,travelGoodsId:null}),this.refundDialog=!1},addRule:function(){var t=this.RefundRule.length;this.RefundRule.push({sort:t,hour:null,ratio:null,travelGoodsId:null})},fetchData:function(t){var e=this;this.listLoading=!0,Object(o.d)(t).then(function(t){e.goodsParams.salePrice&&(e.goodsParams.salePrice=null),console.log(t.data),e.goodsList=t.data.data,e.total_count=t.data.total_count,e.listLoading=!1})},handleSizeChange:function(t){this.goodsParams.pageSize=t,this.fetchData(this.goodsParams)},handleCurrentChange:function(t){this.goodsParams.pageIndex=t,this.fetchData(this.goodsParams)},handleFilter:function(){console.log(this.goodsParams),this.salePrice&&(this.goodsParams.salePrice=100*this.salePrice),this.fetchData(this.goodsParams)},goDetail:function(t){this.$router.push({name:"goods-detail",query:{id:t}})},goEdit:function(t){this.$router.push({name:"goods-edit",query:{id:t}})},undercarriageShow:function(t){this.undercarriage=!0,this.id=t},changeStatusApi:function(t){var e={goodsId:this.id,status:t};Object(o.c)(e).then(function(t){console.log(t),200==t.code&&(alert("操作成功"),window.location.reload())})},shelfShow:function(t){this.shelfDialog=!0,this.id=t}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("p",{staticClass:"title"},[t._v("\n        商品列表\n        "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["goods-list-add"],expression:"['goods-list-add']"}],staticClass:"add-agent-button",attrs:{type:"danger"},on:{click:t.jumpAdd}},[t._v("新增商品+")])],1),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"filter-container",staticStyle:{"margin-bottom":"30px"}},[a("span",[t._v("商品类别：")]),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请选择"},model:{value:t.goodsParams.type,callback:function(e){t.$set(t.goodsParams,"type",e)},expression:"goodsParams.type"}},t._l(t.type,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:e}})})),t._v(" "),a("span",[t._v("商品名称：")]),t._v(" "),a("el-input",{staticStyle:{width:"200px"},model:{value:t.goodsParams.name,callback:function(e){t.$set(t.goodsParams,"name",e)},expression:"goodsParams.name"}}),t._v(" "),a("span",[t._v("发布人：")]),t._v(" "),a("el-input",{staticStyle:{width:"200px"},model:{value:t.goodsParams.publisher,callback:function(e){t.$set(t.goodsParams,"publisher",e)},expression:"goodsParams.publisher"}}),t._v(" "),a("span",[t._v("商品状态：")]),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{clearable:"",placeholder:"请选择"},model:{value:t.goodsParams.status,callback:function(e){t.$set(t.goodsParams,"status",e)},expression:"goodsParams.status"}},t._l(t.status,function(t,e){return a("el-option",{key:e,attrs:{label:e,value:t}})})),t._v(" "),a("span",{staticClass:"demonstration"},[t._v("发布日期：")]),t._v(" "),a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.goodsParams.publishStartTime,callback:function(e){t.$set(t.goodsParams,"publishStartTime",e)},expression:"goodsParams.publishStartTime"}}),t._v("\n        -\n        "),a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.goodsParams.publishEndTime,callback:function(e){t.$set(t.goodsParams,"publishEndTime",e)},expression:"goodsParams.publishEndTime"}}),t._v(" "),a("div",{staticClass:"goodPrice",staticStyle:{"margin-top":"10px"}},[a("span",[t._v("商品价格：")]),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"90px"},attrs:{clearable:"",placeholder:"请选择"},model:{value:t.goodsParams.salePriceRule,callback:function(e){t.$set(t.goodsParams,"salePriceRule",e)},expression:"goodsParams.salePriceRule"}},t._l(t.salePriceRule,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:e}})})),t._v(" "),a("el-input",{staticStyle:{width:"200px"},model:{value:t.salePrice,callback:function(e){t.salePrice=e},expression:"salePrice"}}),t._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["goods-list-search"],expression:"['goods-list-search']"}],staticClass:"filter-item",staticStyle:{"margin-left":"20px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查询\n            ")])],1)],1),t._v(" "),a("div",{staticClass:"list-des"},[a("span",[t._v("商品总数："),a("span",{staticStyle:{color:"orangered"}},[t._v(t._s(t.total_count))])]),t._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["goods-list-refundRule"],expression:"['goods-list-refundRule']"}],staticClass:"add-agent-button",attrs:{type:"danger"},on:{click:t.refundDialogShow}},[t._v("批量设置商品退款规则")])],1),t._v(" "),a("el-dialog",{attrs:{title:"退款规则设置",visible:t.refundDialog,width:"30%"},on:{"update:visible":function(e){t.refundDialog=e}}},[a("p",{staticStyle:{"font-size":"20px",color:"orangered","font-weight":"bold"}},[t._v("已选择"+t._s(t.chooseTravelGoodsId.length)+"个商品")]),t._v(" "),t._l(t.RefundRule,function(e,n){return a("div",{staticClass:"condition"},[a("p",[t._v("条件"+t._s(n+1)+"：")]),t._v(" "),a("p",[t._v("(截至时间)-(申请时间) >= "),a("el-input",{staticClass:"input1",model:{value:e.hour,callback:function(a){t.$set(e,"hour",t._n(a))},expression:"val.hour"}})],1),t._v(" "),a("p",[a("span",[t._v("退款金额")]),t._v(" = "),a("span",[t._v("支付金额")]),t._v(" x "),a("el-input",{staticClass:"input2",model:{value:e.ratio,callback:function(a){t.$set(e,"ratio",t._n(a))},expression:"val.ratio"}}),t._v("%")],1),t._v(" "),a("hr")])}),t._v(" "),a("p",{staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.addRule}},[t._v("添加规则")])],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.cancelRefund}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.changeRule}},[t._v("确 定")])],1)],2),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%","min-height":"1000px"},attrs:{data:t.goodsList,border:"",fit:"","highlight-current-row":""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{staticClass:"table-item",attrs:{align:"center",label:"全选",type:"selection",width:"55"},model:{value:t.chooseTravelGoodsId,callback:function(e){t.chooseTravelGoodsId=e},expression:"chooseTravelGoodsId"}}),t._v(" "),a("el-table-column",{staticClass:"table-item",attrs:{align:"center",label:"商品编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.goodsNo))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"商品名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"商品类别"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.type[e.row.type]))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"发布日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(new Date(e.row.createTime).Format("yyyy-MM-dd HH:mm:ss")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"上架日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(new Date(e.row.upTime).Format("yyyy-MM-dd HH:mm:ss")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"截止日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(new Date(e.row.closeDate).Format("yyyy-MM-dd HH:mm:ss")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"发布人"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.publisher))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"门市价格"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.realPrice/100)+"元")])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"商品价格"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.salePrice/100)+"元")])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"分成比例"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"link-type"},[a("p",[t._v("省代 :"+t._s(e.row.provinceDividePrice/100)+"%")]),t._v(" "),a("p",[t._v("市县代："+t._s(e.row.cityDividePrice/100)+"%")]),t._v(" "),a("p",[t._v("网点："+t._s(e.row.pointDividePrice/100)+"%")])])]}}])}),t._v(" "),a("el-table-column",{attrs:{"class-name":"status-col",label:"商品状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status)}},[t._v("\n                    "+t._s(t.statusPerform[e.row.status])+"\n                ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center","class-name":"small-padding fixed-width",label:"操作",width:"340"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["goods-list-detail"],expression:"['goods-list-detail']"}],attrs:{size:"mini",type:"success",plain:""},on:{click:function(a){t.goDetail(e.row.id)}}},[t._v("\n                    查看详情\n                ")]),t._v(" "),3!==e.row.status?a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["goods-list-edit"],expression:"['goods-list-edit']"}],attrs:{type:"primary",size:"mini"},on:{click:function(a){t.goEdit(e.row.id)}}},[t._v("\n                    编辑\n                ")]):t._e(),t._v(" "),1==e.row.status?a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["goods-list-online"],expression:"['goods-list-online']"}],attrs:{size:"mini",type:"success"},on:{click:function(a){t.shelfShow(e.row.id)}}},[t._v("上架\n                ")]):t._e(),t._v(" "),2==e.row.status?a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["goods-list-offline"],expression:"['goods-list-offline']"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){t.undercarriageShow(e.row.id)}}},[t._v("\n                    下架\n                ")]):t._e()]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:"请备注下架原因",visible:t.undercarriage,width:"30%"},on:{"update:visible":function(e){t.undercarriage=e}}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.remark,expression:"remark"}],staticStyle:{width:"100%"},attrs:{name:"",id:"",cols:"50",rows:"10"},domProps:{value:t.remark},on:{input:function(e){e.target.composing||(t.remark=e.target.value)}}}),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.undercarriage=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.changeStatusApi(3)}}},[t._v("确 定")])],1)]),t._v(" "),a("el-dialog",{attrs:{title:"上架",visible:t.shelfDialog,width:"30%"},on:{"update:visible":function(e){t.shelfDialog=e}}},[a("span",[t._v("将此商品自己上架")]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.shelfDialog=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.changeStatusApi(2)}}},[t._v("确 定")])],1)]),t._v(" "),a("div",{staticClass:"pagination-container",staticStyle:{"margin-top":"30px"}},[a("el-pagination",{attrs:{background:"","current-page":t.goodsParams.pageIndex,"page-sizes":[4,10,20,30,50],total:t.total_count,"page-size":t.goodsParams.pageSize,layout:"sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var r=a("vSla")(i,l,!1,function(t){a("s+sQ")},"data-v-564d70a7",null);e.default=r.exports},"3cXf":function(t,e,a){t.exports={default:a("RJ+u"),__esModule:!0}},"RJ+u":function(t,e,a){var n=a("AKd3"),s=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},r1R8:function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,"\n.app-container[data-v-564d70a7] {\n  padding-left: 50px;\n}\n.app-container .list-des[data-v-564d70a7] {\n    margin-top: 25px;\n    margin-bottom: 25px;\n}\n.app-container .list-des .add-agent-button[data-v-564d70a7] {\n      font-size: 18px;\n      /*float: left;*/\n      margin-right: 40px;\n      margin-left: 20px;\n}\n.app-container .condition[data-v-564d70a7] {\n    font-size: 20px;\n}\n.app-container .condition .input1[data-v-564d70a7] {\n      width: 60px;\n}\n.app-container .condition .input2[data-v-564d70a7] {\n      width: 70px;\n}\n.app-container .condition p[data-v-564d70a7]:nth-child(1) {\n      color: #000000;\n      font-weight: bolder;\n}\n.app-container .condition p[data-v-564d70a7]:nth-child(2) {\n      padding-left: 60px;\n}\n.app-container .condition p[data-v-564d70a7]:nth-child(3) {\n      padding-left: 60px;\n}\n.app-container .condition p:nth-child(3) span[data-v-564d70a7]:nth-child(1) {\n        color: #ff0000;\n}\n.app-container .condition p:nth-child(3) span[data-v-564d70a7]:nth-child(2) {\n        color: #0000ff;\n}\n.title[data-v-564d70a7] {\n  font-size: 30px;\n  color: #606266;\n  line-height: 40px;\n}\n.title .add-agent-button[data-v-564d70a7] {\n    font-size: 18px;\n    float: right;\n    margin-right: 40px;\n}\n",""])},"s+sQ":function(t,e,a){var n=a("r1R8");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("8bSs")("730c94df",n,!0)}});