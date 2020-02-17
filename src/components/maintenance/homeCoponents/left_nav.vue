<template>
  <el-menu :unique-opened="true" background-color="#323232" text-color="#fff" active-text-color="#5CEDEA" router>
    <el-menu-item class="addBorder" index="home">
      <img src="../../../../static/images/home.png" alt="">
      主页
    </el-menu-item>

    <el-submenu class="addBorder" index="2">
      <template slot="title">
        <img src="../../../../static/images/cog.png" alt="">
        系统管理</template>
      <el-menu-item index="node_management">节点管理</el-menu-item>
      <el-menu-item index="black">黑名单</el-menu-item>
      <el-menu-item index="white">白名单</el-menu-item>
      <!-- <el-menu-item index="algorithm">共识算法</el-menu-item>
      <el-menu-item index="encyclopedias">区块链百科</el-menu-item>
      <el-menu-item index="development">开发手册</el-menu-item> -->
    </el-submenu>

    <el-menu-item class="addBorder" index="link">
      <img src="../../../../static/images/link-2.png" alt="">
      业务链管理
      </el-menu-item>

    <!-- <el-menu-item class="addBorder" index="work">
      <img src="../../../../static/images/applications.png" alt="">
      业务管理
      </el-menu-item> -->
  </el-menu>
</template>

<script>
export default {

}
</script>

<style scoped>

.el-menu-item {
  font-size: 12px;
}
.addBorder{
  border-top: 1px solid #535755;
  border-bottom: 1px solid #18191D;
  font-size: 13px;
}
.el-submenu .el-menu-item{
  height: 35px;
  line-height: 35px;
}
</style>
