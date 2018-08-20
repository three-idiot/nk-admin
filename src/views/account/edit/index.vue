<template>
<div class="app-container">
    <title-line txt="新建账号"></title-line>
    <el-form ref="ruleForm" :model="form" :rules="rules" class="demo-ruleForm" label-width="100px">
        <el-form-item label="所属角色">
            <el-select disabled v-model="form.roleId" placeholder="请选择">
                <el-option label="1" value="1">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="账号">
            <el-input v-model="form.username" placeholder="请输入用户名，用户名为3到15个字符组成，包括汉字，大小写字母（不区分大小写）" disabled></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input type="password" v-model="form.pwd" placeholder="请填写密码，最小长度为 8 个字符"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
            <el-input v-model="form.pwd2" placeholder="再次输入密码，请确保两次密码一致"></el-input>
        </el-form-item>
        <el-form-item label="使用人姓名">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
            <el-input v-model="form.phone"></el-input>
        </el-form-item>
        {{form}}
        <el-form-item label="状态">
            <el-radio-group v-model="form.status">
                <el-radio label="0">正常</el-radio>
                <el-radio label="1">冻结</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item size="large" class="btn">
            <el-button type="info" @click.native="$router.back()">取消</el-button>
            <el-button type="primary" @click="onSubmit('ruleForm')">保存</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import {
    updateAccount
} from "@/api/account";
import TitleLine from "@/components/TitleLine/index.vue";
import map from "@/map/account";
export default {
    data() {
        return Object.assign({}, map, {
            form: {},
            rules: {
                username: [{
                    required: true,
                    message: '输入账户名称',
                    trigger: 'change'
                }],
                pwd: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'change'
                }],
                roleId: [{
                    required: true,
                    message: '请输入角色',
                    trigger: 'change'
                }],
            },
            daterange: [],
            info: [],
            data: [],
        });
    },
    computed: {
        listQuery() {
            return Object.assign({}, this.form, {
            });
        }
    },
    created() {
        if (!this.$route.params.data) {
            this.$router.back();
        } else {
            const data = this.$route.params.data;
            this.form.id = data.id;
            this.form.roleId = data.roleId;
            this.form.username = data.username;
            this.form.phone = data.phone;
            this.form.status = data.status;
        }
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
        imgUploaded(res, file) {
            this.form.visaPath = res.data;
        },
        imgRemove(files, fileList) {
            this.form.visaPath = null;
        },
        update(params) {
            updateAccount(params).then(response => {
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
