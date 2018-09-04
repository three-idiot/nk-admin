<template>
    <div class="visaDetail">
        <p class="title">商品详情</p>
        <hr/>
        <portrait-table :data="processData"></portrait-table>
        <table class="divide-table">
            <tr>
                <th class="tableTitle">分成设置(元)</th>
                <th class="tableTitle">省代</th>
                <th class="tableTitle">市县代</th>
                <th class="tableTitle">网点</th>
                <th class="tableTitle">第三方</th>
            </tr>
            <tr>
                <td class="tableTitle">成人：</td>
                <td>
                    {{ calPrices(1,1) }}
                    <!--<el-input v-model="travelGoodsDividePrices[4].price" placeholder="￥0.00"></el-input>-->
                </td>
                <td>
                    {{ calPrices(2,1) }}
                    <!--<el-input v-model="travelGoodsDividePrices[5].price" placeholder="￥0.00"></el-input>-->
                </td>
                <td>
                    {{ calPrices(3,1) }}
                    <!--<el-input v-model="travelGoodsDividePrices[6].price" placeholder="￥0.00"></el-input>-->
                </td>
                <td>
                    {{ calPrices(4,1) }}
                    <!--<el-input v-model="travelGoodsDividePrices[7].price" placeholder="￥0.00"></el-input>-->
                </td>
            </tr>
            <tr>
                <td class="tableTitle">儿童：</td>
                <td>
                    {{ calPrices(1,2) }}
                    <!--<el-input v-model="travelGoodsDividePrices[0].price" placeholder="￥0.00"></el-input>-->
                </td>
                <td>
                    {{ calPrices(2,2) }}
                    <!--<el-input v-model="travelGoodsDividePrices[1].price" placeholder="￥0.00"></el-input>-->
                </td>
                <td>
                    {{ calPrices(3,2) }}
                    <!--<el-input v-model="travelGoodsDividePrices[2].price" placeholder="￥0.00"></el-input>-->
                </td>
                <td>
                    {{ calPrices(4,2) }}
                    <!--<el-input v-model="travelGoodsDividePrices[3].price" placeholder="￥0.00"></el-input>-->
                </td>
            </tr>
        </table>
        <div class="btn-container">
            <el-button type="info" @click.native="$router.back()">返回</el-button>
        </div>
    </div>
</template>

<script>
    import {travelGoods} from '@/api/goods';
    import goodsMap from "@/map/goods";
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
                    let images = [];
                    if( this.data.images ) {
                        for( let i=0;i<this.data.images.length;i++ ) {
                            let item = this.data.images[i];
                            images.push( item.goodPath );
                        }
                    }
                    console.log( images );
                    arr.push( {key: '商品编号', value: this.data.goodsNo} );
                    arr.push( {key: '商品状态', value: goodsMap.status[this.data.status]} );
                    arr.push( {key: '商品名称', value: this.data.name} );
                    arr.push({key: '商品概要', value: this.data.outline});
                    arr.push({key: '商品分类', value: goodsMap.type[this.data.type]});
                    arr.push({key: '出发日期', value: this.data.leaveTime });
                    arr.push({key: '出发地点', value: this.data.leaveAddress });
                    arr.push({key: '添加图片', value: images, type: 'images'});
                    arr.push({key: '线路特色', value: this.data.lineDescribe });
                    arr.push({key: '行程介绍', value: this.data.tripDescribe });
                    arr.push({key: '费用与须知', value: this.data.costDescribe});
                    arr.push({key: '报名截至日期', value: this.data.closeDate});
                    arr.push({key: '最低成团人数', value: this.data.peopleMinNum});
                    arr.push({key: '成团人数上限', value: this.data.peopleMaxNum});
                    arr.push({key: '商品价格', value: this.data.realPrice});
                    arr.push({key: '门市价格', value: this.data.salePrice});
                    arr.push({key: '儿童价格', value: this.data.childPrice});
                    // arr.push({key: '成人', value: this.data.travelGoodsDividePrices});
                    // arr.push({key: '儿童', value: this.data.travelGoodsDividePrices});
                    arr.push({key: '创建人', value: this.data.publisher});
                    arr.push({key: '创建时间', value: new Date(this.data.createTime).Format("yyyy-MM-dd HH:mm:ss")});
                    arr.push({key: '审核人', value: this.data.approver});
                    arr.push({key: '审核时间', value: new Date(this.data.approveTime).Format("yyyy-MM-dd HH:mm:ss")});
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
            calPrices( agentType,userType ) {
                for( let i=0;i<this.data.travelGoodsDividePrices.length;i++ ) {
                    let item = this.data.travelGoodsDividePrices[i];
                    if ( item.agentType == agentType && item.userType == userType ) {
                        return item.price;
                    }
                }
            },
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
        .tableTitle {
            background: #409EFF;
            min-width: 150px;
            line-height: 30px;
            text-align: center;
            color: #FFFFFF;
        }
    }
</style>
