<template>
    <el-container class="main">
        <el-aside class="side" style="background-color: #424f63" width="200px">
            <div class="logo"><img src="@/assets/logo1.png"></div>
            <el-menu class="menu-list" default-active="1">
                <el-menu-item @click="toUser" index="1">
                    <i class="el-icon-s-home"></i>
                    <span slot="title">主页</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-date"></i><span>表格管理</span>
                    </template>
                    <el-menu-item class="menu-list" index="2-1" @click="toList">基本表格</el-menu-item>
                    <el-menu-item index="2-2">排序表格</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template class="sidetitle" slot="title"><i class="el-icon-data-line"></i><span>图表管理</span>
                    </template>
                    <el-menu-item @click="toChart" index="3-1">柱状图表</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <div style="position: fixed;background: #eff0f4;width: 100%;height: 100%;z-index: -1"></div>
        <el-container>
            <el-header class="H-head">
                <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link" style="cursor: pointer">王小虎<i
                            class="el-icon-arrow-down el-icon--right"></i></span>
                    <el-dropdown-menu slot="dropdown">
                        <div @click="toUser">
                            <el-dropdown-item icon="el-icon-user-solid">
                                <router-link to="/index/user">个人信息</router-link>
                            </el-dropdown-item>
                        </div>
                        <div @click="toHome">
                            <el-dropdown-item icon="el-icon-s-tools">
                                设置
                            </el-dropdown-item>
                        </div>
                        <div>
                            <router-link to="/login">
                                <el-dropdown-item icon="el-icon-warning">
                                    安全退出
                                </el-dropdown-item>
                            </router-link>
                        </div>
                    </el-dropdown-menu>
                </el-dropdown>
                <span></span>
            </el-header>

            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
        <footer>Copyright © 2019 zzmhot All Rights Reserved</footer>
    </el-container>

</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                activeIndex: '1',
            }
        },
        methods: {
            toHome() {
                this.$router.push('/index/home')
            },
            toUser() {
                this.$router.push('/index/user')
            },
            toChart() {
                this.$router.push('/index/chart')
            },
            toList(){
                this.$router.push('/index/list')
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

                img {
                    margin-top: 10px;
                }
            }
        }
    }
    footer{
        position: fixed;
        bottom: 0;
        background: white;
        margin-left: 200px;
        width: fill-available;
        text-align: center;
        height: 50px;
        color: #7A7676;
        font-size: 14px;
        line-height: 50px;
    }

    .el-header {
        color: #333;
        line-height: 60px;
        margin-left: 200px;
        position: fixed;
        top: 0;
        text-align: right;
        font-size: 12px;
        background-color: white;
        z-index: 200;
        width: fill-available;

        .el-input {
            width: 200px;
            position: absolute;
            left: 15px;
        }
    }

    .el-aside {
        color: #333;
        height: 100vh;
        position: fixed;

        i {
            color: #fff;
        }
    }

    .el-main {
        padding-left: 200px;
        padding-top: 60px;
        margin-top: 10px;
        margin-left: 10px;
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
        background: #353f4f !important;
    }

    .el-menu-item:focus, .el-menu-item:hover {
        color: #65cea7 !important;
        background: #353f4f !important;
    }

    .el-menu-item:hover i {
        color: #65cea7 !important;
    }

    .el-menu {
        border: none;
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
