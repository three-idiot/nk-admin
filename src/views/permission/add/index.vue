<template>
<div class="app-container">
    <title-line txt="新建角色"></title-line>
    <el-form ref="ruleForm" :model="form" :rules="rules" class="demo-ruleForm form" label-width="100px">
        <el-form-item label="角色名称" prop="name">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="remark">
            <el-input type="textarea" :rows="2" v-model="form.remark" maxlength="150">
            </el-input>
        </el-form-item>
        <el-form-item label="权限列表">
            <el-button size="small" type="primary" @click="selectAll(true)">全选</el-button>
            <el-button size="small" type="warning" @click="selectAll(false)">重置</el-button>
        </el-form-item>
        <el-table :stripe="true" :data="permissionList" :span-method="objectSpanMethod" border fit highlight-current-row>
            <el-table-column prop="spanName" label="分类" width="130">
            </el-table-column>
            <el-table-column label="页面" width="180">
                <template slot-scope="scope">
                    <el-checkbox v-model="scope.row.status">{{scope.row.name}}</el-checkbox>
                </template>
            </el-table-column>
            <el-table-column prop="amount1" label="按钮">
                <template slot-scope="scope">
                    <el-checkbox :disabled="!scope.row.status" v-for="item in scope.row.btns" :key="item.id" v-model="item.status">{{item.name}}</el-checkbox>
                </template>
            </el-table-column>
        </el-table>
        <el-form-item size="large" class="btn">
            <el-button v-permission="['permission-add-cancel']" type="info" @click.native="$router.back()">取消</el-button>
            <el-button v-permission="['permission-add-publish']" type="primary" @click="onSubmit('ruleForm')">保存</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import {
    getList
} from "@/api/permission";
import {
    addRole
} from "@/api/permission";
import TitleLine from "@/components/TitleLine/index.vue";
import map from "@/map/permission";
export default {
    data() {
        return Object.assign({}, map, {
            form: {},
            rules: {
                name: [{
                    required: true,
                    trigger: 'blur'
                }]
            },
        });
    },
    computed: {
        listQuery() {
            return Object.assign({}, this.form, {
                menus: this.getMenus()
            });
        }
    },
    created() {},
    methods: {
        onSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.add(this.listQuery);
                } else {
                    this.$alert('请将表单填写完整', '提示', {
                        confirmButtonText: '确定'
                    });
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
        add(params) {
            addRole(params).then(response => {
                this.$alert('添加成功', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$router.push({
                            name: "permission-list"
                        });
                    }
                });
            });
        },
        getMenus() {
            let menus = [];
            this.permissionList.forEach(ele => {
                if (ele.status) {
                    menus.push({
                        feId: ele.id,
                        btnFeIds: this.getBtns(ele)
                    })
                }
            });
            return menus;
        },
        getBtns(ele) {
            let btns = ele.btns.filter(btnObj => {
                return btnObj.status;
            });
            btns = btns.map(btnObj => {
                return btnObj.id;
            });
            return btns.join(',');
        },
        selectAll(status) {
            this.permissionList.forEach(ele => {
                ele.status = status;
                ele.btns.forEach(btnObj => {
                    btnObj.status = status;
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
        .btn {
            margin-top: 30px;
        }
    }
}
</style>
