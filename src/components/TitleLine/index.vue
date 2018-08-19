<template>
<div class="title-container">
    <p class="title">{{txt}}</p>
    {{btn}}
    <el-button v-if="btn" class="btn" :type="btn.type" :size="btn.size" @click.native="click">{{btn.txt}}</el-button>
    <hr>
</div>
</template>

<script>
export default {
    name: 'title-line',
    props: {
        txt: {
            type: String,
            default: ''
        },
        btn:{
            type:Object
        }
    },
    computed: {},
    method:{
        click(){
            this.$emit('btnClick')
        }
    }
};
</script>

<style lang="scss" scoped>
.title-container {
    margin-bottom: 10px;
    position: relative;
    .title {
        font-size: 25px;
        color: #606266;
        margin: 0;
        display: inline;
    }
    .btn {
        position: absolute;
        right: 0;
    }
}
</style>
