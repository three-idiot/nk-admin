<template>
  <div class="app-container">
    用户昵称&nbsp;&nbsp;<el-input placeholder="请输入用户昵称" v-model="filterNickName" style="width: 176px; margin-bottom:30px;"></el-input>
    <el-button type="primary" @click="handleSearch">查询</el-button>
    <el-table :data="users" v-loading="listLoading" element-loading-text="加载中" border fit highlight-current-row>
      <el-table-column align="center" label='序号' width="100">
        <template slot-scope="scope">
          {{scope.$index + 1}}
        </template>
      </el-table-column>
      <el-table-column label="昵称" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.nickName}}</span>
        </template>
      </el-table-column>
      <el-table-column label="性别" align="center">
        <template slot-scope="scope">
          {{scope.row.sex | sexFilter}}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="用户状态" align="center">
        <template slot-scope="scope">
          {{scope.row.status | statusFilter}}
        </template>
      </el-table-column>
      <el-table-column label="注册时间" align="center">
        <template slot-scope="scope">
          {{scope.row.ctime | dateFilter}}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getUserList } from '@/api/userList'

export default {
  data() {
    return {
      users: null,
      listLoading: true,
      filterNickName: ''
    }
  },
  filters: {
    sexFilter(sex) {
      const sexMap = {
        0: '未知',
        1: '男',
        2: '女'
      }
      return sexMap[sex]
    },
    statusFilter(status) {
      const statusMap = {
        0: '正常',
        1: '异常'
      }
      return statusMap[status]
    },
    dateFilter(dateStr) {
      const dateObj = new Date(dateStr)
      return dateStr ? dateObj.toLocaleString() : ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData(nickName = '', status = 0, page = 1, size = 10000) {
      this.listLoading = true
      getUserList(nickName, status, page, size).then(response => {
        // console.log('请求返回：', response)
        this.users = response.data.data
        this.listLoading = false
      })
    },
    handleSearch() {
      this.fetchData(this.filterNickName)
    }
  }
}
</script>
