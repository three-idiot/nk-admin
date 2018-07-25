<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <!--商品名称-->
    <el-form-item label="商品名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <!--签证有效期-->
    <el-form-item label="签证有效期" prop="region">
      <el-select v-model="ruleForm.region" placeholder="请选择">
        <el-option  v-for="(val,key) in unitDay"  :label="val" :value="key"></el-option>
      </el-select>
    </el-form-item>
    <!--入境次数-->
    <el-form-item label="入境次数" prop="region">
      <el-select v-model="ruleForm.region" placeholder="请选择">
        <el-option  v-for="(val,key) in intoType"  :label="val" :value="key"></el-option>
      </el-select>
    </el-form-item>
    <!--是否加急-->
    <el-form-item label="是否加急" prop="region">
      <el-select v-model="ruleForm.region" placeholder="请选择">
        <el-option  v-for="(val,key) in isUrgent"  :label="val" :value="key"></el-option>
      </el-select>
    </el-form-item>
    <!--是否面试-->
    <el-form-item label="是否面试" prop="region">
      <el-select v-model="ruleForm.region" placeholder="请选择">
        <el-option  v-for="(val,key) in isInterview"  :label="val" :value="key"></el-option>
      </el-select>
    </el-form-item>
    <!--签证费-->
    <el-form-item label="商品名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <!--签证优惠费-->
    <el-form-item label="商品名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <!--服务费-->
    <el-form-item label="商品名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <!--服务优惠费-->
    <el-form-item label="商品名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <!--停留时间-->
    <el-form-item label="商品名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <!--处理时间-->
    <el-form-item label="商品名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <!--续签费用-->
    <el-form-item label="商品名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>

  </el-form>
</template>

<script>

export default {
  data() {
    return {
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
        0: '否',
        1: '是'
      },
      isInterview :{
        0: '否',
        1: '是'
      },
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        region: [
          {required: true, message: '请选择活动区域', trigger: 'change'}
        ],
        date1: [
          {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
        ],
        date2: [
          {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
        ],
        type: [
          {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
        ],
        resource: [
          {required: true, message: '请选择活动资源', trigger: 'change'}
        ],
        desc: [
          {required: true, message: '请填写活动形式', trigger: 'blur'}
        ]
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
    }
  }
}
</script>
