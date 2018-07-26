<template>
  <div class="addVisa-form">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">
      <!--商品名称-->
      <el-form-item label="旅行社分成(%)" prop="travelRatio" class="ratio-input">
        <el-input v-model="ruleForm.travelRatio"></el-input>
      </el-form-item>
      <!--停留时间-->
      <el-form-item label="渠道分成(%)" prop="channelRatio" class="ratio-input">
        <el-input v-model="ruleForm.channelRatio"></el-input>
      </el-form-item>
      <!--处理时间-->
      <el-form-item label="平台分成(%)" prop="terraceRatio" class="ratio-input">
        <el-input v-model="ruleForm.terraceRatio"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { goodsratio } from '@/api/table'


  export default {
    data() {
      let checkNum = (rule, value, callback) =>{
        if( !/^[0-9]*$/.test(value) ) {
          return callback(new Error('必须是数字'));
        } else {
          callback();
        }
      }
      return {
        ruleForm: {
          id: this.$route.query.id,
          travelRatio: '',
          channelRatio: '',
          terraceRatio: ''
        },
        rules: {
          travelRatio: [
            { required: true,trigger: 'blur',message: '请输入旅行社分成(%)' },
            { validator: checkNum, trigger: 'blur' }
          ],
          channelRatio: [
            { required: true,trigger: 'blur',message: '请输入渠道分成(%)' },
            { validator: checkNum, trigger: 'blur' }
          ],
          terraceRatio: [
            { required: true,trigger: 'blur',message: '请输入平台分成(%)' },
            { validator: checkNum, trigger: 'blur' }
          ],
        }
      }
    },
    created() {
    },
    methods: {
      changeRatio(params) {
        goodsratio(params).then( res => {
          if ( res.code == 200 ) {
            alert('保存成功');
            history.back();
          }
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('submit!');
            let ruleForm = Object.assign({}, this.ruleForm);
            for( let p in ruleForm ) {
              if( p!= 'id' ) {
                ruleForm[p] *= 100;
              }
            }
            console.log('调试2',ruleForm);
            this.changeRatio(ruleForm);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        console.log( this.ruleForm );
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .ratio-input {
    width: 500px;
  }
  .addVisa-form {
    margin-top: 40px;
    margin-left: 30px;
  }

</style>
