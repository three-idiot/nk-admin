<template>
<div class="app-container">
    <!-- 筛选 -->
    <div style="padding:20px;background:#F2F6FC;">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="资讯标题">
          <el-input v-model="form.title" placeholder="请输入资讯标题"></el-input>
        </el-form-item>
        <el-form-item label="发布人">
          <el-input v-model="form.publisher" placeholder="请输入发布人姓名"></el-input>
        </el-form-item>
        <el-form-item label="发布时间">
          <el-date-picker v-model="daterange" type="daterange" value-format="yyyy-MM-dd" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="资讯状态">
          <el-select v-model="form.status" placeholder="请选择" clearable>
            <el-option label="正常" value="10"></el-option>
            <el-option label="待审核" value="20"></el-option>
            <el-option label="失效" value="30"></el-option>
            <el-option label="审核拒绝" value="40"></el-option>
          </el-select>
        </el-form-item>
        <el-row style="height: 40px;">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button class="add-item" type="danger"  icon="el-icon-add" @click.native="add">新增广告</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </div>
    <!--表格-->
    <el-table :data="list" v-loading="listLoading" border fit highlight-current-row
              style="width: 100%;">
      <el-table-column align="center" width="50"  label="" class="table-item">
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.checked"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column align="center"   label="资讯编号" class="table-item">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>

      <el-table-column  align="center" label="资讯标题">
        <template slot-scope="scope">
          <span>{{scope.row.title}}</span>
        </template>
      </el-table-column>

      <el-table-column  align="center"  label="发布人" >
        <template slot-scope="scope">
          <span class="link-type">{{scope.row.publisher}}</span>
        </template>
      </el-table-column>

      <el-table-column  align="center" label="发布时间" >
        <template slot-scope="scope" >
          <span>{{new Date(scope.row.createTime).Format("yyyy-MM-dd HH:mm:ss")}}</span>
        </template>
      </el-table-column>

      <el-table-column  align="center"  label="审核人" >
        <template slot-scope="scope">
          <span class="link-type">{{scope.row.approver}}</span>
        </template>
      </el-table-column>

      <el-table-column  align="center" label="审核时间" >
        <template slot-scope="scope" >
          <span>{{new Date(scope.row.approveTime).Format("yyyy-MM-dd HH:mm:ss")}}</span>
        </template>
      </el-table-column>

      <el-table-column   align="center" label="资讯状态">
        <template slot-scope="scope">
          <span>{{scope.row.status}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center"  class-name="small-padding fixed-width" label="操作" width="340">
        <template slot-scope="scope">
          <el-button  size="mini" type="success" @click="goDetail(scope.row.id)" plain>
            查看详情
          </el-button>
          <el-button type="primary" size="mini" @click="goEdit(scope.row.id)">
            编辑
          </el-button>
          <el-button  size="mini" type="danger"  @click="goUndercarriage(scope.row.id)">
            下架
          </el-button>
        </template>
      </el-table-column>

    </el-table>
    <!--表格结束-->

    <!--分页-->
    <div class="block">
        <el-pagination @current-change="currentPageChange" :background='true' :current-page="current_page" :page-size="page_size" layout="total, prev, pager, next, jumper" :total="total_count">
        </el-pagination>
    </div>
    <!--分页结束-->
  </div>
</div>
</template>

<script>
import { getNewsList } from "@/api/news";

export default {
  data() {
    return {
      listLoading: false,
      current_page: 1,
      max_page: 0,
      page_size: 20,
      daterange: [],
      form: {
        publisher: "",
        title: "",
        status: ""
      },
      list: [
        {
          newsNo: "001",
          title: "资讯一",
          publisher: "唐先森",
          createTime: 20180102,
          approver: "小李",
          approveTime: 20180101,
          status: "1",
          top: true,
          id: "000001",
          checked: false
        }
      ]
    };
  },
  computed: {
    listQuery() {
      return Object.assign({}, this.form, {
        startApproveDate: this.daterange[0],
        endApproveDate: this.daterange[1],
        pageIndex: this.current_page,
        pageSize: this.page_size,
      });
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getNewsList(this.listQuery).then(response => {
        this.listLoading = false;
        console.log("资讯列表:", response);
      });
    },
    currentPageChange(page) {
      this.current_page = page;
      this.fetchData();
    },
    onSubmit() {
      this.fetchData();
    },
    add() {
      window.location.href = "#/news/newsadd";
    },
    goDetail(id) {
      window.location.href = "#/news/newsdetail?id=" + id;
    },
    goEdit(id) {
      window.location.href = "#/news/newsedit?id=" + id;
    },
    goUndercarriage(id) {
      window.location.href = "#/news/newsundercarriage?id=" + id;
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  padding-left: 50px;
  .title {
    font-size: 30px;
    color: #606266;
  }
  .btn-container {
    padding-top: 30px;
    text-align: center;
  }
}
</style>
