<template>
    <div class="visaDetail">
        <p class="title">代理商详情</p>
        <hr/>
        <portrait-table :data="processData"></portrait-table>
        <div class="btn-container">
            <el-button type="info" @click.native="$router.back()">返回</el-button>
        </div>
    </div>
</template>

<script>
    import { getAgent} from '@/api/agent';
    import transformData from '@/map/agent';

    // let goodStatus = transformData.status;
    // let auditStatus = transformData.auditStatus;
    // let unitDay = transformData.unitDay;
    // let intoType = transformData.intoType;
    // let isUrgent = transformData.isUrgent;
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
                    arr.push({key: '代理商编码', value: this.data.agentNo});
                    arr.push({key: '代理商名称', value: this.data.name});
                    arr.push({key: '代理商属性', value: this.data.roleId});
                    arr.push({key: '代理商地区', value: goodStatus[this.data.status]});
                    arr.push({key: '联系人', value: auditStatus[this.data.auditStatus]});
                    arr.push({key: '联系电话', value: this.data.visaPrice / 100});
                    arr.push({key: '联系地址', value: this.data.lowVisaPrice / 100});
                    arr.push({key: '代理商性质', value: this.data.helpPrice / 100});
                    arr.push({key: '营业执照号码', value: this.data.lowHelpPrice / 100});
                    arr.push({key: '营业执照副本', value: this.data.renewPrice / 100});
                    arr.push({key: '有效期至', value: unitDay[this.data.unitDay]});
                    arr.push({key: '代理标识码', value: this.data.stayDay});
                    arr.push({key: '代理二维码', value: this.data.disposeDay});
                    arr.push({key: '创建人', value: intoType[this.data.intoType]});
                    arr.push({key: '创建时间', value: isUrgent[this.data.isUrgent]});
                    arr.push({key: '审核人', value: isUrgent[this.data.isInterview]});
                    arr.push({key: '审核时间', value: this.data.travelRatio});
                    // arr.push({key: '创建时间', value: new Date(this.data.ctime).Format("yyyy-MM-dd HH:mm:ss")});
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
                // let url = '/gooddetail/' + id;
                getAgent({id: id}).then(res => {
                    console.log( res )
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
