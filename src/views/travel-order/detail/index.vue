<template>
<div class="app-container">
    <title-line txt="商品订单详情"></title-line>
    <portrait-table class="portrait-table" :key-width="80" :data="data"></portrait-table>
    <el-table :stripe="true" :data="list" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row>
        <el-table-column align="center" label='商品编码'>
            <template slot-scope="scope">
                {{scope.row.goodsNo}}
            </template>
        </el-table-column>
        <el-table-column align="center" label='商品名称'>
            <template slot-scope="scope">
                {{scope.row.name}}
            </template>
        </el-table-column>
        <el-table-column align="center" label='商品单价'>
            <template slot-scope="scope">
                {{scope.row.salePrice/100}}
            </template>
        </el-table-column>
        <!-- <el-table-column align="center" label='购买数量'>
            <template slot-scope="scope">
                {{scope.row.buyNum}}
            </template>
        </el-table-column> -->
        <el-table-column label="出行日期" align="center">
            <template slot-scope="scope">
                {{scope.row.leaveTime}}
            </template>
        </el-table-column>
    </el-table>
    <hr class="hr">
    <p class="subtitle">子订单和用户信息</p>
    <el-table :stripe="true" :data="childList" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row>
        <el-table-column align="center" label='子订单编号'>
            <template slot-scope="scope">
                {{scope.row.childOrderNo}}
            </template>
        </el-table-column>
        <el-table-column align="center" label='姓名'>
            <template slot-scope="scope">
                {{scope.row.travelUserInfo.name}}
            </template>
        </el-table-column>
        <el-table-column align="center" label='身份证号'>
            <template slot-scope="scope">
                {{scope.row.travelUserInfo.cardId}}
            </template>
        </el-table-column>
        <el-table-column align="center" label='护照号'>
            <template slot-scope="scope">
                {{scope.row.travelUserInfo.passport}}
            </template>
        </el-table-column>
        <el-table-column align="center" label='联系电话'>
            <template slot-scope="scope">
                {{scope.row.travelUserInfo.phone}}
            </template>
        </el-table-column>

    </el-table>
    <hr class="hr">
    <p class="subtitle">发票信息</p>
    <portrait-table class="portrait-table" :key-width="90" :data="invoiceData"></portrait-table>
    <div class="btn-container">
        <el-button type="primary" @click.native="$router.back()">返回</el-button>
    </div>

</div>
</template>

<script>
import {
    getTravelOrderDetail
} from "@/api/travel-order";
import PortraitTable from "@/components/PortraitTable/index.vue";
import TitleLine from "@/components/TitleLine/index.vue";
import orderMap from "@/map/travel-order";
export default {
    data() {
        return Object.assign({}, orderMap, {
            list: null,
            childList: null,
            data: [],
            invoiceData: []
        });
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.listLoading = true;
            getTravelOrderDetail(this.$route.params.id).then(response => {
                const resData = response.data;
                this.data = [{
                        key: '买家名称',
                        value: resData.user.nickName,
                        type: 'string'
                    },
                    {
                        key: '地区',
                        value: `${resData.user.province}/${resData.user.city}`,
                        type: 'string'
                    },
                    {
                        key: '订单状态',
                        value: this.status[resData.travelOrder.status].msg,
                        type: 'string'
                    },
                    {
                        key: '订单编号',
                        value: resData.travelOrder.orderNo,
                        type: 'string'
                    },
                    {
                        key: '下单时间',
                        value: resData.travelOrder.createTime,
                        type: 'dateTime'
                    },
                    {
                        key: '支付单号',
                        value: resData.travelOrder.payId,
                        type: 'string'
                    },
                    {
                        key: '支付时间',
                        value: resData.travelOrder.payTime,
                        type: 'dateTime'
                    },
                    {
                        key: '购买数量',
                        value: resData.travelOrder.buyNum,
                        type: 'dateTime'
                    },
                    {
                        key: '总金额',
                        value: resData.travelOrder.orderPrice / 100,
                        type: 'string'
                    },

                ];
                if (resData.invoice) {
                    this.invoiceData = [{
                            key: '发票抬头',
                            value: resData.invoice.title,
                            type: 'string'
                        },
                        {
                            key: '纳税识别号',
                            value: resData.invoice.taxNo,
                            type: 'string'
                        },
                        {
                            key: '电子邮箱',
                            value: resData.invoice.email,
                            type: 'string'
                        },
                        {
                            key: '地址',
                            value: resData.invoice.address,
                            type: 'string'
                        },
                        {
                            key: '电话',
                            value: resData.invoice.phone,
                            type: 'string'
                        },
                    ];
                }
                this.list = [resData.travelGoods];
                this.childList = resData.travelChildOrders;
                this.listLoading = false;
            });
        },
    },
    components: {
        PortraitTable,
        TitleLine
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

    .portrait-table {
        margin-bottom: 20px;
    }

    .hr {
        margin-top: 40px;
        color: #ebeef5;
    }

    .subtitle {
        color: #444;
        font-size: 20px;
        font-weight: bold;
    }
}
</style>
