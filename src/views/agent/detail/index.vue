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
    import { getAgent,getLowerAreas } from '@/api/agent';
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
                provinces: null,
            };
        },
        computed: {
            processData() {
                let arr = [];
                if (this.data) {
                    arr.push({key: '代理商编码', value: this.data.agentNo});
                    arr.push({key: '代理商名称', value: this.data.agentName});
                    arr.push({key: '代理商属性', value: transformData.roleId[this.data.roleId]});
                    arr.push({key: '代理商地区', value: this.getProvince(this.data.province)});
                    arr.push({key: '联系人', value: this.data.contactsName});
                    arr.push({key: '联系电话', value: this.data.contactsPhone});
                    arr.push({key: '联系地址', value: this.data.contactsMail});
                    arr.push({key: '代理商性质', value: transformData.type[this.data.agentType]});
                    arr.push({key: '营业执照号码', value: this.data.bizLicenseCode});
                    arr.push({key: '营业执照副本', value: this.data.bizLicenseImagePath, type: 'image'});
                    arr.push({key: '有效期至', value: this.data.expireTime});
                    arr.push({key: '代理标识码', value: this.data.uniqueCode});
                    // arr.push({key: '代理二维码', value: this.data.disposeDay});
                    arr.push({key: '创建人', value: this.data.createUser});
                    arr.push({key: '创建时间', value: this.data.auditTime});
                    // arr.push({key: '审核人', value: this.data.auditUser});
                    // arr.push({key: '审核时间', value: this.data.auditTime});
                    // arr.push({key: '创建时间', value: new Date(this.data.ctime).Format("yyyy-MM-dd HH:mm:ss")});
                    return arr;
                }
            }
        },
        created() {
            this.fetchAddressData();
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
            },
            fetchAddressData() {
                getLowerAreas({id: 0}).then( res => {
                    this.provinces = res.data;
                    console.log( this.provinces );
                    this.fetchData();
                })
            },
            getProvince( id ) {
                for ( let i=0;i<this.provinces.length;i++ ) {
                    let item = this.provinces[i];
                    if( item.id == id ) {
                        return item.name;
                    }
                }
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
