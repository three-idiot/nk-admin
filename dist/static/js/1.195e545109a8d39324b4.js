webpackJsonp([1],{kODO:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("aA9S"),i=a.n(r),l=a("L9TO"),o=a("xE3b"),n=a("tyP1"),s={data:function(){return{action:"/api/image/uploadfile",ruleForm:{adNo:"",id:"",title:"",images:[],detail:"",url:"",width:"",height:"",sort:"",validTime:""},rules:{images:[{type:"array",required:!0,trigger:"change",message:"请上传图片"}],title:[{required:!0,trigger:"blur",message:"请输入资讯标题"}],detail:[{required:!0,trigger:"blur",message:"请添加资讯详情"}],url:[{required:!0,trigger:"blur",message:"请配置链接URL地址"}],width:[{required:!0,trigger:"blur",message:"请输入广告位宽度"}],height:[{required:!0,trigger:"blur",message:"请输入广告位高度"}],sort:[{required:!0,trigger:"change",message:"请选择广告位置"}],validTime:[{required:!0,trigger:"change",message:"请选择有效期"}]},editorSetting:{width:600,height:400}}},computed:{isEdit:function(){return this.$route.query&&this.$route.query.id}},created:function(){var e=this.$route.query&&this.$route.query.id;e&&this.getAdsEditInfo(e)},methods:{handleDelImg:function(e,t){this.ruleForm.images.splice(t)},handleAvatarSuccess:function(e,t){console.log("图片上传返回：",e,t),this.ruleForm.images.push({goodPath:e.data,localPath:URL.createObjectURL(t.raw)})},beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传图片大小不能超过 2MB!"),t},getAdsEditInfo:function(e){var t=this;this.listLoading=!0,Object(l.g)(e).then(function(e){if(t.listLoading=!1,e.data){var a=e.data;t.ruleForm={adNo:a.adNo,id:a.id,title:a.title,images:a.images,detail:a.detail,url:a.url,sort:a.sort,validTime:a.validTime}}})},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var a=i()({},t.ruleForm),r=[];a.images.map(function(e){return e.goodPath.indexOf("https")>-1&&(e.localPath=e.goodPath,e.goodPath=/https:\/\/image.le-99.xyz\/(images\/\w+\.\w+)(\?\w+)/.exec(e.goodPath)[1]),r.push({localPath:e.localPath,goodPath:e.goodPath}),e}),a.images=r,t.isEdit?Object(l.e)(a).then(function(e){200==e.code&&(t.$message({message:"修改成功",type:"success"}),setTimeout(function(){t.$router.push({name:"adslist"})},1e3))}):Object(l.a)(a).then(function(e){200==e.code&&(t.$message({message:"添加成功",type:"success"}),setTimeout(function(){t.$router.push({name:"adslist"})},1e3))})})},cancel:function(){this.$router.back(-1)}},components:{TitleLine:o.a,editor:n.a}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("title-line",{attrs:{txt:e.ruleForm.id?"编辑广告":"新建广告"}}),e._v(" "),a("el-form",{ref:"ruleForm",staticClass:"form",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"130px"}},[a("el-form-item",{staticStyle:{width:"312px"},attrs:{label:"广告编号",prop:"adNo"}},[a("el-input",{attrs:{disabled:e.isEdit},model:{value:e.ruleForm.adNo,callback:function(t){e.$set(e.ruleForm,"adNo",t)},expression:"ruleForm.adNo"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"312px"},attrs:{label:"广告标题",prop:"title"}},[a("el-input",{model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"广告图片",prop:"images"}},[e._l(e.ruleForm.images,function(t,r){return a("span",{key:r,staticClass:"news-img"},[a("i",{staticClass:"del-btn el-icon-remove",on:{click:function(a){e.handleDelImg(t,r)}}}),e._v(" "),a("img",{attrs:{src:t.localPath||t.goodPath,alt:"图片"}})])}),e._v(" "),a("el-upload",{staticClass:"avatar-uploader",attrs:{multiple:!0,"with-credentials":!0,"show-file-list":!1,action:e.action,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],2),e._v(" "),a("el-form-item",{staticStyle:{width:"312px"},attrs:{label:"链接URL地址",prop:"url"}},[a("el-input",{model:{value:e.ruleForm.url,callback:function(t){e.$set(e.ruleForm,"url",t)},expression:"ruleForm.url"}})],1),e._v(" "),e.isEdit?e._e():a("el-form-item",{staticStyle:{width:"312px"},attrs:{label:"广告位宽度",prop:"width"}},[a("el-input",{attrs:{type:"number"},model:{value:e.ruleForm.width,callback:function(t){e.$set(e.ruleForm,"width",e._n(t))},expression:"ruleForm.width"}})],1),e._v(" "),e.isEdit?e._e():a("el-form-item",{staticStyle:{width:"312px"},attrs:{label:"广告位高度",prop:"height"}},[a("el-input",{attrs:{type:"number"},model:{value:e.ruleForm.height,callback:function(t){e.$set(e.ruleForm,"height",e._n(t))},expression:"ruleForm.height"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"312px"},attrs:{label:"选择广告位置",prop:"sort"}},[a("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.ruleForm.sort,callback:function(t){e.$set(e.ruleForm,"sort",t)},expression:"ruleForm.sort"}},[a("el-option",{attrs:{label:"首页第一广告位",value:1}}),e._v(" "),a("el-option",{attrs:{label:"首页第二广告位",value:2}}),e._v(" "),a("el-option",{attrs:{label:"首页第三广告位",value:3}}),e._v(" "),a("el-option",{attrs:{label:"资讯页随机广告",value:99}})],1)],1),e._v(" "),a("el-form-item",{staticStyle:{width:"312px"},attrs:{label:"广告有效期",prop:"validTime"}},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期"},model:{value:e.ruleForm.validTime,callback:function(t){e.$set(e.ruleForm,"validTime",t)},expression:"ruleForm.validTime"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"312px"},attrs:{label:"广告详情",prop:"details"}},[a("editor",{staticClass:"editor",attrs:{value:e.ruleForm.detail,setting:e.editorSetting},on:{input:function(t){return e.ruleForm.detail=t}}})],1),e._v(" "),a("el-form-item",[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["ads-add-cancel"],expression:"['ads-add-cancel']"}],attrs:{type:"info"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["ads-add-publish"],expression:"['ads-add-publish']"}],attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("发布")])],1)],1)],1)},staticRenderFns:[]};var u=a("vSla")(s,d,!1,function(e){a("rb5D")},"data-v-489ae0ac",null);t.default=u.exports},rb5D:function(e,t,a){var r=a("sPmS");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("8bSs")("8abbbb94",r,!0)},sPmS:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.app-container[data-v-489ae0ac] {\n  padding-left: 50px;\n}\n.app-container .title[data-v-489ae0ac] {\n    font-size: 30px;\n    color: #606266;\n}\n.app-container .form[data-v-489ae0ac] {\n    margin-top: 30px;\n    padding: 30px;\n    padding-bottom: 5px;\n    background: #f2f6fc;\n}\n.app-container .form .btn[data-v-489ae0ac] {\n      margin-top: 30px;\n}\n.avatar-uploader .el-upload[data-v-489ae0ac] {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload[data-v-489ae0ac]:hover {\n  border-color: #409eff;\n}\n.avatar-uploader-icon[data-v-489ae0ac] {\n  font-size: 28px;\n  color: #8c939d;\n  width: 120px;\n  height: 120px;\n  line-height: 120px;\n  text-align: center;\n  background: #fff;\n}\n.avatar[data-v-489ae0ac] {\n  width: 120px;\n  height: 120px;\n  display: block;\n}\n.news-img[data-v-489ae0ac] {\n  width: 120px;\n  height: 120px;\n  float: left;\n  margin: 0 10px 10px 0;\n  position: relative;\n}\n.news-img .del-btn[data-v-489ae0ac] {\n    position: absolute;\n    top: -8px;\n    right: -8px;\n    font-size: 20px;\n}\n.news-img img[data-v-489ae0ac] {\n    width: 100%;\n    height: 100%;\n    display: block;\n}\n",""])}});