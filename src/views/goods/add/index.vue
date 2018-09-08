<template>
    <div class="addVisa-form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">
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


            <el-form-item label="添加图片" prop="images">
                <!-- TODO 上线之后这里要把api前缀去掉 -->
                <el-upload list-type="picture" class="upload-demo" action='/image/uploadfile' name='file' :limit="5"
                           :on-success="imgUploaded" :on-remove="imgRemove">
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
                <!--<el-date-picker-->
                <!--v-model="ruleForm.closeDate"-->
                <!--type="date"-->
                <!--value-format="yyyy-MM-dd"-->
                <!--placeholder="选择日期">-->
                <!--</el-date-picker>-->
                <el-date-picker
                    v-model="ruleForm.closeDate"
                    type="datetime"
                    placeholder="选择报名截止时间"
                    value-format="yyyy-MM-dd HH:mm:ss"
                >
                </el-date-picker>
            </el-form-item>

            <el-form-item label="最低成团人数(人)" prop="peopleMinNum" style="width: 312px;">
                <el-input v-model="ruleForm.peopleMinNum"></el-input>
            </el-form-item>

            <el-form-item label="成团人数上限(人)" prop="peopleMaxNum" style="width: 312px;">
                <el-input v-model="ruleForm.peopleMaxNum"></el-input>
            </el-form-item>
            <hr>

            <el-form-item label="设置商品价格(￥)" prop="realPrice" style="width: 312px;">
                <el-input v-model="ruleForm.realPrice"></el-input>
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
                        <el-input v-model.number="travelGoodsDividePrices[4].price" placeholder="￥0.00"></el-input>
                    </td>
                    <td>
                        <el-input v-model.number="travelGoodsDividePrices[5].price" placeholder="￥0.00"></el-input>
                    </td>
                    <td>
                        <el-input v-model.number="travelGoodsDividePrices[6].price" placeholder="￥0.00"></el-input>
                    </td>
                    <td>
                        <el-input v-model.number="travelGoodsDividePrices[7].price" placeholder="￥0.00"></el-input>
                    </td>
                </tr>
                <tr>
                    <td class="tableTitle">儿童：</td>
                    <td>
                        <el-input v-model.number="travelGoodsDividePrices[0].price" placeholder="￥0.00"></el-input>
                    </td>
                    <td>
                        <el-input v-model.number="travelGoodsDividePrices[1].price" placeholder="￥0.00"></el-input>
                    </td>
                    <td>
                        <el-input v-model.number="travelGoodsDividePrices[2].price" placeholder="￥0.00"></el-input>
                    </td>
                    <td>
                        <el-input v-model.number="travelGoodsDividePrices[3].price" placeholder="￥0.00"></el-input>
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

            <el-form-item label="设置上架日期">
                <el-radio-group v-model="upType">
                    <el-radio v-for="(val,key) in upStatus" :label="val" :key="key">{{ key }}</el-radio>
                </el-radio-group>
                <el-date-picker style="margin-left: 5px;" v-if="upType == 3"
                                v-model="ruleForm.upTime"
                                type="datetime"
                                value-format="yyyy-MM-dd HH:mm:ss"
                                placeholder="选择日期">
                </el-date-picker>
            </el-form-item>


            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')" v-permission="['goods-add-publish']">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {addTravelGoods} from '@/api/goods';
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
                editorSetting: {
                    width: 600,
                    height: 400,
                },
                upType: null,
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
                    status: null,
                    upTime: null,
                    images: null,
                    travelGoodsDividePrices: null
                },
                rules: {
                    name: [
                        {required: true, trigger: 'blur', message: '请输入商品名称'}
                    ],
                    outline: [
                        {required: true, trigger: 'blur', message: '请输入商品概要'}
                    ],
                    type: [
                        {required: true, trigger: 'change', message: '请选择商品分类'}
                    ],
                    leaveTime: [
                        {required: true, trigger: 'change', message: '请输入出发日期'}
                    ],
                    leaveAddress: [
                        {required: true, trigger: 'change', message: '请输入出发地点'}
                    ],
                    lineDescribe: [
                        {required: true, trigger: 'change', message: '请输入线路特色'}
                    ],
                    tripDescribe: [
                        {required: true, trigger: 'change', message: '请输入行程特色'},
                    ],
                    costDescribe: [
                        {required: true, trigger: 'change', message: '请输入费用与须知'},
                    ],
                    peopleMinNum: [
                        {required: true, trigger: 'change', message: '请输入最低成团人数'},
                        {validator: checkNum, trigger: 'blur'}
                    ],
                    peopleMaxNum: [
                        {required: true, trigger: 'change', message: '请输入成团人数上限'},
                        {validator: checkNum, trigger: 'blur'}
                    ],
                    realPrice: [
                        {required: true, trigger: 'blur', message: '请输入商品价格'},
                        {validator: checkNum, trigger: 'blur'}
                    ],
                    salePrice: [
                        {required: true, trigger: 'blur', message: '请输入门市价格'},
                        {validator: checkNum, trigger: 'blur'}
                    ],
                    childPrice: [
                        {required: true, trigger: 'blur', message: '请输入儿童价格'},
                        {validator: checkNum, trigger: 'blur'}
                    ],
                    images: [
                        {required: true, trigger: 'change', message: '请至少添加一张图片'},
                        // {validator: checkNum, trigger: 'blur'}
                    ],
                    closeDate: [
                        {required: true, trigger: 'change', message: '请输入报名截止时间'},
                        // {validator: checkNum, trigger: 'blur'}
                    ],

                    // renewPrice: [
                    //     {validator: checkNum, trigger: 'blur'}
                    // ],
                }
            });
        },
        created() {
        },
        components: {
            App,
            editor
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
                // this.ruleForm.goodsNum = URL.createObjectURL(file.raw);
                console.log(file.response.data);
                this.ruleForm.goodsNum = file.response.data;
            },
            beforeAvatarUpload(file) {
                // const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                // if (!isJPG) {
                //   this.$message.error('上传头像图片只能是 JPG 格式!');
                // }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isLt2M;
            },
            imgUploaded(res, file) {
                if (Object.prototype.toString.call(this.ruleForm.images) != '[object Array]') {
                    this.ruleForm.images = [];
                }
                let obj = {
                    goodPath: res.data,
                    sort: this.ruleForm.images.length ? this.ruleForm.images.length : 0
                }

                this.ruleForm.images.push(obj);
                console.log(this.ruleForm.images);
            },
            imgRemove(files, fileList) {
                this.form.visaPath = null;
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log('submit!');
                        console.log(this.upType);
                        console.log('测试', this.travelGoodsDividePrices);
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
                        this.ruleForm.travelGoodsDividePrices = this.travelGoodsDividePrices;
                        addTravelGoods(this.ruleForm).then(res => {
                            console.log('掉借口了', res);
                            if ( res.code == 200 ) {
                                alert('新建成功');
                                window.location.reload();
                            } else {
                                alert(res.msg);
                            }
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
        padding-bottom: 100px;
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


</style>
