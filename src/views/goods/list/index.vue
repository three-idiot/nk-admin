<template>
    <div class="app-container">

        <div class="filter-container" style="margin-bottom: 30px;">
            <span>商品类别：</span>
            <el-select clearable style="width: 200px" class="filter-item" v-model="goodsParams.type" placeholder="请选择">
                <el-option v-for="(val,key) in type" :key="key" :label="val" :value="key">
                </el-option>
            </el-select>

            <span>商品名称：</span>
            <el-input style="width: 200px;" v-model="goodsParams.name"></el-input>

            <span>发布人：</span>
            <el-input style="width: 200px;" v-model="goodsParams.publisher"></el-input>

            <span>商品状态：</span>
            <el-select clearable style="width: 90px" class="filter-item" v-model="goodsParams.status" placeholder="请选择">
                <el-option v-for="(val,key) in status" :key="key" :label="val" :value="key">
                </el-option>
            </el-select>

            <!--时间选择器-->
            <span class="demonstration">发布日期：</span>
            <el-date-picker
                v-model="goodsParams.upStartTime"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
            </el-date-picker>
            -
            <el-date-picker
                v-model="goodsParams.upEndTime"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
            </el-date-picker>
            <!--时间选择器-->

            <div class="goodPrice" style="margin-top: 10px;">
                <span>商品价格：</span>
                <el-select clearable style="width: 90px" class="filter-item" v-model="goodsParams.salePriceRule"
                           placeholder="请选择">
                    <el-option v-for="(val,key) in salePriceRule" :key="key" :label="val" :value="key">
                    </el-option>
                </el-select>
                <el-input style="width: 200px;" v-model="goodsParams.salePrice"></el-input>
                <el-button class="filter-item" style="margin-left: 20px;" type="primary" icon="el-icon-search"
                           @click="handleFilter">查询
                </el-button>
            </div>
        </div>

        <div class="list-des">
            <span>商品总数：</span>
            <el-button type="danger" class="add-agent-button" @click="refundDialogShow">批量设置商品退款规则</el-button>
        </div>



        <el-dialog
            title="退款规则设置"
            :visible.sync="refundDialog"
            width="30%">
            <p style="font-size: 20px;color: orangered;font-weight: bold;">已选择{{ chooseTravelGoodsId.length }}个商品</p>
            <div class="condition" v-for="(val,index) in RefundRule">
                <p>条件{{ index+1 }}：</p>
                <p>(截至时间)-(申请时间) >= <el-input class="input1" v-model="val.hour"></el-input></p>
                <p><span>退款金额</span> = <span>支付金额</span> x <el-input class="input2" v-model="val.ratio"></el-input>%</p>
                <hr>
            </div>
            <p style="text-align: center;"><el-button type="primary" @click="addRule">添加规则</el-button></p>
            <span slot="footer" class="dialog-footer">
            <el-button @click="cancelRefund">取 消</el-button>
            <el-button type="primary" @click="changeRule">确 定</el-button>
            </span>
        </el-dialog>



        <!--表格-->
        <el-table :data="goodsList" v-loading="listLoading" border fit highlight-current-row @selection-change="handleSelectionChange"
                  style="width: 100%;min-height:1000px;">

            <el-table-column align="center" label="全选" type="selection" v-model="chooseTravelGoodsId"  class="table-item" width="55">
            </el-table-column>

            <el-table-column align="center" label="商品编号" class="table-item">
                <template slot-scope="scope">
                    <span>{{scope.row.goodsNo}}</span>
                </template>
            </el-table-column>

            <el-table-column align="center" label="商品名称">
                <template slot-scope="scope">
                    <span>{{scope.row.name}}</span>
                </template>
            </el-table-column>

            <el-table-column align="center" label="商品类别">
                <template slot-scope="scope">
                    <span>{{type[scope.row.type]}}</span>
                </template>
            </el-table-column>

            <el-table-column align="center" label="发布日期">
                <template slot-scope="scope">
                    <span>{{new Date(scope.row.createTime).Format("yyyy-MM-dd HH:mm:ss")}}</span>
                </template>
            </el-table-column>

            <el-table-column align="center" label="上架日期">
                <template slot-scope="scope">
                    <span>{{new Date(scope.row.upTime).Format("yyyy-MM-dd HH:mm:ss")}}</span>
                </template>
            </el-table-column>

            <el-table-column align="center" label="截止日期">
                <template slot-scope="scope">
                    <span>{{new Date(scope.row.closeDate).Format("yyyy-MM-dd HH:mm:ss")}}</span>
                </template>
            </el-table-column>

            <el-table-column align="center" label="发布人">
                <template slot-scope="scope">
                    <span>{{scope.row.publisher}}</span>
                </template>
            </el-table-column>

            <el-table-column align="center" label="门市价格">
                <template slot-scope="scope">
                    <span>{{scope.row.realPrice/100}}元</span>
                </template>
            </el-table-column>

            <el-table-column align="center" label="商品价格">
                <template slot-scope="scope">
                    <span>{{scope.row.salePrice/100}}元</span>
                </template>
            </el-table-column>

            <el-table-column align="center" label="分成比例">
                <template slot-scope="scope">
                <span class="link-type">
                <p>省代 :{{  scope.row.provinceDividePrice/100 }}%</p>
                <p>市县代：{{  scope.row.cityDividePrice/100 }}%</p>
                <p>网点：{{  scope.row.pointDividePrice/100 }}%</p>
                </span>
                </template>
            </el-table-column>

            <el-table-column class-name="status-col" label="商品状态" align="center">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.status | statusFilter">
                        {{ status[scope.row.status] }}
                    </el-tag>
                </template>
            </el-table-column>


            <el-table-column align="center" class-name="small-padding fixed-width" label="操作" width="340">
                <template slot-scope="scope">
                    <el-button size="mini" type="success" @click="goDetail(scope.row.id)" plain>
                        查看详情
                    </el-button>
                    <el-button type="primary" size="mini" @click="goEdit(scope.row.id)">
                        编辑
                    </el-button>
                    <el-button size="mini" type="success" v-if="scope.row.status == 1" @click="shelfShow(scope.row.id)">上架
                    </el-button>
                    <el-button size="mini" type="danger" v-if="scope.row.status == 2"
                               @click="undercarriageShow(scope.row.id)">
                        下架
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--表格结束-->

        <!--下架弹窗-->
        <el-dialog
            title="请备注下架原因"
            :visible.sync="undercarriage"
            width="30%">
            <textarea name="" id="" cols="50" style="width: 100%;" rows="10" v-model="remark"></textarea>
            <span slot="footer" class="dialog-footer">
                <el-button @click="undercarriage = false">取 消</el-button>
                <el-button type="primary" @click="changeStatusApi(3)">确 定</el-button>
            </span>
        </el-dialog>
        <!--上架弹窗-->
        <el-dialog
            title="上架"
            :visible.sync="shelfDialog"
            width="30%">
            <span>将此商品自己上架</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="shelfDialog = false">取 消</el-button>
                <el-button type="primary" @click="changeStatusApi(2)">确 定</el-button>
            </span>
        </el-dialog>


        <!--分页-->
        <div class="pagination-container" style="margin-top: 30px;">
            <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                           :current-page="goodsParams.pageIndex" :page-sizes="[4,10,20,30,50]"
                           :page-size="goodsParams.pageSize" layout="sizes, prev, pager, next, jumper">
            </el-pagination>
        </div>
        <!--分页结束-->
    </div>
</template>

<script>
    import {getVisaList} from '@/api/visa';
    import {goodsfoulup} from '@/api/visa';
    import {getGoodsList, changeStatus} from '@/api/goods';

    export default {
        data() {
            return {
                id: null,
                undercarriage: false,
                shelfDialog: false,
                remark: null,
                listLoading: true,
                refundDialog: false,
                chooseTravelGoodsId: [],
                RefundRule: [
                    {
                        sort: 0,
                        hour: null,
                        ratio: null,
                        // travelGoodsId: null
                    },
                ],
                type: {
                    1: '一般',
                    2: '推荐'
                },
                status: {
                    1: '库存中',
                    2: '已上架',
                    3: '已下架',
                    4: '审核中',
                    5: '审核拒绝'
                },
                salePriceRule: {
                    0: '=',
                    1: '>',
                    '-1': '<'
                },
                goodsParams: {
                    type: null,
                    name: null,
                    publisher: null,
                    status: null,
                    upStartTime: null,
                    upEndTime: null,
                    salePrice: null,
                    salePriceRule: null,
                    pageIndex: 1,
                    pageSize: 20
                },
                goodsList: null
            };
        },
        computed: {},
        filters: {
            statusFilter(status) {
                const statusMap = {
                    1: 'success',
                    2: 'success',
                    3: 'danger',
                    4: 'warning',
                    5: 'danger',
                };
                return statusMap[status];
            }
        },
        created() {
            this.fetchData(this.goodsParams);
        },
        methods: {
            refundDialogShow() {
                if( this.chooseTravelGoodsId.length == 0 ) {
                    alert( '当前没有选中任何商品!!!' );
                    return;
                } else {
                    this.refundDialog = true;
                }
            },
            changeRule() {
                console.log( this.RefundRule );
                console.log( this.chooseTravelGoodsId );
                let RefundRule = [];
                for ( let i=0;i<this.chooseTravelGoodsId.length;i++ ) {
                    let item = this.chooseTravelGoodsId[i];
                    for( let j=0;j < this.RefundRule.length;j++ ) {
                        let item2 = this.RefundRule[j];
                        let obj = Object.assign(item2,{
                            travelGoodsId: item.id
                        })
                        RefundRule.push(obj);
                    }
                }
                console.log( RefundRule );
                this.refundDialog = false;
            },
            handleSelectionChange(val) {
                this.chooseTravelGoodsId = val;
            },
            cancelRefund() {
                let initArr = [];
                this.RefundRule = initArr.push({
                    sort: 0,
                    hour: null,
                    ratio: null,
                    travelGoodsId: null
                });
                this.refundDialog = false;
            },
            addRule() {
                let length = this.RefundRule.length;
                this.RefundRule.push(
                    {
                        sort: length,
                        hour: null,
                        ratio: null,
                        travelGoodsId: null
                    },
                )
            },
            fetchData(params) {
                this.listLoading = true;
                getGoodsList(params).then(response => {
                    // this.list = response.data.data;
                    console.log(response.data);
                    this.goodsList = response.data.data;
                    // this.pagesStatus.total_count = response.data.total_count;
                    this.listLoading = false;
                });
            },
            handleSizeChange(val) {
                this.goodsParams.pageSize = val;
                this.fetchData(this.goodsParams);
            },
            handleCurrentChange(val) {
                this.goodsParams.pageIndex = val;
                this.fetchData(this.goodsParams);
            },
            handleFilter() {
                console.log(this.goodsParams);
                this.fetchData(this.goodsParams);
            },
            goDetail(id) {
                window.location.href = '#/goods/detail?id=' + id;
            },
            goEdit(id) {
                window.location.href = '#/goods/edit?id=' + id;
            },
            undercarriageShow(id) {
                this.undercarriage = true;
                this.id = id;
            },
            changeStatusApi(status) {
                let params = {
                    goodsId: this.id,
                    status: status
                }
                changeStatus( params ).then( res => {
                    console.log( res );
                    if ( res.code == 200 ) {
                        alert('操作成功');
                        window.location.reload();
                    }
                })
            },
            shelfShow(id) {
                this.shelfDialog = true;
                this.id = id;
            }
        }
    };
</script>


<style lang="scss" scoped>
    .app-container {
        padding-left: 50px;
        .item-btns {
        }
        .list-des {
            margin-top: 25px;
            margin-bottom: 25px;
            .add-agent-button {
                font-size: 18px;
                /*float: left;*/
                margin-right: 40px;
                margin-left: 20px;
            }
        }
        .condition {
            font-size: 20px;

            .input1 {
                width: 60px;
            }
            .input2 {
                width: 70px;
            }
            p:nth-child(1) {
                color: #000000;
                font-weight: bolder;
            }
            p:nth-child(2) {
                padding-left: 60px;
            }
            p:nth-child(3) {
                padding-left: 60px;
                span:nth-child(1) {
                    color: #ff0000;
                }
                span:nth-child(2) {
                    color: #0000ff;
                }
            }
        }

    }
</style>
