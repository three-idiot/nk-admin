<template>
<div class="app-container">
    <p class="title">广告列表</p>
    <hr/>
    <portrait-table :data="data"></portrait-table>
    <div class="btn-container">
        <el-button type="primary" @click.native="$router.back()">返回</el-button>
    </div>
</div>
</template>

<script>
import {
    getNewsList
} from "@/api/newsList";
import PortraitTable from "@/components/PortraitTable/index.vue";
export default {
    data() {
        return {}
    },
    computed: {
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.listLoading = true;
            getNewsList().then(response => {
                this.listLoading = false;
            });
        },
        onSubmit() {
            this.fetchData();
        },
        check(index, row) {
            this.$router.push({
                name: 'order-check',
                params: {
                    id: row.id
                }
            })
        },
        currentPageChange(page) {
            this.current_page = page;
            this.fetchData();
        }
    },
    components: {
        PortraitTable
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
