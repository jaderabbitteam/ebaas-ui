<template>
  <div class="home_body">
    <div class="link_banner">
      <div class="link_down">
        <div class="link_head">
          <span>业务链管理>></span>
        </div>
        <div class="link_new_black">
          <span>新建链</span>
          <span>查看已安装链码</span>
          <span>安装链码</span>
          <span>链码打包教程</span>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="name" label="链名称" min-width="20%"></el-table-column>
          <el-table-column prop="id" label="链ID" min-width="12%"></el-table-column>
          <el-table-column prop="peers.length" label="节点数" min-width="12%"></el-table-column>
          <el-table-column prop="status" label="链状态" min-width="12%"></el-table-column>
          <el-table-column prop="organizations.length" label="成员数" min-width="12%"></el-table-column>
          <el-table-column prop="link_code" label="链码" min-width="12%">
            <template>
              <el-button type="text" size="small">查看</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="link_operation" label="操作" min-width="12%">
            <template slot-scope="scope">
              <el-button  type="text" size="small">
                <router-link :to="{name:'link_info',query:{id:scope.row.id}}">查看</router-link>
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "@/services";
export default {
  name: "link",
  data() {
    return {
      tableData: []
    };
  },
  created() {
    api.getChannel().then(data => {
      data.forEach(item => {
        item.status = item.peers[0].status == "STARTED" ? "已开通" : "未开通";
      });
      this.tableData = data;
    },error=>{
      this.$router.push('/')
    });
  }
};
</script>

<style scoped>

.link_banner {
  widows: 90%;
  /* height: 500px; */
  margin: 3% 5% 0;
  padding-bottom: 30px;
  /* background: #f2f; */
}
.top {
  width: 100%;
  height: 116px;
  /* background: #f9f; */
}
.top > span {
  display: block;
  /* float: left; */
  width: 250px;
  height: 100px;
  margin: 8px 1%;
  background: red;
  border-radius: 8px;
}
.top > span:nth-of-type(1) {
  margin-left: 0;
  background: #607b8b;
}
.top > span:nth-of-type(2) {
  background: #51a5c6;
}
.top > span:nth-of-type(3) {
  background: #4a4a4a;
}
span > .left {
  float: left;
  position: relative;
  display: block;
  border-radius: 8px;
  width: 100px;
  height: 100px;
}
span > .left img {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
span > .right {
  float: left;
  display: block;
  width: 150px;
  height: 100px;
  color: #fff;
}
span > .right h1 {
  font-size: 32px;
  margin-top: 15px;
  font-family: "";
}
span > .right p {
  font-size: 13px;
}
.link_down {
  width: 100%;
  /* height: 400px; */
  /* background: skyblue; */
  margin-top: 30px;
  z-index: -10;
}
.link_down .link_head {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 50px;
  background: #323232;
  border-radius: 8px;
}
.link_down .link_head > span {
  position: absolute;
  display: block;
  width: 96%;
  height: 24px;
  top: 13px;
  left: 2%;
  background: red;
  background: url("../../../../static/images/table-1.png") no-repeat;
  font-size: 14px;
  color: #70edea;
  box-sizing: border-box;
  line-height: 24px;
  padding-left: 32px;
}
.link_down table {
  width: 100%;
  height: 100px;
  background: #ccc;
}
.link_new_black {
  height: 40px;
  width: 100%;
  background: #f2f2f2;
  font-size: 14px;
  line-height: 40px;
}
.link_new_black span {
  box-sizing: border-box;
  display: block;
  height: 100%;
  /* width: 70px; */
  background: #f0f0f0;
  /* text-align: center; */
  padding-left: 35px;
  padding-right: 10px;
  float: left;
  border-left: 1px solid #fbfbfb;
  border-right: 1px solid #d0d0d0;
  background: url("../../../../static/images/add.png") no-repeat 10px center;
  cursor: pointer;
}
.el-table th {
  background-image: linear-gradient(#fff, #ccc);
  color: #444;
}
.el-table td {
  background: #f8f8f8;
}
.el-table__body-wrapper {
  /* height: 50px; */
}
.el-table tr {
  /* padding: -50px;
    font-size: 40px; */
}
.cell {
  text-align: center;
}
.el-table__body-wrapper body {
  min-height: 50px;
}
.el-table__body-wrapper td {
  height: 50px;
}
</style>
