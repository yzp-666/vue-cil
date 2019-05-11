<template>
    <div id="go">
        <div class="bg">
            <div class="sect">
                <div class="login">
                    <img class="login-img" src="../assets/logo.png" alt="">
                    <h1><i>A D M I N E X</i></h1>
                    <form id="user_login" action="">
                        <div>
                            <input class="name" name="" id="accountName" type="text" placeholder="请输入用户名">
                        </div>
                        <div>
                            <input class="code" name="password" id="password" type="password" placeholder="请输入密码">
                        </div>
                        <div class="btn">
                            <input type="button" id="submit" class="submit" value="登录" onclick="return check(this.form);">
                            <input type="reset" id="reset"  class="reset" value="重置" >
                        </div>
                        <div id="CheckMsg" class="msg"></div>
                    </form>



                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        components:{
        }
    }
</script>

<style scoped lang="less">
    #go {
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.5);
        border: 1px solid transparent;
    }
    .bg {
        position: absolute;
        height: 100%;
        width: 100vw;
        background: url("../assets/bg.jpg") center no-repeat;
        background-position: center center;
        background-size: auto 100% ;
        border: 1px solid transparent;

    }
    .sect {
        margin-top: 60px;
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%,-50%);
        border: 1px solid transparent;
    }
    .login {
        width: 26rem;
        height: 29rem;
        background: rgba(255,255,255,0.65);
        border-radius: 20px;
        text-align: center;
    }
    .login-img {
        height: 120px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .login>h1{
        font-size: 30px;
    }
    .login>h1>i{
        font-weight: 800;
    }
</style>
<style>
    .content{
        padding:0 auto;
        margin: 0 auto;
        height: 450px;
        width: 100%;
        /*background: url(../Image/Login-Img/login_bg.jpg) no-repeat center;*/
        /*background-size:100% 450px ;*/
        margin-top: 25px;
    }
    .login-wrap{
        position: absolute;
        width:320px;
        height: 300px;
        border-radius: 10px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        right:200px;
        margin-top: 75px;
        /*background: url("../Image/Login-Img/form_bg.png") no-repeat;*/
        /*background-size: 100%;*/
    }
    .login-wrap h3{
        color:#fff;
        font-size: 18px;
        text-align: center;
    }
    .name,.code{
        border:1px solid #fff;
        width:250px;
        height: 30px;
        margin-left: 25px;
        margin-top: 10px;
        margin-bottom: 20px;
        padding-left: 40px;
    }
    /*.name{*/
    /*    background: url("../Image/Login-Img/user.png") no-repeat left;*/
    /*    background-position-x:12px;*/
    /*}*/
    /*.code{*/
    /*    background: url("../Image/Login-Img/passwd.png") no-repeat left;*/
    /*    background-position-x:12px;*/
    /*}*/
    .btn input{
        height: 40px;
        width: 120px;
        border:none;
        color:#fff;
        margin:10px 20px;
        font-size: 16px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        cursor: pointer;
    }
    input:active{border-color:#147a62}
    .submit{background: #ea8c37;margin-left: 25px;}
    .reset{background: #bbb;}
    /**错误信息提醒**/
    .msg{
        color: #ea8c37;
        font-size: 14px;
        padding-left: 40px;
        padding-top: 10px;
        clear: both;
        font-weight: bold;
    }
</style>
