<template>
  <div class="addVisa-form">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">
      <!--商品名称-->
      <el-form-item label="商品名称" prop="title" style="width: 312px;">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <!--商品图片-->

      <!--图片上传-->



      <!--签证有效期-->
      <el-form-item label="签证有效期" prop="unitDay">
        <el-select v-model="ruleForm.unitDay" placeholder="请选择">
          <el-option  v-for="(val,key) in unitDay"  :label="val" :value="key"></el-option>
        </el-select>
      </el-form-item>
      <!--入境次数-->
      <el-form-item label="入境次数" prop="intoType">
        <el-select v-model="ruleForm.intoType" placeholder="请选择">
          <el-option  v-for="(val,key) in intoType"  :label="val" :value="key"></el-option>
        </el-select>
      </el-form-item>
      <!--是否加急-->
      <el-form-item label="是否加急" prop="isUrgent">
        <el-radio-group v-model="ruleForm.isUrgent">
          <el-radio v-for="(val,key) in isUrgent" :label="val" :value="key"  ></el-radio>
        </el-radio-group>
      </el-form-item>
      <!--是否面试-->
      <el-form-item label="是否面试" prop="isInterview">
        <el-radio-group v-model="ruleForm.isInterview">
          <el-radio v-for="(val,key) in isInterview" :label="val" :value="key"  ></el-radio>
        </el-radio-group>
      </el-form-item>
      <!--签证费-->
      <el-form-item label="签证费(元)" prop="visaPrice"  style="width: 312px;">
        <el-input v-model="ruleForm.visaPrice"></el-input>
      </el-form-item>
      <!--签证优惠费-->
      <el-form-item label="签证优惠费(元)" prop="lowVisaPrice"  style="width: 312px;">
        <el-input v-model="ruleForm.lowVisaPrice"></el-input>
      </el-form-item>
      <!--服务费-->
      <el-form-item label="服务费(元)" prop="helpPrice"  style="width: 312px;">
        <el-input v-model="ruleForm.helpPrice"></el-input>
      </el-form-item>
      <!--服务优惠费-->
      <el-form-item label="服务优惠费(元)" prop="lowHelpPrice"  style="width: 312px;">
        <el-input v-model="ruleForm.lowHelpPrice"></el-input>
      </el-form-item>
      <!--停留时间-->
      <el-form-item label="停留时间(天)" prop="stayDay"  style="width: 312px;">
        <el-input v-model="ruleForm.stayDay"></el-input>
      </el-form-item>
      <!--处理时间-->
      <el-form-item label="处理时间(天)" prop="disposeDay"  style="width: 312px;">
        <el-input v-model="ruleForm.disposeDay"></el-input>
      </el-form-item>
      <!--续签费用-->
      <el-form-item label="续签费用(元)" prop="renewPrice"  style="width: 312px;">
        <el-input v-model="ruleForm.renewPrice"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  data() {
    let checkNum = (rule, value, callback) =>{
      if( !/^[0-9]*$/.test(value) ) {
        return callback(new Error('必须是数字'));
      }
    }
    return {
      imageUrl:'',
      unitDay: {
        30: '30天',
        60: '60天',
        90: '90天',
        0: '长期',
      },
      intoType:{
        0: '单次',
        1: '多次'
      },
      isUrgent: {
        1: '是',
        0: '否',
      },
      isInterview :{
        1: '是',
        0: '否',
      },
      ruleForm: {
        title: '',
        goodsNum: '',
        unitDay: '',
        intoType: '',
        isUrgent: '',
        isInterview: '',
        lowVisaPrice: '',
        helpPrice: '',
        lowHelpPrice: '',
        stayDay: '',
        disposeDay: '',
        renewPrice: ''
      },
      rules: {
        title: [
          { required: true,trigger: 'blur',message: '请输入商品名称' }
        ],
        unitDay :[
          {required: true,trigger: 'change',message: '请选择签证有效期' }
        ],
        intoType: [
          {required: true,trigger: 'change',message: '请选择入境次数' }
        ],
        isUrgent: [
          {required: true,trigger: 'change',message: '请选择是否加急' }
        ],
        isInterview: [
          {required: true,trigger: 'change',message: '请选择是否面试' }
        ],
        visaPrice: [
          { required: true,trigger: 'blur',message: '请输入签证费' },
          { validator: checkNum, trigger: 'blur' }
        ],
        lowVisaPrice: [
          { required: true,trigger: 'blur',message: '请输入签证优惠费' },
          { validator: checkNum, trigger: 'blur' }
        ],
        helpPrice: [
          { required: true,trigger: 'blur',message: '请输入服务费' },
          { validator: checkNum, trigger: 'blur' }
        ],
        lowHelpPrice: [
          { required: true,trigger: 'blur',message: '请输入服务优惠费' },
          { validator: checkNum, trigger: 'blur' }
        ],
        stayDay: [
          { required: true,trigger: 'blur',message: '请输入停留时间' },
          { validator: checkNum, trigger: 'blur' }
        ],
        disposeDay: [
          { required: true,trigger: 'blur',message: '请输入处理时间' },
          { validator: checkNum, trigger: 'blur' }
        ],
        renewPrice:[
          { validator: checkNum, trigger: 'blur' }
        ],
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      // this.listLoading = true
      // getList(this.listQuery).then(response => {
      //   this.list = response.data.items
      //   this.listLoading = false
      // })
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
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
      return isJPG && isLt2M;
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
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .addVisa-form {
    margin-top: 20px;
  }


</style>
