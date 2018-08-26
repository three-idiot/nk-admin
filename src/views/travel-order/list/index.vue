<template>
<div class="app-container">
    <title-line txt="订单列表"></title-line>
    <div style="padding:30px;background:#F2F6FC;margin-bottom:30px;">
        <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="商品名称">
                <el-input v-model="form.goodsName" placeholder="请输入商品名称"></el-input>
            </el-form-item>
            <el-form-item label="最低成团人数">
                <el-select class="small-select" v-model="form.peopleMinRule" placeholder="">
                    <el-option label=">" value="1"></el-option>
                    <el-option label="=" value="0"></el-option>
                    <el-option label="<" value="-1"></el-option>
                </el-select>
                <el-input-number v-model="form.peopleMinNum" :min="1" :max="100" label="最低成团人数"></el-input-number>
            </el-form-item>
            <el-form-item label="成团人数上限">
                <el-select class="small-select" v-model="form.peopleMaxRule" placeholder="">
                    <el-option label=">" value="1"></el-option>
                    <el-option label="=" value="0"></el-option>
                    <el-option label="<" value="-1"></el-option>
                </el-select>
                <el-input-number v-model="form.peopleMaxNum" :min="1" :max="100" label="成团人数上限"></el-input-number>
            </el-form-item>
            <el-form-item label="订单状态">
                <el-select v-model="form.status" clearable placeholder="全部">
                    <el-option label="报名中" value="1"></el-option>
                    <el-option label="组团失败" value="2"></el-option>
                    <el-option label="已成团" value="3"></el-option>
                    <el-option label="已结束" value="4"></el-option>
                    <el-option label="强制成团" value="5"></el-option>
                    <el-option label="退款" value="6"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="开始时间">
                <el-date-picker v-model="startDaterange" type="daterange" value-format="yyyy-MM-dd" range-separator="-" start-placeholder="起" end-placeholder="止">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="结束时间">
                <el-date-picker v-model="endDaterange" type="daterange" value-format="yyyy-MM-dd" range-separator="-" start-placeholder="起" end-placeholder="止">
                </el-date-picker>
            </el-form-item>
            <el-row>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-row>
        </el-form>
    </div>
    <el-table :stripe="true" :data="list" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row>
        <el-table-column align="center" label='商品编号'>
            <template slot-scope="scope">
                {{scope.row.goodsNo}}
            </template>
        </el-table-column>
        <el-table-column align="center" label="商品名称">
            <template slot-scope="scope">
                {{scope.row.goodsName}}
            </template>
        </el-table-column>
        <el-table-column label="商品分类" align="center">
            <template slot-scope="scope">
                <el-tag :type="type[scope.row.goodsType].color">{{type[scope.row.goodsType].msg}}</el-tag>
            </template>
        </el-table-column>
        <el-table-column label="开始时间" align="center">
            <template slot-scope="scope">
                {{new Date(scope.row.goodsUpDate).Format("yyyy-MM-dd HH:mm:ss")}}
            </template>
        </el-table-column>
        <el-table-column label="结束时间" align="center">
            <template slot-scope="scope">
                {{new Date(scope.row.goodsCloseDate).Format("yyyy-MM-dd HH:mm:ss")}}
            </template>
        </el-table-column>
        <el-table-column label="最低成团人数" width="110" align="center">
            <template slot-scope="scope">
                {{scope.row.peopleMinNum}}
            </template>
        </el-table-column>
        <el-table-column label="成团人数上限" width="110" align="center">
            <template slot-scope="scope">
                {{scope.row.peopleMaxNum}}
            </template>
        </el-table-column>
        <el-table-column label="已报人数" width="110" align="center">
            <template slot-scope="scope">
                {{scope.row.enrollNum}}
            </template>
        </el-table-column>
        <el-table-column class-name="status-col" label="订单状态" width="110" align="center">
            <template slot-scope="scope">
                <el-tag :type="groupStatus[scope.row.status].color">{{groupStatus[scope.row.status].msg}}</el-tag>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="270" align="center">
            <template slot-scope="scope">
                <el-button size="mini" type="success" @click="check(scope.$index, scope.row)">查看详情</el-button>
                <el-button size="mini" type="primary" @click="force(scope.$index, scope.row)">强制成团</el-button>
                <el-button size="mini" type="primary" @click="edit(scope.$index, scope.row)">退款</el-button>
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
    getOrderList,
    forceSuccess
} from "@/api/travel-order";
import orderMap from "@/map/travel-order";
import TitleLine from "@/components/TitleLine/index.vue";
export default {
    data() {
        return Object.assign({}, orderMap, {
            list: [],
            listLoading: true,
            current_page: 1,
            max_page: 0,
            page_size: 20,
            startDaterange: [],
            endDaterange: [],
            total_count: null,
            priceCount: null,
            form: {},
        });
    },
    computed: {
        listQuery() {
            return Object.assign({}, this.form, {
                sstartDate: this.startDaterange[0]?this.startDaterange[0]+' 0:0:0':null,
                sendDate: this.startDaterange[1]?this.startDaterange[1]+' 23:59:59':null,
                estartDate: this.endDaterange[0]?this.endDaterange[0]+' 0:0:0':null,
                eendDate: this.endDaterange[1]?this.endDaterange[1]+' 23:59:59':null,
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
            getOrderList(this.listQuery).then(response => {
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
                name: 'travel-order-check',
                params: {
                    id: row.groupOrderId
                }
            });
        },
        force(index, row) {
            this.$confirm('确定强制成团?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                forceSuccess(row.groupOrderId).then(response => {
                    this.$message({
                        type: 'success',
                        message: '成团成功!'
                    });
                    this.fetchData();
                });
            }).catch(() => {});
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
    .form {
        margin-bottom: 50px;
    }
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
