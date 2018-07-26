<template>
  <div class="undercarriage-form">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">

      <!--签证有效期-->
      <el-form-item label="违规下架理由" prop="foul">
        <el-select v-model="ruleForm.foul" placeholder="请选择" class="foul">
          <el-option  v-for="(val,index) in reason"  :label="val" :value="val" :key="index"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { uploadFile } from '@/api/upload'
  export default {
    data() {
      return {
        ruleForm: {
          id: this.$route.query.id,
          foul: '',
          userId: ''
        },
        reason: [
          '发布广告信息',
          '发布重要信息',
          '发布描述错误信息',
          '使用极限用语',
          '页面信息于实际描述不符',
          '发布平台违禁品',
          '发布违法商品',
          '其他'
        ],
        rules: {
          foul: [
            { required: true,trigger: 'change',message: '请选择理由' }
          ],
        }
      }
    },
    created() {
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log( this.imageUrl );
      },
      beforeAvatarUpload(file) {
        // const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return  isLt2M;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          console.log('调试1',valid);
          console.log('调试2',this.ruleForm);
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .undercarriage-form {
    margin-top: 30px;
  }
  .foul {
    width: 40%;
  }

</style>
