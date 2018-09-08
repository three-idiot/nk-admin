<template>
<div class="app-container">
    <title-line txt="账号管理" :btn="btn" @btnClick="addAccount"></title-line>
    <div style="padding:30px;background:#F2F6FC;margin-bottom:30px;">
        <el-form :inline="true" :rules="rules" :model="form" class="demo-form-inline">
            <el-form-item label="账号名称">
                <el-input v-model="form.username" placeholder="请输入账号名称"></el-input>
            </el-form-item>
            <el-form-item label="账号角色">
                <el-select v-model="form.roleId" clearable placeholder="全部">
                    <el-option v-for="item in roles" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="使用人手机号" prop="phone">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="账号状态">
                <el-select v-model="form.status" clearable placeholder="全部">
                    <el-option label="正常" value=0></el-option>
                    <el-option label="冻结" value=1></el-option>
                </el-select>
            </el-form-item>
            <el-row>
                <el-form-item>
                    <el-button v-permission="['account-list-search']" type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-row>
        </el-form>
    </div>
    <p>共{{total_count}}个账号</p>
    <el-table :stripe="true" :data="list" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row>
        <el-table-column align="center" label='账号名称'>
            <template slot-scope="scope">
                {{scope.row.username}}
            </template>
        </el-table-column>
        <el-table-column align="center" label="账号角色">
            <template slot-scope="scope">
                {{scope.row.roleName}}
            </template>
        </el-table-column>
        <el-table-column align="center" label="使用人">
            <template slot-scope="scope">
                {{scope.row.name}}
            </template>
        </el-table-column>
        <el-table-column align="center" label="手机号">
            <template slot-scope="scope">
                {{scope.row.phone}}
            </template>
        </el-table-column>
        <el-table-column align="center" label="创建人">
            <template slot-scope="scope">
                {{scope.row.createUser}}
            </template>
        </el-table-column>
        <el-table-column align="center" label="创建人角色">
            <template slot-scope="scope">
                {{scope.row.createUserRoleName}}
            </template>
        </el-table-column>
        <el-table-column label="创建时间" align="center">
            <template slot-scope="scope">
                {{new Date(scope.row.createTime).Format("yyyy-MM-dd HH:mm:ss")}}
            </template>
        </el-table-column>
        <el-table-column class-name="status-col" label="账号状态" width="110" align="center">
            <template slot-scope="scope">
                <el-tag :type="accountStatus[scope.row.status].color">{{accountStatus[scope.row.status].msg}}</el-tag>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="270" align="center">
            <template slot-scope="scope">
                <el-button size="mini" v-permission="['account-list-offline']" v-if="accountStatus[scope.row.status].msg=='正常'&&scope.row.accountType!=1" type="danger" @click="freeze(scope.row,1)">冻结</el-button>
                <el-button size="mini" v-permission="['account-list-online']" v-if="accountStatus[scope.row.status].msg=='冻结'" type="success" @click="freeze(scope.row,2)">解冻</el-button>
                <el-button size="mini" v-permission="['account-list-edit']" type="warning" @click="edit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" v-permission="['account-list-detail']" type="primary" @click="detail(scope.$index, scope.row)">查看</el-button>
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
    getList
} from "@/api/permission";
import {
    getAccountList,
    freeze
} from "@/api/account";
import map from "@/map/account";
import TitleLine from "@/components/TitleLine/index.vue";
export default {
    data() {
        var validatePhone = (rule, value, callback) => {
            if (!(/^1\d{10}$/.test(value))&&value) {
                callback(new Error('请输入正确的手机号'));
            } else {
                callback();
            }
        };
        return Object.assign({}, map, {
            btn: {
                txt: "+新建账号",
                type: "primary",
                size: "small",
                permission: 'account-list-add'
            },
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
            roles: [],
            rules: {
                phone: [{
                    validator: validatePhone,
                    trigger: 'blur'
                }],
            }
        });
    },
    computed: {
        listQuery() {
            return Object.assign({}, this.form, {
                sstartDate: this.startDaterange[0],
                estartDate: this.startDaterange[1],
                sendDate: this.endDaterange[0],
                eendDate: this.endDaterange[1],
                pageIndex: this.current_page,
                pageSize: this.page_size
            });
        }
    },
    created() {
        this.fetchData();
        this.getRolesList();
    },
    methods: {
        fetchData() {
            this.listLoading = true;
            getAccountList(this.listQuery).then(response => {
                this.list = response.data.data;
                console.log(this.list);
                this.priceCount = response.data.priceCount;
                this.total_count = response.data.total_count;
                this.current_page = response.data.current_page;
                this.max_page = response.data.max_page;
                this.listLoading = false;
            });
        },
        getRolesList() {
            getList({
                pageIndex: 1,
                pageSize: 1000000,
            }).then(response => {
                this.roles = response.data.data;
            });
        },
        // getRoleName(id) {
        //     for (let i = 0; i < this.roles.length; i++) {
        //         if (this.roles[i].id == id) {
        //             return this.roles[i].name;
        //         }
        //     }
        // },
        addAccount() {
            this.$router.push({
                name: "account-add"
            });
        },
        onSubmit() {
            this.fetchData();
        },
        freeze(row, optType) {
            let msg = ["", "冻结", "解冻"][optType];
            this.$confirm("确定" + msg + "?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                })
                .then(() => {
                    freeze({
                        id: row.id,
                        optType
                    }).then(response => {
                        this.$message({
                            type: "success",
                            message: msg + "成功!"
                        });
                        this.fetchData();
                    });
                })
                .catch(() => {});
        },
        edit(index, row) {
            this.$router.push({
                name: "account-edit",
                params: {
                    data: row
                }
            });
        },
        detail(index, row) {
            this.$router.push({
                name: "account-detail",
                params: {
                    data: row
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
    .form {
        margin-bottom: 50px;
    }
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
