<template>
<div class="title-container">
    <p class="title">{{txt}}</p>
    <el-button v-permission="btn.permission?[btn.permission]:'all'" v-if="btn" class="btn" :type="btn.type" :size="btn.size" @click="click">{{btn.txt}}</el-button>
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
        btn: {
            type: Object
        }
    },
    computed: {},
    methods:{
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
