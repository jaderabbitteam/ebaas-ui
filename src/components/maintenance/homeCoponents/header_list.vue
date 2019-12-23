<template>
  <el-row type="flex" align="middle" class="header">
    <el-col :span="12" class="header_left">
      <img src="../../../../static/images/home-logo.png" alt="">
    </el-col>
    <el-col :span="12">
      <el-row type="flex" justify="end">
        <!-- <el-col class="img_box">
          <img src="../../../../static/images/alert-2.png" alt="">
        </el-col> -->
          <el-popover
            placement="bottom"
            width="150"
            trigger="hover"
            >
            <router-link to="news">
            <el-button type="info" plain>
              查看所有通知
            </el-button>
            </router-link>
            <el-button slot="reference" style="padding:0;border:0;background:#323232;width:34px;margin-right:10px;">
              <el-col class="img_box">
                <img src="../../../../static/images/alert-2.png" alt="">
              </el-col>
            </el-button>
          </el-popover>

        <el-col class="user_info">
          <img src="../../../../static/images/profile.jpg" alt="">
          <div class="text">
            <p style="font-size:11px;color:#70edea;">欢迎</p>
            <p>
              <el-link style="font-size:11px;color:#FFF" type="info">修改密码</el-link>
              <el-link style="font-size:11px;color:#FFF" type="info">退出</el-link>
            </p>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>

</template>

<script>
export default {

}
</script>

<style scoped>
.header{
  height: 60px;
}
.header_left img{
  height: 33px;
  margin-top: 5px;
}
.img_box{
  position: relative;
  width: 34px;
  height: 34px;
  border: 1px solid #565656;
  border-radius: 5px;
  padding: 4px 5px;
  cursor: pointer;
  margin-right: 10px;
}
.user_info{
  background: #2B2B2B;
  width: 130px;
  height: 35px;
  border-radius: 5px;
  box-shadow: 0 0 1px 1px #222;
}
.user_info img{
  margin-top: 2px;
  height: 28px;
  border: 2px solid #fff;
  box-sizing: content-box;
}
.user_info .text{
  width: 85px;
  height: 32px;
  float: right;
}
</style>
