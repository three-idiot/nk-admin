<template>
  <div class="undercarriage-form">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">
      <el-form-item label="下架理由" prop="foul">
        <el-select v-model="ruleForm.foul" placeholder="请选择" class="foul">
          <el-option  v-for="(val,index) in reason"  :label="val" :value="val" :key="index"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="goBack">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { goodsfoul } from '@/api/visa';
  export default {
    data() {
      return {
        ruleForm: {
          id: this.$route.query.id,
          foul: '',
          // userId: ''
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
            { required: true, trigger: 'change', message: '请选择理由' }
          ],
        }
      };
    },
    created() {
    },
    methods: {
      goodsfoul( params ) {
        goodsfoul( params ).then( res => {
          if ( res.code == 200 ) {
            alert('下架成功');
            history.back();
          }
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('submit!');
            console.log('调试2', this.ruleForm);
            this.goodsfoul( this.ruleForm );
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      goBack() {
        history.back();
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .undercarriage-form {
    margin-top: 30px;
  }
  .foul {
    width: 40%;
  }

</style>
