<template>
<div class="dashboard-container">
    <el-row>
        <el-col :span="24">
            <div class="grid-content bg-purple-dark">
                任务提示： 有3条任务等待审核，其中退款审核2条，账号审核1条
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <p>
                    <span>账号信息</span>
                    <span>修改登录密码</span>
                </p>
                <portrait-table :key-width="80" :data="data"></portrait-table>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple-light">
                <p>数据统计</p>
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
        <el-col :span="12">
            <div class="grid-content bg-purple">
              <p>常用操作</p>
              <div>
                <a href="">这是链接</a>
              </div>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple-light"></div>
        </el-col>
    </el-row>
    <div class="dashboard-text">name:{{name}}</div>
    <div class="dashboard-text">roles:<span v-for='role in roles' :key='role'>{{role}}</span></div>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex';
import PortraitTable from "@/components/PortraitTable/index.vue";
export default {
    name: 'dashboard',
    data() {
        return {
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
    components: {
        PortraitTable
    }
};
</script>

<style lang="scss" scoped>
.dashboard {
    &-container {
        margin: 30px;
    }
    &-text {
        font-size: 30px;
        line-height: 46px;
    }
}

.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>
