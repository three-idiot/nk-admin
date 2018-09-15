<template>
<div class="app-container">
    <title-line txt="查看广告详情"></title-line>
    <portrait-table :data="data"></portrait-table>
    <div class="btn-container">
        <el-button type="primary" @click.native="$router.back()">返回</el-button>
    </div>
</div>
</template>

<script>
import {
    getAdsDetail
} from "@/api/news";
import PortraitTable from "@/components/PortraitTable/index.vue";
import TitleLine from "@/components/TitleLine/index.vue";
import statusEnum from '@/map/news';

export default {
    data() {
        return Object.assign({}, {
            statusEnum: statusEnum,
            data: []
        });
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.listLoading = true;
            getAdsDetail(this.$route.query.id).then(response => {
                const resData = response.data;
                this.data = [{
                        key: '广告编码',
                        value: resData.adNo,
                        type: 'string'
                    },
                    {
                        key: '广告标题',
                        value: resData.title,
                        type: 'string'
                    },
                    {
                        key: '广告状态',
                        value: this.statusEnum.status[resData.status].msg,
                        type: 'string'
                    },
                    {
                        key: '广告图片',
                        value: resData.images,
                        // value: ['https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=a919d7dfe524b899c13c7f385e071d59/d52a2834349b033bda94010519ce36d3d439bdd5.jpg', 'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=01805b674b10b912a0c1f0fef3fcfcb5/42a98226cffc1e17461390ed4690f603728de9ba.jpg'],
                        type: 'images'
                    },
                    {
                        key: '广告URL地址',
                        value: resData.url,
                        type: 'string'
                    },
                    {
                        key: '广告位置',
                        value: this.statusEnum.sort[resData.sort].msg,
                        type: 'string'
                    },
                    {
                        key: '广告有效期',
                        value: resData.validTime,
                        type: 'string'
                    },
                    {
                        key: '广告详情',
                        value: resData.detail,
                        type: 'html'
                    },
                    {
                        key: '创建人',
                        value: resData.publisher,
                        type: 'string'
                    },
                    {
                        key: '创建时间',
                        value: resData.createTime,
                        type: 'string'
                    },
                    {
                        key: '审核人',
                        value: resData.approver,
                        type: 'string'
                    },
                    {
                        key: '审核时间',
                        value: resData.approveTime,
                        type: 'string'
                    }
                ];
            });
        },
    },
    components: {
        PortraitTable,
        TitleLine
    }
};
</script>

<style lang="scss" scoped>
.app-container {
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
