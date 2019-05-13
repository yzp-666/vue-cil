<template>
    <div class="user" >
        <el-card class="box-card">
            <div class="clearfix" slot="header">
                <span>用户信息</span>
            </div>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column label="头像" width="180">
                    <el-image :src=tableData[0].src></el-image>
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="job" label="职务">
                </el-table-column>
            </el-table>
        </el-card>
        <footer>Copyright © 2019 zzmhot All Rights Reserved</footer>
    </div>
</template>

<script>
    export default {
        name: "user",
        data() {
            return {
                tableData: [{
                    src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                    name: '王小虎',
                    job: '超级管理员'
                }]
            }
        }
    }
</script>

<style lang="less" scoped>
    footer {
        position: absolute;
        bottom: 0;
        background: white;
        margin-left: 200px;
        width: fill-available;
        left: 0;
        text-align: center;
        height: 50px;
        color: #7A7676;
        font-size: 14px;
        line-height: 50px;
        z-index: 2;
    }
    .user-logo{
        display: flex;
        .h-name{
            line-height: 100px;
            margin-left: 50px;
        }
    }
    .user {
        background: white;
        border-radius: 10px;
    }

    .el-image {
        width: 100px;
        height: 100px;
    }

</style>
