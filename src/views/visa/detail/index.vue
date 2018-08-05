<template>
    <div class="visaDetail">
        <p class="title">商品详情</p>
        <hr/>
        <portrait-table :data="processData"></portrait-table>
        <div class="btn-container">
            <el-button type="info" @click.native="$router.back()">返回</el-button>
        </div>
    </div>
</template>

<script>
    import { getVisaDetail } from '@/api/visa';
    import transformData from '../tools/data';
    let goodStatus = transformData.status;
    let auditStatus = transformData.auditStatus;
    let unitDay = transformData.unitDay;
    let intoType = transformData.intoType;
    let isUrgent = transformData.isUrgent;
    // let isInterview = transformData.isInterview;
    import PortraitTable from "@/components/PortraitTable/index.vue";

    export default {
      name: 'index',
      data() {
        return {
          data: '',
        };
      },
      computed: {
        processData () {
          let arr = [];
          if ( this.data ) {
            arr.push( {key: '签证名称', value: this.data.title});
            arr.push( {key: '签证编码', value: this.data.goodsNum} );
            arr.push( {key: '签证照片', value: this.data.image[0].goodPath, type: 'image' } );
            arr.push( {key: '状态', value: goodStatus[this.data.status] } );
            arr.push( {key: '审核状态', value: auditStatus[this.data.auditStatus] } );
            arr.push( {key: '签证价格(元)', value: this.data.visaPrice/100 } );
            arr.push( {key: '签证优惠价格(元)', value: this.data.lowVisaPrice/100 } );
            arr.push( {key: '服务价格(元)', value: this.data.helpPrice/100 } );
            arr.push( {key: '服务优惠价格(元)', value: this.data.lowHelpPrice/100 } );
            arr.push( {key: '续签费用(元)', value: this.data.renewPrice/100 } );
            arr.push( {key: '签证有效期(天)', value: unitDay[this.data.unitDay] } );
            arr.push( {key: '停留时间(天)', value: this.data.stayDay} );
            arr.push( {key: '处理时间(天)', value: this.data.disposeDay} );
            arr.push( {key: '入境类型', value: intoType[this.data.intoType]} );
            arr.push( {key: '是否加急', value: isUrgent[this.data.isUrgent]} );
            arr.push( {key: '是否面试', value: isUrgent[this.data.isInterview]} );
            arr.push( {key: '旅行社分成(%)', value: this.data.travelRatio } );
            arr.push( {key: '渠道分成(%)', value: this.data.channelRatio } );
            arr.push( {key: '平台分成(%)', value: this.data.terraceRatio } );
            arr.push( {key: '创建时间', value: new Date(this.data.ctime).Format("yyyy-MM-dd HH:mm:ss") } );
            return arr;
          }
        }
      },
      created() {
        // console.log('吴志鹏', this.$route);
        this.fetchData();
      },
      components: {
        PortraitTable
      },
      methods: {
        fetchData() {
          let id = this.$route.query.id;
          let url = '/gooddetail/' + id;
          getVisaDetail( url ).then( res => {
            this.data = res.data;
          });
        }
      }
    };
</script>

<style lang="scss" scoped>
    .visaDetail {
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
