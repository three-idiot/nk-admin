<template>
  <div class="app-container">
    <title-line txt="新建资讯"></title-line>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="form">
      <!--资讯名称-->
      <el-form-item label="资讯标题" prop="title" style="width: 312px;">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <!--资讯图片-->

      <!--图片上传-->
      <el-form-item label="资讯图片" prop="newsPic">
        <el-upload
          class="avatar-uploader"
          style="border:1px solid #000;width: 120px;height: 120px;"
          action="/api/image/uploadfile"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <!--资讯关键字-->
      <el-form-item label="资讯关键字" prop="newsKey" style="width: 312px;">
        <el-input v-model="ruleForm.newsKey"></el-input>
      </el-form-item>

      <!--资讯详情-->
      <el-form-item label="资讯详情" prop="details" style="width: 312px;">
        <!-- <tinymce :height="300" v-model="content"></tinymce> -->
        <el-input v-model="ruleForm.detail"></el-input>
      </el-form-item>

      <!--是否置顶-->
      <el-form-item label="是否置顶" prop="top" style="width: 312px;">
        <el-radio v-model="ruleForm.top" label="1">是</el-radio>
        <el-radio v-model="ruleForm.top" label="0">否</el-radio>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { addNews } from '@/api/news';
  import Tinymce from "@/components/Tinymce";
  import TitleLine from "@/components/TitleLine/index.vue";

  export default {
  data() {
    return {
      imageUrl: '',
      ruleForm: {
        title: '',
        newsPic: [
          {name: 'test', url: 'hhh'},
          {name: 'test', url: 'hhh'}
        ],
        newsKey: '',
        detail: '',
        top: false
      },
      rules: {
        newsPic: [
            { required: true, trigger: 'change', message: '请上传图片' }
        ],
        title: [
          { required: true, trigger: 'blur', message: '请输入资讯标题' }
        ],
        newsKey: [
          { required: true, trigger: 'blur', message: '请输入关键字' }
        ],
        top: [
          { required: true, trigger: 'blur', message: '请选择是否置顶' }
        ],
        detail: [
          { required: true, trigger: 'blur', message: '请添加资讯详情' }
        ]
      }
    };
  },
  created() {
  },
  methods: {
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        // this.ruleForm.newsPic = URL.createObjectURL(file.raw);
        // console.log( file.response.data );
        this.ruleForm.newsPic = file.response.data;
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
          addNews(ruleForm).then( res => {
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
  },
  components: {
    Tinymce,
    TitleLine
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
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
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
  .avatar {
    width: 120px;
    height: 120px;
    display: block;
  }
</style>
