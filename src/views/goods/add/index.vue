<template>
  <div class="addVisa-form">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">
      <!--商品名称-->
      <el-form-item label="商品名称" prop="title" style="width: 312px;">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>

        <el-form-item label="商品概要" prop="title" style="width: 312px;">
            <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>

        <el-form-item label="商品分类" prop="intoType">
            <el-select v-model="ruleForm.intoType" placeholder="请选择">
                <el-option  v-for="(val,key) in type"  :label="val" :value="key" :key="key"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="日期和地点" prop="title" style="width: 312px;">
            <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>


        <el-form-item label="添加图片" prop="visaPath">
            <!-- TODO 上线之后这里要把api前缀去掉 -->
            <el-upload list-type="picture" class="upload-demo" action='/api/image/uploadfile' name='file' :limit="1" :on-success="imgUploaded" :on-remove="imgRemove">
                <el-button size="small" type="primary">点击上传</el-button>
                <div  slot="tip" class="el-upload__tip">如需更换图片，请点击图片右上角删除后重新上传</div>
            </el-upload>
        </el-form-item>


        <p>商品描述：</p>
        <div>
            <span>线路特色：</span>
            <editor class="editor" :value="content"  :setting="editorSetting" @input="(content)=> content = content"></editor>
        </div>

        <div>
            <p>行程介绍</p>
            <editor class="editor" :value="content1"  :setting="editorSetting" @input="(content)=> content = content"></editor>
        </div>

        <div>
            <p >费用与须知</p>
            <editor class="editor" :value="content2"  :setting="editorSetting" @input="(content)=> content = content"></editor>
        </div>





        <hr>
        <el-form-item label="报名截止时间" prop="visaPath">
            <el-date-picker
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
            </el-date-picker>
        </el-form-item>

        <el-form-item label="最低成团人数(人)" prop="title" style="width: 312px;">
            <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>

        <el-form-item label="成团人数上限(人)" prop="title" style="width: 312px;">
            <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <hr>

        <el-form-item label="设置商品价格(￥)" prop="title" style="width: 312px;">
            <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>

        <el-form-item label="设置门市价格(￥)" prop="title" style="width: 312px;">
            <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>

        <el-form-item label="设置儿童价格(￥)" prop="title" style="width: 312px;">
            <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>

        <span>设置商品分成：</span>

        <el-form-item label="省代(元)" prop="title" style="width: 312px;">
            <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>

        <el-form-item label="市县代(元)" prop="title" style="width: 312px;">
            <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>

        <el-form-item label="网点(元)" prop="title" style="width: 312px;">
            <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <hr>





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
  import goodsMap from "@/map/goods";
  import editor from '@/components/editor';
  import App from "../../../App";


  export default {
      data() {
    let checkNum = (rule, value, callback) =>{
      if ( !/^[0-9]*$/.test(value) ) {
        return callback(new Error('必须是数字'));
      } else {
        callback();
      }
    };
    return Object.assign({}, goodsMap, {
        content: '我是富文本编辑器的内容',
        content1: '我是富文本编辑器的内容',
        content2: '我是富文本编辑器的内容',
        editorSetting: {
            width: 600,
            height: 400,
        },
        imageUrl: '',
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
            goodsNum: [
                { required: true, trigger: 'change', message: '请上传图片' }
            ],
            title: [
                { required: true, trigger: 'blur', message: '请输入商品名称' }
            ],
            unitDay: [
                {required: true, trigger: 'change', message: '请选择签证有效期' }
            ],
            intoType: [
                {required: true, trigger: 'change', message: '请选择入境次数' }
            ],
            isUrgent: [
                {required: true, trigger: 'change', message: '请选择是否加急' }
            ],
            isInterview: [
                {required: true, trigger: 'change', message: '请选择是否面试' }
            ],
            visaPrice: [
                { required: true, trigger: 'blur', message: '请输入签证费' },
                { validator: checkNum, trigger: 'blur' }
            ],
            lowVisaPrice: [
                { required: true, trigger: 'blur', message: '请输入签证优惠费' },
                { validator: checkNum, trigger: 'blur' }
            ],
            helpPrice: [
                { required: true, trigger: 'blur', message: '请输入服务费' },
                { validator: checkNum, trigger: 'blur' }
            ],
            lowHelpPrice: [
                { required: true, trigger: 'blur', message: '请输入服务优惠费' },
                { validator: checkNum, trigger: 'blur' }
            ],
            stayDay: [
                { required: true, trigger: 'blur', message: '请输入停留时间' },
                { validator: checkNum, trigger: 'blur' }
            ],
            disposeDay: [
                { required: true, trigger: 'blur', message: '请输入处理时间' },
                { validator: checkNum, trigger: 'blur' }
            ],
            renewPrice: [
                { validator: checkNum, trigger: 'blur' }
            ],
        }
    });
  },
  created() {
  },
      components: {
          App,
          editor
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
      imgUploaded(res, file) {
          this.form.visaPath = res.data;
      },
      imgRemove(files, fileList) {
          this.form.visaPath = null;
      },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        console.log('调试2', this.ruleForm);
        if (valid) {
          console.log('submit!');
          let ruleForm = Object.assign({}, this.ruleForm);
          ruleForm['helpPrice'] *= 100;
          ruleForm['lowHelpPrice'] *= 100;
          ruleForm['lowVisaPrice'] *= 100;
          ruleForm['renewPrice'] *= 100;
          ruleForm['visaPrice'] *= 100;
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
      padding-left: 30px;
  }



</style>
