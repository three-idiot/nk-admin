<template>
       <el-table
       :show-header=false
      :data="data"
      style="width: 100%">
      <el-table-column
        prop="key"
        label="标题"
        align="right"
        width="180">
      </el-table-column>
      <el-table-column
        label="值">
          <template slot-scope="scope">
            <p v-if="scope.row.type=='string'">{{scope.row.value}}</p>
          </template>
      </el-table-column>
    </el-table>
</template>

<script>
export default {
  name: 'portrart-table',
  props: {
    data: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
</style>
