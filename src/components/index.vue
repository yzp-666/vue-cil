<template>
    <el-container class="main">
        <el-aside class="side" style="background-color: #424f63" width="200px">
            <div class="logo"><img src="@/assets/logo1.png"></div>
            <el-menu class="menu-list" default-active="1">
                <el-menu-item @click="toHome" index="1">
                    <i class="el-icon-s-home"></i>
                    <span slot="title">主页</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-date"></i><span>表格管理</span>
                    </template>
                    <el-menu-item class="menu-list" index="2-1">基本表格</el-menu-item>
                    <el-menu-item index="2-2">排序表格</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template class="sidetitle" slot="title"><i class="el-icon-data-line"></i><span>图表管理</span>
                    </template>
                    <el-menu-item @click="toChart" index="3-1">柱状图表</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header class="H-head">
                <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
                <el-dropdown trigger="click"><span class="el-dropdown-link" style="cursor: pointer">王小虎
                    <i class="el-icon-arrow-down el-icon--right"></i></span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-user-solid">个人信息</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-s-tools">设置</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-warning">
                            <router-link to="/login">安全退出</router-link>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span></span>
            </el-header>

            <el-main>
                <router-view></router-view>
                <!--                <el-table :data="tableData">-->
                <!--                    <el-table-column label="sfd" prop="date" width="140">-->
                <!--                    </el-table-column>-->
                <!--                    <el-table-column label="姓名" prop="name" width="120">-->
                <!--                    </el-table-column>-->
                <!--                    <el-table-column label="地址" prop="address">-->
                <!--                    </el-table-column>-->
                <!--                </el-table>-->
            </el-main>
        </el-container>
    </el-container>

</template>

<script>
    export default {
        name: "index",
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(10).fill(item),
                activeIndex: '1',
            }
        },
        methods: {
            toHome() {
                this.$router.push('/index/home')
            },
            toChart() {
                this.$router.push('/index/chart')
            }
        }
    }
</script>

<style lang="less" scoped>
    .main {
        .side {
            .logo {
                text-align: center;
                height: 60px;
                border-right: solid 1px #e6e6e6;

                img {
                    margin-top: 10px;
                }
            }
        }
    }

    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
        height: 100vh;

        i {
            color: #fff;
        }
    }

    .el-dropdown-menu {
        top: 35px !important;
    }

    .el-submenu__title > span {
        color: #fff !important;
    }

    .el-menu-item, .el-submenu {
        color: #fff;
        background-color: #424f63
    }

    .el-menu-item.is-active {
        color: #65cea7 !important;
    }

    .el-menu-item:focus, .el-menu-item:hover {
        color: #65cea7 !important;
        background: #353f4f !important;
    }

    .el-menu-item:hover i {
        color: #65cea7 !important;
    }

    .H-head {
        text-align: right;
        font-size: 12px;
        background-color: white;
        position: relative;

        .el-input {
            width: 200px;
            position: absolute;
            left: 15px;
        }
    }
</style>
<style>
    .el-submenu__title i {
        color: #fff !important;
    }

    .el-submenu__title:hover {
        background: #353f4f !important;
    }

    .el-submenu__title:hover span {
        color: #65cea7 !important;
    }

    .el-submenu__title:hover i {
        color: #65cea7 !important;
    }


</style>
