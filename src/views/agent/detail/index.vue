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
    import { getAgent,getLowerAreas,agentRoleList } from '@/api/agent';
    import transformData from '@/map/agent';
    import PortraitTable from "@/components/PortraitTable/index.vue";

    export default {
        name: 'index',
        data() {
            return {
                newRoleId: {},
                data: [],
                provinces: null,
            };
        },
        computed: {
            // processData() {
            //     let arr = [];
            //     if (this.data) {
            //         arr.push({key: '代理商编码', value: this.data.agentNo, type: 'string'});
            //         arr.push({key: '代理商名称', value: this.data.agentName, type: 'string'});
            //         arr.push({key: '代理商属性', value: transformData.roleId[this.data.roleId], type: 'string'});
            //         arr.push({key: '代理商地区', value: this.getProvince(this.data.province), type: 'string'});
            //         arr.push({key: '联系人', value: this.data.contactsName, type: 'string'});
            //         arr.push({key: '联系电话', value: this.data.contactsPhone, type: 'string'});
            //         arr.push({key: '联系地址', value: this.data.contactsMail, type: 'string'});
            //         arr.push({key: '代理商性质', value: transformData.type[this.data.agentType], type: 'string'});
            //         arr.push({key: '营业执照号码', value: this.data.bizLicenseCode, type: 'string'});
            //         arr.push({key: '营业执照副本', value: this.data.bizLicenseImagePath, type: 'image'});
            //         arr.push({key: '有效期至', value: this.data.expireTime, type: 'string'});
            //         arr.push({key: '代理标识码', value: this.data.uniqueCode, type: 'string'});
            //         // arr.push({key: '代理二维码', value: this.data.disposeDay});
            //         arr.push({key: '创建人', value: this.data.createUserName, type: 'string'});
            //         arr.push({key: '创建时间', value: this.data.auditTime, type: 'string'});
            //         // arr.push({key: '审核人', value: this.data.auditUser});
            //         // arr.push({key: '审核时间', value: this.data.auditTime});
            //         // arr.push({key: '创建时间', value: new Date(this.data.ctime.replace(/-/g,"/")).Format("yyyy-MM-dd HH:mm:ss")});
            //         return arr;
            //     }
            // }
        },
        created() {
            this.fetchAgentRoleList();
            this.fetchAddressData();
        },
        components: {
            PortraitTable
        },
        methods: {
            fetchAgentRoleList() {
                agentRoleList().then(res => {
                    console.log( res );
                    let data = res.data;
                    for ( let i=0;i<data.length;i++ ) {
                        let item = data[i];
                        // console.log(item);
                        this.newRoleId[item.id] = item.name;
                    }
                    console.log('测试',this.newRoleId);
                });
            },
            fetchData() {
                let id = this.$route.query.id;
                // let url = '/gooddetail/' + id;
                getAgent({id: id}).then(res => {
                    console.log( res );
                    let data = res.data;
                    // this.data = res.data;
                    if (data.agentType == 1) {
                        this.data = [
                            {key: '代理商编码', value: data.agentNo, type: 'string'},
                            {key: '代理商名称', value: data.agentName, type: 'string'},
                            {key: '代理商属性', value: this.newRoleId[data.roleId], type: 'string'},
                            {key: '代理商地区', value: this.getProvince(data.province), type: 'string'},
                            {key: '联系人', value: data.contactsName, type: 'string'},
                            {key: '联系电话', value: data.contactsPhone, type: 'string'},
                            {key: '联系地址', value: data.contactsMail, type: 'string'},
                            {key: '代理商性质', value: transformData.type[data.agentType], type: 'string'},
                            {key: '营业执照号码', value: data.bizLicenseCode, type: 'string'},
                            {key: '营业执照副本', value: data.bizLicenseImagePath, type: 'big-image'},
                            {key: '有效期至', value: data.expireTime, type: 'string'},
                            {key: '代理标识码', value: data.uniqueCode, type: 'qrcode'},
                            // {key: '代理二维码', value: this.data.disposeDay},
                            {key: '创建人', value: data.createUserName, type: 'string'},
                            // {key: '创建时间', value: data.auditTime, type: 'string'}
                            {key: '创建时间', value: data.createTime, type: 'string'}
                        ];
                    } else {
                        this.data = [
                            {key: '代理商编码', value: data.agentNo, type: 'string'},
                            {key: '代理商名称', value: data.agentName, type: 'string'},
                            {key: '代理商属性', value: this.newRoleId[data.roleId], type: 'string'},
                            {key: '代理商地区', value: this.getProvince(data.province), type: 'string'},
                            {key: '联系人', value: data.contactsName, type: 'string'},
                            {key: '联系电话', value: data.contactsPhone, type: 'string'},
                            {key: '联系地址', value: data.contactsMail, type: 'string'},
                            {key: '代理商性质', value: transformData.type[data.agentType], type: 'string'},
                            {key: '身份证号码', value: data.idCardNo, type: 'string'},
                            {key: '身份证正面', value: data.idCardFrontImagePath, type: 'big-image'},
                            {key: '身份证反面', value: data.idCardBackImagePath, type: 'big-image'},
                            {key: '有效期至', value: data.expireTime, type: 'string'},
                            {key: '代理标识码', value: data.uniqueCode, type: 'qrcode'},
                            // {key: '代理二维码', value: this.data.disposeDay},
                            {key: '创建人', value: data.createUserName, type: 'string'},
                            // {key: '创建时间', value: data.auditTime, type: 'string'}
                            {key: '创建时间', value: data.createTime, type: 'string'}
                        ];
                    }

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
