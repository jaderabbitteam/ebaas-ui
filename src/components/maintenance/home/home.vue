<template>
  <div class="home_body">
    <div class="home_banner">
      <div class="home_top">
        <span>
          <span class="home_left">
            <img src="../../../../static/images/link.png" alt>
          </span>
          <span class="home_right">
            <h1>{{tableData.length}}</h1>
            <p>业务链</p>
          </span>
        </span>
        <span>
          <span class="home_left">
            <img src="../../../../static/images/transmit.png" alt>
          </span>
          <span class="home_right">
            <h1>{{tableData[0]&&tableData[0].peers.length}}</h1>
            <p>节点</p>
          </span>
        </span>
        <span>
          <span class="home_left">
            <img src="../../../../static/images/cart_put.png" alt>
          </span>
          <span class="home_right">
            <h1>{{TPSNum}}</h1>
            <p>TPS</p>
          </span>
        </span>
      </div>

      <div class="home_down">
        <div class="home_head">
          <span>业务链管理>></span>
        </div>
        <el-table :data="list" border style="width: 100%">
          <el-table-column prop="name" label="链名称" min-width="15%"></el-table-column>
          <el-table-column prop="chanelID" label="链ID" min-width="15%"></el-table-column>
          <el-table-column prop="peerlength" label="节点数" min-width="12%"></el-table-column>
          <el-table-column prop="BlockNum" label="区块数" min-width="12%"></el-table-column>
          <el-table-column prop="TxNum" label="交易数" min-width="12%"></el-table-column>
          <el-table-column prop="TPS" label="TPS" min-width="12%"></el-table-column>
          <el-table-column prop="TodayTxNum" label="今日交易数" min-width="12%"></el-table-column>
          <el-table-column prop="status" label="链状态" min-width="12%"></el-table-column>
          <el-table-column label="操作" min-width="12%">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">
                <router-link :to="{name:'link_info',query:{id:scope.row.chanelID}}">查看</router-link>
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import {
  api
} from '@/services'
export default {
  name: "home",
  data() {
    return {
      tableData: [],
      TPSNum:0,
      list:[]
    };
  },
  created() {
    api.getChannel().then(data => {
      this.tableData = data;
      data.forEach((item,num)=>{
          this.queryLinkInfo(item.id,item.name,item.peers.length,item.peers[0].status)
      })
    },error=>{
      this.$router.push('/')
    });
    api.gettotalstatistics().then(data => {
      this.TPSNum = data.TPS
    });
  },
  methods:{
    queryLinkInfo(chanelID, name, peerlength, status){
      api.getstatistics(chanelID).then(data => {
         const result = data;
         let obj = {};
         obj.name = name;
         obj.chanelID = chanelID;
         obj.peerlength = peerlength;
         obj.BlockNum = result.BlockNum;
         obj.TxNum = result.TxNum;
         obj.TPS = result.TPS;
         obj.TodayTxNum = result.TodayTxNum;
         obj.status = status=='STARTED'?'已开通':'未开通';
         this.list.push(obj);
    });
    }
  }
};
</script>

<style scoped>
.home_body {
 
  height: 100%;
  /* width: 100%;
    box-sizing: border-box;
    margin-left: 200px; */
}
.home_banner {
  width: 90%;
  /* height: 500px; */
  margin: 3% 5% 0;
  padding-bottom: 30px;
  /* background: #f2f; */
}
.home_top {
  width: 100%;
  height: 116px;
  /* background: #f9f; */
}
.home_top > span {
  display: block;
  float: left;
  width: 250px;
  height: 100px;
  margin: 8px 1%;
  background: red;
  border-radius: 8px;
}
.home_top > span:nth-of-type(1) {
  margin-left: 0;
  background: #607b8b;
}
.home_top > span:nth-of-type(2) {
  background: #51a5c6;
}
.home_top > span:nth-of-type(3) {
  background: #4a4a4a;
}
span > .home_left {
  float: left;
  position: relative;
  display: block;
  border-radius: 8px;
  width: 100px;
  height: 100px;
}
span > .home_left img {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
span > .home_right {
  float: left;
  display: block;
  width: 150px;
  height: 100px;
  color: #fff;
}
span > .home_right h1 {
  font-size: 32px;
  margin-top: 15px;
  font-family: "";
}
span > .home_right p {
  font-size: 13px;
}
.home_down {
  width: 100%;
  /* height: 400px; */
  /* background: skyblue; */
  margin-top: 30px;
  z-index: -10;
}
.home_down .home_head {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 50px;
  background: #323232;
  border-radius: 8px;
}
.home_down .home_head > span {
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
.home_down table {
  width: 100%;
  height: 100px;
  background: #ccc;
}
.el-table th {
  background-image: linear-gradient(#fff, #ccc);
  color: #444;
}
.el-table td {
  background: #f8f8f8;
}
.cell {
  text-align: center;
}
a {
  color: #0000ee;
}
a:active {
  color: #ff0000;
}
</style>
