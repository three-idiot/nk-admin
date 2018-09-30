<template>
<div class="app-container">
    <div style="padding:30px;background:#F2F6FC;">
        <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="订单号">
                <el-input v-model="form.orderNum" placeholder="请输入订单号"></el-input>
            </el-form-item>
            <el-form-item label="买家姓名">
                <el-input v-model="form.linkName" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="订单类型">
                <el-select v-model="form.renewType" placeholder="请选择" clearable>
                    <el-option label="正常订单" value="0"></el-option>
                    <el-option label="续签订单" value="1"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="订单状态">
                <el-select v-model="form.status" placeholder="请选择" clearable>
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
            <el-form-item label="时间类型">
                <el-select v-model="form.timeType" placeholder="请选择" clearable>
                    <el-option label="下单时间" value="0"></el-option>
                    <el-option label="付款时间" value="1"></el-option>
                    <el-option label="签证时间" value="2"></el-option>
                    <el-option label="入境时间" value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="时间">
                <el-date-picker v-model="daterange" type="daterange" value-format="yyyy-MM-dd" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">
                </el-date-picker>
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
        <el-table-column align="center" label='订单号'>
            <template slot-scope="scope">
                {{scope.row.orderNum}}
            </template>
        </el-table-column>
        <el-table-column align="center" label="买家姓名">
            <template slot-scope="scope">
                {{scope.row.linkName}}
            </template>
        </el-table-column>
        <el-table-column label="手机号" align="center">
            <template slot-scope="scope">
                <span>{{scope.row.linkMobile}}</span>
            </template>
        </el-table-column>
        <el-table-column label="下单时间" align="center">
            <template slot-scope="scope">
                {{scope.row.ctime}}
            </template>
        </el-table-column>
        <el-table-column label="付款时间" align="center">
            <template slot-scope="scope">
                {{scope.row.payTime}}
            </template>
        </el-table-column>
        <el-table-column label="订单总额" width="110" align="center">
            <template slot-scope="scope">
                {{scope.row.orderMoney/100}}
            </template>
        </el-table-column>
        <el-table-column class-name="status-col" label="支付方式" width="110" align="center">
            <template slot-scope="scope">
                {{payTypes[scope.row.payType].msg}}
            </template>
        </el-table-column>
        <el-table-column class-name="status-col" label="订单状态" width="110" align="center">
            <template slot-scope="scope">
                {{status[scope.row.status].msg}}
            </template>
        </el-table-column>
        <el-table-column class-name="status-col" label="订单类型" width="110" align="center">
            <template slot-scope="scope">
                {{renewTypes[scope.row.renewType].msg}}
            </template>
        </el-table-column>
        <el-table-column label="操作" width="160">
            <template slot-scope="scope">
                <el-button size="mini" type="success" @click="check(scope.$index, scope.row)">查看</el-button>
                <el-button v-if="status[scope.row.status].msg=='办理中'||status[scope.row.status].msg=='已送签'" size="mini" type="primary" @click="edit(scope.$index, scope.row)">编辑</el-button>
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
    getOrderList
} from "@/api/order";
import orderMap from "@/map/order";
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
            form: {
                orderNum: null,
                linkName: null,
                renewType: null,
                status: null,
                timeType: null
            },
        });
    },
    computed: {
        listQuery() {
            return Object.assign({}, this.form, {
                startTime: this.daterange[0],
                endTime: this.daterange[1],
                page: this.current_page,
                size: this.page_size,
            });
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.listLoading = true;
            getOrderList(this.listQuery).then(response => {
                this.list = response.data.data;
                this.priceCount = response.data.priceCount/100;
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
                name: 'order-check',
                params: {
                    id: row.id
                }
            });
        },
        edit(index, row) {
            this.$router.push({
                name: 'order-edit',
                params: {
                    id: row.id
                }
            });
        },
        currentPageChange(page) {
            this.current_page = page;
            this.fetchData();
        }
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
}
</style>
