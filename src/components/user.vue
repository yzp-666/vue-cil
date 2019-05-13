<template>
    <div class="user">
        <div class="user-logo">
            <div class="block">
                <el-image :src="src"></el-image>
            </div>
            <span class="demonstration">默认</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "user",
        data() {
            return {
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
            }
        }
    }
</script>

<style lang="less" scoped>
    .user{
        background: white;
        border-radius: 10px;
        padding: 50px;
    }
    .el-image {
        width: 100px;
        height: 100px;
    }

</style>
