<template>
<div class="body_bg">

    <header>
        <img src="../../static/images/home-logo.png" alt="" width="180px">
    </header>

    <div class="content">
        <div class="content_left">
            <p>构建安全、易用、高性能、可定制的区块链基础云服务平台</p>
        </div>

        <div class="content_right">
            <h1>登录</h1>
            <div class="form">
                <form action="">

                    <div class="username">
                        <img src="../../static/images/user_login_icon.png" alt="">
                        <input type="text" placeholder="请输入您的用户名" v-model="userName">
                    </div>

                    <div class="password">
                        <img src="../../static/images/user_psd_icon.png" alt="">
                        <input type="password" placeholder="请输入您的密码" v-model="passWord">
                    </div>

                    <div @click="login" class="submit">
                        <input type="submit" value="立即登陆">
                        <p v-if="show_1">账号密码错误，登录失败</p>
                        <p v-if="show_2">帐号或密码不能为空</p>
                    </div>

                    <div class="register">
                        <a href="#">立即注册</a>
                    </div>
                </form>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import {
    api
} from '@/services'

export default {
    name: 'index',
    data() {
        return {
            userName: "",
            passWord: "",
            show_1: false,
            show_2: false
        }
    },
    methods: {
        async login() {
            if (this.userName == "" && this.passWord == "") {
                this.show_2 = true;
                return
            }

            const data = await api.user(this.userName, this.passWord).catch(err => {
                console.log(err)

                return null
            })

            if(data){
                console.log('成功');
                location.href = 'http://localhost:8080/?#/maintenance';
            }
            else{
                console.log('失败');
                this.show_1 = true;
                this.show_2 = false;
            }


            // await api.user(this.userName, this.passWord).then(function (response) {  
            //     if(response){
            //         console.log('成功');
                    
            //     }
            //     else{
            //         console.log('失败');
                    
            //     }
                
            // })
            // console.log(api.user(this.userName, this.passWord));
            


            // console.log(data)
            
            // console.log(data.txID)
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.body_bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../../static/images/mws-body-bg-login.png") no-repeat;
    background-size: cover;
}

.body_bg header {
    float: left;
}

.body_bg header img {
    display: block;
    margin-top: 20px;
    margin-left: 30px;
}

.body_bg .content {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;

}

.body_bg .content .content_left {
    position: absolute;
    width: 45%;
    height: 50%;
    margin-left: 12%;
    margin-top: 18%;
    overflow: hidden;
    font: 50px "微软雅黑";
    line-height: 70px;
    font-weight: 500;
    color: #fff;
}

.body_bg .content .content_right {
    position: absolute;
    width: 400px;
    height: 400px;
    margin-left: 60%;
    margin-top: 13%;
    background: #0D4A99;
    padding: 10px 20px;
    border-radius: 4px;
}

.body_bg .content .content_right h1 {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
}

.body_bg .content .content_right form {
    line-height: 70px;
}

.body_bg .content .content_right form .username,
.body_bg .content .content_right form .password {
    overflow: hidden;
    display: flex;
    margin-top: 30px;
}

.form img {
    position: relative;
    top: 7px;
    width: 20px;
    height: 25px;
    margin-right: 10px;
}

/* .body_bg .content .content_right form .username img{
    margin-top: 30px;
} */

.body_bg .content .content_right form .submit {
    margin-top: 25px;
    position: relative;
    height: 50px;
}

.body_bg .content .content_right form .username input,
.body_bg .content .content_right form .password input,
.body_bg .content .content_right form .submit input {
    width: 90%;
    height: 50px;
    background: #1C61B6;
    border: none;
    outline: none;
    padding-left: 10px;
    border-radius: 5px;
    color: #fff;
}

.body_bg .content .content_right form .submit p {
    height: 20px;
    text-align: center;
    font-family: '微软雅黑';
    color: red;
    display: block;
    font-size: 26px;
    line-height: 20px;
    padding-top: 120px;
}

/* .body_bg .content .content_right form .username input {
    margin-top: 30px;
} */

input::-webkit-input-placeholder {
    color: #bbb;
    font-size: 16px;
}

.body_bg .content .content_right form .submit input {
    position: absolute;
    top: 0;
    height: 100%;
    margin-left: 20px;
    background: #109BBE;
    font-size: 14px;
    font-family: "微软雅黑";
    cursor: pointer;
}

.body_bg .content .content_right form .register {
    margin-top: 10px;
    position: relative;
    height: 50px;
}

.body_bg .content .content_right form .register a {
    position: absolute;
    top: 0;
    line-height: 50px;
    /* display: block; */
    text-align: center;
    margin-left: 44%;
    color: #fff;
    font-size: 14px;
}
</style>
