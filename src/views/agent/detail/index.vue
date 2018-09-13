<template>
    <div class="visaDetail">
        <p class="title">代理商详情</p>
        <hr/>
        <portrait-table :data="data"></portrait-table>
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
                data: [],
                provinces: null,
            };
        },
        computed: {},
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
                    console.log( res );
                    let data = res.data;
                    // this.data = res.data;
                    this.data = [
                        {key: '代理商编码', value: data.agentNo, type: 'string'},
                        {key: '代理商名称', value: data.agentName, type: 'string'},
                        {key: '代理商属性', value: transformData.roleId[data.roleId], type: 'string'},
                        {key: '代理商地区', value: this.getProvince(data.province), type: 'string'},
                        {key: '联系人', value: data.contactsName, type: 'string'},
                        {key: '联系电话', value: data.contactsPhone, type: 'string'},
                        {key: '联系地址', value: data.contactsMail, type: 'string'},
                        {key: '代理商性质', value: transformData.type[data.agentType], type: 'string'},
                        {key: '营业执照号码', value: data.bizLicenseCode, type: 'string'},
                        {key: '营业执照副本', value: data.bizLicenseImagePath, type: 'image'},
                        {key: '有效期至', value: data.expireTime, type: 'string'},
                        {key: '代理标识码', value: data.uniqueCode, type: 'string'},
                        // {key: '代理二维码', value: this.data.disposeDay},
                        {key: '创建人', value: data.createUserName, type: 'string'},
                        {key: '创建时间', value: data.auditTime, type: 'string'}
                    ]
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
