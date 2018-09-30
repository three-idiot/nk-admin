<template>
<div class="app-container">
    <title-line txt="退款订单列表"></title-line>
    <div style="padding:30px;background:#F2F6FC;">
        <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="地区">
                <el-select v-model="form.provinceId" @change="nextLocation" clearable placeholder="">
                    <el-option v-for="item in locationLevel0" :key="item.id" :label="item.nameAbbr" :value="item.id"></el-option>
                </el-select>
                <el-select v-model="form.cityId" clearable placeholder="">
                    <el-option v-for="item in locationLevel1" :key="item.id" :label="item.nameAbbr" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="商品编号">
                <el-input v-model="form.goodsNo" placeholder="请输入商品编号"></el-input>
            </el-form-item>
            <el-form-item label="退款原因">
                <el-select v-model="form.refundReason" placeholder="">
                    <el-option label="用户申请" value="1"></el-option>
                    <el-option label="组团失败" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="退款状态">
                <el-select v-model="form.status" clearable placeholder="">
                    <el-option v-for="(value, key) in reFundDtatus" :key="key" :label="value.msg" :value="key"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="退款时间">
                <el-date-picker v-model="daterange" type="daterange" value-format="yyyy-MM-dd" range-separator="-" start-placeholder="开始时间" end-placeholder="结束时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="退款金额">
                <el-select class="small-select" v-model="form.refundRule" placeholder="">
                    <el-option label=">" value="1"></el-option>
                    <el-option label="=" value="0"></el-option>
                    <el-option label="<" value="-1"></el-option>
                </el-select>
                <el-input-number v-model="form.refundFee" :min="1" :max="1000000" label="退款金额"></el-input-number>
            </el-form-item>
            <el-row>
                <el-form-item>
                    <el-button v-permission="['travel-order-refund-order-search']" type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-row>
        </el-form>
    </div>
    <p>订单总数 <span class="red">{{total_count}}</span> 条 退款总金额 <span class="red">{{priceCount}}</span> 元</p>
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
                {{scope.row.province+'/'+scope.row.city}}
            </template>
        </el-table-column>
        <el-table-column label="申请退款时间" align="center">
            <template slot-scope="scope">
                {{scope.row.createTime}}
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
                {{reFundReason[scope.row.refundReason].msg}}
            </template>
        </el-table-column>
        <el-table-column class-name="status-col" label="退款状态" width="110" align="center">
            <template slot-scope="scope">
                {{reFundDtatus[scope.row.status].msg}}
            </template>
        </el-table-column>
        <el-table-column label="操作" width="270" align="center">
            <template slot-scope="scope">
                <el-button v-permission="['travel-order-refund-order-detail']" size="mini" type="success" @click="check(scope.$index, scope.row)">查看详情</el-button>
                <el-button v-if="reFundDtatus[scope.row.status].msg=='待审核'&&reFundReason[scope.row.refundReason].msg=='用户申请'" v-permission="['travel-order-refund-order-audit']" size="mini" type="primary" @click="refundCheck(scope.$index, scope.row)">审核</el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="block">
        <el-pagination @current-change="currentPageChange" :background='true' :current-page="current_page" :page-size="page_size" layout="total, prev, pager, next, jumper" :total="total_count">
        </el-pagination>
    </div>
    <el-dialog title="退款审核" :visible.sync="dialogFormVisible" center>
        <el-form :model="refundForm" label-width="80px" ref="refundForm" :rules="rules">
            <el-form-item label="审核意见" prop="status">
                <el-radio-group v-model="refundForm.status">
                    <el-radio :label="2">同意</el-radio>
                    <el-radio :label="3">不同意</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="备注" prop="remark">
                <el-input type="textarea" :rows="2" placeholder="" v-model="refundForm.remark">
                </el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="refund('refundForm')">确 定</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script>
import {
    getLocation
} from "@/api/location";
import {
    getRefundOrderList,
    approveRefund
} from "@/api/travel-order";
import orderMap from "@/map/travel-order";
import TitleLine from "@/components/TitleLine/index.vue";
export default {
    data() {
        return Object.assign({}, orderMap, {
            list: null,
            locationLevel0: [],
            locationLevel1: [],
            listLoading: true,
            current_page: 1,
            max_page: 0,
            page_size: 20,
            daterange: [],
            total_count: null,
            priceCount: null,
            form: {},
            refundForm: {},
            dialogFormVisible: false,
            refundId: null,
            rules: {
                remark: [{
                    required: true,
                    message: '请填写备注',
                    trigger: 'change'
                }],
                status: [{
                    required: true,
                    message: '请选择状态',
                    trigger: 'change'
                }],
            },
        });
    },
    computed: {
        listQuery() {
            return Object.assign({}, this.form, {
                startDate: this.daterange&&this.daterange[0] ? this.daterange[0] + " 0:0:0" : null,
                endDate: this.daterange&&this.daterange[1] ? this.daterange[1] + " 23:59:59" : null,
                pageIndex: this.current_page,
                pageSize: this.page_size,
                refundFee: this.form.refundFee * 100
            });
        }
    },
    created() {
        this.fetchData();
        this.getLocationTopLevel();
    },
    methods: {
        fetchData() {
            this.listLoading = true;
            getRefundOrderList(this.listQuery).then(response => {
                this.list = response.data.data;
                this.priceCount = response.data.priceCount/100;
                this.total_count = response.data.total_count;
                this.current_page = response.data.current_page;
                this.max_page = response.data.max_page;
                this.listLoading = false;
            });
        },
        getLocationTopLevel() {
            getLocation().then(response => {
                this.locationLevel0 = response.data;
            });
        },
        nextLocation(id) {
            getLocation(id).then(response => {
                this.locationLevel1 = response.data;
            });
        },
        onSubmit() {
            this.fetchData();
        },
        check(index, row) {
            this.$router.push({
                name: "travel-order-refund-detail",
                params: {
                    id: row.refundId
                }
            });
        },
        edit(index, row) {
            this.$router.push({
                name: "travel-order-edit",
                params: {
                    id: row.id
                }
            });
        },
        refundCheck(index, row){
            this.refundId=row.refundId;
            this.dialogFormVisible = true;
        },
        refund(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.dialogFormVisible = false;
                    approveRefund({
                        refundOrderIds: [this.refundId],
                        status: this.refundForm.status,
                        remark: this.refundForm.remark
                    }).then(response => {
                        this.$message({
                            type: "success",
                            message: "审核成功!"
                        });
                        this.fetchData();
                    });
                } else {
                    console.log('error submit!!');
                    return false;
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
        color: #f56c6c;
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
