webpackJsonp([10],{"0adG":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("aA9S"),n=a.n(r),l=a("9QUg"),o=a("0fmI"),s=a("fJIP"),i={data:function(){return n()({},s.a,{list:null,locationLevel0:[],locationLevel1:[],listLoading:!0,current_page:1,max_page:0,page_size:20,daterange:[],total_count:null,priceCount:null,form:{},refundForm:{},dialogFormVisible:!1,rules:{remark:[{required:!0,message:"请填写备注",trigger:"change"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]},multipleSelection:[]})},computed:{listQuery:function(){return n()({},this.form,{startDate:this.daterange[0]?this.daterange[0]+" 0:0:0":null,endDate:this.daterange[1]?this.daterange[1]+" 23:59:59":null,pageIndex:this.current_page,pageSize:this.page_size,refundFee:100*this.form.refundFee})}},created:function(){this.fetchData(),this.getLocationTopLevel()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(o.g)(this.listQuery).then(function(t){e.list=t.data.data,e.priceCount=t.data.priceCount,e.total_count=t.data.total_count,e.current_page=t.data.current_page,e.max_page=t.data.max_page,e.listLoading=!1})},getLocationTopLevel:function(){var e=this;Object(l.a)().then(function(t){e.locationLevel0=t.data})},nextLocation:function(e){var t=this;Object(l.a)(e).then(function(e){t.locationLevel1=e.data})},onSubmit:function(){this.fetchData()},check:function(e,t){this.$router.push({name:"travel-order-refund-detail",params:{id:t.refundId}})},edit:function(e,t){this.$router.push({name:"travel-order-edit",params:{id:t.id}})},refundCheck:function(e,t){0==this.multipleSelection.length?this.$message({type:"warning",message:"请选择订单!"}):this.dialogFormVisible=!0},refund:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.dialogFormVisible=!1,Object(o.a)({refundOrderIds:t.multipleSelection,status:t.refundForm.status,remark:t.refundForm.remark}).then(function(e){t.$message({type:"success",message:"审核成功!"}),t.fetchData()})})},currentPageChange:function(e){this.current_page=e,this.fetchData()},handleSelectionChange:function(e){this.multipleSelection=e.map(function(e){return e.refundId})}},components:{TitleLine:a("xE3b").a}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("title-line",{attrs:{txt:"退款审核"}}),e._v(" "),a("div",{staticStyle:{padding:"30px",background:"#F2F6FC"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.form}},[a("el-form-item",{attrs:{label:"地区"}},[a("el-select",{attrs:{clearable:"",placeholder:""},on:{change:e.nextLocation},model:{value:e.form.provinceId,callback:function(t){e.$set(e.form,"provinceId",t)},expression:"form.provinceId"}},e._l(e.locationLevel0,function(e){return a("el-option",{key:e.id,attrs:{label:e.nameAbbr,value:e.id}})})),e._v(" "),a("el-select",{attrs:{clearable:"",placeholder:""},model:{value:e.form.cityId,callback:function(t){e.$set(e.form,"cityId",t)},expression:"form.cityId"}},e._l(e.locationLevel1,function(e){return a("el-option",{key:e.id,attrs:{label:e.nameAbbr,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"商品编号"}},[a("el-input",{attrs:{placeholder:"请输入商品编号"},model:{value:e.form.goodsNo,callback:function(t){e.$set(e.form,"goodsNo",t)},expression:"form.goodsNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"退款原因"}},[a("el-select",{attrs:{placeholder:""},model:{value:e.form.refundReason,callback:function(t){e.$set(e.form,"refundReason",t)},expression:"form.refundReason"}},[a("el-option",{attrs:{label:"用户申请",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"组团失败",value:"2"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"退款状态"}},[a("el-select",{attrs:{clearable:"",placeholder:""},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.reFundDtatus,function(e,t){return a("el-option",{key:t,attrs:{label:e.msg,value:t}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"退款时间"}},[a("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy-MM-dd","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间"},model:{value:e.daterange,callback:function(t){e.daterange=t},expression:"daterange"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"退款金额"}},[a("el-select",{staticClass:"small-select",attrs:{placeholder:""},model:{value:e.form.refundRule,callback:function(t){e.$set(e.form,"refundRule",t)},expression:"form.refundRule"}},[a("el-option",{attrs:{label:">",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"=",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"<",value:"-1"}})],1),e._v(" "),a("el-input-number",{attrs:{min:1,max:1e6,label:"退款金额"},model:{value:e.form.refundFee,callback:function(t){e.$set(e.form,"refundFee",t)},expression:"form.refundFee"}})],1),e._v(" "),a("el-row",[a("el-form-item",[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["travel-order-refund-check-sarch"],expression:"['travel-order-refund-check-sarch']"}],attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1)],1),e._v(" "),a("p",[e._v("订单总数 "),a("span",{staticClass:"red"},[e._v(e._s(e.total_count))]),e._v(" 条 退款总金额 "),a("span",{staticClass:"red"},[e._v(e._s(e.priceCount))]),e._v(" 元\r\n        "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["travel-order-refund-check-batchAudit"],expression:"['travel-order-refund-check-batchAudit']"}],staticClass:"mul-btn",attrs:{size:"small",type:"warning"},on:{click:e.refundCheck}},[e._v("批量审核")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{stripe:!0,data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"退款订单编号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\r\n                "+e._s(t.row.refundNo)+"\r\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"买家名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\r\n                "+e._s(t.row.userName)+"\r\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"商品编号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\r\n                "+e._s(t.row.goodsNo)+"\r\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"地区",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\r\n                "+e._s(t.row.provinceId+"/"+t.row.cityId)+"\r\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"申请退款时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\r\n                "+e._s(new Date(t.row.createTime).Format("yyyy-MM-dd HH:mm:ss"))+"\r\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"付款金额",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\r\n                "+e._s(t.row.orderFee/100)+"\r\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"退款金额",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\r\n                "+e._s(t.row.refundFee/100)+"\r\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"退款原因",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\r\n                "+e._s(t.row.refundReason)+"\r\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{"class-name":"status-col",label:"退款状态",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e.reFundDtatus[t.row.status].color}},[e._v(e._s(e.reFundDtatus[t.row.status].msg))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["travel-order-refund-check-detail"],expression:"['travel-order-refund-check-detail']"}],attrs:{size:"mini",type:"success"},on:{click:function(a){e.check(t.$index,t.row)}}},[e._v("查看详情")])]}}])})],1),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:!0,"current-page":e.current_page,"page-size":e.page_size,layout:"total, prev, pager, next, jumper",total:e.total_count},on:{"current-change":e.currentPageChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"退款审核",visible:e.dialogFormVisible,center:""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"refundForm",attrs:{model:e.refundForm,"label-width":"80px",rules:e.rules}},[a("p",{staticClass:"red"},[e._v("已选择"+e._s(e.multipleSelection.length)+"个订单")]),e._v(" "),a("el-form-item",{attrs:{label:"审核意见",prop:"status"}},[a("el-radio-group",{model:{value:e.refundForm.status,callback:function(t){e.$set(e.refundForm,"status",t)},expression:"refundForm.status"}},[a("el-radio",{attrs:{label:2}},[e._v("同意")]),e._v(" "),a("el-radio",{attrs:{label:3}},[e._v("不同意")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:""},model:{value:e.refundForm.remark,callback:function(t){e.$set(e.refundForm,"remark",t)},expression:"refundForm.remark"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.refund("refundForm")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var u=a("vSla")(i,c,!1,function(e){a("UzXA")},"data-v-01f67bbc",null);t.default=u.exports},"9QUg":function(e,t,a){"use strict";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Object(r.a)({url:"/area/getLowerAreas",method:"get",params:{id:e}})};var r=a("vLgD")},Bpja:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.app-container .red[data-v-01f67bbc] {\n  color: #f56c6c;\n}\n.app-container .block[data-v-01f67bbc] {\n  margin: 50px 0 30px;\n  text-align: center;\n}\n.app-container .title[data-v-01f67bbc] {\n  font-size: 20px;\n  color: #606266;\n  margin-bottom: -5px;\n}\n.app-container .small-select[data-v-01f67bbc] {\n  width: 60px;\n}\n.app-container .mul-btn[data-v-01f67bbc] {\n  margin-left: 50px;\n}\n",""])},UzXA:function(e,t,a){var r=a("Bpja");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("8bSs")("2e368d7c",r,!0)}});