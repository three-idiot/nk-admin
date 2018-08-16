<template>
<div class="app-container">
    <title-line txt="退款订单列表"></title-line>
    <div style="padding:30px;background:#F2F6FC;">
        <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="地区">
                <el-select v-model="form.provinceId" placeholder="">
                    <el-option label=">" value="0"></el-option>
                    <el-option label="=" value="1"></el-option>
                    <el-option label="<" value="2"></el-option>
                </el-select>
                <el-select v-model="form.cityId" placeholder="">
                    <el-option label=">" value="0"></el-option>
                    <el-option label="=" value="1"></el-option>
                    <el-option label="<" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="商品编号">
                <el-input v-model="form.goodsNo" placeholder="请输入商品编号"></el-input>
            </el-form-item>
            <el-form-item label="退款原因">
                <el-select v-model="form.refundReason" placeholder="">
                    <el-option label=">" value="0"></el-option>
                    <el-option label="=" value="1"></el-option>
                    <el-option label="<" value="2"></el-option>
                </el-select>
            </el-form-item>
                        <el-form-item label="退款状态">
                <el-select v-model="form.status" placeholder="">
                    <el-option label=">" value="0"></el-option>
                    <el-option label="=" value="1"></el-option>
                    <el-option label="<" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="订单状态">
                <el-select v-model="form.status">
                    <el-option label="全部" value="10"></el-option>
                    <el-option label="报名中" value="20"></el-option>
                    <el-option label="已取消" value="30"></el-option>
                    <el-option label="已成团" value="40"></el-option>
                    <el-option label="已结束" value="41"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="退款时间">
                <el-date-picker v-model="daterange" type="daterange" value-format="yyyy-MM-dd" range-separator="-" start-placeholder="开始时间" end-placeholder="结束时间">
                </el-date-picker>
            </el-form-item>
                        <el-form-item label="退款金额">
                <el-select class="small-select" v-model="form.refundRule" placeholder="">
                    <el-option label=">" value="0"></el-option>
                    <el-option label="=" value="1"></el-option>
                    <el-option label="<" value="2"></el-option>
                </el-select>
                <el-input-number v-model="form.refundFee" :min="1" :max="1000000" label="退款金额"></el-input-number>
            </el-form-item>
            <el-row>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-row>
        </el-form>
    </div>
    <p>订单总数 <span class="red">{{total_count}}</span> 条 支付总额 <span class="red">{{priceCount}}</span> 元</p>
    <el-table :stripe="true" :data="list" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row>
        <el-table-column align="center" label='退款订单编号'>
            <template slot-scope="scope">
                {{scope.row.refundNo}}
            </template>
        </el-table-column>
        <el-table-column align="center" label="买家名称">
            <template slot-scope="scope">
                {{scope.row.userName}}
            </template>
        </el-table-column>
        <el-table-column label="商品编号" align="center">
            <template slot-scope="scope">
                {{scope.row.goodsNo}}
            </template>
        </el-table-column>
        <el-table-column label="地区" align="center">
            <template slot-scope="scope">
                {{scope.row.provinceId+'/'+scope.row.cityId}}
            </template>
        </el-table-column>
        <el-table-column label="申请退款时间" align="center">
            <template slot-scope="scope">
                {{new Date(scope.row.createTime).Format("yyyy-MM-dd HH:mm:ss")}}
            </template>
        </el-table-column>
        <el-table-column label="付款金额" align="center">
            <template slot-scope="scope">
                {{scope.row.orderFee/100}}
            </template>
        </el-table-column>
        <el-table-column label="退款金额" align="center">
            <template slot-scope="scope">
                {{scope.row.refundFee/100}}
            </template>
        </el-table-column>
        <el-table-column label="退款原因" align="center">
            <template slot-scope="scope">
                {{scope.row.refundReason}}
            </template>
        </el-table-column>
        <el-table-column class-name="status-col" label="退款状态" width="110" align="center">
            <template slot-scope="scope">
                <el-tag :type="reFundDtatus[scope.row.status].color">{{reFundDtatus[scope.row.status].msg}}</el-tag>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="270" align="center">
            <template slot-scope="scope">
                <el-button size="mini" type="success" @click="check(scope.$index, scope.row)">查看详情</el-button>
                <el-button size="mini" type="primary" @click="edit(scope.$index, scope.row)">审核</el-button>
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
    getRefundOrderList
} from "@/api/travel-order";
import orderMap from "@/map/travel-order";
import TitleLine from "@/components/TitleLine/index.vue";
export default {
    data() {
        return Object.assign({}, orderMap, {
            list: null,
            listLoading: true,
            current_page: 1,
            max_page: 0,
            page_size: 20,
            daterange: [],
            total_count: null,
            priceCount: null,
            form: {},
        });
    },
    computed: {
        listQuery() {
            return Object.assign({}, this.form, {
                startDate: this.daterange[0],
                endDate: this.daterange[1],
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
            getRefundOrderList(this.listQuery).then(response => {
                this.list = response.data.data;
                this.priceCount = response.data.priceCount;
                this.total_count = response.data.total_count;
                this.current_page = response.data.current_page;
                this.max_page = response.data.max_page;
                this.listLoading = false;
            });
        },
        onSubmit() {
            this.fetchData();
        },
        check(index, row) {
            this.$router.push({
                name: 'travel-order-refund-detail',
                params: {
                    id: row.refundId
                }
            });
        },
        edit(index, row) {
            this.$router.push({
                name: 'travel-order-edit',
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
        TitleLine
    }
};
</script>

<style lang="scss" scoped>
.app-container {
    .red {
        color: #F56C6C;
    }
    .block {
        margin: 50px 0 30px;
        text-align: center;
    }
    .title {
        font-size: 20px;
        color: #606266;
        margin-bottom: -5px;
    }
    .small-select {
        width: 60px;
    }
}
</style>
