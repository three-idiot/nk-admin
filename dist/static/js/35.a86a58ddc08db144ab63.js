webpackJsonp([35],{"awT+":function(e,t,n){(e.exports=n("bKW+")(!1)).push([e.i,"\n.app-container .red[data-v-21d91cb6] {\n  color: #F56C6C;\n}\n.app-container .block[data-v-21d91cb6] {\n  margin: 50px 0 30px;\n  text-align: center;\n}\n",""])},bpQU:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Edqs"),i=n.n(a),s=n("vZz+"),r=n("R/pE"),o={data:function(){return i()({},r.a,{btn:{txt:"+新建角色",type:"primary",size:"small",permission:"permission-list-add"},list:null,listLoading:!0,current_page:1,max_page:0,page_size:20,total_count:null,priceCount:null,form:{}})},computed:{listQuery:function(){return i()({},this.form,{pageIndex:this.current_page,pageSize:this.page_size})}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(s.d)(this.listQuery).then(function(t){e.list=t.data.data,e.priceCount=t.data.priceCount,e.total_count=t.data.total_count,e.current_page=t.data.current_page,e.max_page=t.data.max_page,e.listLoading=!1})},addRoles:function(){this.$router.push({name:"permission-add"})},onSubmit:function(){this.fetchData()},freeze:function(e,t){var n=this,a=["","冻结","解冻"][t];this.$confirm("确定"+a+"?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s.c)({id:e.id,optType:t}).then(function(e){n.$message({type:"success",message:a+"成功!"}),n.fetchData()})}).catch(function(){})},edit:function(e,t){this.$router.push({name:"permission-edit",params:{id:t.id}})},currentPageChange:function(e){this.current_page=e,this.fetchData()}},components:{TitleLine:n("xE3b").a}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("title-line",{attrs:{txt:"角色管理",btn:e.btn},on:{btnClick:e.addRoles}}),e._v(" "),n("div",{staticStyle:{padding:"30px",background:"#F2F6FC"}},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.form}},[n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"状态"}},[n("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(Object.keys(e.roleStatus),function(t){return n("el-option",{key:t,attrs:{label:e.roleStatus[t].msg,value:t}})}))],1),e._v(" "),n("el-row",[n("el-form-item",[n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["permission-list-search"],expression:"['permission-list-search']"}],attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1)],1),e._v(" "),n("p",[e._v("角色总数 "),n("span",{staticClass:"red"},[e._v(e._s(e.total_count))]),e._v(" 条")]),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{stripe:!0,data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"角色名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\r\n                "+e._s(t.row.name)+"\r\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:e.roleStatus[t.row.status].color}},[e._v(e._s(e.roleStatus[t.row.status].msg))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["正常"==e.roleStatus[t.row.status].msg&&0!=t.row.level?n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["permission-list-offline"],expression:"['permission-list-offline']"}],attrs:{size:"mini",type:"danger"},on:{click:function(n){e.freeze(t.row,1)}}},[e._v("冻结")]):e._e(),e._v(" "),"冻结"==e.roleStatus[t.row.status].msg?n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["permission-list-online"],expression:"['permission-list-online']"}],attrs:{size:"mini",type:"success"},on:{click:function(n){e.freeze(t.row,2)}}},[e._v("解冻")]):e._e(),e._v(" "),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["permission-list-edit"],expression:"['permission-list-edit']"}],attrs:{size:"mini",type:"warning"},on:{click:function(n){e.edit(t.$index,t.row)}}},[e._v("编辑")])]}}])})],1),e._v(" "),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{background:!0,"current-page":e.current_page,"page-size":e.page_size,layout:"total, prev, pager, next, jumper",total:e.total_count},on:{"current-change":e.currentPageChange}})],1)],1)},staticRenderFns:[]};var c=n("D8HT")(o,l,!1,function(e){n("gE31")},"data-v-21d91cb6",null);t.default=c.exports},gE31:function(e,t,n){var a=n("awT+");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("6imX")("3badc1ee",a,!0)}});