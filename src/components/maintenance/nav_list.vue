<template>
 <el-container>
      <el-header style="background: #323232;border-bottom:5px solid #70EDEA;box-sizing: content-box;z-index:999;">
          <HeaderList></HeaderList>
      </el-header>

      <el-container>
          <el-aside style="width:200px;background:#2A2A2A;min-height:100vh;margin-top:-65px;padding-top:75px;">
              <LeftNav></LeftNav>
          </el-aside>

          <el-main>
              <router-view></router-view>
          </el-main>
      </el-container>
  </el-container>
</template>

<script>
import HeaderList from './homeCoponents/header_list'
import LeftNav from './homeCoponents/left_nav'
export default {
  components: {
    HeaderList,
    LeftNav
  }
}
</script>

<style scoped>

</style>
