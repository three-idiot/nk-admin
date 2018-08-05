<template>
<div class="app-container">
    <p class="title">订单详情</p>
    <hr/>
    <portrait-table :data="data"></portrait-table>
    <div class="btn-container">
        <el-button type="primary" @click.native="$router.back()">返回</el-button>
    </div>

</div>
</template>

<script>
import {
    getOrderDetail
} from "@/api/table";
import PortraitTable from "@/components/PortraitTable/index.vue";
import orderMap from "@/map/order";
export default {
    data() {
        return Object.assign({}, orderMap, {
            data: [],
        });
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
                        value: resData.orderDetail[0].name,
                        type: 'string'
                    },
                    {
                        key: '护照号',
                        value: resData.orderDetail[0].passportNo,
                        type: 'string'
                    },
                    {
                        key: '手机号',
                        value: resData.orderDetail[0].mobile,
                        type: 'string'
                    },
                    {
                        key: '护照内页',
                        value: resData.orderDetail[0].passportPath,
                        type: 'image'
                    },
                    {
                        key: '个人简历',
                        value: resData.orderDetail[0].resumePath,
                        type: 'image'
                    },
                    {
                        key: '是否盖章',
                        value: this.isStamp[resData.orderDetail[0].isStamp],
                        type: 'string'
                    },
                    {
                        key: '买家留言',
                        value: resData.orderDetail[0].remark,
                        type: 'string'
                    },
                    {
                        key: '下单时间',
                        value: resData.ctime,
                        type: 'dateTime'
                    },
                    {
                        key: '付款时间',
                        value: resData.payTime,
                        type: 'dateTime'
                    },
                    {
                        key: '送签时间',
                        value: resData.sendTime,
                        type: 'dateTime'
                    },
                    {
                        key: '签发/拒签时间',
                        value: resData.signTime,
                        type: 'dateTime'
                    },
                    {
                        key: '签证有效期',
                        /* eslint-disable max-len */
                        value: new Date(resData.orderDetail[0].startTime).Format("yyyy-MM-dd") + ' 至 ' + new Date(resData.orderDetail[0].endTime).Format("yyyy-MM-dd"),
                        type: 'string'
                    },
                    {
                        key: '取消时间',
                        value: resData.offTime,
                        type: 'dateTime'
                    },
                    {
                        key: '支付方式',
                        value: this.payTypes[resData.payType].msg,
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
                        value: resData.payMoney / 100,
                        type: 'string'
                    },
                    {
                        key: '订单金额',
                        value: resData.orderMoney / 100,
                        type: 'string'
                    },

                ];
            });
        },
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
