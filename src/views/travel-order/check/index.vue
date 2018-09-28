<template>
<div class="app-container">
    <title-line txt="查看商品订单"></title-line>
    <portrait-table :key-width="80" :data="data"></portrait-table>
    <p>订单总数 <span class="red">{{total_count}}</span> 条 支付总额 <span class="red">{{priceCount}}</span> 元</p>
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
                {{scope.row.createTime}}
            </template>
        </el-table-column>
        <el-table-column align="center" label="支付单号">
            <template slot-scope="scope">
                {{scope.row.payId}}
            </template>
        </el-table-column>
        <el-table-column label="支付时间" align="center">
            <template slot-scope="scope">
                {{scope.row.payTime}}
            </template>
        </el-table-column>
        <el-table-column label="购买数量" width="110" align="center">
            <template slot-scope="scope">
                {{scope.row.buyNum}}
            </template>
        </el-table-column>
        <el-table-column label="订单总额" width="110" align="center">
            <template slot-scope="scope">
                {{scope.row.orderPrice/100}}
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
    <div class="block">
        <el-pagination @current-change="currentPageChange" :background='true' :current-page="current_page" :page-size="page_size" layout="total, prev, pager, next, jumper" :total="total_count">
        </el-pagination>
    </div>
</div>
</template>

<script>
import {
    getGroupOrderDetail
} from "@/api/travel-order";
import PortraitTable from "@/components/PortraitTable/index.vue";
import TitleLine from "@/components/TitleLine/index.vue";
import orderMap from "@/map/travel-order";
export default {
    data() {
        return Object.assign({}, orderMap, {
            list: null,
            data: [],
            current_page: 1,
            page_size: 20,
            total_count: null,
            priceCount: null,
        });
    },
    computed: {
        listQuery() {
            return Object.assign({}, this.form, {
                pageIndex: this.current_page,
                pageSize: this.page_size,
            });
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.listLoading = true;
            getGroupOrderDetail(this.$route.params.id).then(response => {
                const resData = response.data;
                this.priceCount = resData.travelOrders.priceCount/100;
                this.total_count = resData.travelOrders.total_count;
                this.current_page = resData.travelOrders.current_page;
                this.max_page = resData.travelOrders.max_page;
                this.list = resData.travelOrders.data;
                this.data = [{
                        key: '商品编号',
                        value: resData.travelGoods.goodsNo,
                        type: 'string'
                    },
                    {
                        key: '商品名称',
                        value: resData.travelGoods.name,
                        type: 'string'
                    },
                    {
                        key: '商品状态',
                        value: this.status[resData.travelGoods.status].msg,
                        type: 'string'
                    },
                ];
                this.listLoading = false;
            });
        },
        check(index, row) {
            this.$router.push({
                name: 'travel-order-detail',
                params: {
                    id: row.id
                }
            });
        },
        currentPageChange(page) {
            this.current_page = page;
            this.fetchData();
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
    .block {
        margin: 50px 0 30px;
        text-align: center;
    }
}
</style>
