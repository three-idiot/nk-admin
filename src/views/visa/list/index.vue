<template>
  <div class="app-container">
    <!--<el-table :data="list" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row>-->
      <!--<el-table-column align="center" label='ID' width="95">-->
        <!--<template slot-scope="scope">-->
          <!--{{scope.$index}}-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column label="Title">-->
        <!--<template slot-scope="scope">-->
          <!--{{scope.row.title}}-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column label="Author" width="110" align="center">-->
        <!--<template slot-scope="scope">-->
          <!--<span>{{scope.row.author}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column label="Pageviews" width="110" align="center">-->
        <!--<template slot-scope="scope">-->
          <!--{{scope.row.pageviews}}-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column class-name="status-col" label="Status" width="110" align="center">-->
        <!--<template slot-scope="scope">-->
          <!--<el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column align="center" prop="created_at" label="Display_time" width="200">-->
        <!--<template slot-scope="scope">-->
          <!--<i class="el-icon-time"></i>-->
          <!--<span>{{scope.row.display_time}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
    <!--</el-table>-->
    <el-table  :data="list" v-loading="listLoading" border fit highlight-current-row
              style="width: 100%;min-height:1000px;">

      <el-table-column align="center"  width="65" label="序号">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>

      <el-table-column width="150px" align="center" label="商品名称">
        <template slot-scope="scope">
          <span>{{scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="150px" label="有效期(天)">
        <template slot-scope="scope">
          <span class="link-type" @click="handleUpdate(scope.row)">{{scope.row.title}}</span>
          <el-tag>{{scope.row.type | typeFilter}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column width="110px" align="center" label="签证价格(惠)">
        <template slot-scope="scope">
          <span>{{scope.row.author}}</span>
        </template>
      </el-table-column>

      <el-table-column width="110px"  align="center" label="发布时间">
        <template slot-scope="scope">
          <span style='color:red;'>{{scope.row.reviewer}}</span>
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
          <el-button v-if="scope.row.status!='published'" size="mini" type="success">
            修改分成
          </el-button>
          <el-button v-if="scope.row.status!='draft'" size="mini" >
          </el-button>
          <el-button v-if="scope.row.status!='deleted'" size="mini" type="danger" >
            违规下架
          </el-button>
        </template>
      </el-table-column>

    </el-table>

  </div>
</template>

<script>
  import { getVisaList } from '@/api/table'

  export default {
    data() {
      return {
        list: null,
        listLoading: true
      }
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
          this.list = response.data.items
          this.listLoading = false
        })
      }
    }
  }
</script>
