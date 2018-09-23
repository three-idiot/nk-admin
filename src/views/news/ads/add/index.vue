<template>
  <div class="app-container">
    <title-line :txt="ruleForm.id ? '编辑广告':'新建广告'"></title-line>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="form">
      <!--广告编号-->
      <el-form-item label="广告编号" v-if="isEdit" prop="adNo" style="width: 312px;">
        <el-input v-model="ruleForm.adNo" :disabled="isEdit"></el-input>
      </el-form-item>
      <!--资讯名称-->
      <el-form-item label="广告标题" prop="title" style="width: 312px;">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <!--资讯图片-->
      <el-form-item label="广告图片" prop="images">
        <span class="news-img"
                 v-for="(img, index) in ruleForm.images"
                 :key="index">
          <i class="del-btn el-icon-remove" @click="handleDelImg(img, index)"></i>
          <img :src="img.localPath || img.goodPath"
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
      <!-- 链接url -->
      <el-form-item label="链接URL地址" prop="url" style="width: 312px;">
        <el-input v-model="ruleForm.url"></el-input>
      </el-form-item>
      <!-- 广告位宽度 -->
      <el-form-item v-if="!isEdit" label="广告位宽度" prop="width" style="width: 312px;">
        <el-input type="number" v-model.number="ruleForm.width"></el-input>
      </el-form-item>
      <!-- 广告位高度 -->
      <el-form-item v-if="!isEdit" label="广告位高度" prop="height" style="width: 312px;">
        <el-input type="number" v-model.number="ruleForm.height"></el-input>
      </el-form-item>
      <!-- 广告位位置 -->
      <el-form-item label="选择广告位置" prop="sort" style="width: 312px;">
        <el-select v-model="ruleForm.sort" placeholder="请选择" clearable>
          <el-option label="首页第一广告位" :value="1"></el-option>
          <el-option label="首页第二广告位" :value="2"></el-option>
          <el-option label="首页第三广告位" :value="3"></el-option>
          <el-option label="资讯页随机广告" :value="99"></el-option>
        </el-select>
      </el-form-item>
      <!-- 广告有效期 -->
      <el-form-item label="广告有效期" prop="validTime" style="width: 312px;">
        <el-date-picker
          v-if="!isEdit || isEdit && showEditor"
          v-model="ruleForm.validTime"
          type="date"
          value-format="yyyy-MM-dd HH:mm:ss"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>

      <!--资讯详情-->
      <el-form-item label="广告详情" prop="detail" style="width: 312px;">
        <!-- <el-input v-model="ruleForm.detail"></el-input> -->
        <editor class="editor"
                v-if="!isEdit || isEdit && showEditor"
                :value="ruleForm.detail"
                :setting="editorSetting"
                @input="(content)=> ruleForm.detail = content"></editor>
      </el-form-item>

      <el-form-item>
        <el-button v-permission="['ads-add-cancel']" type="info" @click="cancel">取消</el-button>
        <el-button v-permission="['ads-add-publish']" type="primary" @click="submitForm('ruleForm')">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { addAds, editAds, getAdsDetail } from '@/api/news';
  import TitleLine from "@/components/TitleLine/index.vue";
  import editor from '@/components/editor';

  export default {
  data() {
    return {
      showEditor: false, /** 加这个变量纯属无奈，editor异步传入数据进去居然不会渲染 */
      action: this.$imgUploadApi,
      ruleForm: {
        adNo: '',
        id: '',
        title: '',
        images: [],
        detail: null,
        url: '',
        width: '',
        height: '',
        sort: '',
        validTime: ''
      },
      rules: {
        images: [
            { type: 'array', required: true, trigger: 'change', message: '请上传图片' }
        ],
        title: [
          { required: true, trigger: 'blur', message: '请输入资讯标题' }
        ],
        detail: [
          { required: true, trigger: 'blur', message: '请添加资讯详情' }
        ],
        url: [
          { required: true, trigger: 'blur', message: '请配置链接URL地址' }
        ],
        width: [
          { required: true, trigger: 'blur', message: '请输入广告位宽度' }
        ],
        height: [
          { required: true, trigger: 'blur', message: '请输入广告位高度' }
        ],
        sort: [
          { required: true, trigger: 'change', message: '请选择广告位置' }
        ],
        validTime: [
          { required: true, trigger: 'change', message: '请选择有效期' }
        ]
      },
      editorSetting: {
        width: 600,
        height: 400
      }
    };
  },
  computed: {
    isEdit () {
      return this.$route.query && this.$route.query.id ? true : false;
    }
  },
  created() {
    let id = this.$route.query && this.$route.query.id;
    if (id) {
      this.getAdsEditInfo(id);
    }
  },
  methods: {
    handleDelImg (img, index) {
      // console.log('要删除的图片上是：', img, index);
      this.ruleForm.images.splice(index, 1);
    },
    handleAvatarSuccess(res, file) {
      console.log('图片上传返回：', res, file);
      // this.imageUrl = URL.createObjectURL(file.raw);
      this.ruleForm.images.push({
        goodPath: res.data,
        localPath: URL.createObjectURL(file.raw)
      });
      // console.log('图片数组：', this.ruleForm.images);
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
    getAdsEditInfo (id) {
      this.listLoading = true;
      getAdsDetail(id).then(response => {
        this.listLoading = false;
        if (response.data) {
          let data = response.data;
          this.ruleForm = {
            adNo: data.adNo,
            id: data.id,
            title: data.title,
            images: data.images,
            detail: data.detail,
            url: data.url,
            sort: data.sort,
            // validTime: new Date(Date.parse(data.validTime.replace(/-/g,"/")))
            validTime: data.validTime
          }
        }
        this.showEditor = true;
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let ruleForm = Object.assign({}, this.ruleForm);
          let _newArr = [];
          ruleForm.images.map((img) => {
            if (img.goodPath.indexOf('https') > -1) {
              img.localPath = img.goodPath;
              img.goodPath = /https:\/\/image.le-99.xyz\/(images\/\w+\.\w+)(\?\w+)/.exec(img.goodPath)[1];
            }
            _newArr.push({
              localPath: img.localPath,
              goodPath: img.goodPath
            });
            return img;
          });
          ruleForm.images = _newArr;
          if (this.isEdit) {
            editAds(ruleForm).then( res => {
                if ( res.code == 200 ) {
                    this.$message({
                      message: '修改成功',
                      type: 'success'
                    });
                    setTimeout(() => {
                      this.$router.push({
                        name: 'adslist'
                      });
                    }, 1000);
                }
            });
          } else {
            addAds(ruleForm).then( res => {
                if ( res.code == 200 ) {
                    this.$message({
                      message: '添加成功',
                      type: 'success'
                    });
                    setTimeout(() => {
                      this.$router.push({
                        name: 'adslist'
                      });
                    }, 1000);
                }
            });
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    cancel() {
      this.$router.back(-1);
    },
    /** 2018-01-01 00:00:00转化为ie支持的格式 */
    parseTime (str) {
      console.log(str);
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
