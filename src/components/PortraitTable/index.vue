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
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
export default {
    name: 'portrart-table',
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
        }
    }
}
</script>

<style lang="scss">
.portrait-table-container {
    .key {
        background-color: #EDF3F4;
        color: #336199;
    }
}
</style>
