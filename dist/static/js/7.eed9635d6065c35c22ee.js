webpackJsonp([7],{"B+Md":function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.app-container[data-v-fb363b8a] {\n  padding-left: 50px;\n  padding-bottom: 100px;\n}\n.app-container .address-container[data-v-fb363b8a] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -webkit-flex;\n}\n.app-container .address-container .address[data-v-fb363b8a] {\n      margin-left: 5px;\n}\n.app-container .picTitle[data-v-fb363b8a] {\n    display: inline-block;\n    width: 100px;\n    font-size: 20px;\n    text-align: center;\n    color: orangered;\n    text-align: center;\n}\n.app-container .pic-container[data-v-fb363b8a] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -webkit-flex;\n}\n.app-container .avatar-uploader .el-upload[data-v-fb363b8a] {\n    border: 1px dashed #d9d9d9;\n    border-radius: 6px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n}\n.app-container .avatar-uploader .el-upload[data-v-fb363b8a]:hover {\n    border-color: #409EFF;\n}\n.app-container .avatar-uploader-icon[data-v-fb363b8a] {\n    font-size: 28px;\n    color: #8c939d;\n    width: 178px;\n    height: 178px;\n    line-height: 178px;\n    text-align: center;\n}\n.app-container .avatar[data-v-fb363b8a] {\n    width: 178px;\n    height: 178px;\n    display: block;\n}\n.app-container .title[data-v-fb363b8a] {\n    font-size: 30px;\n    color: #606266;\n}\n.app-container .form[data-v-fb363b8a] {\n    margin-top: 30px;\n    /*padding: 30px;*/\n    padding-bottom: 5px;\n    margin-right: 30px;\n    background: #F2F6FC;\n}\n.app-container .form .small-title[data-v-fb363b8a] {\n      font-size: 25px;\n      margin-bottom: 10px;\n      padding: 10px;\n      color: blue;\n}\n.app-container .form .btn[data-v-fb363b8a] {\n      margin-top: 30px;\n}\n",""])},YI7H:function(e,t,a){var r=a("B+Md");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("8bSs")("4c54fc48",r,!0)},eCJJ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("hRKE"),n=a.n(r),l=a("aA9S"),o=a.n(l),i=a("o1Jv"),s=a("TJdw"),c=a("ejxQ"),d=a("x1ym"),m=a("Kww8"),p=a.n(m),u={data:function(){var e=this;return o()({},c.a,{province:null,city:null,county:null,street:null,form:{agentName:null,roleId:null,province:null,city:null,county:null,street:null,contactsName:null,contactsPhone:null,contactsMail:null,agentType:"1",bizLicenseCode:null,bizLicenseImagePath:null,idCardNo:null,idCardFrontImagePath:null,idCardBackImagePath:null,bankAccountName:null,bankName:null,bankCoupletNo:null,bankAccountNo:null,expireTime:null,uniqueCode:null,username:null,pwd:null,confirmPassword:null},rules:{username:[{required:!0,trigger:"change",message:"请输入用户名"},{validator:d.b,trigger:"change"}],pwd:[{required:!0,trigger:"blur",message:"请输入密码"},{validator:d.a,trigger:"blur"}],confirmPassword:[{required:!0,trigger:"blur",message:"请再次输入密码"},{validator:d.a,trigger:"blur"},{validator:function(t,a,r){e.form.confirmPassword!==e.form.pwd?r(new Error("两次输入密码不一致!")):r()},trigger:"blur"}],agentName:[{required:!0,trigger:"blur",message:"请输入代理商名称"}],roleId:[{required:!0,trigger:"blur",message:"请输入角色"}],province:[{required:!0,trigger:"blur",message:"请输入省"}],city:[{required:!0,trigger:"blur",message:"请输入市区"}],county:[{required:!0,trigger:"blur",message:"请输入市区"}],street:[{required:!0,trigger:"blur",message:"请输入街道"}],contactsName:[{required:!0,trigger:"blur",message:"请输入联系人"}],contactsPhone:[{required:!0,trigger:"blur",message:"请输入联系电话"}],contactsMail:[{required:!0,trigger:"blur",message:"请输入联系地址"}],agentType:[{required:!0,trigger:"blur",message:"请选择代理商性质"}],bankAccountName:[{required:!0,trigger:"blur",message:"请输入银行账户名称"}],bankName:[{required:!0,trigger:"blur",message:"请输入开户行名称"}],bankAccountNo:[{required:!0,trigger:"blur",message:"请输入银行账号"}],expireTime:[{required:!0,trigger:"blur",message:"请输入有效时间"}],uniqueCode:[{required:!0,trigger:"blur",message:"请输入代理标识码"}]},daterange:[],info:[],data:[]})},computed:{listQuery:function(){return o()({},this.form,{startTime:this.daterange[0],endTime:this.daterange[1],informTypeInfo:this.info.indexOf("短信通知")>-1?1:0,informTypeEmail:this.info.indexOf("邮件通知")>-1?1:0,orderId:this.$route.params.id})}},created:function(){this.fetchAddressData(),window.this=this},mounted:function(){},watch:{},methods:{test:function(){console.log(this.form.agentType),console.log(n()(this.form.agentType))},getCode:function(){var e=this;Object(i.e)().then(function(t){console.log(t),200==t.code?e.form.uniqueCode=t.data:alert(t.msg)})},getNextLevel:function(e,t){var a=this;Object(i.d)({id:t}).then(function(t){a[e]=t.data})},fetchAddressData:function(){var e=this;Object(i.d)({id:0}).then(function(t){e.province=t.data})},fetchData:function(){var e=this;getOrderDetail(this.$route.params.id).then(function(t){var a=t.data;e.form.detatilId=t.data.orderDetail[0].id,e.data=[{key:"订单编号",value:a.orderNum,type:"string"},{key:"订单总额",value:a.payMoney/100,type:"string"},{key:"真实姓名",value:a.orderDetail[0].name,type:"string"},{key:"护照号",value:a.orderDetail[0].passportNo,type:"string"},{key:"手机号码",value:a.orderDetail[0].mobile,type:"string"},{key:"Email",value:a.linkEmail,type:"string"},{key:"支付单号",value:a.payNum,type:"string"},{key:"付款时间",value:a.payTime,type:"dateTime"},{key:"支付方式",value:e.payTypes[a.payType].msg,type:"string"}]})},onSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(console.log(t.form),!e)return!1;console.log("哈哈",t.form),t.form.pwd=p()(t.form.pwd),Object(i.a)(t.form).then(function(e){console.log(e),200==e.code&&(alert("新建成功"),history.back())})})},imgUploaded:function(e,t){this.form.bizLicenseImagePath=e.data},idCardFrontImageUploaded:function(e,t){console.log(e.data),this.form.idCardFrontImagePath=e.data},idCardFrontImageRemove:function(e,t){this.form.idCardFrontImagePath=null},idCardBackImageUploaded:function(e,t){console.log(e.data),this.form.idCardBackImagePath=e.data},idCardBackImageRemove:function(e,t){this.form.idCardBackImagePath=null},imgRemove:function(e,t){this.form.bizLicenseImagePath=null}},components:{PortraitTable:s.a}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("p",{staticClass:"title"},[e._v("新增代理商")]),e._v(" "),a("hr"),e._v(" "),a("el-form",{ref:"ruleForm",staticClass:"form",attrs:{model:e.form,rules:e.rules,"label-width":"130px"}},[a("div",{staticClass:"small-title"},[e._v("登录账号：")]),e._v(" "),a("el-form-item",{staticStyle:{width:"400px"},attrs:{label:"用户名：",prop:"username"}},[a("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"400px"},attrs:{label:"密码：",prop:"pwd",type:"password"}},[a("el-input",{attrs:{type:"password"},model:{value:e.form.pwd,callback:function(t){e.$set(e.form,"pwd",t)},expression:"form.pwd"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"400px"},attrs:{label:"确认密码：",prop:"confirmPassword"}},[a("el-input",{attrs:{type:"password"},model:{value:e.form.confirmPassword,callback:function(t){e.$set(e.form,"confirmPassword",t)},expression:"form.confirmPassword"}})],1),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"small-title",staticStyle:{"margin-top":"10px"}},[e._v("基本信息：")]),e._v(" "),a("el-form-item",{staticStyle:{width:"400px"},attrs:{label:"代理商名称",prop:"agentName"}},[a("el-input",{model:{value:e.form.agentName,callback:function(t){e.$set(e.form,"agentName",t)},expression:"form.agentName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"代理商角色",prop:"roleId"}},[a("el-select",{attrs:{placeholder:"请选择代理商角色",clearable:""},model:{value:e.form.roleId,callback:function(t){e.$set(e.form,"roleId",t)},expression:"form.roleId"}},e._l(e.roleId,function(e,t){return a("el-option",{key:t,attrs:{label:e,value:t}})}))],1),e._v(" "),a("div",{staticClass:"address-container"},[a("el-form-item",{attrs:{label:"代理商地区",prop:"province"}},[a("el-select",{attrs:{placeholder:"请选择省",clearable:""},model:{value:e.form.province,callback:function(t){e.$set(e.form,"province",t)},expression:"form.province"}},e._l(e.province,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id},nativeOn:{click:function(a){e.getNextLevel("city",t.id)}}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"","label-width":"0",prop:"city"}},[a("el-select",{staticClass:"address",attrs:{placeholder:"请选择市",clearable:""},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}},e._l(e.city,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id},nativeOn:{click:function(a){e.getNextLevel("county",t.id)}}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"","label-width":"0",prop:"county"}},[a("el-select",{staticClass:"address",attrs:{placeholder:"请选择区县",clearable:""},model:{value:e.form.county,callback:function(t){e.$set(e.form,"county",t)},expression:"form.county"}},e._l(e.county,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id},nativeOn:{click:function(a){e.getNextLevel("street",t.id)}}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"","label-width":"0",prop:"street"}},[a("el-select",{staticClass:"address",attrs:{placeholder:"请选择街道",clearable:""},model:{value:e.form.street,callback:function(t){e.$set(e.form,"street",t)},expression:"form.street"}},e._l(e.street,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)],1),e._v(" "),a("el-form-item",{staticStyle:{width:"400px"},attrs:{label:"联系人：",prop:"contactsName"}},[a("el-input",{model:{value:e.form.contactsName,callback:function(t){e.$set(e.form,"contactsName",t)},expression:"form.contactsName"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"400px"},attrs:{label:"联系电话：",prop:"contactsPhone"}},[a("el-input",{model:{value:e.form.contactsPhone,callback:function(t){e.$set(e.form,"contactsPhone",t)},expression:"form.contactsPhone"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"400px"},attrs:{label:"联系地址：",prop:"contactsMail"}},[a("el-input",{model:{value:e.form.contactsMail,callback:function(t){e.$set(e.form,"contactsMail",t)},expression:"form.contactsMail"}})],1),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"small-title",staticStyle:{"margin-top":"10px"}},[e._v("认证信息：")]),e._v(" "),a("el-form-item",{attrs:{label:"代理商性质",prop:"agentType"}},[a("el-select",{attrs:{placeholder:"请选择代理商性质",clearable:""},model:{value:e.form.agentType,callback:function(t){e.$set(e.form,"agentType",t)},expression:"form.agentType"}},e._l(e.type,function(e,t){return a("el-option",{key:t,attrs:{label:e,value:t}})}))],1),e._v(" "),1==e.form.agentType?a("div",[a("el-form-item",{staticStyle:{width:"400px"},attrs:{label:"营业执照代码："}},[a("el-input",{model:{value:e.form.bizLicenseCode,callback:function(t){e.$set(e.form,"bizLicenseCode",t)},expression:"form.bizLicenseCode"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"营业执照副本"}},[a("el-upload",{staticClass:"upload-demo",attrs:{"list-type":"picture",action:"/image/uploadfile",name:"file",limit:1,"on-success":e.imgUploaded,"on-remove":e.imgRemove}},[a("el-button",{attrs:{type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("如需更换图片，请点击图片右上角删除后重新上传")])],1)],1)],1):e._e(),e._v(" "),2==e.form.agentType?a("div",[a("el-form-item",{staticStyle:{width:"400px"},attrs:{label:"身份证号码：",prop:"title"}},[a("el-input",{model:{value:e.form.idCardNo,callback:function(t){e.$set(e.form,"idCardNo",t)},expression:"form.idCardNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"身份证照片"}},[a("div",{staticClass:"pic-container"},[a("span",{staticClass:"picTitle"},[e._v("国徽面：")]),e._v(" "),a("el-upload",{staticClass:"upload-demo",attrs:{"list-type":"picture",action:"/image/uploadfile",name:"file",limit:1,"on-success":e.idCardFrontImageUploaded,"on-remove":e.idCardFrontImageRemove}},[a("el-button",{attrs:{type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("如需更换图片，请点击图片右上角删除后重新上传")])],1),e._v(" "),a("span",{staticClass:"picTitle"},[e._v("信息面：")]),e._v(" "),a("el-upload",{staticClass:"upload-demo",attrs:{"list-type":"picture",action:"/image/uploadfile",name:"file",limit:1,"on-success":e.idCardBackImageUploaded,"on-remove":e.idCardBackImageRemove}},[a("el-button",{attrs:{type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("如需更换图片，请点击图片右上角删除后重新上传")])],1)],1)])],1):e._e(),e._v(" "),a("div",{staticClass:"small-title",staticStyle:{"margin-top":"10px"}},[e._v("银行账号：")]),e._v(" "),a("el-form-item",{staticStyle:{width:"400px"},attrs:{label:"名称：",prop:"bankAccountName"}},[a("el-input",{model:{value:e.form.bankAccountName,callback:function(t){e.$set(e.form,"bankAccountName",t)},expression:"form.bankAccountName"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"400px"},attrs:{label:"开户行：",prop:"bankName"}},[a("el-input",{model:{value:e.form.bankName,callback:function(t){e.$set(e.form,"bankName",t)},expression:"form.bankName"}})],1),e._v(" "),1==e.form.agentType?a("el-form-item",{staticStyle:{width:"400px"},attrs:{label:"联行号：",prop:"title"}},[a("el-input",{model:{value:e.form.bankCoupletNo,callback:function(t){e.$set(e.form,"bankCoupletNo",t)},expression:"form.bankCoupletNo"}})],1):e._e(),e._v(" "),a("el-form-item",{staticStyle:{width:"400px"},attrs:{label:"账号：",prop:"bankAccountNo"}},[a("el-input",{model:{value:e.form.bankAccountNo,callback:function(t){e.$set(e.form,"bankAccountNo",t)},expression:"form.bankAccountNo"}})],1),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"small-title",staticStyle:{"margin-top":"10px"}},[e._v("使用期限：")]),e._v(" "),a("el-form-item",{attrs:{label:"时间",prop:"expireTime"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.form.expireTime,callback:function(t){e.$set(e.form,"expireTime",t)},expression:"form.expireTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"代理商标识码：",prop:"uniqueCode"}},[a("el-input",{staticStyle:{width:"270px",float:"left"},model:{value:e.form.uniqueCode,callback:function(t){e.$set(e.form,"uniqueCode",t)},expression:"form.uniqueCode"}}),e._v(" "),a("el-button",{staticStyle:{float:"left","margin-left":"20px"},attrs:{type:"primary"},on:{click:e.getCode}},[e._v("点击生成代理商标识码")])],1),e._v(" "),a("el-form-item",{staticClass:"btn",attrs:{size:"large"}},[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["agent-add-cancel"],expression:"['agent-add-cancel']"}],attrs:{type:"info"},nativeOn:{click:function(t){e.$router.back()}}},[e._v("取消")]),e._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["agent-add-publish"],expression:"['agent-add-publish']"}],attrs:{type:"primary"},on:{click:function(t){e.onSubmit("ruleForm")}}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]};var b=a("vSla")(u,f,!1,function(e){a("YI7H")},"data-v-fb363b8a",null);t.default=b.exports},x1ym:function(e,t,a){"use strict";t.b=function(e,t,a){t?/^[A-Za-z\u4e00-\u9fa5]{3,15}$/.test(t)?a():a(new Error("用户名为 3 到 15 个字符组成，包括汉字，大小写字母（不区分大小写）")):a(new Error("请输入账号"))},t.a=function(e,t,a){if(!/^.{8,}$/.test(t))return a(new Error("密码最小长度为 8 个字符"));a()}}});