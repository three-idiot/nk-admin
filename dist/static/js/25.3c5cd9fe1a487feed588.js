webpackJsonp([25],{GCDk:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.app-container .red[data-v-540a76b2] {\n  color: #F56C6C;\n}\n.app-container .block[data-v-540a76b2] {\n  margin: 50px 0 30px;\n  text-align: center;\n}\n",""])},bpQU:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("woOf"),i=n.n(a),s=n("vZz+"),r=n("R/pE"),o={data:function(){return i()({},r.a,{btn:{txt:"+新建角色",type:"primary",size:"small",permission:"permission-list-add"},list:null,listLoading:!0,current_page:1,max_page:0,page_size:20,total_count:null,priceCount:null,form:{}})},computed:{listQuery:function(){return i()({},this.form,{pageIndex:this.current_page,pageSize:this.page_size})}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(s.d)(this.listQuery).then(function(e){t.list=e.data.data,t.priceCount=e.data.priceCount,t.total_count=e.data.total_count,t.current_page=e.data.current_page,t.max_page=e.data.max_page,t.listLoading=!1})},addRoles:function(){this.$router.push({name:"permission-add"})},onSubmit:function(){this.fetchData()},freeze:function(t,e){var n=this,a=["","冻结","解冻"][e];this.$confirm("确定"+a+"?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s.c)({id:t.id,optType:e}).then(function(t){n.$message({type:"success",message:a+"成功!"}),n.fetchData()})}).catch(function(){})},edit:function(t,e){this.$router.push({name:"permission-edit",params:{id:e.id}})},currentPageChange:function(t){this.current_page=t,this.fetchData()}},components:{TitleLine:n("xE3b").a}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("title-line",{attrs:{txt:"角色管理",btn:t.btn},on:{btnClick:t.addRoles}}),t._v(" "),n("div",{staticStyle:{padding:"30px",background:"#F2F6FC"}},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.form}},[n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"状态"}},[n("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l(Object.keys(t.roleStatus),function(e){return n("el-option",{key:e,attrs:{label:t.roleStatus[e].msg,value:e}})}))],1),t._v(" "),n("el-row",[n("el-form-item",[n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["permission-list-search"],expression:"['permission-list-search']"}],attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")])],1)],1)],1)],1),t._v(" "),n("p",[t._v("角色总数 "),n("span",{staticClass:"red"},[t._v(t._s(t.total_count))]),t._v(" 条")]),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{stripe:!0,data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"角色名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(e.row.name)+"\n            ")]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:t.roleStatus[e.row.status].color}},[t._v(t._s(t.roleStatus[e.row.status].msg))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["正常"==t.roleStatus[e.row.status].msg?n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["permission-list-offline"],expression:"['permission-list-offline']"}],attrs:{size:"mini",type:"danger"},on:{click:function(n){t.freeze(e.row,1)}}},[t._v("冻结")]):t._e(),t._v(" "),"冻结"==t.roleStatus[e.row.status].msg?n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["permission-list-online"],expression:"['permission-list-online']"}],attrs:{size:"mini",type:"success"},on:{click:function(n){t.freeze(e.row,2)}}},[t._v("解冻")]):t._e(),t._v(" "),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["permission-list-edit"],expression:"['permission-list-edit']"}],attrs:{size:"mini",type:"warning"},on:{click:function(n){t.edit(e.$index,e.row)}}},[t._v("编辑")])]}}])})],1),t._v(" "),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{background:!0,"current-page":t.current_page,"page-size":t.page_size,layout:"total, prev, pager, next, jumper",total:t.total_count},on:{"current-change":t.currentPageChange}})],1)],1)},staticRenderFns:[]};var c=n("VU/8")(o,l,!1,function(t){n("znpI")},"data-v-540a76b2",null);e.default=c.exports},znpI:function(t,e,n){var a=n("GCDk");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("3de0cd1c",a,!0)}});