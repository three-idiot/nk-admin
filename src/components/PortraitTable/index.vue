<template>
<div class="portrait-table-container">
    <el-table border :size="size" :show-header=false :data="data" style="width: 100%">
        <el-table-column label="标题" align="right" :width="keyWidth" class-name='key'>
            <template slot-scope="scope">
                <span>{{scope.row.key}}:</span>
            </template>
        </el-table-column>
        <el-table-column label="值">
            <template slot-scope="scope">
                <span v-if="scope.row.type=='string'||scope.row.type==undefined">{{scope.row.value}}</span>
                <span v-if="scope.row.type=='html'||scope.row.type==undefined" v-html="scope.row.value"></span>
                <span v-if="scope.row.value&&scope.row.type=='image'"><img :style="imgStyle" :src="scope.row.value" alt=""></span>
                <span v-if="scope.row.value&&scope.row.type=='big-image'" @click="show(scope.row.value)"><img :style="imgStyle" :src="scope.row.value" alt="" style="cursor: pointer"></span>
                <span v-if="scope.row.value&&scope.row.type=='images'">
                    <img class="single-img" v-for="(item, index) in scope.row.value" :key="index" :style="imgStyle" :src="item && item.goodPath" alt="">
                </span>
                <span v-if="scope.row.value&&scope.row.type=='date'">{{new Date(scope.row.value).Format("yyyy-MM-dd")}}</span>
                <span v-if="scope.row.value&&scope.row.type=='dateTime'">{{new Date(scope.row.value.replace(/-/g,"/")).Format("yyyy-MM-dd HH:mm:ss")}}</span>
                <span v-if="scope.row.value&&scope.row.type=='qrcode'"><qrcode :value="scope.row.value" :options="{ size: 200 }"></qrcode></span>
            </template>
        </el-table-column>
    </el-table>
    <div class="mask" v-if="bigImgShow" @click="close">
        <img :src="bigImg">
    </div>
</div>
</template>

<script>
export default {
    name: 'portrart-table',
    data() {
        return {
            bigImg: null,
            bigImgShow: false,
        }
    },
    props: {
        data: {
            type: Array,
            default: []
        },
        keyWidth: {
            type: Number,
            default: 125
        },
        size: {
            type: String,
            default: 'mini'
        },
        imgWidth: {
            type: String,
            default: '30%'
        }
    },
    computed: {
        imgStyle() {
            return "max-width:"+this.imgWidth;
        }
    },
    methods: {
        show(src) {
            this.bigImg = src;
            this.bigImgShow = true;
        },
        close() {
            this.bigImgShow = false;
        }
    }
};
</script>

<style lang="scss">
.portrait-table-container {
    .key {
        background-color: #EDF3F4;
        color: #336199;
    }
    .single-img {
        margin-right: 10px;
        &:last-child {
            margin-right: 0;
        }
    }
}
    .mask {
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        left:0;
        top:0;
        img {
            position: absolute;
            width: 70%;
            left:0;
            right:0;
            top:0;
            bottom: 0;
            margin: auto;
        }
    }
</style>
