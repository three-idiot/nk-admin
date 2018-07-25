<template>
  <div class="app-container">
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
  </div>
</template>

<script>
import { getOrderDetail } from "@/api/table";

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      current_page: 1,
      max_page: 0,
      page_size: 20,
      daterange: [],
      total_count: null,
      priceCount: null,
      data: {},
      isStamp: {
        0:否,
        1:是
      },
      status: {
        10: {
          msg: "待付款",
          color: "warning"
        },
        20: {
          msg: "办理中",
          color: "success"
        },
        30: {
          msg: "已送签",
          color: "success"
        },
        40: {
          msg: "已签发",
          color: "success"
        },
        41: {
          msg: "已拒签",
          color: "success"
        },
        50: {
          msg: "已登记",
          color: "warning"
        },
        60: {
          msg: "已过期",
          color: "warning"
        },
        70: {
          msg: "已取消",
          color: "warning"
        }
      },
      payTypes: {
        0: {
          msg: "未支付",
          color: "warning"
        },
        1: {
          msg: "微信支付",
          color: "success"
        }
      },
      renewTypes: {
        0: {
          msg: "正常订单",
          color: "success"
        },
        1: {
          msg: "续签订单",
          color: "primary"
        }
      }
    };
  },
  computed: {
    listQuery() {
      return Object.assign({}, this.form, {
        startTime: this.daterange[0],
        endTime: this.daterange[1],
        page: this.current_page,
        size: this.page_size
      });
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getOrderDetail(this.$route.params.id).then(response => {
        const resData = response.data;
        this.data = {
          '订单编号': resData.orderNum,
          '订单状态': this.status[resData.status],
          '出行日期': resData.enterTime,
          '姓名': resData.linkName,
          '护照号': resData.passportNo,
          '手机号': resData.mobile,
          '护照内页': resData.passportPath,
          '个人简历': resData.resumePath,
          '是否盖章': this.isStamp[resData.isStamp],
          '买家留言': '',
          '下单时间':resData.ctime,
          '付款时间':resData.payTime,
          '送签时间':resData.sendTime,
          '签发/拒签时间':resData.signTime,
          '签证有效期':resData.unitDay,
          '取消时间': resData.offTime,
          '支付方式': this.payTypes[resData.payType]
        };
        this.listLoading = false;
      });
    },
    onSubmit() {
      this.fetchData();
    },
    check() {},
    edit() {},
    currentPageChange(page) {
      this.current_page = page;
      this.fetchData();
    }
  }
};
</script>
