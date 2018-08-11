<template>
<div class="dashboard-container">
    <el-row>
        <el-col :span="24">
            <div class="task bg-purple-light">
                <span>任务提示：</span>有<span>3</span>条任务等待审核，其中退款审核<span>2</span>条，账号审核<span>1</span>条
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="8">
            <div class=" bg-purple-light">
                <p class="title account">
                    <span>账号信息</span>
                    <a class="change-password">修改登录密码</a>
                </p>
                <portrait-table :key-width="80" :data="data"></portrait-table>
            </div>
        </el-col>
        <el-col :span="1">
            <p></p>
        </el-col>
        <el-col :span="15">
            <div class=" bg-purple-light">
                <p class="title">数据统计</p>
                <el-table :stripe="true" :data="list" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row>
                    <el-table-column align="center" label=''>
                        <template slot-scope="scope">
                            {{scope.row.title}}
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="注册用户">
                        <template slot-scope="scope">
                            {{scope.row.user}}
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label='代理商'>
                        <template slot-scope="scope">
                            {{scope.row.agent}}
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="订单数">
                        <template slot-scope="scope">
                            {{scope.row.orderNum}}
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="成交金额">
                        <template slot-scope="scope">
                            {{scope.row.gross}}
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="8">
            <div class="common-operation bg-purple-light">
                <p class="title">常用操作</p>
                <div class="links">
                    <a v-for="item in commonOperation" :key="item.title" @click="$router.push({name: item.name})">{{item.title}}</a>
                </div>
            </div>
        </el-col>
        <el-col :span="1">
            <p></p>
        </el-col>
        <el-col :span="15">
            <div class="chart .bg-purple-light" ref="chart"></div>
        </el-col>
    </el-row>
    <!-- <div class="dashboard-text">name:{{name}}</div>
    <div class="dashboard-text">roles:<span v-for='role in roles' :key='role'>{{role}}</span></div> -->
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex';
import PortraitTable from "@/components/PortraitTable/index.vue";
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
export default {
    name: 'dashboard',
    data() {
        return {
            chart: null,
            listLoading: false,
            list: [{
                    title: '总数',
                    user: 1,
                    agent: 1,
                    orderNum: 1,
                    gross: 1,
                },
                {
                    title: '本月新增',
                    user: 1,
                    agent: 1,
                    orderNum: 1,
                    gross: 1,
                }
            ],
            data: [{
                    key: '用户名',
                    value: '1',
                    type: 'string'
                },
                {
                    key: '角色',
                    value: '1',
                    type: 'string'
                },
                {
                    key: '创建人',
                    value: '1',
                    type: 'string'
                },
                {
                    key: '创建时间',
                    value: 1,
                    type: 'dateTime'
                },
                {
                    key: '有效期',
                    value: 1,
                    type: 'dateTime'
                },
                {
                    key: '上次登录时间',
                    value: 1,
                    type: 'dateTime'
                },
            ],
            commonOperation: [{
                    title: '退款审核',
                    name: ''
                },
                {
                    title: '新增代理商',
                    name: ''
                },
                {
                    title: '订单列表',
                    name: 'order-list'
                },
                {
                    title: '新建系统管理员账号',
                    name: ''
                },
            ],
            current_page: 1,
            page_size: 20,
            total_count: null,
            priceCount: null,
        };
    },
    computed: {
        ...mapGetters([
            'name',
            'roles'
        ])
    },
    mounted() {
        this.chartInit()
    },
    methods: {
        chartInit() {
            this.chart = echarts.init(this.$refs.chart);
            this.setChart()
        },
        setChart() {
            this.chart.setOption({
                backgroundColor: 'rgba(242, 242, 242, 1)',
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true
                }]
            });
        }
    },
    components: {
        PortraitTable
    }
};
</script>

<style lang="scss" scoped>
.dashboard {
    &-container {
        margin: 30px;
        .task {
            border-radius: 4px;
            line-height: 36px;
            padding: 5px 10px;
            span {
                color: red;
            }
        }
        .account {
            .change-password {
                float: right;
                text-decoration: underline;
                color: red;
            }
        }
        .common-operation {
            height: 500px;
            .links {
                padding-top: 20px;
                padding-left: 50px;
                a {
                    display: block;
                    padding-bottom: 30px;
                    text-decoration: underline;
                    color: #0099FF;
                }
            }
        }
        .chart {
            height: 500px;
        }
    }
    &-text {
        font-size: 30px;
        line-height: 46px;
    }
}

.title {
    margin: 0;
    border-radius: 4px;
    line-height: 36px;
    padding: 0 10px;
    font-size: 14px;
    color: blue;
}

.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: rgba(242, 242, 242, 1);
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>
