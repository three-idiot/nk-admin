<template>
<div class="app-container">

    <div class="filter-container" style="margin-bottom: 30px;">
      <span>资讯标题：</span>
      <el-input style="width: 200px;" v-model="listQuery.title"></el-input>
      <span>发布人：</span>
      <el-input style="width: 200px;" v-model="listQuery.person"></el-input>
      <!--时间选择器-->
      <span class="demonstration">发布时间：</span>
        <el-date-picker
          v-model="listQuery.startTime"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择日期">
        </el-date-picker>
      -
        <el-date-picker
          v-model="listQuery.endTime"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择日期">
        </el-date-picker>
      <!--时间选择器-->
      <div style="margin-top: 10px;"></div>
      <span>资讯状态：</span>
      <el-select clearable style="width: 90px" class="filter-item" v-model="listQuery.status" placeholder="请选择">
        <el-option v-for="(val,key) in newsStatus" :key="key" :label="val" :value="key">
        </el-option>
      </el-select>

      <el-button class="filter-item" style="margin-left: 20px;" type="primary"  icon="el-icon-search" @click="handleFilter">查询</el-button>
    </div>

    <!--表格-->
    <el-table  :data="list" v-loading="listLoading" border fit highlight-current-row
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
    <div class="pagination-container" style="margin-top: 30px;text-align: right;">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page" :page-sizes="[4,10,20,30,50]" :page-size="listQuery.size" layout="total, sizes, prev, pager, next, jumper" :total="pagesStatus.total_count">
      </el-pagination>
    </div>
    <!--分页结束-->
  </div>
</div>
</template>

<script>
import { getOrderList } from "@/api/order";

export default {
  data() {
    return {
      listLoading: false,
      newsStatus: {
        0: '正常',
        1: '待审核',
        2: '失效',
        3: '审核拒绝'
      },
      pagesStatus: {
        total_count: 0
      },
      listQuery: {
        auditStatus: 0,
        page: 1,
        size: 10,
        title: null,
        startTime: null,
        endTime: null,
        status: null
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
  computed: {},
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getOrderList().then(response => {
        this.listLoading = false;
        console.log("资讯列表:", response);
      });
    },
    handleSizeChange(val) {
      this.listQuery.size = val;
      this.fetchData( this.listQuery );
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.fetchData(this.listQuery);
    },
    handleFilter() {
      console.log( this.listQuery );
      let finalQuery = Object.assign({}, this.listQuery);
      if ( finalQuery['startTime'] ) {
        finalQuery.timeType=0;
      }
      this.fetchData( finalQuery );
    },
    add () {
      window.location.href = '#/news/adsadd?id=' + id;
    },
    goDetail(id) {
      window.location.href = '#/news/adsdetail?id=' + id;
    },
    goEdit(id) {
      window.location.href = '#/news/adsedit?id=' + id;
    },
    goUndercarriage(id) {
      window.location.href = '#/news/adsundercarriage?id=' + id;
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
