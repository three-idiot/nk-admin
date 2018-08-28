<template>
<div class="app-container">
    <title-line txt="新建角色"></title-line>
    <el-form ref="ruleForm" :model="form" :rules="rules" class="demo-ruleForm" label-width="100px">
        <el-form-item label="角色名称" prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名，用户名为3到15个字符组成，包括汉字，大小写字母（不区分大小写）"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="pwd">
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.textarea">
            </el-input>
        </el-form-item>
        <el-form-item label="权限列表" prop="pwd1">
            <el-button size="small" type="primary">全选</el-button>
        </el-form-item>
        <el-table :data="tableData" :span-method="objectSpanMethod" border style="width: 100%; margin-top: 20px">
            <el-table-column prop="spanName" label="分类" width="180">
            </el-table-column>
            <el-table-column label="页面">
                <template slot-scope="scope">
                    <el-checkbox v-model="scope.row.status">{{scope.row.name}}</el-checkbox>
                </template>
            </el-table-column>
            <el-table-column prop="amount1" label="按钮">
                <template slot-scope="scope">
                    <el-checkbox v-for="item in scope.row.btns" :key="item.id" v-model="item.status">{{item.name}}</el-checkbox>
                </template>
            </el-table-column>
        </el-table>
        <el-form-item size="large" class="btn">
            <el-button type="info" @click.native="$router.back()">取消</el-button>
            <el-button type="primary" @click="onSubmit('ruleForm')">保存</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import {
    getList
} from "@/api/permission";
import {
    addAccount
} from "@/api/account";
import TitleLine from "@/components/TitleLine/index.vue";
import map from "@/map/account";
export default {
    data() {
        return Object.assign({}, map, {
            form: {},
            tableData: [{
                span: 2,
                spanName: '商品管理',
                name: '商品列表',
                status: false,
                id: 'goods-list',
                btns: [{
                    id: 'goods-list-add',
                    name: '新增商品',
                    status: false,
                }, {
                    id: 'goods-list-edit',
                    name: '编辑',
                    status: false,
                }, {
                    id: 'goods-list-detail',
                    name: '查看详情',
                    status: false,
                }, {
                    id: 'goods-list-online',
                    name: '上架',
                    status: false,
                }, {
                    id: 'goods-list-offline',
                    name: '下架',
                    status: false,
                }, {
                    id: 'goods-list-refundRule',
                    name: '退款规则',
                    status: false,
                }, {
                    id: 'goods-list-search',
                    name: '搜索',
                    status: false,
                }]
            }, {
                spanName: '商品管理',
                name: '新增商品',
                status: false,
                id: 'goods-add',
                btns: [{
                    id: 'goods-add-cancel',
                    name: '取消',
                    status: false,
                }, {
                    id: 'goods-add-publish',
                    name: '发布',
                    status: false,
                }]
            }, {
                span: 2,
                spanName: '代理商管理',
                name: '代理商列表',
                status: false,
                id: 'agent-list',
                btns: [{
                    id: 'agent-list-add',
                    name: '新增代理商',
                    status: false,
                }, {
                    id: 'agent-list-edit',
                    name: '编辑',
                    status: false,
                }, {
                    id: 'agent-list-detail',
                    name: '查看代理商',
                    status: false,
                }, {
                    id: 'agent-list-search',
                    name: '搜索',
                    status: false,
                }]
            }, {
                spanName: '代理商管理',
                name: '新增代理商',
                status: false,
                id: 'agent-add',
                btns: [{
                    id: 'agent-add-cancel',
                    name: '取消',
                    status: false,
                }, {
                    id: 'agent-add-publish',
                    name: '发布',
                    status: false,
                }]
            }, {
                span: 3,
                spanName: '订单管理',
                name: '订单列表',
                status: false,
                id: 'travel-order-list',
                btns: [{
                    id: 'travel-order-list-detail',
                    name: '查看详情',
                    status: false,
                }, {
                    id: 'travel-order-list-refund',
                    name: '退款',
                    status: false,
                }, {
                    id: 'travel-order-list-search',
                    name: '搜索',
                    status: false,
                }]
            }, {
                spanName: '订单管理',
                name: '退款订单列表',
                status: false,
            }, {
                spanName: '订单管理',
                name: '退款审核',
                status: false,
            }, {
                span: 5,
                spanName: '资讯广告管理',
                name: '资讯列表',
                status: false,
            }, {
                spanName: '资讯广告管理',
                name: '新增资讯',
                status: false,
            }, {
                spanName: '资讯广告管理',
                name: '广告列表',
                status: false,
            }, {
                spanName: '资讯广告管理',
                name: '新增广告',
                status: false,
            }, {
                spanName: '资讯广告管理',
                name: '广告审核',
                status: false,
            }, {
                span: 2,
                spanName: '账号管理',
                name: '账号列表',
                status: false,
            }, {
                spanName: '账号管理',
                name: '新增账号',
                status: false,
            }, {
                span: 2,
                spanName: '角色管理',
                name: '角色列表',
                status: false,
            }, {
                spanName: '角色管理',
                name: '新增角色',
                status: false,
            }, {
                span: 1,
                spanName: '用户管理',
                name: '用户列表',
                status: false,
            }, {
                span: 2,
                spanName: '签证管理',
                name: '签证列表',
                status: false,
            }, {
                spanName: '签证管理',
                name: '新建签证',
                status: false,
            }],
            rules: {
                username: [{
                    required: true,
                    trigger: 'blur'
                }]
            },
            daterange: [],
            info: [],
            data: [],
            roles: [],
        });
    },
    computed: {
        listQuery() {
            delete this.form.checkPass;
            return Object.assign({}, this.form, {});
        }
    },
    created() {
        this.getRolesList();
    },
    methods: {
        onSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.update(this.listQuery);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        objectSpanMethod({
            row,
            column,
            rowIndex,
            columnIndex
        }) {
            // console.log(rowIndex,columnIndex,rowIndex!=this.tableData.length-1,row.id==this.tableData[rowIndex+1].id)
            if (columnIndex === 0) {
                if (row.span) {
                    return {
                        rowspan: row.span,
                        colspan: 1
                    };
                } else {
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                }
            }
        },
        getRolesList() {
            getList({
                pageIndex: 1,
                pageSize: 1000000,
            }).then(response => {
                this.roles = response.data.data;
            });
        },
        imgUploaded(res, file) {
            this.form.visaPath = res.data;
        },
        imgRemove(files, fileList) {
            this.form.visaPath = null;
        },
        update(params) {
            addAccount(params).then(response => {
                this.$alert('添加成功', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$router.back();
                    }
                });
            });
        }
    },
    components: {
        TitleLine
    }
};
</script>

<style lang="scss" scoped>
.app-container {
    padding-left: 50px;
    .title {
        font-size: 30px;
        color: #606266;
    }
    .form {
        margin-top: 30px;
        padding: 30px;
        padding-bottom: 5px;
        background: #F2F6FC;
        .btn {
            margin-top: 30px;
        }
    }
}
</style>
