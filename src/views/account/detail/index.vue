<template>
<div class="app-container">
    <title-line txt="账号详情"></title-line>
    <p class="subtitle">账号信息</p>
    <portrait-table class="portrait-table" :key-width="90" :data="accountData"></portrait-table>
    <hr class="hr">
    <p class="subtitle">创建人信息</p>
    <portrait-table class="portrait-table" :key-width="90" :data="creatData"></portrait-table>
    <div class="btn-container">
        <el-button type="primary" @click.native="$router.back()">返回</el-button>
    </div>
</div>
</template>

<script>
import {
    getTravelOrderDetail
} from "@/api/travel-order";
import PortraitTable from "@/components/PortraitTable/index.vue";
import TitleLine from "@/components/TitleLine/index.vue";
import orderMap from "@/map/travel-order";
export default {
    data() {
        return Object.assign({}, orderMap, {
            list: null,
            childList: null,
            data: [],
            accountData: [],
            creatData: []
        });
    },
    created() {
        if (!this.$route.params.data) {
            this.$router.back();
        } else {
            const data = this.$route.params.data;
            this.accountData = [{
                    key: '所属角色',
                    value: data.roleName,
                    type: 'string'
                },
                {
                    key: '账号',
                    value: data.username,
                    type: 'string'
                },
                {
                    key: '使用人姓名',
                    value: data.name,
                    type: 'string'
                },
                {
                    key: '手机号',
                    value: data.phone,
                    type: 'string'
                }
            ];
            this.creatData = [{
                    key: '创建人',
                    value: data.createUserName,
                    type: 'string'
                },
                {
                    key: '创建时间',
                    value: data.createTime,
                    type: 'dateTime'
                },
                {
                    key: '所属角色',
                    value: data.createUserRoleName,
                    type: 'string'
                }
            ];
        }

    },
    methods: {
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
    .portrait-table {
        margin-bottom: 20px;
    }
    .hr {
        margin-top: 40px;
        color: #ebeef5;
    }
    .subtitle {
        color: #444;
        font-size: 20px;
        font-weight: bold;
    }
}
</style>
