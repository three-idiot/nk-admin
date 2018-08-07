<template>
<div class="app-container">
<title-line txt="商品订单详情"></title-line>
        <portrait-table :key-width="80" :data="data"></portrait-table>
    <el-table :stripe="true" :data="list" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row>
        <el-table-column align="center" label='订单编号'>
            <template slot-scope="scope">
                {{scope.row.orderNo}}
            </template>
        </el-table-column>
        <el-table-column align="center" label="下单用户">
            <template slot-scope="scope">
                {{scope.row.userId}}
            </template>
        </el-table-column>
        <el-table-column label="下单时间" align="center">
            <template slot-scope="scope">
                {{new Date(scope.row.createTime).Format("yyyy-MM-dd HH:mm:ss")}}
            </template>
        </el-table-column>
        <el-table-column align="center" label="支付单号">
            <template slot-scope="scope">
                {{scope.row.payId}}
            </template>
        </el-table-column>
        <el-table-column label="支付" align="center">
            <template slot-scope="scope">
                {{new Date(scope.row.payTime).Format("yyyy-MM-dd HH:mm:ss")}}
            </template>
        </el-table-column>
        <el-table-column label="商品单价" width="110" align="center">
            <template slot-scope="scope">
                {{scope.row.salePrice}}
            </template>
        </el-table-column>
        <el-table-column label="购买数量" width="110" align="center">
            <template slot-scope="scope">
                {{scope.row.buyNum}}
            </template>
        </el-table-column>
        <el-table-column label="订单总额" width="110" align="center">
            <template slot-scope="scope">
                {{scope.row.orderPrice}}
            </template>
        </el-table-column>
        <el-table-column class-name="status-col" label="订单状态" width="110" align="center">
            <template slot-scope="scope">
                <el-tag :type="status[scope.row.status].color">{{status[scope.row.status].msg}}</el-tag>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="150" align="center">
            <template slot-scope="scope">
                <el-button size="mini" type="success" @click="check(scope.$index, scope.row)">查看详情</el-button>
            </template>
        </el-table-column>
    </el-table>

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
            data: [],
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
                        value: `${resData.user.proId}/${resData.user.cityId}`,
                        type: 'string'
                    },
                    {
                        key: '订单状态',
                        value: 'null',
                        type: 'string'
                    },
                    // {
                    //     key: '姓名',
                    //     value: resData.orderDetail[0].name,
                    //     type: 'string'
                    // },
                    // {
                    //     key: '护照号',
                    //     value: resData.orderDetail[0].passportNo,
                    //     type: 'string'
                    // },
                    // {
                    //     key: '手机号',
                    //     value: resData.orderDetail[0].mobile,
                    //     type: 'string'
                    // },
                    // {
                    //     key: '护照内页',
                    //     value: resData.orderDetail[0].passportPath,
                    //     type: 'image'
                    // },
                    // {
                    //     key: '个人简历',
                    //     value: resData.orderDetail[0].resumePath,
                    //     type: 'image'
                    // },
                    // {
                    //     key: '是否盖章',
                    //     value: this.isStamp[resData.orderDetail[0].isStamp],
                    //     type: 'string'
                    // },
                    // {
                    //     key: '买家留言',
                    //     value: resData.orderDetail[0].remark,
                    //     type: 'string'
                    // },
                    // {
                    //     key: '下单时间',
                    //     value: resData.ctime,
                    //     type: 'dateTime'
                    // },
                    // {
                    //     key: '付款时间',
                    //     value: resData.payTime,
                    //     type: 'dateTime'
                    // },
                    // {
                    //     key: '送签时间',
                    //     value: resData.sendTime,
                    //     type: 'dateTime'
                    // },
                    // {
                    //     key: '签发/拒签时间',
                    //     value: resData.signTime,
                    //     type: 'dateTime'
                    // },
                    // {
                    //     key: '签证有效期',
                    //     /* eslint-disable max-len */
                    //     value: new Date(resData.orderDetail[0].startTime).Format("yyyy-MM-dd") + ' 至 ' + new Date(resData.orderDetail[0].endTime).Format("yyyy-MM-dd"),
                    //     type: 'string'
                    // },
                    // {
                    //     key: '取消时间',
                    //     value: resData.offTime,
                    //     type: 'dateTime'
                    // },
                    // {
                    //     key: '支付方式',
                    //     value: this.payTypes[resData.payType].msg,
                    //     type: 'string'
                    // },
                    // {
                    //     key: '商品名称',
                    //     value: resData.title,
                    //     type: 'string'
                    // },
                    // {
                    //     key: '商品编码',
                    //     value: resData.goodsNum,
                    //     type: 'string'
                    // },
                    // {
                    //     key: '订单数量',
                    //     value: resData.buyNum,
                    //     type: 'string'
                    // },
                    // {
                    //     key: '商品金额',
                    //     value: resData.payMoney / 100,
                    //     type: 'string'
                    // },
                    // {
                    //     key: '订单金额',
                    //     value: resData.orderMoney / 100,
                    //     type: 'string'
                    // },

                ];
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
}
</style>
