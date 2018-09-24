<template>
<div class="app-container">
    <title-line txt="广告审核"></title-line>
    <!-- 筛选 -->
    <div style="padding:20px;background:#F2F6FC;">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="广告标题">
          <el-input v-model="form.title" placeholder="请输入广告标题"></el-input>
        </el-form-item>
        <el-form-item label="发布人">
          <el-input v-model="form.publisherName" placeholder="请输入发布人姓名"></el-input>
        </el-form-item>
        <el-form-item label="发布日期">
          <el-date-picker v-model="daterange" type="daterange" value-format="yyyy-MM-dd HH:mm:ss" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['00:00:00', '23:59:59']">
          </el-date-picker>
        </el-form-item>
        <!-- <el-form-item label="广告状态">
          <el-select v-model="form.status" placeholder="请选择" clearable>
            <el-option label="正常" value="1"></el-option>
            <el-option label="失效" value="2"></el-option>
            <el-option label="待审核" value="3"></el-option>
            <el-option label="审核拒绝" value="4"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item label="广告位">
          <el-select v-model="form.sort" placeholder="请选择" clearable>
            <el-option label="首页第一广告位" value="1"></el-option>
            <el-option label="首页第二广告位" value="2"></el-option>
            <el-option label="首页第三广告位" value="3"></el-option>
            <el-option label="资讯页随机广告" value="99"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="有效期">
          <el-date-picker v-model="validdaterange" type="daterange" value-format="yyyy-MM-dd HH:mm:ss" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['00:00:00', '23:59:59']">
          </el-date-picker>
        </el-form-item>
        <el-row style="height: 40px;">
          <el-form-item>
            <el-button v-permission="['audit-ads-search']" type="primary" @click="onSubmit">查询</el-button>
            <el-button v-permission="['audit-ads-batchAudit']" class="stick-item" type="danger" :disabled="!selectedLists.length" @click.native="audit">批量审核</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </div>
    <div class="total">广告总数：共<span>{{ list.length }}</span>条</div>
    <!--表格-->
    <el-table :data="list" ref="adsTable" v-loading="listLoading" border fit highlight-current-row
              style="width: 100%;" @selection-change="handleSelectionChange">
      <el-table-column
              type="selection"
              width="35">
      </el-table-column>
      <el-table-column align="center"   label="广告编号" class="table-item">
        <template slot-scope="scope">
          <span>{{scope.row.adNo}}</span>
        </template>
      </el-table-column>

      <el-table-column  align="center" label="广告标题">
        <template slot-scope="scope">
          <span>{{scope.row.title}}</span>
        </template>
      </el-table-column>

      <el-table-column  align="center"  label="发布人" >
        <template slot-scope="scope">
          <span class="link-type">{{scope.row.publisherName}}</span>
        </template>
      </el-table-column>

      <el-table-column  align="center" label="发布时间" >
        <template slot-scope="scope" >
          <span>{{scope.row.createTime ? scope.row.createTime : ''}}</span>
        </template>
      </el-table-column>

      <el-table-column  align="center"  label="审核人" >
        <template slot-scope="scope">
          <span class="link-type">{{scope.row.approver}}</span>
        </template>
      </el-table-column>

      <el-table-column  align="center" label="审核时间" >
        <template slot-scope="scope" >
          <span>{{scope.row.approveTime ? scope.row.approveTime : ''}}</span>
        </template>
      </el-table-column>

      <el-table-column   align="center" label="广告位">
        <template slot-scope="scope">
          <span :class="statusEnum.sort[scope.row.sort].color">{{scope.row.sort | sortFilter}}</span>
        </template>
      </el-table-column>

      <el-table-column  align="center" label="有效期" >
        <template slot-scope="scope" >
          <span>{{scope.row.validTime ? scope.row.validTime : ''}}</span>
        </template>
      </el-table-column>

      <el-table-column   align="center" label="广告状态">
        <template slot-scope="scope">
          <span :class="statusEnum.status[scope.row.status].color">{{scope.row.status | statusFilter}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center"  class-name="small-padding fixed-width" label="操作" width="340">
        <template slot-scope="scope">
          <el-button v-permission="['audit-ads-detail']" size="mini" type="success" @click="goDetail(scope.row.id)" plain>
            查看详情
          </el-button>
          <el-button v-permission="['audit-ads-audit']" v-if="scope.row.status == 3"  size="mini" type="danger"  @click="audit(scope.row.id)">
            审核
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
    <el-dialog width="30%" :title="selectedLists.length ? '批量审核': '广告审核'" :visible.sync="dialogFormVisible">
      <div style="color: red;margin-left: 50px;">已选择{{ selectedLists.length || '1' }}个广告</div>
      <el-form :model="dialogForm">
        <el-form-item label="审核意见" label-width="120px">
          <el-radio v-model="dialogForm.agree" :label="1">同意</el-radio>
          <el-radio v-model="dialogForm.agree" :label="4">不同意</el-radio>
        </el-form-item>
        <el-form-item label="备注" label-width="120px">
          <el-input type="textarea" v-model="dialogForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAgreeConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</div>
</template>

<script>
import { getAdsList, changeAdsStatus } from "@/api/news";
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
      clickId: '', // 审核的广告
      validdaterange: [],
      form: {
        publisherName: "",
        title: "",
        status: 3,
        top: 0,
        sort: "",
      },
      list: [
        {
          adNo: '222',
          title: '广告1',
          publisherName: '唐先森',
          createTime: '20180715',
          approver: '哈哈先森',
          approveTime: '20180908',
          sort: 3,
          validTime: '20180706',
          status: 3,
          id: 100,
          images: [{goodPath: 'http://p1.xiaoshidi.net/2018/08/17055418451694.jpg'}]
        }
      ],
      selectedLists: [],
      dialogFormVisible: false,
      dialogForm: {
        agree: 0,
        remark: ''
      }
    };
  },
  computed: {
    listQuery() {
      return Object.assign({}, this.form, {
        startApproveDate: this.daterange[0] || null,
        endApproveDate: this.daterange[1] || null,
        startValidDate: this.validdaterange[0] || null,
        endValidDate: this.validdaterange[1] || null,
        pageIndex: this.current_page,
        pageSize: this.page_size,
      });
    }
  },
  filters: {
    statusFilter (value) {
      return statusEnum.status[value] && statusEnum.status[value].msg || '';
    },
    sortFilter (value) {
      return statusEnum.sort[value] && statusEnum.sort[value].msg || '';
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    audit (id) {
      this.clickId = id;
      this.dialogFormVisible = true;
    },
    handleAgreeConfirm () {
      this.dialogFormVisible = false;
      let _ids = [];
      this.selectedLists.map((item) => {
          _ids.push(item.id);
      });
      changeAdsStatus({
        adId: _ids.length ? _ids.join(',') : this.clickId,
        status: this.dialogForm.agree,
        remark: this.dialogForm.remark
      }).then((res) => {
        if (res.code == 200) {
          this.$message({
            message: '审核成功',
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
    },
    fetchData() {
      this.listLoading = true;
      getAdsList(this.listQuery).then(response => {
        this.listLoading = false;
        if (response.code == 200) {
          this.total_count = response.data.total_count;
          this.current_page = response.data.current_page;
          this.max_page = response.data.max_page;
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
    goDetail(id) {
      this.$router.push({
        name: 'ads-detail',
        query: {
            id: id
        }
      });
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.adsTable.toggleRowSelection(row);
        });
      }
    },
    handleSelectionChange (val) {
      // console.log('选择的行变化了：', val);
      this.selectedLists = val;
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
