<template>
<div class="app-container">
    <title-line txt="退款详情"></title-line>
    <portrait-table class="portrait-table" :key-width="100" :data="data"></portrait-table>
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
                {{scope.row.realPrice/100}}
            </template>
        </el-table-column>
        <el-table-column align="center" label='购买数量'>
            <template slot-scope="scope">
                {{scope.row.saleNum}}
            </template>
        </el-table-column>
        <el-table-column label="报名截止日期" align="center">
            <template slot-scope="scope">
                {{new Date(scope.row.closeDate).Format("yyyy-MM-dd HH:mm:ss")}}
            </template>
        </el-table-column>
        <el-table-column label="距截至日期时长" align="center">
            <template slot-scope="scope">
                <span v-if="Math.floor(scope.row.duration/1000/3600/24)">{{`${Math.floor(scope.row.duration/1000/3600/24)}天`}}</span>
                <span v-if="Math.floor((scope.row.duration/1000/3600)%24)">{{`${Math.floor((scope.row.duration/1000/3600)%24)}小时`}}</span>
                <span v-if="Math.floor(scope.row.duration/1000/60%60)">{{`${Math.floor(scope.row.duration/1000/60%60)}分钟`}}</span>
            </template>
        </el-table-column>
        <el-table-column align="center" label='支付金额'>
            <template slot-scope="scope">
                {{'木有'}}
            </template>
        </el-table-column>
    </el-table>
    <hr class="hr">
    <p class="subtitle">出行用户信息</p>
    <el-table :stripe="true" :data="childList" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row>
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
    <p class="subtitle">审核信息</p>
    <portrait-table class="portrait-table" :key-width="90" :data="checkData"></portrait-table>
    <div class="btn-container">
        <el-button type="primary" @click.native="$router.back()">返回</el-button>
    </div>

</div>
</template>

<script>
import {
    getRefundOrderDetail
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
            checkData: []
        });
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.listLoading = true;
            getRefundOrderDetail(this.$route.params.id).then(response => {
                const resData = response.data;
                this.data = [{
                        key: "买家名称",
                        value: resData.user.nickName,
                        type: "string"
                    },
                    {
                        key: "地区",
                        value: `${resData.user.proId}/${resData.user.cityId}`,
                        type: "string"
                    },
                    {
                        key: "退款状态",
                        value: this.reFundDtatus[resData.refundOrder.status].msg,
                        type: "string"
                    },
                    {
                        key: "退款订单编号",
                        value: resData.refundOrder.refundNo,
                        type: "string"
                    },
                    {
                        key: "申请时间",
                        value: resData.refundOrder.createTime,
                        type: "dateTime"
                    },
                    {
                        key: "退款支付单号",
                        value: resData.refundOrder.refundPayNo,
                        type: "string"
                    },
                    {
                        key: "退款到帐时间",
                        value: resData.refundOrder.finishTime,
                        type: "dateTime"
                    },
                    {
                        key: "退款金额",
                        value: resData.refundOrder.refundFee / 100,
                        type: "string"
                    }
                ];
                this.checkData = [{
                        key: "审核人",
                        value: resData.refundOrder.approver,
                        type: "string"
                    },
                    {
                        key: "审核时间",
                        value: resData.refundOrder.approveTime,
                        type: "dateTime"
                    },
                    {
                        key: "审核意见",
                        value: resData.refundOrder.approveOpinion,
                        type: "string"
                    },
                    {
                        key: "备注",
                        value: resData.refundOrder.approveRemark,
                        type: "string"
                    }
                ];
                this.list = [Object.assign({}, resData.travelGoods, {
                    duration: new Date(resData.travelGoods.closeDate) - new Date(resData.refundOrder.createTime),
                    money: '接口木有'
                })];
                this.childList = resData.travelChildOrders;
                this.listLoading = false;
            });
        }
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
