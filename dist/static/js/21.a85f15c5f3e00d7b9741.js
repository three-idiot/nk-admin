webpackJsonp([21],{kCmG:function(e,t,a){var n=a("oSqI");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("6imX")("0d73507a",n,!0)},m4wj:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Edqs"),s=a.n(n),i=a("L9TO"),r=a("6DDL"),l={data:function(){return{statusEnum:r.a,listLoading:!1,current_page:1,max_page:0,page_size:20,total_count:null,daterange:[],form:{publisher:"",title:"",status:"",top:""},list:[{newsNo:"222",title:"资讯1",publisher:"唐先森",createTime:"20180715",status:3,top:!0,id:100}],selectedLists:[]}},computed:{listQuery:function(){return s()({},this.form,{startUpDate:this.daterange&&this.daterange[0]||"",endUpDate:this.daterange&&this.daterange[1]||"",pageIndex:this.current_page,pageSize:this.page_size})}},filters:{statusFilter:function(e){return r.a.status[e].msg}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(i.j)(this.listQuery).then(function(t){e.listLoading=!1,200==t.code&&(e.list=t.data.data,e.total_count=t.data.total_count,e.current_page=t.data.current_page,e.max_page=t.data.max_page)}).catch(function(e){console.error("",e)})},currentPageChange:function(e){this.current_page=e,this.fetchData()},onSubmit:function(){this.fetchData()},add:function(){this.$router.push({name:"news-add"})},goDetail:function(e){this.$router.push({name:"news-detail",params:{id:e}})},goEdit:function(e){var t=this;this.listLoading=!0,Object(i.i)(e).then(function(e){t.listLoading=!1,e.data&&t.$router.push({name:"news-edit",params:{id:e.data}})})},goUndercarriage:function(e){var t=this;this.$confirm("是否下架本条资讯?","资讯下架",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){Object(i.d)({newsIds:[e],status:2,remark:""}).then(function(e){200==e.code?(t.$message({message:"下架成功",type:"success"}),t.fetchData()):t.$message({message:e.msg,type:"error"})})}).catch(function(){})},toggleSelection:function(e){var t=this;e&&e.forEach(function(e){t.$refs.newsTable.toggleRowSelection(e)})},handleSelectionChange:function(e){e&&e.length<=3?this.selectedLists=e:(this.toggleSelection([e[3]]),this.$message({message:"最多只能选择3条资讯来置顶",type:"warning"}))},stick:function(){var e=this;this.$confirm("已选择"+this.selectedLists.length+"条资讯，是否对资讯置顶?","资讯置顶",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info",center:!0}).then(function(){var t=[];e.selectedLists.map(function(e,a){t.push(e.id)});var a={newsIds:t,top:1};Object(i.k)(a).then(function(t){200==t.code?(e.$message({message:"置顶成功",type:"success"}),e.fetchData()):e.$message.error(t.msg)})}).catch(function(){})}},components:{TitleLine:a("xE3b").a}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("title-line",{attrs:{txt:"资讯列表"}}),e._v(" "),a("div",{staticStyle:{padding:"20px",background:"#F2F6FC"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.form}},[a("el-form-item",{attrs:{label:"资讯标题"}},[a("el-input",{attrs:{placeholder:"请输入资讯标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"发布人"}},[a("el-input",{attrs:{placeholder:"请输入发布人姓名"},model:{value:e.form.publisher,callback:function(t){e.$set(e.form,"publisher",t)},expression:"form.publisher"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"发布日期"}},[a("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy-MM-dd HH:mm:ss","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.daterange,callback:function(t){e.daterange=t},expression:"daterange"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"资讯状态"}},[a("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[a("el-option",{attrs:{label:"正常",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"失效",value:"2"}})],1)],1),e._v(" "),a("el-row",{staticStyle:{height:"40px"}},[a("el-form-item",[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["news-list-search"],expression:"['news-list-search']"}],attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["news-list-add"],expression:"['news-list-add']"}],staticClass:"add-item",attrs:{type:"danger",icon:"el-icon-add"},nativeOn:{click:function(t){e.add(t)}}},[e._v("新增资讯")]),e._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["news-list-setTop"],expression:"['news-list-setTop']"}],staticClass:"stick-item",attrs:{type:"primary",disabled:!e.selectedLists.length},nativeOn:{click:function(t){e.stick(t)}}},[e._v("置顶")])],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"total"},[e._v("资讯总数：共"),a("span",[e._v(e._s(e.list.length))]),e._v("条")]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"newsTable",staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"35"}}),e._v(" "),a("el-table-column",{staticClass:"table-item",attrs:{align:"center",label:"资讯编号"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.newsNo))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"资讯标题"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.title))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"发布人"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"link-type"},[e._v(e._s(t.row.publisher))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"发布时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.createTime?t.row.createTime:""))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"资讯状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{class:e.statusEnum.status[t.row.status].color},[e._v(e._s(e._f("statusFilter")(t.row.status)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center","class-name":"small-padding fixed-width",label:"操作",width:"340"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["news-list-detail"],expression:"['news-list-detail']"}],attrs:{size:"mini",type:"success",plain:""},on:{click:function(a){e.goDetail(t.row.id)}}},[e._v("\r\n            查看详情\r\n          ")]),e._v(" "),1==t.row.status?a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["news-list-edit"],expression:"['news-list-edit']"}],attrs:{type:"primary",size:"mini"},on:{click:function(a){e.goEdit(t.row.id)}}},[e._v("\r\n            编辑\r\n          ")]):e._e(),e._v(" "),1==t.row.status?a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["news-list-offline"],expression:"['news-list-offline']"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){e.goUndercarriage(t.row.id)}}},[e._v("\r\n            下架\r\n          ")]):e._e()]}}])})],1),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:!0,"current-page":e.current_page,"page-size":e.page_size,layout:"total, prev, pager, next, jumper",total:e.total_count},on:{"current-change":e.currentPageChange}})],1)],1)},staticRenderFns:[]};var c=a("D8HT")(l,o,!1,function(e){a("kCmG")},"data-v-6f9f0b9a",null);t.default=c.exports},oSqI:function(e,t,a){(e.exports=a("bKW+")(!1)).push([e.i,"\n.app-container[data-v-6f9f0b9a] {\n  padding-left: 50px;\n}\n.app-container .title[data-v-6f9f0b9a] {\n    font-size: 30px;\n    color: #606266;\n}\n.app-container .btn-container[data-v-6f9f0b9a] {\n    padding-top: 30px;\n    text-align: center;\n}\n.app-container span.danger[data-v-6f9f0b9a] {\n    color: red;\n}\n.app-container .total[data-v-6f9f0b9a] {\n    margin: 5px 0;\n}\n.app-container .total span[data-v-6f9f0b9a] {\n      color: red;\n}\n",""])}});