<template>
  <div class="home_body">
    <div class="black_banner">
      <div class="black_down">
        <div class="black_head">
          <span>系统管理>>黑名单</span>
        </div>
        <div class="black_new_black">
          <span>新增</span>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="startip" label="开始ip地址" min-width="25%"></el-table-column>
          <el-table-column prop="endip" label="结束ip地址" min-width="25%"></el-table-column>
          <el-table-column prop="mark" label="备注" min-width="25%"></el-table-column>
          <el-table-column prop="operation" label="操作" min-width="25%">
            <template>
              <el-button type="text" size="small">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { http } from "@/utils";
import { api } from "@/services";
export default {
  name: "black",
  data() {
    return {
      tableData: []
    };
  },
  created() {
    api.getbackiplist().then(data => {
      const result = data.data;
      if (result instanceof Array) {
        this.tableData = result;
      }
    },error=>{
      this.$router.push('/')
    });
  }
};
</script>

<style scoped>

.black_banner {
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
  float: left;
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
.black_down {
  width: 100%;
  /* height: 400px; */
  /* background: skyblue; */
  margin-top: 30px;
  z-index: -10;
}
.black_down .black_head {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 50px;
  background: #323232;
  border-radius: 8px;
}
.black_down .black_head > span {
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
.black_down table {
  width: 100%;
  height: 100px;
  background: #ccc;
}
.black_new_black {
  height: 40px;
  width: 100%;
  background: #f2f2f2;
  font-size: 14px;
  line-height: 40px;
}
.black_new_black span {
  box-sizing: border-box;
  display: block;
  height: 100%;
  width: 70px;
  background: #f0f0f0;
  /* text-align: center; */
  padding-left: 25px;
  float: right;
  border-left: 1px solid #fbfbfb;
  background: url("../../../../static/images/add.png") no-repeat 0 center;
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
