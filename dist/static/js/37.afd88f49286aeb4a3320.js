webpackJsonp([37],{R6vs:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=o("NLJq"),l={data:function(){return{ruleForm:{id:this.$route.query.id,foul:""},reason:["发布广告信息","发布重要信息","发布描述错误信息","使用极限用语","页面信息于实际描述不符","发布平台违禁品","发布违法商品","其他"],rules:{foul:[{required:!0,trigger:"change",message:"请选择理由"}]}}},created:function(){},methods:{goodsfoul:function(e){Object(t.d)(e).then(function(e){200==e.code&&(alert("下架成功"),history.back())})},submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log("submit!"),console.log("调试2",r.ruleForm),r.goodsfoul(r.ruleForm)})},resetForm:function(e){this.$refs[e].resetFields()},goBack:function(){history.back()}}},n={render:function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"undercarriage-form"},[o("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"130px"}},[o("el-form-item",{attrs:{label:"违规下架理由",prop:"foul"}},[o("el-select",{staticClass:"foul",attrs:{placeholder:"请选择"},model:{value:e.ruleForm.foul,callback:function(r){e.$set(e.ruleForm,"foul",r)},expression:"ruleForm.foul"}},e._l(e.reason,function(e,r){return o("el-option",{key:r,attrs:{label:e,value:e}})}))],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),o("el-button",{on:{click:e.goBack}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var s=o("VU/8")(l,n,!1,function(e){o("TnNa")},"data-v-066f159b",null);r.default=s.exports},TnNa:function(e,r,o){var t=o("j9o9");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);o("rjj0")("11c60e4e",t,!0)},j9o9:function(e,r,o){(e.exports=o("FZ+f")(!1)).push([e.i,"\n.undercarriage-form[data-v-066f159b] {\n  margin-top: 30px;\n}\n.foul[data-v-066f159b] {\n  width: 40%;\n}\n",""])}});