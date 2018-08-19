<template>
    <div class="visaDetail">
        <p class="title">商品详情</p>
        <hr/>
        <!--<portrait-table :data="processData"></portrait-table>-->
        <div class="btn-container">
            <el-button type="info" @click.native="$router.back()">返回</el-button>
        </div>
    </div>
</template>

<script>
    import {travelGoods} from '@/api/goods';
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
            processData() {
                let arr = [];
                if (this.data) {
                    arr.push({key: '商品编号', value: this.data.title});
                    arr.push({key: '商品状态', value: this.data.goodsNum});
                    arr.push({key: '商品名称', value: this.data.image[0].goodPath, type: 'image'});
                    arr.push({key: '商品概要', value: goodStatus[this.data.status]});
                    arr.push({key: '商品分类', value: auditStatus[this.data.auditStatus]});
                    arr.push({key: '出发日期和地点', value: this.data.visaPrice / 100});
                    arr.push({key: '添加图片', value: this.data.lowVisaPrice / 100});
                    arr.push({key: '线路特色', value: this.data.helpPrice / 100});
                    arr.push({key: '行程介绍', value: this.data.lowHelpPrice / 100});
                    arr.push({key: '费用与须知', value: this.data.renewPrice / 100});
                    arr.push({key: '报名截至日期', value: unitDay[this.data.unitDay]});
                    arr.push({key: '最低成团人数', value: this.data.stayDay});
                    arr.push({key: '成团人数上限', value: this.data.disposeDay});
                    arr.push({key: '商品价格', value: intoType[this.data.intoType]});
                    arr.push({key: '门市价格', value: isUrgent[this.data.isUrgent]});
                    arr.push({key: '儿童价格', value: isUrgent[this.data.isInterview]});
                    arr.push({key: '成人', value: this.data.travelRatio});
                    arr.push({key: '儿童', value: this.data.channelRatio});
                    arr.push({key: '创建人', value: this.data.terraceRatio});
                    arr.push({key: '创建时间', value: new Date(this.data.ctime).Format("yyyy-MM-dd HH:mm:ss")});
                    arr.push({key: '审核人', value: this.data.terraceRatio});
                    arr.push({key: '审核时间', value: new Date(this.data.ctime).Format("yyyy-MM-dd HH:mm:ss")});
                    return arr;
                }
            }
        },
        created() {
            this.fetchData();
        },
        components: {
            PortraitTable
        },
        methods: {
            fetchData() {
                let id = this.$route.query.id;
                travelGoods({id: id}).then(res => {
                    this.data = res.data;
                    console.log( this.data );
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
