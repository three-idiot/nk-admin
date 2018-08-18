<template>
<div class="app-container">
    <p class="title">新增代理商</p>
    <hr/>
    <el-form ref="ruleForm" :model="form" :rules="rules"  class="form" label-width="130px">
        <div class="small-title">登录账号：</div>
        <el-form-item label="用户名：" prop="username" style="width: 400px;">
            <el-input v-model="form.username"></el-input>
        </el-form-item>

        <el-form-item label="密码：" prop="pwd" type="password" style="width: 400px;">
            <el-input type="password" v-model="form.pwd"></el-input>
        </el-form-item>

        <el-form-item label="确认密码：" prop="confirmPassword"   style="width: 400px;">
            <el-input type="password" v-model="confirmPassword"></el-input>
        </el-form-item>

        <hr>

        <div class="small-title" style="margin-top: 10px;">基本信息：</div>
        <el-form-item label="代理商名称" prop="name" style="width: 400px;">
            <el-input v-model="form.name"></el-input>
        </el-form-item>


        <el-form-item label="代理商角色" prop="roleId">
            <el-select v-model="form.roleId" placeholder="请选择代理商角色" clearable>
                <el-option :label="val" :value="key" :key="key" v-for="(val, key) in roleId"></el-option>
            </el-select>
        </el-form-item>

        <div class="address-container">
            <el-form-item label="代理商地区" prop="province">
                <el-select v-model="form.province" placeholder="请选择省" clearable >
                    <el-option :label="item.name" :value="item.id" v-for="item in province" @click.native="getNextLevel('city', item.id)"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="" label-width="0" prop="city">
                <el-select v-model="form.city" placeholder="请选择市" clearable class="address">
                    <el-option :label="item.name" :value="item.id" v-for="item in city" @click.native="getNextLevel('county', item.id)"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="" label-width="0" prop="county">
                <el-select v-model="form.county" placeholder="请选择区县" clearable class="address">
                    <el-option :label="item.name" :value="item.id" v-for="item in county" @click.native="getNextLevel('street', item.id)"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="" label-width="0" prop="street">
                <el-select v-model="form.street" placeholder="请选择街道" clearable class="address">
                    <el-option :label="item.name" :value="item.id" v-for="item in street"></el-option>
                </el-select>
            </el-form-item>
        </div>


        <el-form-item label="联系人：" prop="contractor" style="width: 400px;">
            <el-input v-model="form.contractor"></el-input>
        </el-form-item>

        <el-form-item label="联系电话：" prop="phone" style="width: 400px;">
            <el-input v-model="form.phone"></el-input>
        </el-form-item>

        <el-form-item label="联系地址：" prop="mail" style="width: 400px;">
            <el-input v-model="form.mail"></el-input>
        </el-form-item>


        <hr>


        <div class="small-title" style="margin-top: 10px;">认证信息：</div>

        <el-form-item label="代理商性质" prop="type">
            <el-select v-model="form.type" placeholder="请选择代理商性质" clearable>
                <el-option :label="val" :value="key" :key="key"  v-for="(val,key) in type"></el-option>
            </el-select>
        </el-form-item>

        <!--// 选择代理商性质为企业-->
        <div v-if="form.type == 1">
            <el-form-item label="营业执照代码："  style="width: 400px;">
                <el-input v-model="form.bizLicenseCode"></el-input>
            </el-form-item>

            <el-form-item label="营业执照副本" >
                <!-- TODO 上线之后这里要把api前缀去掉 -->
                <el-upload list-type="picture" class="upload-demo" action='/api/image/uploadfile' name='file' :limit="1" :on-success="imgUploaded" :on-remove="imgRemove">
                    <el-button type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">如需更换图片，请点击图片右上角删除后重新上传</div>
                </el-upload>
            </el-form-item>
        </div>



        <!--// 选择代理商性质为个人-->
        <div v-if="form.type == 2">
            <el-form-item label="身份证号码：" prop="title" style="width: 400px;">
                <el-input v-model="form.idCardNo"></el-input>
            </el-form-item>

            <el-form-item label="身份证照片">
                <!-- TODO 上线之后这里要把api前缀去掉 -->
                <div class="pic-container">
                    <span class="picTitle">国徽面：</span>
                    <el-upload list-type="picture" class="upload-demo" action='/api/image/uploadfile' name='file' :limit="1" :on-success="idCardFrontImageUploaded" :on-remove="idCardFrontImageRemove">
                        <el-button type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">如需更换图片，请点击图片右上角删除后重新上传</div>
                    </el-upload>
                    <span class="picTitle">信息面：</span>
                    <el-upload list-type="picture" class="upload-demo" action='/api/image/uploadfile' name='file' :limit="1" :on-success="idCardBackImageUploaded" :on-remove="idCardBackImageRemove">
                        <el-button type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">如需更换图片，请点击图片右上角删除后重新上传</div>
                    </el-upload>
                </div>
            </el-form-item>
        </div>





        <div class="small-title" style="margin-top: 10px;">银行账号：</div>

        <el-form-item label="名称：" prop="bankAccountName" style="width: 400px;">
            <el-input v-model="form.bankAccountName"></el-input>
        </el-form-item>

        <el-form-item label="开户行：" prop="bankName" style="width: 400px;">
            <el-input v-model="form.bankName"></el-input>
        </el-form-item>

        <el-form-item label="联行号：" prop="title" style="width: 400px;" v-if="form.type == 1">
            <el-input v-model="form.bankCoupletNo"></el-input>
        </el-form-item>

        <el-form-item label="账号：" prop="bankAccountNo" style="width: 400px;">
            <el-input v-model="form.bankAccountNo"></el-input>
        </el-form-item>

        <hr>

        <div class="small-title" style="margin-top: 10px;">使用期限：</div>


        <el-form-item label="时间" prop="expireTime">
            <el-date-picker
                v-model="form.expireTime"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
            </el-date-picker>
        </el-form-item>

        <el-form-item label="代理商标识码：" prop="uniqueCode">
            <el-input v-model="form.uniqueCode" style="width: 270px;float: left;"></el-input>
            <el-button type="primary" style="float: left;margin-left: 20px;">点击生成代理商标识码</el-button>
        </el-form-item>




        <el-form-item size="large" class="btn">
            <el-button type="info" @click.native="$router.back()">取消</el-button>
            <el-button type="primary" @click="onSubmit('ruleForm')">提交</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import {
    getOrderDetail,
    updateOrder,
    getLowerAreas
} from "@/api/agent";
import PortraitTable from "@/components/PortraitTable/index.vue";
import agentMap from "@/map/agent"
import { checkNum, checkUsername, checkPassword } from "@/rules";
export default {
    data() {
        var validatePass2 = (rule, value, callback) => {
            if (this.confirmPassword !== this.form.pwd) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return Object.assign({}, agentMap, {
            province: null,
            city: null,
            county: null,
            street: null,
            form: {
                name: null,
                roleId: null,
                province: null,
                city: null,
                county: null,
                street: null,
                contractor: null,
                phone: null,
                mail: null,
                type: '1',
                bizLicenseCode: null,
                bizLicenseImagePath: null,
                idCardNo: null,
                idCardFrontImagePath: null,
                idCardBackImagePath: null,
                bankAccountName: null,
                bankName: null,
                bankCoupletNo: null,
                bankAccountNo: null,
                expireTime: null,
                uniqueCode: null,
                username: null,
                pwd: null,
            },
            confirmPassword: null,
            rules: {
                username: [
                    { required: true, trigger: 'blur', message: '请输入用户名' },
                    { validator: checkUsername, trigger: 'blur' }
                ],
                pwd: [
                    { required: true, trigger: 'blur', message: '请输入密码' },
                    { validator: checkPassword, trigger: 'blur' }
                ],
                confirmPassword: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                name:[
                    { required: true, trigger: 'blur', message: '请输入代理商名称' },
                ],
                roleId: [
                    { required: true, trigger: 'blur', message: '请输入角色' },
                ],
                province: [
                    { required: true, trigger: 'blur', message: '请输入省' },
                ],
                city: [
                    { required: true, trigger: 'blur', message: '请输入市区' },
                ],
                county: [
                    { required: true, trigger: 'blur', message: '请输入市区' },
                ],
                street: [
                    { required: true, trigger: 'blur', message: '请输入街道' },
                ],
                contractor: [
                    { required: true, trigger: 'blur', message: '请输入联系人' },
                ],
                phone: [
                    { required: true, trigger: 'blur', message: '请输入联系电话' },
                ],
                mail: [
                    { required: true, trigger: 'blur', message: '请输入联系地址' },
                ],
                type: [
                    { required: true, trigger: 'blur', message: '请选择代理商性质' },
                ],
                bankAccountName: [
                    { required: true, trigger: 'blur', message: '请输入银行账户名称' },
                ],
                bankName: [
                    { required: true, trigger: 'blur', message: '请输入开户行名称' },
                ],
                bankAccountNo: [
                    { required: true, trigger: 'blur', message: '请输入银行账号' },
                ],
                expireTime: [
                    { required: true, trigger: 'blur', message: '请输入有效时间' },
                ],
                uniqueCode: [
                    { required: true, trigger: 'blur', message: '请输入代理标识码' },
                ],
            },
            daterange: [],
            info: [],
            data: [],
        });
    },
    computed: {
        listQuery() {
            return Object.assign({}, this.form, {
                startTime: this.daterange[0],
                endTime: this.daterange[1],
                informTypeInfo: this.info.indexOf('短信通知') > -1 ? 1 : 0,
                informTypeEmail: this.info.indexOf('邮件通知') > -1 ? 1 : 0,
                orderId: this.$route.params.id,
            });
        }
    },
    created() {
        // this.fetchData();
        this.fetchAddressData();
    },
    watch: {
    },
    methods: {
        getNextLevel(nextLevel, id) {
            getLowerAreas( {id: id} ).then( res => {
                this[nextLevel] = res.data;
            })
        },
        fetchAddressData() {
            getLowerAreas({id: 0}).then( res => {
                // console.log( res );
                this.province = res.data;
            })
        },
        fetchData() {
            getOrderDetail(this.$route.params.id).then(response => {
                const resData = response.data;
                this.form.detatilId = response.data.orderDetail[0].id;
                this.data = [{
                        key: "订单编号",
                        value: resData.orderNum,
                        type: "string"
                    },
                    {
                        key: "订单总额",
                        value: resData.payMoney / 100,
                        type: "string"
                    },
                    {
                        key: "真实姓名",
                        value: resData.orderDetail[0].name,
                        type: "string"
                    },
                    {
                        key: "护照号",
                        value: resData.orderDetail[0].passportNo,
                        type: "string"
                    },
                    {
                        key: "手机号码",
                        value: resData.orderDetail[0].mobile,
                        type: "string"
                    },
                    {
                        key: "Email",
                        value: resData.linkEmail,
                        type: "string"
                    },
                    {
                        key: "支付单号",
                        value: resData.payNum,
                        type: "string"
                    },
                    {
                        key: "付款时间",
                        value: resData.payTime,
                        type: "dateTime"
                    },
                    {
                        key: "支付方式",
                        value: this.payTypes[resData.payType].msg,
                        type: "string"
                    }
                ];
            });
        },
        onSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                console.log( this.form );
                if (valid) {
                    console.log('哈哈', this.form);
                    // this.update(this.listQuery);
                } else {
                    // console.log('error submit!!');
                    return false;
                }
            });
        },
        imgUploaded(res, file) {
            this.form.bizLicenseImagePath = res.data;
        },
        idCardFrontImageUploaded (res, file) {
            console.log( res.data );
            this.form.idCardFrontImagePath = res.data;
        },
        idCardFrontImageRemove(files, fileList) {
            this.form.idCardFrontImagePath = null;
        },
        idCardBackImageUploaded (res, file) {
            console.log( res.data );
            this.form.idCardBackImagePath = res.data;
        },
        idCardBackImageRemove(files, fileList) {
            this.form.idCardBackImagePath = null;
        },
        imgRemove(files, fileList) {
            this.form.bizLicenseImagePath = null;
        },
        beforeAvatarUpload(file) {
            // const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            // if (!isJPG) {
            //   this.$message.error('上传头像图片只能是 JPG 格式!');
            // }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isLt2M;
        },
        update(params) {
            updateOrder(params).then(response => {
                this.$alert('更新成功', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$router.back();
                    }
                });
            });
        }
    },
    components: {
        PortraitTable
    }
};
</script>

<style lang="scss" scoped>

.app-container {
    padding-left: 50px;
    padding-bottom: 100px;

    .address-container {
        display: flex;
        display: -webkit-flex;
        .address {
            margin-left: 5px;
        }
    }

    .picTitle {
        display: inline-block;
        width: 100px;
        font-size: 20px;
        text-align: center;
        color: orangered;
        text-align: center;
    }

    .pic-container {
        display: flex;
        display: -webkit-flex;
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }

    .title {
        font-size: 30px;
        color: #606266;
    }
    .form {
        .small-title {
            font-size: 25px;
            margin-bottom: 10px;
            padding: 10px;
            color: blue;
        }
        margin-top: 30px;
        /*padding: 30px;*/
        padding-bottom: 5px;
        margin-right: 30px;
        background: #F2F6FC;
        .btn {
            margin-top: 30px;
        }
    }

}
</style>
