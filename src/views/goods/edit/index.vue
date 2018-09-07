<template>
    <div class="addVisa-form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">
            <el-form-item label="商品编号" prop="goodsNo" style="width: 312px;">
                <el-input v-model="ruleForm.goodsNo" disabled></el-input>
            </el-form-item>
            <!--商品名称-->
            <el-form-item label="商品名称" prop="name" style="width: 312px;">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="商品概要" prop="outline" style="width: 312px;">
                <el-input v-model="ruleForm.outline"></el-input>
            </el-form-item>

            <el-form-item label="商品分类" prop="type">
                <el-select v-model="ruleForm.type" placeholder="请选择">
                    <el-option v-for="(val,key) in type" :label="val" :value="key" :key="key"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="出发日期" prop="leaveTime">
                <!--<el-date-picker v-model="ruleForm.leaveTime"-->
                <!--type="date"-->
                <!--value-format="yyyy-MM-dd"-->
                <!--placeholder="选择日期">-->
                <!--</el-date-picker>-->
                <el-date-picker
                    v-model="ruleForm.leaveTime"
                    type="datetime"
                    placeholder="选择出发日期"
                    value-format="yyyy-MM-dd HH:mm:ss"
                >
                </el-date-picker>
            </el-form-item>


            <el-form-item label="出发地点" prop="leaveAddress" style="width: 312px;">
                <el-input v-model="ruleForm.leaveAddress"></el-input>
            </el-form-item>

            <el-form-item label="推荐商品" prop="recommend">
                <el-radio-group v-model="ruleForm.recommend">
                    <el-radio v-for="(val,key) in recommend" :label="key" :value="key" :key="key">{{ val }}</el-radio>
                </el-radio-group>
            </el-form-item>


            <el-form-item label="修改图片" prop="images">
                <!-- TODO 上线之后这里要把api前缀去掉 -->
                <el-upload list-type="picture" class="upload-demo" action='/api/image/uploadfile' name='file' :limit="5"
                           :on-success="imgUploaded" :on-remove="imgRemove" :file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">如需更换图片，请点击图片右上角删除后重新上传</div>
                </el-upload>
            </el-form-item>


            <p>商品描述：</p>
            <el-form-item label="线路特色" prop="lineDescribe">
                <editor class="editor" :value="ruleForm.lineDescribe" :setting="editorSetting"
                        @input="(content)=> ruleForm.lineDescribe = content"></editor>
            </el-form-item>

            <el-form-item label="行程介绍" prop="tripDescribe">
                <editor class="editor" :value="ruleForm.tripDescribe" :setting="editorSetting"
                        @input="(content)=> ruleForm.tripDescribe = content"></editor>
            </el-form-item>

            <el-form-item label="费用与须知" prop="costDescribe">
                <editor class="editor" :value="ruleForm.costDescribe" :setting="editorSetting"
                        @input="(content)=> ruleForm.costDescribe = content"></editor>
            </el-form-item>


            <hr>

            <el-form-item label="报名截止时间" prop="closeDate">
                <el-date-picker
                    v-model="ruleForm.closeDate"
                    type="datetime"
                    placeholder="选择报名截止时间"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    disabled
                >
                </el-date-picker>
                <el-button type="primary" style="margin-left: 30px;" @click="dialogVisible1 = true">点击修改</el-button>
            </el-form-item>

            <el-form-item label="最低成团人数(人)" prop="peopleMinNum" style="width: 312px;">
                <el-input v-model="ruleForm.peopleMinNum" disabled></el-input>
            </el-form-item>

            <el-form-item label="成团人数上限(人)" prop="peopleMaxNum" style="width: 312px;">
                <el-input v-model="ruleForm.peopleMaxNum" disabled></el-input>
            </el-form-item>


            <!--弹层1号-->
            <el-dialog
                title="修改期限和人数"
                :visible.sync="dialogVisible1"
                width="30%">
                <el-form-item label="修改商品期限" prop="peopleMinNum">
                    <el-radio-group>
                        <!--<el-radio v-for="(val,key) in upStatus" :label="val"  :key="key" >{{ key }}</el-radio>-->
                        <el-radio label="1">长期有效</el-radio>
                        <el-radio label="2">固定年限</el-radio>
                    </el-radio-group>
                    <el-date-picker style="margin-left: 5px;"
                                    v-model="ruleForm.upTime"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>

                <el-form-item label="最低成团人数(人)" prop="peopleMinNum" style="width: 312px;">
                    <el-input v-model="ruleForm.peopleMinNum"></el-input>

                </el-form-item>

                <el-form-item label="成团人数上限(人)" prop="peopleMaxNum" style="width: 312px;">
                    <el-input v-model="ruleForm.peopleMaxNum"></el-input>
                </el-form-item>


                <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible1 = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
            </span>
            </el-dialog>


            <hr>

            <el-form-item label="设置商品价格(￥)" prop="realPrice">
                <el-input v-model="ruleForm.realPrice" style="width: 180px;" disabled></el-input>
                <el-button type="primary" style="margin-left: 30px;" @click="dialogVisible2 = true">点击修改</el-button>
            </el-form-item>

            <el-form-item label="设置门市价格(￥)" prop="salePrice" style="width: 312px;">
                <el-input v-model="ruleForm.salePrice" disabled></el-input>
            </el-form-item>

            <el-form-item label="设置儿童价格(￥)" prop="childPrice" style="width: 312px;">
                <el-input v-model="ruleForm.childPrice" disabled></el-input>
            </el-form-item>

            <!--弹层2号-->
            <el-dialog
                title="修改期限和人数"
                :visible.sync="dialogVisible2"
                width="50%">
                <el-form-item label="设置商品价格(￥)" prop="realPrice">
                    <el-input v-model="ruleForm.realPrice" style="width: 180px;"></el-input>
                    <el-button type="primary" style="margin-left: 30px;" @click="dialogVisible2 = true">点击修改</el-button>
                </el-form-item>

                <el-form-item label="设置门市价格(￥)" prop="salePrice" style="width: 312px;">
                    <el-input v-model="ruleForm.salePrice"></el-input>
                </el-form-item>

                <el-form-item label="设置儿童价格(￥)" prop="childPrice" style="width: 312px;">
                    <el-input v-model="ruleForm.childPrice"></el-input>
                </el-form-item>

                <p>设置商品分成：</p>
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
                            <el-input v-model="travelGoodsDividePrices[4].price" placeholder="￥0.00"></el-input>
                        </td>
                        <td>
                            <el-input v-model="travelGoodsDividePrices[5].price" placeholder="￥0.00"></el-input>
                        </td>
                        <td>
                            <el-input v-model="travelGoodsDividePrices[6].price" placeholder="￥0.00"></el-input>
                        </td>
                        <td>
                            <el-input v-model="travelGoodsDividePrices[7].price" placeholder="￥0.00"></el-input>
                        </td>
                    </tr>
                    <tr>
                        <td class="tableTitle">儿童：</td>
                        <td>
                            <el-input v-model="travelGoodsDividePrices[0].price" placeholder="￥0.00"></el-input>
                        </td>
                        <td>
                            <el-input v-model="travelGoodsDividePrices[1].price" placeholder="￥0.00"></el-input>
                        </td>
                        <td>
                            <el-input v-model="travelGoodsDividePrices[2].price" placeholder="￥0.00"></el-input>
                        </td>
                        <td>
                            <el-input v-model="travelGoodsDividePrices[3].price" placeholder="￥0.00"></el-input>
                        </td>
                    </tr>
                </table>

                <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible2 = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
            </span>
            </el-dialog>


            <p>设置商品分成：</p>

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


            <!--<el-form-item label="省代(元)" prop="provinceDividePrice" style="width: 312px;">-->
            <!--<el-input v-model="ruleForm.provinceDividePrice"></el-input>-->
            <!--</el-form-item>-->

            <!--<el-form-item label="市县代(元)" prop="cityDividePrice" style="width: 312px;">-->
            <!--<el-input v-model="ruleForm.cityDividePrice"></el-input>-->
            <!--</el-form-item>-->

            <!--<el-form-item label="网点(元)" prop="pointDividePrice" style="width: 312px;">-->
            <!--<el-input v-model="ruleForm.pointDividePrice"></el-input>-->
            <!--</el-form-item>-->
            <hr>


            <div class="status-container">
                <div class="status">
                    <span>商品状态：</span>
                    <el-tag :type="ruleForm.status" style="float: left">
                        {{ status[this.ruleForm.status] }}
                    </el-tag>
                    <el-button  style="margin-left: 100px;" type="primary" class="change" @click="dialogVisible3 = true">点击修改</el-button>
                </div>
                <div class="time">
                    <span>商品上架时间：</span>
                    <span>{{ this.ruleForm.upTime }}</span>
                </div>
            </div>


            <el-dialog
                title="修改期限和人数"
                :visible.sync="dialogVisible3"
                width="30%">
                <el-form-item label="设置上架日期">
                    <el-radio-group v-model="upType">
                        <el-radio v-for="(val,key) in upStatus" :label="val" :key="key">{{ key }}</el-radio>
                    </el-radio-group>
                    <el-date-picker style="margin-left: 5px;" v-if="upType == 3"
                                    v-model="ruleForm.upTime"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible3 = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible3 = false">确 定</el-button>
            </span>
            </el-dialog>


            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">取消并返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {travelGoods,updateTravelGoods} from '@/api/goods';
    import goodsMap from "@/map/goods"
    import editor from '@/components/editor'
    import App from "../../../App";


    export default {
        data() {
            let checkNum = (rule, value, callback) => {
                if (!/^[0-9]*$/.test(value)) {
                    return callback(new Error('必须是数字'));
                } else {
                    callback();
                }
            };
            return Object.assign({}, goodsMap, {
                fileList: [],
                goodsList: null,
                good: null,
                dialogVisible1: false,
                dialogVisible2: false,
                dialogVisible3: false,
                editorSetting: {
                    width: 600,
                    height: 400,
                },
                upType: null,
                statusMap: {
                    1: 'success',
                    2: 'success',
                    3: 'danger',
                    4: 'warning',
                    5: 'danger',
                },
                travelGoodsDividePrices: [
                    {
                        agentType: 1,
                        userType: 2,
                        price: null
                    },
                    {
                        agentType: 2,
                        userType: 2,
                        price: null
                    },
                    {
                        agentType: 3,
                        userType: 2,
                        price: null
                    },
                    {
                        agentType: 4,
                        userType: 2,
                        price: null
                    },
                    {
                        agentType: 1,
                        userType: 1,
                        price: null
                    },
                    {
                        agentType: 2,
                        userType: 1,
                        price: null
                    },
                    {
                        agentType: 3,
                        userType: 1,
                        price: null
                    },
                    {
                        agentType: 4,
                        userType: 1,
                        price: null
                    }
                ],
                upStatus: {
                    '立即上架': 2,
                    '在库中': 1,
                    '固定时间上架': 3
                },
                imageUrl: '',
                ruleForm: {
                    name: null,
                    outline: null,
                    type: null,
                    leaveTime: null,
                    leaveAddress: null,
                    lineDescribe: null,
                    tripDescribe: null,
                    costDescribe: null,
                    closeDate: null,
                    peopleMinNum: null,
                    peopleMaxNum: null,
                    realPrice: null,
                    salePrice: null,
                    childPrice: null,
                    provinceDividePrice: null,
                    cityDividePrice: null,
                    pointDividePrice: null,
                    status: null,
                    upTime: null,
                    images: null
                },
                rules: {
                    goodsNum: [
                        {required: true, trigger: 'change', message: '请上传图片'}
                    ],
                    title: [
                        {required: true, trigger: 'blur', message: '请输入商品名称'}
                    ],
                    unitDay: [
                        {required: true, trigger: 'change', message: '请选择签证有效期'}
                    ],
                    intoType: [
                        {required: true, trigger: 'change', message: '请选择入境次数'}
                    ],
                    isUrgent: [
                        {required: true, trigger: 'change', message: '请选择是否加急'}
                    ],
                    isInterview: [
                        {required: true, trigger: 'change', message: '请选择是否面试'}
                    ],
                    visaPrice: [
                        {required: true, trigger: 'blur', message: '请输入签证费'},
                        {validator: checkNum, trigger: 'blur'}
                    ],
                    lowVisaPrice: [
                        {required: true, trigger: 'blur', message: '请输入签证优惠费'},
                        {validator: checkNum, trigger: 'blur'}
                    ],
                    helpPrice: [
                        {required: true, trigger: 'blur', message: '请输入服务费'},
                        {validator: checkNum, trigger: 'blur'}
                    ],
                    lowHelpPrice: [
                        {required: true, trigger: 'blur', message: '请输入服务优惠费'},
                        {validator: checkNum, trigger: 'blur'}
                    ],
                    stayDay: [
                        {required: true, trigger: 'blur', message: '请输入停留时间'},
                        {validator: checkNum, trigger: 'blur'}
                    ],
                    disposeDay: [
                        {required: true, trigger: 'blur', message: '请输入处理时间'},
                        {validator: checkNum, trigger: 'blur'}
                    ],
                    renewPrice: [
                        {validator: checkNum, trigger: 'blur'}
                    ],
                }
            });
        },
        created() {
            this.fetchData();
        },
        mounted() {
        },
        components: {
            App,
            editor
        },
        methods: {
            calPrices( agentType,userType ) {
                if ( this.ruleForm.travelGoodsDividePrices ) {
                    for( let i=0;i<this.ruleForm.travelGoodsDividePrices.length;i++ ) {
                        let item = this.ruleForm.travelGoodsDividePrices[i];
                        if ( item.agentType == agentType && item.userType == userType ) {
                            return item.price;
                        }
                    }
                }
            },
            fetchData() {
                let id = this.$route.query.id;
                travelGoods({ id: id}).then(response => {
                    this.ruleForm = response.data;
                    console.log('测试',this.ruleForm);
                    this.ruleForm.recommend = String(this.ruleForm.recommend);
                    this.ruleForm.type = String(this.ruleForm.type);
                    this.ruleForm.status = String(this.ruleForm.status);
                    let images = this.ruleForm.images;
                    this.fileList = [];
                    for( let i = 0;i<images.length;i++ ) {
                        let obj = {};
                        let item = images[i];
                        obj.name = item.id;
                        obj.url = item.goodPath;
                        this.fileList.push( obj );
                    }
                    this.ruleForm.images = [];
                    for( let i=0;i<images.length;i++ ) {
                        let obj = {};
                        let item = images[i];
                        let path = /\/images\/.*\?/.exec(item.goodPath)[0].split('?')[0];
                        obj.goodPath = path;
                        obj.sort = i;
                        this.ruleForm.images.push( obj );
                    }
                });
            },
            imgUploaded(res, file,fileList) {
                if (Object.prototype.toString.call(this.ruleForm.images) != '[object Array]') {
                    this.ruleForm.images = [];
                }
                // console.log('测试测试', file);
                // console.log('测试测试2', fileList);
                let obj = {
                    goodPath: res.data,
                    sort: this.ruleForm.images.length ? this.ruleForm.images.length : 0
                }
                this.ruleForm.images.push(obj);
                console.log(this.ruleForm.images);
            },
            imgRemove(files, fileList) {
                // console.log( files );
                // console.log( fileList );
                this.ruleForm.images = [];
                console.log( fileList );
                for ( let i=0;i<fileList.length;i++ ) {
                    let item = fileList[i];
                    if( typeof item.response != 'undefined' ) {
                        this.ruleForm.images.push({
                            goodPath: item.response.data,
                            sort:i
                        })
                    } else {
                        this.ruleForm.images.push({
                            goodPath: /\/images\/.*\?/.exec(item.url)[0].split('?')[0],
                            sort:i
                        })
                    }
                }
                console.log( this.ruleForm.images );
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log('submit!');
                        console.log(this.upType);
                        if (this.upType == 2) {
                            // 立即上架
                            this.ruleForm.status = 2;
                            this.ruleForm.upTime = new Date().Format("yyyy-MM-dd HH:mm:ss");
                        } else if (this.upType == 1) {
                            // 在库中
                            this.ruleForm.status = 1;
                            this.ruleForm.upTime = null;
                        } else {
                            // 固定时间上架
                            this.ruleForm.status = 1;
                            if (!this.ruleForm.upTime) {
                                alert('请输入上架时间');
                                return;
                            }
                        }
                        console.log('调试2', this.ruleForm);
                        // this.ruleForm.images = JSON.stringify(this.ruleForm.images);
                        updateTravelGoods(this.ruleForm).then(res => {
                            console.log('掉借口了', res);
                            // if ( res.code == 200 ) {
                            //     alert('新建成功');
                            //     history.back();
                            // }
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }

    .addVisa-form {
        margin-top: 20px;
        padding-left: 30px;
        padding-bottom: 300px;
        .divide-table {
            /*margin-left: 50px;*/
        }
        .tableTitle {
            background: #409EFF;
            min-width: 150px;
            line-height: 30px;
            text-align: center;
            color: #FFFFFF;
        }
    }
    .status-container {
        line-height: 40px;
        /*display: flex;*/
        padding-top: 10px;
        .status {
            span {
                float: left;
            }
            display: block;
            overflow: hidden;
            line-height: 40px;
        }
        .time {
            margin-top: 10px;
            margin-bottom: 20px;
        }
        .change {
            float: left;
        }
    }


</style>
