<template>
<div class="app-container">
    <p class="title">订单详情</p>
    <hr/>
    <portrait-table :data="data"></portrait-table>
    <div class="btn-container">
        <el-button type="info" @click.native="$router.back()">返回</el-button>
    </div>

</div>
</template>

<script>
import {
    getOrderDetail
} from "@/api/table";
import PortraitTable from "@/components/PortraitTable/index.vue";

export default {
    data() {
        return {
            list: null,
            listLoading: true,
            current_page: 1,
            max_page: 0,
            page_size: 20,
            daterange: [],
            total_count: null,
            priceCount: null,
            data: [],
            isStamp: {
                0: '否',
                1: '是'
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
                        key: '订单编号',
                        value: resData.orderNum,
                        type: 'string'
                    },
                    {
                        key: '订单状态',
                        value: this.status[resData.status].msg,
                        type: 'string'
                    },
                    {
                        key: '出行日期',
                        value: resData.enterTime,
                        type: 'string'
                    },
                    {
                        key: '姓名',
                        value: resData.linkName,
                        type: 'string'
                    },
                    {
                        key: '护照号',
                        value: resData.passportNo,
                        type: 'string'
                    },
                    {
                        key: '手机号',
                        value: resData.mobile,
                        type: 'string'
                    },
                    {
                        key: '护照内页',
                        value: resData.passportPath,
                        type: 'string'
                    },
                    {
                        key: '个人简历',
                        value: resData.resumePath,
                        type: 'string'
                    },
                    {
                        key: '是否盖章',
                        value: this.isStamp[resData.isStamp],
                        type: 'string'
                    },
                    {
                        key: '买家留言',
                        value: '',
                        type: 'string'
                    },
                    {
                        key: '下单时间',
                        value: resData.ctime,
                        type: 'string'
                    },
                    {
                        key: '付款时间',
                        value: resData.payTime,
                        type: 'string'
                    },
                    {
                        key: '送签时间',
                        value: resData.sendTime,
                        type: 'string'
                    },
                    {
                        key: '签发/拒签时间',
                        value: resData.signTime,
                        type: 'string'
                    },
                    {
                        key: '签证有效期',
                        value: resData.unitDay,
                        type: 'string'
                    },
                    {
                        key: '取消时间',
                        value: resData.offTime,
                        type: 'string'
                    },
                    {
                        key: '支付方式',
                        value: this.payTypes[resData.payType],
                        type: 'string'
                    },
                    {
                        key: '商品名称',
                        value: resData.title,
                        type: 'string'
                    },
                    {
                        key: '商品编码',
                        value: resData.goodsNum,
                        type: 'string'
                    },
                    {
                        key: '订单数量',
                        value: resData.buyNum,
                        type: 'string'
                    },
                    {
                        key: '商品金额',
                        value: resData.payMoney,
                        type: 'string'
                    },
                    {
                        key: '订单金额',
                        value: resData.orderMoney,
                        type: 'string'
                    },

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
    .btn-container {
        padding-top: 30px;
        text-align: center;
    }
}
</style>
