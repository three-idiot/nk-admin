<template>
<div class="app-container">
    <p class="title">设置签证状态</p>
    <hr/>
    <portrait-table :data="data" key-width="80"></portrait-table>
    <el-form :model="form" size="mini" class="form">
        <el-form-item label="签证状态">
            <el-radio-group v-model="form.status">
                <el-radio label="已签发"></el-radio>
                <el-radio label="拒签"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="通知方式">
            <el-radio-group v-model="form.info">
                <el-radio label="短信通知"></el-radio>
                <el-radio label="邮件通知"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="时间">
            <el-date-picker v-model="daterange" type="daterange" value-format="yyyy-MM-dd" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="上传电子签证">
            <!-- TODO 上线之后这里要把api前缀去掉 -->
            <el-upload class="upload-demo" action='/api/image/uploadfile' name='file' :limit="1" :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-form-item>
        <el-form-item size="large">
            <el-button type="info" @click.native="$router.back()">取消</el-button>
            <el-button type="primary" @click="onSubmit">提交</el-button>
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

export default {
    data() {
        return {
            list: null,
            listLoading: true,
            form: {
                status: null,
                info: null
            },
            fileList: [],
            daterange: [],
            data: [],
            isStamp: {
                0: "否",
                1: "是"
            },
            status: {
                10: {
                    msg: "待付款",
                    color: "warning"
                },
                20: {
                    msg: "办理中",
                    color: "success"
                },
                30: {
                    msg: "已送签",
                    color: "success"
                },
                40: {
                    msg: "已签发",
                    color: "success"
                },
                41: {
                    msg: "已拒签",
                    color: "success"
                },
                50: {
                    msg: "已登记",
                    color: "warning"
                },
                60: {
                    msg: "已过期",
                    color: "warning"
                },
                70: {
                    msg: "已取消",
                    color: "warning"
                }
            },
            payTypes: {
                0: {
                    msg: "未支付",
                    color: "warning"
                },
                1: {
                    msg: "微信支付",
                    color: "success"
                }
            },
            renewTypes: {
                0: {
                    msg: "正常订单",
                    color: "success"
                },
                1: {
                    msg: "续签订单",
                    color: "primary"
                }
            }
        };
    },
    computed: {
        listQuery() {
            return Object.assign({}, this.form, {
                startTime: this.daterange[0],
                endTime: this.daterange[1],
                page: this.current_page,
                size: this.page_size
            });
        }
    },
    filters: {
        statusFilter(status) {
            const statusMap = {
                published: "success",
                draft: "gray",
                deleted: "danger"
            };
            return statusMap[status];
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.listLoading = true;
            getOrderDetail(this.$route.params.id).then(response => {
                const resData = response.data;
                this.data = [{
                        key: "订单编号",
                        value: resData.orderNum,
                        type: "string"
                    },
                    {
                        key: "订单总额",
                        value: resData.orderMoney,
                        type: "string"
                    },
                    {
                        key: "真实姓名",
                        value: resData.linkName,
                        type: "string"
                    },
                    {
                        key: "护照号",
                        value: resData.passportNo,
                        type: "string"
                    },
                    {
                        key: "手机号码",
                        value: resData.linkMobile,
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
                        type: "string"
                    },
                    {
                        key: "支付方式",
                        value: this.payTypes[resData.payType],
                        type: "string"
                    }
                ];
                this.listLoading = false;
            });
        },
        onSubmit() {
            this.fetchData();
        },
        check() {},
        edit() {},
        currentPageChange(page) {
            this.current_page = page;
            this.fetchData();
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
        background:#F2F6FC;
    }
}
</style>
