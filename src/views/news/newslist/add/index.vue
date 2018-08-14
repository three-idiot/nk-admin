<template>
  <div class="app-container">
    <title-line :txt="ruleForm.id ? '编辑资讯':'新建资讯'"></title-line>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="form">
      <!--资讯名称-->
      <el-form-item label="资讯标题" prop="title" style="width: 312px;">
        <el-input v-model="ruleForm.title" :disabled="ruleForm.id?true:false"></el-input>
      </el-form-item>
      <!--资讯图片-->
      <el-form-item label="资讯图片" prop="images">
        <span class="news-img"
                 v-for="(img, index) in ruleForm.images" 
                 :key="index">
          <i class="del-btn el-icon-remove" @click="handleDelImg(img, index)"></i>
          <img :src="img.url" 
                 alt="图片" />
        </span>
         <el-upload
          class="avatar-uploader"
          :multiple="true"
          :with-credentials="true"
          :show-file-list="false"
          :action="action"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <i class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <!--资讯关键字-->
      <el-form-item label="资讯关键字" prop="newsKey" style="width: 312px;">
        <el-input v-model="ruleForm.newsKey"></el-input>
      </el-form-item>

      <!--资讯详情-->
      <el-form-item label="资讯详情" prop="details" style="width: 312px;">
        <!-- <el-input v-model="ruleForm.detail"></el-input> -->
        <editor class="editor" 
                :value="ruleForm.detail"
                :setting="editorSetting"
                @input="(content)=> ruleForm.detail = content"></editor>
      </el-form-item>

      <!--是否置顶-->
      <el-form-item label="是否置顶" prop="top" style="width: 312px;">
        <el-radio v-model="ruleForm.top" :label="1">是</el-radio>
        <el-radio v-model="ruleForm.top" :label="0">否</el-radio>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { addNews, getNewsDetail } from '@/api/news';
  import TitleLine from "@/components/TitleLine/index.vue";
  import editor from '@/components/editor';

  // let testImgs = [
  //   'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3895702763,1516561449&fm=27&gp=0.jpg'
  // ];

  export default {
  data() {
    return {
      action: '/api/image/uploadfile',
      // action: 'http://47.93.3.67:8086/api/image/uploadfile',
      ruleForm: {
        id: '',
        title: '',
        images: ['"images/67881534175081340.jpg'],
        newsKey: '',
        detail: '',
        top: '0'
      },
      rules: {
        images: [
            { type: 'array', required: true, trigger: 'change', message: '请上传图片' }
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
      },
      editorSetting: {
        width: 600,
        height: 400
      }
    };
  },
  mounted() {
    let id = this.$route.params.id;
    console.log('资讯id：', this.ruleForm.id);
    // console.log('add mounted:', id);
    if (id) {
      this.ruleForm.id = id;
      this.fetchData();
    }
  },
  methods: {
    fetchData() {
        this.listLoading = true;
        getNewsDetail(this.ruleForm.id).then(response => {
          this.listLoading = false;
          console.log('获取编辑数据：', response);
          if (response.data) {
            this.ruleForm = Object.assign({}, this.ruleForm, response.data);
            // this.ruleForm.images = testImgs;
          }
        });
    },
    handleDelImg (img, index) {
      // console.log('要删除的图片上是：', img, index);
      this.ruleForm.images.splice(index);
    },
    handleAvatarSuccess(res, file) {
      console.log('图片上传返回：', res, file);
      // this.imageUrl = URL.createObjectURL(file.raw);
      this.ruleForm.images.push(res.data);
      console.log('图片数组：', this.ruleForm.images);
      // this.ruleForm.images = file.response.data;
    },
    beforeAvatarUpload(file) {
      // const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!');
      }
      return isLt2M;
    },
    submitForm(formName) {
      console.log('---------提交表单：', this.ruleForm);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let ruleForm = Object.assign({}, this.ruleForm);
          addNews(ruleForm).then( res => {
              if ( res.code == 200 ) {
                  this.$message({
                    message: '添加成功',
                    type: 'success'
                  });
                  setTimeout(() => {
                    this.$router.push({
                      name: 'news-list'
                    });
                  }, 1000);
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
    TitleLine,
    editor
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
    background: #f2f6fc;
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
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
  background: #fff;
}
.avatar {
  width: 120px;
  height: 120px;
  display: block;
}
.news-img {
  width: 120px;
  height: 120px;
  float: left;
  margin: 0 10px 10px 0;
  position: relative;
  .del-btn {
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 20px;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>
