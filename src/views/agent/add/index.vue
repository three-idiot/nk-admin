<template>
<div class="app-container">
    <p class="title">新增代理商</p>
    <hr/>
    <el-form ref="ruleForm" :model="form" :rules="rules" size="mini" class="form" label-width="130px">
        <div class="small-title">登录账号：</div>
        <el-form-item label="用户名：" prop="title" style="width: 400px;">
            <el-input ></el-input>
        </el-form-item>

        <el-form-item label="密码：" prop="title" type="password" style="width: 400px;">
            <el-input type="password"></el-input>
        </el-form-item>

        <el-form-item label="确认密码：" prop="title"   style="width: 400px;">
            <el-input type="password"></el-input>
        </el-form-item>

        <hr>

        <div class="small-title" style="margin-top: 10px;">基本信息：</div>
        <el-form-item label="代理商名称" prop="title" style="width: 400px;">
            <el-input ></el-input>
        </el-form-item>

        <el-form-item label="代理商角色" prop="title" style="width: 400px;">
            <el-input ></el-input>
        </el-form-item>
        <el-form-item label="代理商地区">
            <el-select v-model="form.renewType" placeholder="全国" clearable class="address">
                <el-option label="正常订单" value="0"></el-option>
                <el-option label="续签订单" value="1"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="">
            <el-select v-model="form.status" placeholder="请选择市" clearable>
                <el-option label="待付款" value="10"></el-option>
                <el-option label="办理中" value="20"></el-option>
                <el-option label="已送签" value="30"></el-option>
                <el-option label="已签发" value="40"></el-option>
                <el-option label="已拒签" value="41"></el-option>
                <el-option label="已登记" value="50"></el-option>
                <el-option label="已过期" value="60"></el-option>
                <el-option label="已取消" value="70"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="">
            <el-select v-model="form.timeType" placeholder="请选择区县" clearable>
                <el-option label="下单时间" value="0"></el-option>
                <el-option label="付款时间" value="1"></el-option>
                <el-option label="签证时间" value="2"></el-option>
                <el-option label="入境时间" value="3"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="">
            <el-select v-model="form.timeType" placeholder="请选择街道" clearable>
                <el-option label="下单时间" value="0"></el-option>
                <el-option label="付款时间" value="1"></el-option>
                <el-option label="签证时间" value="2"></el-option>
                <el-option label="入境时间" value="3"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="联系人：" prop="title" style="width: 400px;">
            <el-input ></el-input>
        </el-form-item>


        <hr>


        <div class="small-title" style="margin-top: 10px;">认证信息：</div>

        <el-form-item label="代理商性质">
            <el-select v-model="form.status" placeholder="请选择市" clearable>
                <el-option label="待付款" value="10"></el-option>
                <el-option label="办理中" value="20"></el-option>
                <el-option label="已送签" value="30"></el-option>
                <el-option label="已签发" value="40"></el-option>
                <el-option label="已拒签" value="41"></el-option>
                <el-option label="已登记" value="50"></el-option>
                <el-option label="已过期" value="60"></el-option>
                <el-option label="已取消" value="70"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="营业执照代码：" prop="title" style="width: 400px;">
            <el-input ></el-input>
        </el-form-item>

        <el-form-item label="营业执照副本" prop="visaPath">
            <!-- TODO 上线之后这里要把api前缀去掉 -->
            <el-upload list-type="picture" class="upload-demo" action='/api/image/uploadfile' name='file' :limit="1" :on-success="imgUploaded" :on-remove="imgRemove">
                <el-button v-show="!form.visaPath" size="small" type="primary">点击上传</el-button>
                <div v-show="!!form.visaPath" slot="tip" class="el-upload__tip">如需更换图片，请点击图片右上角删除后重新上传</div>
            </el-upload>
        </el-form-item>


        <!--// 选择代理商性质为个人-->
        <el-form-item label="身份证号码：" prop="title" style="width: 400px;">
            <el-input ></el-input>
        </el-form-item>

        <el-form-item label="身份证照片" prop="visaPath">
            <!-- TODO 上线之后这里要把api前缀去掉 -->
            <div class="pic-container">
                <span class="picTitle">国徽面</span>
                <el-upload
                    class="avatar-uploader"
                    style="border:1px solid #000;width: 178px;height: 178px;"
                    action="/api/image/uploadfile"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span class="picTitle">信息面</span>
                <el-upload
                    class="avatar-uploader"
                    style="border:1px solid #000;width: 178px;height: 178px;"
                    action="/api/image/uploadfile"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
        </el-form-item>




        <div class="small-title" style="margin-top: 10px;">银行账号：</div>

        <el-form-item label="名称：" prop="title" style="width: 400px;">
            <el-input ></el-input>
        </el-form-item>

        <el-form-item label="开户行：" prop="title" style="width: 400px;">
            <el-input ></el-input>
        </el-form-item>

        <el-form-item label="联行号：" prop="title" style="width: 400px;">
            <el-input ></el-input>
        </el-form-item>

        <el-form-item label="账号：" prop="title" style="width: 400px;">
            <el-input ></el-input>
        </el-form-item>

        <hr>

        <div class="small-title" style="margin-top: 10px;">使用期限：</div>


        <el-form-item label="时间">
            <el-date-picker
                v-model="listQuery.startTime"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
            </el-date-picker>
        </el-form-item>

        <el-form-item label="代理商标识码：" prop="title" style="width: 400px;">
            <el-input ></el-input>
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
    updateOrder
} from "@/api/order";
import PortraitTable from "@/components/PortraitTable/index.vue";
import agentMap from "@/map/agent"
export default {
    data() {
        return Object.assign({}, agentMap, {
            form: {
                status: null,
                visaPath: null,
                detatilId: null,
            },
            rules: {
                visaPath: [{
                    required: true,
                    message: '请上传电子签证',
                    trigger: 'change'
                }],
                status: [{
                    required: true,
                    message: '请选择签证状态',
                    trigger: 'change'
                }],
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
        this.fetchData();
    },
    methods: {
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
                if (valid) {
                    this.update(this.listQuery);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        imgUploaded(res, file) {
            this.form.visaPath = res.data;
        },
        imgRemove(files, fileList) {
            this.form.visaPath = null;
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

    .picTitle {
        display: inline-block;
        width: 200px;
        text-align: center;
    }

    .pic-container {
        display: flex;

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
