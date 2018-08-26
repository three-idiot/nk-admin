<template>
<div class="app-container">
    <title-line txt="新建账号"></title-line>
    <el-form ref="ruleForm" :model="form" :rules="rules" class="demo-ruleForm" label-width="100px">
        <el-form-item label="所属角色" prop="roleId">
            <el-select v-model="form.roleId" placeholder="请选择">
                <el-option v-for="item in roles" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="账号" prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名，用户名为3到15个字符组成，包括汉字，大小写字母（不区分大小写）"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
            <el-input type="password" v-model="form.pwd" placeholder="请填写密码，最小长度为 8 个字符"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="form.checkPass" placeholder="再次输入密码，请确保两次密码一致"></el-input>
        </el-form-item>
        <el-form-item label="使用人姓名">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
            <el-input v-model="form.phone"></el-input>
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
    getList
} from "@/api/permission";
import {
    addAccount
} from "@/api/account";
import TitleLine from "@/components/TitleLine/index.vue";
import map from "@/map/account";
export default {
    data() {
        var validatePhone = (rule, value, callback) => {
            if (!(/^1\d{10}$/.test(value)) && value) {
                callback(new Error('请输入正确的手机号'));
            } else {
                callback();
            }
        };
        var validateUsername = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入账号'));
            } else if (!(/^[A-Za-z\u4e00-\u9fa5]{3,15}$/.test(value))) {
                callback(new Error('用户名为 3 到 15 个字符组成，包括汉字，大小写字母（不区分大小写）'));
            } else {
                callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入密码'));
            } else if (!(/^[A-Za-z0-9]{8,}$/.test(value))) {
                callback(new Error('最小长度为 8 个字符'));
            } else {
                if (this.form.checkPass) {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.form.pwd) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return Object.assign({}, map, {
            form: {},
            rules: {
                username: [{
                    required: true,
                    validator: validateUsername,
                    trigger: 'blur'
                }],
                roleId: [{
                    required: true,
                    message: '请输入角色',
                    trigger: 'change'
                }],
                pwd: [{
                    required: true,
                    validator: validatePass,
                    trigger: 'blur'
                }],
                checkPass: [{
                    required: true,
                    validator: validatePass2,
                    trigger: 'blur'
                }],
                phone: [{
                    validator: validatePhone,
                    trigger: 'blur'
                }],
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
