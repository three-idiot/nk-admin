<template>
  <div class="app-container">

    <div class="filter-container" style="margin-bottom: 30px;">
        <span>商品类别：</span>
        <el-select clearable style="width: 200px" class="filter-item" v-model="listQuery.status" placeholder="请选择">
            <el-option v-for="(val,key) in type" :key="key" :label="val" :value="key">
            </el-option>
        </el-select>

      <span>商品名称：</span>
      <el-input style="width: 200px;" v-model="listQuery.title"></el-input>

        <span>发布人：</span>
        <el-input style="width: 200px;" v-model="listQuery.title"></el-input>

      <span>商品状态：</span>
      <el-select clearable style="width: 90px" class="filter-item" v-model="listQuery.status" placeholder="请选择">
        <el-option v-for="(val,key) in status" :key="key" :label="val" :value="key">
        </el-option>
      </el-select>

        <!--时间选择器-->
        <span class="demonstration">发布日期：</span>
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

        <div class="goodPrice" style="margin-top: 10px;">
            <span>商品价格：</span>
            <el-select clearable style="width: 90px" class="filter-item" v-model="listQuery.status" placeholder="请选择">
                <el-option v-for="(val,key) in salePriceRule" :key="key" :label="val" :value="key">
                </el-option>
            </el-select>
            <el-input style="width: 200px;" v-model="listQuery.title"></el-input>
            <el-button class="filter-item" style="margin-left: 20px;" type="primary"  icon="el-icon-search" @click="handleFilter">查询</el-button>
        </div>



    </div>

    <!--表格-->
    <el-table  :data="list" v-loading="listLoading" border fit highlight-current-row
              style="width: 100%;min-height:1000px;">

      <el-table-column align="center"   label="序号" class="table-item">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>

      <el-table-column  align="center" label="商品名称">
        <template slot-scope="scope">
          <span>{{scope.row.title}}</span>
        </template>
      </el-table-column>

      <el-table-column  align="center"  label="有效期(天)" >
        <template slot-scope="scope">
          <span class="link-type">{{scope.row.unitDay? scope.row.unitDay : '长期'}}</span>
          <!--<el-tag>{{scope.row.type | typeFilter}}</el-tag>-->
        </template>
      </el-table-column>

      <el-table-column  align="center" label="签证价格(惠)" >
        <template slot-scope="scope" >
          <span>{{scope.row.lowVisaPrice/100}}元</span>
        </template>
      </el-table-column>

      <el-table-column   align="center" label="发布时间">
        <template slot-scope="scope">
          <span>{{new Date(scope.row.ctime).Format("yyyy-MM-dd HH:mm:ss")}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center"  label="分成比例">
        <template slot-scope="scope">
          <span class="link-type">
            <p>旅行社分成 :{{  scope.row.travelRatio/100 }}%</p>
            <p>渠道分成：{{  scope.row.channelRatio/100 }}%</p>
            <p>平台分成：{{  scope.row.terraceRatio/100 }}%</p>
          </span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col"  label="商品状态" align="center" >
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">
            {{ goodStatus[scope.row.status] }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center"  class-name="small-padding fixed-width" label="操作" width="340">
        <template slot-scope="scope">
          <el-button  size="mini" type="success" @click="goDetail(scope.row.id)" plain>
            查看商品
          </el-button>
          <el-button type="primary" size="mini" @click="goRatio(scope.row.id)">
            修改分成
          </el-button>
          <el-button  size="mini" type="success" v-if="scope.row.status == 2" @click="shelf(scope.row.id)">审核上架</el-button>
          <el-button  size="mini" type="danger" v-if="scope.row.status != 2"  @click="goUndercarriage(scope.row.id)">
            违规下架
          </el-button>
        </template>
      </el-table-column>

    </el-table>
    <!--表格结束-->

    <!--分页-->
    <div class="pagination-container" style="margin-top: 30px;">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page" :page-sizes="[4,10,20,30,50]" :page-size="listQuery.size" layout="total, sizes, prev, pager, next, jumper" :total="pagesStatus.total_count">
      </el-pagination>
    </div>
    <!--分页结束-->
  </div>
</template>

<script>
  import { getVisaList } from '@/api/visa';
  import { goodsfoulup } from '@/api/visa';
  import { getGoodsList } from '@/api/goods';

  export default {
    data() {
      return {
        total: 0,
        list: null,
        listLoading: true,
        pagesStatus: {
          total_count: 0
        },
        goodStatus: {
          0: '仓库中',
          1: '出售中',
          2: '违规下架'
        },
        listQuery: {
          auditStatus: 0,
          page: 1,
          size: 10,
          title: null,
          startTime: null,
          endTime: null,
          status: null,
        },
          type: {
              1: '一般',
              2: '推荐'
          },
          status :{
              1: '库存中',
              2: '已上架',
              3: '已下架',
              4: '审核中',
              5: '审核拒绝'
          },
          salePriceRule: {
              0: '=',
              1:'>',
              '-1' :'<'
          }
      };
    },
    computed: {

    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          1: 'success',
          0: 'gray',
          2: 'danger'
        };
        return statusMap[status];
      }
    },
    created() {
      this.fetchData(this.listQuery);
        getGoodsList( ).then( res => {
            console.log('测试测试');
            console.log( res );
        })
    },
    methods: {
      fetchData(params) {
        this.listLoading = true;
        getVisaList(params).then(response => {
          this.list = response.data.data;
          console.log( response.data );
          this.pagesStatus.total_count = response.data.total_count;
          this.listLoading = false;
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
      goDetail(id) {
        window.location.href = '#/visa/detail?id=' + id;
      },
      goRatio(id) {
        window.location.href = '#/visa/ratio?id=' + id;
      },
      goUndercarriage(id) {
        window.location.href = '#/visa/undercarriage?id=' + id;
      },
      shelf(id) {
        goodsfoulup( {goodId: id} ).then( res => {
          console.log( res );
          if ( res.code == 200 ) {
            alert('上架成功');
            window.location.reload();
          }
        });
      }
    }
  };
</script>


<style lang="scss" scoped>
   .app-container {
       padding-left: 50px;
       .item-btns {}
   }
</style>
