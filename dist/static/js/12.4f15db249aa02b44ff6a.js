webpackJsonp([12],{"0C01":function(t,e,n){var a=n("wMsc");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("83d87bfa",a,!0)},"5o2k":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("aA9S"),r=n.n(a),o=n("vZz+"),s=n("nv77"),i=n("0TTq"),l={data:function(){return r()({},i.a,{btn:{txt:"+新建账号",type:"primary",size:"small",permission:"account-list-add"},list:[],listLoading:!0,current_page:1,max_page:0,page_size:20,startDaterange:[],endDaterange:[],total_count:null,priceCount:null,form:{},roles:[],rules:{phone:[{validator:function(t,e,n){!/^1\d{10}$/.test(e)&&e?n(new Error("请输入正确的手机号")):n()},trigger:"blur"}]}})},computed:{listQuery:function(){return r()({},this.form,{sstartDate:this.startDaterange[0],estartDate:this.startDaterange[1],sendDate:this.endDaterange[0],eendDate:this.endDaterange[1],pageIndex:this.current_page,pageSize:this.page_size})}},created:function(){this.fetchData(),this.getRolesList()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(s.d)(this.listQuery).then(function(e){t.list=e.data.data,console.log(t.list),t.priceCount=e.data.priceCount,t.total_count=e.data.total_count,t.current_page=e.data.current_page,t.max_page=e.data.max_page,t.listLoading=!1})},getRolesList:function(){var t=this;Object(o.d)({pageIndex:1,pageSize:1e6}).then(function(e){t.roles=e.data.data})},addAccount:function(){this.$router.push({name:"account-add"})},onSubmit:function(){this.fetchData()},freeze:function(t,e){var n=this,a=["","冻结","解冻"][e];this.$confirm("确定"+a+"?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s.c)({id:t.id,optType:e}).then(function(t){n.$message({type:"success",message:a+"成功!"}),n.fetchData()})}).catch(function(){})},edit:function(t,e){this.$router.push({name:"account-edit",params:{data:e}})},detail:function(t,e){this.$router.push({name:"account-detail",params:{data:e}})},currentPageChange:function(t){this.current_page=t,this.fetchData()}},components:{TitleLine:n("xE3b").a}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("title-line",{attrs:{txt:"账号管理",btn:t.btn},on:{btnClick:t.addAccount}}),t._v(" "),n("div",{staticStyle:{padding:"30px",background:"#F2F6FC","margin-bottom":"30px"}},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,rules:t.rules,model:t.form}},[n("el-form-item",{attrs:{label:"账号名称"}},[n("el-input",{attrs:{placeholder:"请输入账号名称"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"账号角色"}},[n("el-select",{attrs:{clearable:"",placeholder:"全部"},model:{value:t.form.roleId,callback:function(e){t.$set(t.form,"roleId",e)},expression:"form.roleId"}},t._l(t.roles,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),n("el-form-item",{attrs:{label:"使用人手机号",prop:"phone"}},[n("el-input",{model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"账号状态"}},[n("el-select",{attrs:{clearable:"",placeholder:"全部"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[n("el-option",{attrs:{label:"正常",value:"0"}}),t._v(" "),n("el-option",{attrs:{label:"冻结",value:"1"}})],1)],1),t._v(" "),n("el-row",[n("el-form-item",[n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["account-list-search"],expression:"['account-list-search']"}],attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")])],1)],1)],1)],1),t._v(" "),n("p",[t._v("共"+t._s(t.total_count)+"个账号")]),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{stripe:!0,data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"账号名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                "+t._s(e.row.username)+"\r\n            ")]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"账号角色"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                "+t._s(e.row.roleName)+"\r\n            ")]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"使用人"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                "+t._s(e.row.name)+"\r\n            ")]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"手机号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                "+t._s(e.row.phone)+"\r\n            ")]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"创建人"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                "+t._s(e.row.createUser)+"\r\n            ")]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"创建人角色"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                "+t._s(e.row.createUserRoleName)+"\r\n            ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"创建时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                "+t._s(new Date(e.row.createTime).Format("yyyy-MM-dd HH:mm:ss"))+"\r\n            ")]}}])}),t._v(" "),n("el-table-column",{attrs:{"class-name":"status-col",label:"账号状态",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:t.accountStatus[e.row.status].color}},[t._v(t._s(t.accountStatus[e.row.status].msg))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"270",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["正常"==t.accountStatus[e.row.status].msg&&1!=e.row.accountType?n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["account-list-offline"],expression:"['account-list-offline']"}],attrs:{size:"mini",type:"danger"},on:{click:function(n){t.freeze(e.row,1)}}},[t._v("冻结")]):t._e(),t._v(" "),"冻结"==t.accountStatus[e.row.status].msg?n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["account-list-online"],expression:"['account-list-online']"}],attrs:{size:"mini",type:"success"},on:{click:function(n){t.freeze(e.row,2)}}},[t._v("解冻")]):t._e(),t._v(" "),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["account-list-edit"],expression:"['account-list-edit']"}],attrs:{size:"mini",type:"warning"},on:{click:function(n){t.edit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["account-list-detail"],expression:"['account-list-detail']"}],attrs:{size:"mini",type:"primary"},on:{click:function(n){t.detail(e.$index,e.row)}}},[t._v("查看")])]}}])})],1),t._v(" "),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{background:!0,"current-page":t.current_page,"page-size":t.page_size,layout:"total, prev, pager, next, jumper",total:t.total_count},on:{"current-change":t.currentPageChange}})],1)],1)},staticRenderFns:[]};var u=n("vSla")(l,c,!1,function(t){n("0C01")},"data-v-fb894586",null);e.default=u.exports},wMsc:function(t,e,n){(t.exports=n("BkJT")(!1)).push([t.i,"\n.app-container .form[data-v-fb894586] {\n  margin-bottom: 50px;\n}\n.app-container .red[data-v-fb894586] {\n  color: #f56c6c;\n}\n.app-container .block[data-v-fb894586] {\n  margin: 50px 0 30px;\n  text-align: center;\n}\n.app-container .title[data-v-fb894586] {\n  font-size: 20px;\n  color: #606266;\n  margin-bottom: -5px;\n}\n.app-container .small-select[data-v-fb894586] {\n  width: 60px;\n}\n",""])}});