webpackJsonp([31],{OpF0:function(t,e,n){var r=n("tzvs");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("6imX")("49d02847",r,!0)},U4F7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Edqs"),a=n.n(r),s=n("vZz+"),o=n("xE3b"),i=n("R/pE"),l={data:function(){return a()({},i.a,{form:{},rules:{name:[{required:!0,trigger:"blur"}]}})},computed:{listQuery:function(){return a()({},this.form,{menus:this.getMenus()})}},created:function(){},methods:{onSubmit:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return e.$alert("请将表单填写完整","提示",{confirmButtonText:"确定"}),!1;e.add(e.listQuery)})},objectSpanMethod:function(t){var e=t.row;t.column,t.rowIndex;if(0===t.columnIndex)return e.span?{rowspan:e.span,colspan:1}:{rowspan:0,colspan:0}},add:function(t){var e=this;Object(s.a)(t).then(function(t){e.$alert("添加成功","提示",{confirmButtonText:"确定",callback:function(t){e.$router.push({name:"permission-list"})}})})},getMenus:function(){var t=this,e=[];return this.permissionList.forEach(function(n){n.status&&e.push({feId:n.id,btnFeIds:t.getBtns(n)})}),e},getBtns:function(t){var e=t.btns.filter(function(t){return t.status});return(e=e.map(function(t){return t.id})).join(",")},selectAll:function(t){this.permissionList.forEach(function(e){e.status=t,e.btns.forEach(function(e){e.status=t})})}},components:{TitleLine:o.a}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("title-line",{attrs:{txt:"新建角色"}}),t._v(" "),n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm form",attrs:{model:t.form,rules:t.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[n("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"角色描述",prop:"remark"}},[n("el-input",{attrs:{type:"textarea",rows:2,maxlength:"150"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"权限列表"}},[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){t.selectAll(!0)}}},[t._v("全选")]),t._v(" "),n("el-button",{attrs:{size:"small",type:"warning"},on:{click:function(e){t.selectAll(!1)}}},[t._v("重置")])],1),t._v(" "),n("el-table",{attrs:{stripe:!0,data:t.permissionList,"span-method":t.objectSpanMethod,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{prop:"spanName",label:"分类",width:"130"}}),t._v(" "),n("el-table-column",{attrs:{label:"页面",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-checkbox",{model:{value:e.row.status,callback:function(n){t.$set(e.row,"status",n)},expression:"scope.row.status"}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"amount1",label:"按钮"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.btns,function(r){return n("el-checkbox",{key:r.id,attrs:{disabled:!e.row.status},model:{value:r.status,callback:function(e){t.$set(r,"status",e)},expression:"item.status"}},[t._v(t._s(r.name))])})}}])})],1),t._v(" "),n("el-form-item",{staticClass:"btn",attrs:{size:"large"}},[n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["permission-add-cancel"],expression:"['permission-add-cancel']"}],attrs:{type:"info"},nativeOn:{click:function(e){t.$router.back()}}},[t._v("取消")]),t._v(" "),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["permission-add-publish"],expression:"['permission-add-publish']"}],attrs:{type:"primary"},on:{click:function(e){t.onSubmit("ruleForm")}}},[t._v("保存")])],1)],1)],1)},staticRenderFns:[]};var u=n("D8HT")(l,c,!1,function(t){n("OpF0")},"data-v-3243cdb6",null);e.default=u.exports},tzvs:function(t,e,n){(t.exports=n("bKW+")(!1)).push([t.i,"\n.app-container[data-v-3243cdb6] {\n  padding-left: 50px;\n}\n.app-container .title[data-v-3243cdb6] {\n    font-size: 30px;\n    color: #606266;\n}\n.app-container .form[data-v-3243cdb6] {\n    margin-top: 30px;\n}\n.app-container .form .btn[data-v-3243cdb6] {\n      margin-top: 30px;\n}\n",""])}});