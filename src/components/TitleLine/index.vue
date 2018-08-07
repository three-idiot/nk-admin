<template>
<div class="title-container">
    <p class="title">{{txt}}</p>
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
    },
    computed: {}
};
</script>

<style lang="scss" scoped>
.title-container {
    margin-bottom: 10px;
    .title {
        font-size: 25px;
        color: #606266;
        margin: 0;
    }
}
</style>
