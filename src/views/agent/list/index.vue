<template>
<div class="app-container">
    <p class="title">
        代理商列表
        <el-button  type="danger" class="add-agent-button" @click="jumpAdd">新增代理商+</el-button>
    </p>
    <hr/>

    <div style="padding:30px;background:#F2F6FC;">
        <el-form :inline="true" :model="form" class="demo-form-inline">

            <el-form-item label="地区：">
                <el-select v-model="form.renewType" placeholder="全国" clearable class="address">
                    <el-option label="正常订单" value="0"></el-option>
                    <el-option label="续签订单" value="1"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="">
                <el-select v-model="form.status" placeholder="请选择市" clearable>
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

            <el-form-item label="">
                <el-select v-model="form.timeType" placeholder="请选择区县" clearable>
                    <el-option label="下单时间" value="0"></el-option>
                    <el-option label="付款时间" value="1"></el-option>
                    <el-option label="签证时间" value="2"></el-option>
                    <el-option label="入境时间" value="3"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="">
                <el-select v-model="form.timeType" placeholder="请选择街道" clearable>
                    <el-option label="下单时间" value="0"></el-option>
                    <el-option label="付款时间" value="1"></el-option>
                    <el-option label="签证时间" value="2"></el-option>
                    <el-option label="入境时间" value="3"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="代理商角色：">
                <el-select v-model="form.timeType" placeholder="请选择街道" clearable>
                    <el-option label="下单时间" value="0"></el-option>
                    <el-option label="付款时间" value="1"></el-option>
                    <el-option label="签证时间" value="2"></el-option>
                    <el-option label="入境时间" value="3"></el-option>
                </el-select>
            </el-form-item>
            <div>

            </div>
            <el-form-item label="代理商状态：">
                <el-select v-model="form.timeType" placeholder="请选择街道" clearable>
                    <el-option label="下单时间" value="0"></el-option>
                    <el-option label="付款时间" value="1"></el-option>
                    <el-option label="签证时间" value="2"></el-option>
                    <el-option label="入境时间" value="3"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="有效期：">
                <el-date-picker v-model="daterange" type="daterange" value-format="yyyy-MM-dd" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>

            <el-form-item label="联系人：">
                <el-input v-model="form.orderNum" placeholder="请输入订单号"></el-input>
            </el-form-item>

            <el-form-item label="电话：">
                <el-input v-model="form.linkName" placeholder="请输入姓名"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">搜索</el-button>
            </el-form-item>



        </el-form>
    </div>
    <p>代理商总数共 <span class="red">{{total_count}}</span> 条 </p>
    <el-table :stripe="true" :data="list" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row>
        <el-table-column align="center" label='代理商编号'>
            <template slot-scope="scope">
                {{scope.row.agentNo}}
            </template>
        </el-table-column>

        <el-table-column align="center" label="代理商角色">
            <template slot-scope="scope">
                {{roleId[scope.row.roleId]}}
            </template>
        </el-table-column>

        <el-table-column label="代理商名称" align="center">
            <template slot-scope="scope">
                <span>{{scope.row.name}}</span>
            </template>
        </el-table-column>
        <el-table-column label="地区" align="center">
            <template slot-scope="scope">
                {{ scope.row.province }}
            </template>
        </el-table-column>
        <el-table-column label="联系人" align="center">
            <template slot-scope="scope">
                {{ scope.row.contractor }}
            </template>
        </el-table-column>

        <el-table-column label="电话" width="110" align="center">
            <template slot-scope="scope">
                {{scope.row.phone}}
            </template>
        </el-table-column>

        <el-table-column label="地址"  align="center">
            <template slot-scope="scope">
                {{ scope.row.province }}
            </template>
        </el-table-column>

        <el-table-column label="有效期"  align="center">
            <template slot-scope="scope">
                {{ scope.row.expireTime }}
            </template>
        </el-table-column>

        <el-table-column class-name="status-col" label="代理商状态" width="110" align="center">
            <template slot-scope="scope">
                <el-tag :type="status[scope.row.status].color">{{status[scope.row.status].msg}}</el-tag>
            </template>
        </el-table-column>

        <el-table-column label="操作" width="340" align="center">
            <template slot-scope="scope">
                <!--<el-button size="mini" type="success" @click="check(scope.$index, scope.row)">查看</el-button>-->
                <!--<el-button size="mini" type="primary" @click="edit(scope.$index, scope.row)">编辑</el-button>-->
                <el-button  size="mini" type="success" @click="goDetail(scope.row.id)" plain>
                    查看详情
                </el-button>
                <el-button type="primary" size="mini" @click="goEdit(scope.row.id)">
                    编辑
                </el-button>
                <el-button  size="mini" type="success" v-if="scope.row.status == 2" @click="shelf(scope.row.id)">恢复</el-button>
                <el-button  size="mini" type="danger" v-if="scope.row.status != 2"  @click="goUndercarriage(scope.row.id)">
                    停用
                </el-button>
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
    getAgentList
} from "@/api/agent";
import agentMap from "@/map/agent"
export default {
    data() {
        return Object.assign({}, agentMap, {
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
            form2 :{
                province: '',
                city: '',
                county: '',
                street: '',
            }
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
        goDetail(id) {
            window.location.href = '#/agent/detail?id=' + id;
        },
        jumpAdd() {
            window.location.href = '#/agent/add';
        },
        goEdit(id) {
            window.location.href = '#/agent/edit?id=' + id;
        },
        fetchData() {
            this.listLoading = true;
            getAgentList(this.listQuery).then(response => {
                this.list = response.data.data;
                this.priceCount = response.data.priceCount;
                this.total_count = response.data.total_count;
                this.current_page = response.data.current_page;
                this.max_page = response.data.max_page;
                this.listLoading = false;
                console.log( this.list );
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
            })
        },
        edit(index, row) {
            this.$router.push({
                name: 'order-edit',
                params: {
                    id: row.id
                }
            })
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
    .title {
        font-size: 30px;
        color: #606266;
        line-height: 40px;
        .add-agent-button {
            font-size: 18px;
            float: right;
            margin-right: 40px;
        }
    }
    .red {
        color: #F56C6C;
    }
    .block {
        margin: 50px 0 30px;
        text-align: center;
    }

}
</style>
