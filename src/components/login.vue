<template>
    <div id="go">
        <div class="bg">
            <div class="sect" >
                <div class="login">
                    <img class="login-img" src="../assets/logo.png" alt="">
                    <h1><i>A D M I N E X</i></h1>
                    <form id="user_login" action="" @keyup.enter="KeyUpEnter">
                        <div>
                            <input class="name" v-model="admin" name="" id="accountName" type="text" placeholder="请输入用户名" ref="admin" value="">
                            <div  class="tips"><span ref="tips1" class="none">用户名为空</span></div>
                        </div>
                        <div>
                            <input class="code" v-model="password" name="password" id="password" type="password" placeholder="请输入密码">
                            <div class="tips"><span ref="tips2" class="none">密码为空</span></div>
                        </div>
                        <div class="btn">
                            <input type="button" id="submit" class="submit" value="登录" @click="goin()">
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

    function add() {
        window.localStorage.setItem('go','/index')
    }
    function delet() {
        window.localStorage.clear()
    }
    function go(admin,password,router,store,route) {
        if (!admin && !password) {
            alert("请输入用户名与密码！！！")
            delet()
        } else if (!admin){
            alert("请输入用户名！！！");
            delet()
        } else if (!password){
            alert("输入密码！！！");
            delet()
        } else if (admin === 'admin' && password === 'admin') {
            add()
            // store.state.islogin.loginSuccess=true

            localStorage.setItem("islogin", "true");
            setTimeout(()=>{
                store.commit("loginSuccess");
                let redirect = route.query.redirect; //获取redirect
                if(redirect != undefined){
                    router.replace({name:index})
                }else{
                    router.replace("/index")
                }
            }, 400);

        } else {
            alert("用户名或密码错误");
            delet()
        }
    }
    function tips(admin,refs) {
        if (admin) {
            refs.className="none"
        } else{
            refs.className="row"
        }
    }
    export default {
        name: "login",
        data(){
            return {
                admin: '',
                password: '',
            }
        },
        watch: {
            admin(){
                tips(this.admin,this.$refs.tips1)
            },
            password(){
                tips(this.password,this.$refs.tips2)
            },
        },
        methods:{
            KeyUpEnter(){
                go(this.admin,this.password,this.$router,this.$store,this.$route)
                tips(this.admin,this.$refs.tips1)
                tips(this.password,this.$refs.tips2)
            },
            goin(){
                go(this.admin,this.password,this.$router,this.$store,this.$route)
                tips(this.admin,this.$refs.tips1)
                tips(this.password,this.$refs.tips2)
                console.log(this);
            }
        },
        created(){
			this.$store.dispatch('getData')
        }
    }
</script>

<style scoped lang="less">
    #go {
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.5);
        /*border: 1px solid transparent;*/
    }
    .bg {
        position: absolute;
        height: 100%;
        width: 100%;
        background: url("../assets/bg.jpg") center no-repeat;
        background-position: center top;
        background-size: cover;
        /*border: 1px solid transparent;*/
        background-origin: border-box;
        /*background-position: center center;*/
        /*background-size: auto 100% ;*/
        /*border: 1px solid transparent;*/

    }
    .sect {
        margin-top: 30px;
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
    .tips {
        width: 250px;
        height: 16px;
        margin: -5px auto 0 auto;
        /*text-align: left;*/
        /*padding-left: 65px;*/
        position: relative;
        top: -8px;
        color: red;
        overflow: hidden;
        /*transition: 500ms;*/
    }
    .tips span{
        display: inline-block;
        transition: 500ms;
    }
    .none {
        transform: translateY(-20px);
    }
    .row {
        transform: translateY(0px);
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
