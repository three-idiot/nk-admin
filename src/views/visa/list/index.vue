<template>
  <div class="app-container">

    <!--表格-->
    <el-table  :data="list" v-loading="listLoading" border fit highlight-current-row
              style="width: 100%;min-height:1000px;">

      <el-table-column align="center"  width="150" label="序号">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>

      <el-table-column width="150px" align="center" label="商品名称">
        <template slot-scope="scope">
          <span>{{scope.row.title}}</span>
        </template>
      </el-table-column>

      <el-table-column width="150px" label="有效期(天)">
        <template slot-scope="scope">
          <span class="link-type">{{scope.row.unitDay}}</span>
          <!--<el-tag>{{scope.row.type | typeFilter}}</el-tag>-->
        </template>
      </el-table-column>

      <el-table-column width="110px" align="center" label="签证价格(惠)">
        <template slot-scope="scope">
          <span>{{scope.row.author}}</span>
        </template>
      </el-table-column>

      <el-table-column width="110px"  align="center" label="发布时间">
        <template slot-scope="scope">
          <span>{{new Date(scope.row.ctime)}}</span>
        </template>
      </el-table-column>

      <!--<el-table-column width="80px" label="">-->
        <!--<template slot-scope="scope">-->
          <!--<svg-icon v-for="n in +scope.row.importance" icon-class="star" class="meta-item__icon" :key="n"></svg-icon>-->
        <!--</template>-->
      <!--</el-table-column>-->

      <el-table-column align="center"  width="95" label="分成比例">
        <template slot-scope="scope">
          <span v-if="scope.row.pageviews" class="link-type" @click='handleFetchPv(scope.row.pageviews)'>{{scope.row.pageviews}}</span>
          <span v-else>0</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col"  width="100" label="商品状态">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center"  width="340" class-name="small-padding fixed-width" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">
            查看商品
          </el-button>
          <el-button  size="mini" type="success">
            修改分成
          </el-button>
          <!--<el-button v-if="scope.row.status!='draft'" size="mini" ></el-button>-->
          <el-button  size="mini" type="danger" >
            违规下架
          </el-button>
        </template>
      </el-table-column>

    </el-table>
    <!--表格结束-->

    <!--分页-->
    <div class="pagination-container" style="margin-top: 30px;">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page" :page-sizes="[10,20,30,50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
    <!--分页结束-->
  </div>
</template>

<script>
  import { getVisaList } from '@/api/table'

  export default {
    data() {
      return {
        total: 0,
        list: null,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 10,
        },
      }
    },
    computed: {

    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        }
        return statusMap[status]
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true
        getVisaList(this.listQuery).then(response => {
          this.list = response.data.data;
          this.total = this.list.length;
          this.listLoading = false
        })
      },
      handleSizeChange(val) {
        this.listQuery.limit = val
        this.fetchData()
      },
      handleCurrentChange(val) {
        this.listQuery.page = val
        this.fetchData()
      },
    }
  }
</script>
