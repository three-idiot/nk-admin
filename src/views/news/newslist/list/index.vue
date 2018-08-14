<template>
<div class="app-container">
    <title-line txt="资讯列表"></title-line>
    <!-- 筛选 -->
    <div style="padding:20px;background:#F2F6FC;">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="资讯标题">
          <el-input v-model="form.title" placeholder="请输入资讯标题"></el-input>
        </el-form-item>
        <el-form-item label="发布人">
          <el-input v-model="form.publisher" placeholder="请输入发布人姓名"></el-input>
        </el-form-item>
        <el-form-item label="发布日期">
          <el-date-picker v-model="daterange" type="daterange" value-format="yyyy-MM-dd" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="资讯状态">
          <el-select v-model="form.status" placeholder="请选择" clearable>
            <el-option label="正常" value="1"></el-option>
            <el-option label="失效" value="2"></el-option>
            <el-option label="待审核" value="3"></el-option>
            <el-option label="审核拒绝" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-row style="height: 40px;">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button class="add-item" type="danger" icon="el-icon-add" @click.native="add">新增资讯</el-button>
            <el-button class="stick-item" type="primary" :disabled="!selectedLists.length" @click.native="stick">置顶</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </div>
    <div class="total">资讯总数：共<span>{{ list.length }}</span>条</div>
    <!--表格-->
    <el-table :data="list" ref="newsTable" v-loading="listLoading" border fit highlight-current-row
              style="width: 100%;" @selection-change="handleSelectionChange">
      <!-- <el-table-column align="center" width="50"  label="" class="table-item">
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.checked"></el-checkbox>
        </template>
      </el-table-column> -->
      <el-table-column
              type="selection"
              width="35">
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
          <span :class="statusEnum.status[scope.row.status].color">{{scope.row.status | statusFilter}}</span>
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
import { getNewsList, stickNews, changeNewsStatus } from "@/api/news";
import statusEnum from '@/map/news';
import TitleLine from "@/components/TitleLine/index.vue";

export default {
  data() {
    return {
      statusEnum: statusEnum,
      listLoading: false,
      current_page: 1,
      max_page: 0,
      page_size: 20,
      total_count: null,
      daterange: [],
      form: {
        publisher: "",
        title: "",
        status: "",
        top: 0
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
          id: "000001"
        },
        {
          newsNo: "001",
          title: "资讯二",
          publisher: "唐先森",
          createTime: 20180102,
          approver: "小李",
          approveTime: 20180101,
          status: "1",
          top: true,
          id: "000001"
        }
      ],
      selectedLists: []
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
  filters: {
    statusFilter (value) {
      return statusEnum.status[value].msg;
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
        if (response.code == 200) {
          this.list = response.data.data;
        }
      }).catch((err) => {
        console.error('', err);
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
      this.$router.push({
        name: 'news-add'
      });
    },
    goDetail(id) {
      this.$router.push({
        name: 'news-detail',
        params: {
            id: id
        }
      });
    },
    goEdit(id) {
      this.$router.push({
        name: 'news-edit',
        params: {
            id: id
        }
      });
    },
    goUndercarriage(id) {
      this.$confirm('是否下架本条资讯?', '资讯下架', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        changeNewsStatus({
          newsId: id,
          status: 2,
          remark: ''
        }).then((res) => {
          if (res.code == 200) {
            this.$message({
              message: '下架成功',
              type: 'success'
            });
            this.fetchData();
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            });
          }
        });
      }).catch(() => {
      });
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.newsTable.toggleRowSelection(row);
        });
      }
    },
    handleSelectionChange (val) {
      // console.log('选择的行变化了：', val);
      if (val && val.length <= 3) {
        this.selectedLists = val;
      } else {
        this.toggleSelection([val[3]]);
        this.$message({
          message: '最多只能选择3条资讯来置顶',
          type: 'warning'
        });
      }
    },
    stick () {
      this.$confirm(`已选择${this.selectedLists.length}条资讯，是否对资讯置顶?`, '资讯置顶', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      }).then(() => { // 确定操作
        let ids = [];
        this.selectedLists.map((item, index) => {
          ids.push(item.id);
        });
        let params = {
          newsIds: ids,
          top: 1
        };
        stickNews(params).then((res) => {
          if (res.code == 200) {
            this.$message({
              message: '置顶成功',
              type: 'success'
            });
            this.fetchData();
          } else {
            this.$message.error(res.msg);
          }
        });
      }).catch(() => { // 取消操作
      });
    }
  },
  components: {
    TitleLine
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
  span.danger {
    color: red;
  }
  .total {
    margin: 5px 0;
    span {
      color: red;
    }
  }
}
</style>
