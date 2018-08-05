<template>
  <div class="addVisa-form">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">
      <!--资讯名称-->
      <el-form-item label="资讯标题" prop="title" style="width: 312px;">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <!--资讯图片-->

      <!--图片上传-->
      <el-form-item label="商品图片" prop="goodsNum" style="width: 312px;">
        <el-upload
          class="avatar-uploader"
          style="border:1px solid #000;width: 178px;height: 178px;"
          action="/api/image/uploadfile"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <!--资讯关键字-->
      <el-form-item label="资讯关键字" prop="keywords" style="width: 312px;">
        <el-input v-model="ruleForm.keywords"></el-input>
      </el-form-item>

      <!--资讯详情-->
      <el-form-item label="资讯详情" prop="details" style="width: 312px;">
        富文本编辑器
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { addGoods } from '@/api/visa';
  // import axios from 'axios';


  export default {
  data() {
    let checkNum = (rule, value, callback) =>{
      if ( !/^[0-9]*$/.test(value) ) {
        return callback(new Error('必须是数字'));
      } else {
        callback();
      }
    };
    return {
      imageUrl: '',
      ruleForm: {
        title: '',
        goodsNum: '',
        keywords: ''
      },
      rules: {
        goodsNum: [
            { required: true, trigger: 'change', message: '请上传图片' }
        ],
        title: [
          { required: true, trigger: 'blur', message: '请输入资讯标题' }
        ],
        keywords: [
          { required: true, trigger: 'blur', message: '请输入关键字' }
        ],
      }
    };
  },
  created() {
  },
  methods: {
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        // this.ruleForm.goodsNum = URL.createObjectURL(file.raw);
        console.log( file.response.data );
        this.ruleForm.goodsNum = file.response.data;
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
      return isLt2M;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        console.log('调试2', this.ruleForm);
        if (valid) {
          console.log('submit!');
          let ruleForm = Object.assign({}, this.ruleForm);
          addGoods(ruleForm).then( res => {
              if ( res.code == 200 ) {
                  alert('新建成功');
                  history.back();
              }
          });
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
};
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
