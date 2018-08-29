<template>
<div class="app-container">
    <title-line txt="角色管理" :btn="btn" @btnClick="addRoles"></title-line>
    <div style="padding:30px;background:#F2F6FC;">
        <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="form.status" placeholder="请选择" clearable>
                    <el-option v-for="item in Object.keys(roleStatus)" :key="item" :label="roleStatus[item].msg" :value="item"></el-option>
                </el-select>
            </el-form-item>
            <el-row>
                <el-form-item>
                    <el-button v-permission="['permission-list-search']" type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-row>
        </el-form>
    </div>
    <p>角色总数 <span class="red">{{total_count}}</span> 条</p>
    <el-table :stripe="true" :data="list" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row>
        <el-table-column align="center" label='角色名称'>
            <template slot-scope="scope">
                {{scope.row.name}}
            </template>
        </el-table-column>
        <el-table-column align="center" label="状态">
            <template slot-scope="scope">
                <el-tag :type="roleStatus[scope.row.status].color">{{roleStatus[scope.row.status].msg}}</el-tag>
            </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
            <template slot-scope="scope">
                <el-button size="mini" v-permission="['permission-list-offline']" v-if="roleStatus[scope.row.status].msg=='正常'" type="danger" @click="freeze(scope.row,1)">冻结</el-button>
                <el-button size="mini" v-permission="['permission-list-online']" v-if="roleStatus[scope.row.status].msg=='冻结'" type="success" @click="freeze(scope.row,2)">解冻</el-button>
                <el-button size="mini" v-permission="['permission-list-edit']" type="warning" @click="edit(scope.$index, scope.row)">编辑</el-button>
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
    getList,freeze
} from "@/api/permission";
import map from "@/map/permission";
import TitleLine from "@/components/TitleLine/index.vue";
export default {
    data() {
        return Object.assign({}, map, {
            btn: {
                txt: "+新建角色",
                type: "primary",
                size: "small",
                permission: 'permission-list-add'
            },
            list: null,
            listLoading: true,
            current_page: 1,
            max_page: 0,
            page_size: 20,
            total_count: null,
            priceCount: null,
            form: {},
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
            getList(this.listQuery).then(response => {
                this.list = response.data.data;
                this.priceCount = response.data.priceCount;
                this.total_count = response.data.total_count;
                this.current_page = response.data.current_page;
                this.max_page = response.data.max_page;
                this.listLoading = false;
            });
        },
        addRoles() {
            this.$router.push({
                name: 'permission-add'
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
                name: "permission-edit",
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
}
</style>
