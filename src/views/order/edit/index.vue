<template>
<div class="app-container">
    <p class="title">设置签证状态</p>
    <hr/>
    <portrait-table :data="data" :key-width=80></portrait-table>
    <el-form v-if="status[statusNum].msg!='办理中'" ref="ruleForm" :model="form" :rules="rules" size="mini" class="form">
        <el-form-item label="签证状态" prop="status">
            <el-radio-group v-model="form.status">
                <el-radio label="40">已签发</el-radio>
                <el-radio label="41">拒签</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="通知方式">
            <el-checkbox-group v-model="info">
                <el-checkbox label="短信通知"></el-checkbox>
                <el-checkbox label="邮件通知"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="时间">
            <el-date-picker v-model="daterange" type="daterange" value-format="yyyy-MM-dd" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="上传电子签证" prop="visaPath">
            <!-- TODO 上线之后这里要把api前缀去掉 -->
            <el-upload list-type="picture" class="upload-demo" :action='$imgUploadApi' name='file' :limit="1" :on-success="imgUploaded" :on-remove="imgRemove">
                <el-button v-show="!form.visaPath" size="small" type="primary">点击上传</el-button>
                <div v-show="!!form.visaPath" slot="tip" class="el-upload__tip">如需更换图片，请点击图片右上角删除后重新上传</div>
            </el-upload>
        </el-form-item>
        <el-form-item size="large" class="btn">
            <el-button type="info" @click.native="$router.back()">取消</el-button>
            <el-button type="primary" @click="onSubmit('ruleForm')">提交</el-button>
        </el-form-item>
    </el-form>
    <el-form v-else size="mini" class="form">
        <el-form-item label="签证状态" prop="status">
            <el-radio-group v-model="form2.status">
                <el-radio label="30">已送签</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item size="large" class="btn">
            <el-button type="info" @click.native="$router.back()">取消</el-button>
            <el-button type="primary" @click="sended">提交</el-button>
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
import orderMap from "@/map/order";
export default {
    data() {
        return Object.assign({}, orderMap, {
            form: {
                status: null,
                visaPath: null,
                detatilId: null,
            },
            form2: {},
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
            statusNum: null
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
                this.statusNum = response.data.status;
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
        },
        sended() {
            if (!this.form2.status) {
                this.$message({
                    message: '请选择状态',
                    type: 'warning'
                });
                return;
            }
            updateOrder({status:this.form2.status,orderId: this.$route.params.id,detatilId:this.form.detatilId}).then(response => {
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
    .title {
        font-size: 30px;
        color: #606266;
    }
    .form {
        margin-top: 30px;
        padding: 30px;
        padding-bottom: 5px;
        background: #F2F6FC;
        .btn {
            margin-top: 30px;
        }
    }
}
</style>
