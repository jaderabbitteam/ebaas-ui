<template>
  <el-container>
    <el-header>
      <img src="../../static/images/home-logo.png" alt="">
    </el-header>

    <el-main>
      <div class="title">
        <p style="font-size:50px">构建安全、易用、高性能、可定制的区块链基础云服务平台</p>
      </div>
      <el-card class="box-card">
        <h1 style="color:#fff;font-weight:500;margin-bottom:25px;font-size:20px">登录</h1>

        <el-form :model="loginForm" :rules="loginRules" ref="loginRef">
          <el-form-item prop="userName">
            <img src="../../static/images/user_login_icon.png" alt="">
            <el-input v-model="loginForm.userName" placeholder="请输入您的用户名" style="width:85%;float:right;margin-right:7px;"></el-input>
          </el-form-item>

          <el-form-item prop="userPassword">
            <img src="../../static/images/user_psd_icon.png" alt="">
            <el-input v-model="loginForm.userPassword" type="password" placeholder="请输入您的密码" style="width:85%;float:right;margin-right:7px;"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" style="width:95.5%;margin-left:7px;" @click="submit">登录</el-button>
          </el-form-item>
          <div class="logon_link">
            <el-link href="#" type="info" style="color:#fff;">注册账号</el-link>
          </div>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import {
  api
} from '@/services'

export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        userName: '',
        userPassword: ''
      },
      loginRules: {
        userName: [
          {required: true, message: '用户名不能为空！'}
        ],
        userPassword: [
          {required: true, message: '密码不能为空！'}
        ]
      }
    }
  },
  methods: {
    async submit () {
      this.$refs.loginRef.validate(isOK => isOK ? console.log('该登录了') : null)
      const data = await api.user(this.loginForm.userName, this.loginForm.userPassword).catch(err => {
        console.log(err)
        return null
      })

      console.log(data)

      data ? this.$router.push('/maintenance') : this.$message.error({
        dangerouslyUseHTMLString: true,
        message: '<strong style="font-size:30px">登陆失败，请检查用户名密码是否正确</strong>'
      })
    }
  }
}
</script>

<style scoped>
.el-container{
  height: 100vh;
  min-width: 1180px;
  background: url('../../static/images/mws-body-bg-login.png') no-repeat;
  background-size: cover;
}
.el-header img{
    display: block;
  height: 37px;
  margin: 18px 5px;
}
.el-main{
  display: flex;
  align-content:center;
  margin-top: 150px;
}
.title{
  position: relative;
  flex: 2.3;
  height: 440px;
  text-align: center;
  color: #fff;
}
.title p{
  position: absolute;
  display: block;
  width: 75%;
  height: 140px;
  top: 0;right: 0;bottom: 0;left: 0;
  margin: auto;
}
.box-card{
  flex: 1;
  height: 370px;
  margin-right: 200px;
  background: #0D4A99;
  border: none;
}
.logon_link{
  text-align: center;
  font-size: 20px;
  height: 30px;
}
.el-form-item__content img{
  margin-top: 7px;
  margin-left: 7px;
}
</style>
