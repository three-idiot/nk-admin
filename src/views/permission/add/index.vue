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
            <el-table-column prop="id" label="分类" width="180">
            </el-table-column>
            <el-table-column prop="name" label="页面">
            </el-table-column>
            <el-table-column prop="amount1" label="按钮">
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
                id: '12987122',
                name: '王小虎',
                amount1: '234',
                amount2: '3.2',
                amount3: 10
            }, {
                id: '12987122',
                name: '王小虎',
                amount1: '165',
                amount2: '4.43',
                amount3: 12
            }, {
                id: '12987124',
                name: '王小虎',
                amount1: '324',
                amount2: '1.9',
                amount3: 9
            }, {
                id: '12987125',
                name: '王小虎',
                amount1: '621',
                amount2: '2.2',
                amount3: 17
            }, {
                id: '12987126',
                name: '王小虎',
                amount1: '539',
                amount2: '4.1',
                amount3: 15
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
                if (rowIndex!=this.tableData.length-1 && row.id==this.tableData[rowIndex+1].id) {
                    return {
                        rowspan: 2,
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
