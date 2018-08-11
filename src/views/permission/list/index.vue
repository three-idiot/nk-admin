<template>
<div class="app-container">
    <title-line txt="角色管理"></title-line>
    <el-table :stripe="true" :data="list" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row>
        <el-table-column align="center" label='角色名称'>
            <template slot-scope="scope">
                {{scope.row.name}}
            </template>
        </el-table-column>
        <el-table-column align="center" label="状态">
            <template slot-scope="scope">
                {{scope.row.status}}
            </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
            <template slot-scope="scope">
                <el-button size="mini" type="success" @click="check(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="primary" @click="edit(scope.$index, scope.row)">解冻</el-button>
                <el-button size="mini" type="primary" @click="edit(scope.$index, scope.row)">冻结</el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
import {
    getList
} from "@/api/permission";
import orderMap from "@/map/travel-order";
import TitleLine from "@/components/TitleLine/index.vue";
export default {
    data() {
        return Object.assign({}, orderMap, {
            list: null,
            listLoading: true,
            current_page: 1,
            max_page: 0,
            page_size: 20,
            total_count: null,
            priceCount: null,
            form: {
                goodsName: null,
                peopleMinRule: "1",
                peopleMaxRule: "1",
                status: '10'
            },
        });
    },
    computed: {
        listQuery() {
            return Object.assign({}, this.form, {
                pageIndex: this.current_page,
                pageSize: this.page_size,
            });
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.listLoading = true;
            getList(this.listQuery).then(response => {
                this.list = response.data.data;
                // this.priceCount = response.data.priceCount;
                // this.total_count = response.data.total_count;
                // this.current_page = response.data.current_page;
                // this.max_page = response.data.max_page;
                this.listLoading = false;
            });
        },
        onSubmit() {
            this.fetchData();
        },
        check(index, row) {
            this.$router.push({
                name: 'travel-order-check',
                params: {
                    id: row.goodsNo
                }
            });
        },
        edit(index, row) {
            this.$router.push({
                name: 'travel-order-edit',
                params: {
                    id: row.id
                }
            });
        },
        currentPageChange(page) {
            this.current_page = page;
            this.fetchData();
        }
    },
    components: {
        TitleLine
    }
};
</script>

<style lang="scss" scoped>
.app-container {}
</style>
