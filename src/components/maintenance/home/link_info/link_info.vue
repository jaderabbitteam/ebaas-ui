<template>
  <div id="tab">
    <div class="tab-bar clearfix">
      <a
        href="javascript:;"
        @click="tab(index)"
        v-for="(item,index) in items"
        :key="index"
        :class="{active : index===curId}"
      >{{item.item}}</a>
    </div>
    <div class="tab-con">
      <div v-show="0===curId">
        <div class="channel_info_item">
          <span>链名称：</span>
          <span>{{channel.name}}</span>
        </div>
        <div class="channel_info_item">
          <span>链ID：</span>
          <span>{{channel.id}}</span>
        </div>
        <div class="channel_info_item">
          <span>链描述：</span>
          <span>{{channel.description}}</span>
        </div>
        <div>
          <ul class="item_wrap">
            <li class="item">
              <div>当前节点</div>
              <div class="item_info">{{channel.peers&&channel.peers.length}}</div>
            </li>
            <li class="item">
              <div>当前成员数</div>
              <div class="item_info">{{channel.organizations&&channel.organizations.length}}</div>
            </li>
            <li class="item">
              <div>历史并发最高值(笔/秒)</div>
              <div class="item_info">{{statistics.TPS}}</div>
            </li>
            <li class="item">
              <div>区块高度</div>
              <div class="item_info">{{statistics.BlockNum}}</div>
            </li>
          </ul>
          <ul class="item_wrap last_item_wrap">
            <li class="item">
              <div>交易总数</div>
              <div class="item_info">{{statistics.TxNum}}</div>
            </li>
            <li class="item">
              <div>今日交易数</div>
              <div class="item_info">{{statistics.TodayTxNum}}</div>
            </li>
            <li class="item">
              <div>最近1小时交易数</div>
              <div class="item_info">{{statistics.LastHourTxNum}}</div>
            </li>
            <li class="item">
              <div>最近1小时区块数</div>
              <div class="item_info">{{statistics.LastHourBlockNum}}</div>
            </li>
          </ul>
        </div>
        <div class="chart_label">交易数</div>
        <template>
  <el-select v-model="txyearsVal" placeholder="请选择">
    <el-option
      v-for="item in years"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>
        <template>
  <el-select v-model="txMonth" placeholder="请选择">
    <el-option
      v-for="item in months"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>
        <div ref="chart" style="width: 100%;height:400px;"></div>
        <div class="chart_label">区块数量</div>
        <template>
  <el-select v-model="blockYear" placeholder="请选择">
    <el-option
      v-for="item in years"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>
        <template>
  <el-select v-model="blockMonth" placeholder="请选择">
    <el-option
      v-for="item in months"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>
        <div ref="blockchart" style="width: 100%;height:400px;"></div>
      </div>
      <div v-show="1===curId">
        <el-table :data="channel.peers" border style="width: 100%">
          <el-table-column prop="name" label="节点名称" min-width="20%"></el-table-column>
          <el-table-column prop="address" label="ip地址" min-width="20%"></el-table-column>
          <el-table-column prop="id" label="节点ID" min-width="20%"></el-table-column>
          <el-table-column prop="orgName" label="所属机构" min-width="20%"></el-table-column>
          <el-table-column prop="status" label="状态" min-width="20%"></el-table-column>
          <el-table-column prop="business_num" label="配置信息" min-width="20%"></el-table-column>
        </el-table>
      </div>
      <div v-show="2===curId">
        <el-table :data="channel.organizations" border style="width: 100%">
          <el-table-column prop="name" label="机构名称" min-width="20%"></el-table-column>
          <el-table-column prop="contract" label="联系人" min-width="20%"></el-table-column>
          <el-table-column prop="phone" label="联系方式" min-width="20%"></el-table-column>
          <el-table-column prop="peersNum" label="节点数" min-width="20%"></el-table-column>
        </el-table>
      </div>
      <div v-show="3===curId">
        <el-table :data="list" border style="width: 100%;text-algin:center">
          <el-table-column prop="txid" label="交易hash" min-width="20%"></el-table-column>
          <el-table-column prop="number" label="区块高度" min-width="20%"></el-table-column>
          <el-table-column prop="blockhash" label="区块hash" min-width="20%"></el-table-column>
          <el-table-column prop="chaincode" label="业务类型" min-width="20%"></el-table-column>
          <el-table-column prop="time" label="交易时间" min-width="20%"></el-table-column>
           <el-table-column label="操作" min-width="12%">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row.txid)" type="text" size="small">
               查看
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="page_wrap">
          <el-pagination
            @current-change="currentChange($event)"
            background
            layout="prev, pager, next"
            :total="totalNumber"
          ></el-pagination>
        </div>
      </div>
      <div v-show="4===curId">
        <div class="channel_info_item">
          <span>链名称：</span>
          <span>{{channel.name}}</span>
        </div>
        <div class="channel_info_item">
          <span>区块高度：</span>
          <span>{{blockInfo.number}}</span>
        </div>
        <div class="channel_info_item">
          <span>区块hash：</span>
          <span>{{info.currentBlockHash}}</span>
        </div>
        <div class="channel_info_item">
          <span>前一区块hash：</span>
          <span>{{info.previousBlockHash}}</span>
        </div>
        <el-table :data="[blockInfo]" border style="width: 100%;text-algin:center">
          <el-table-column prop="txid" label="交易hash" min-width="20%"></el-table-column>
          <el-table-column prop="number" label="区块高度" min-width="20%"></el-table-column>
          <el-table-column prop="blockhash" label="区块hash" min-width="20%"></el-table-column>
          <el-table-column prop="chaincode" label="业务类型" min-width="20%"></el-table-column>
          <el-table-column prop="time" label="交易时间" min-width="20%"></el-table-column>
           <el-table-column label="操作" min-width="12%">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row.txid)" type="text" size="small">
                查看
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
     <el-dialog
  title="资产存证>>交易详情"
  :visible.sync="dialogVisible"
  width="70%"
  >
  <ul>
    <li class="txid_item"><span class="txid_item_label">交易hash: </span><span class="txid_item_info">{{txDetail.txID}}</span></li>
    <li class="txid_item"><span class="txid_item_label">输入参数：</span><span class="txid_item_info">{{txDetail.input}}</span></li>
    <li class="txid_item"><span class="txid_item_label">执行结果：</span><span class="txid_item_info">{{txDetail.response}}</span></li>
    <li class="txid_item"><span class="txid_item_label">交易时间：</span><span class="txid_item_info">{{txDetail.timeStamp}}</span></li>
    <li class="txid_item"><span class="txid_item_label">交易数据：</span><span class="txid_item_info">{{txDetail.kvwset}}</span></li>
  </ul>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">关闭</el-button>
  </span>
</el-dialog>
  </div>
 
</template>

<script>
import { api } from "@/services";
import { formatTime } from "@/utils";
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth()+1;
const years = [];
for(let i=2019;i<=currentYear;i++){
  years.push({  value: i,
          label: i+'年'})
}
const months = [];
for(let i=1;i<13;i++){
   months.push({  value: i,
          label: i+'月'})
}
console.log(years)
export default {
  data() {
    return {
      curId: 0,
      items: [
        { item: "链概况" },
        { item: "节点管理" },
        { item: "成员管理" },
        { item: "交易管理" },
        { item: "动态监控" }
      ],
      channel: {},
      statistics: {},
      blockInfo: {},
      info: {},
      list: [],
      pageIndex: 1,
      totalNumber: 0,
      years:years,
      months:months,
      txyearsVal:currentYear,
      txMonth:currentMonth,
      myChart:null,
      blockYear:currentYear,
      blockMonth:currentMonth,
      blockChart:null,
      dialogVisible:false,
      txDetail:{}
    };
  },
  created() {
    console.log(this.$route.query);
    api.getChannelById(this.$route.query.id).then(data => {
      data.peers.map(item => {
        item.business_num = "自定义配置";
      });
      this.channel = data;
    });
    api.getstatistics(this.$route.query.id).then(data => {
      this.statistics = data;
    });
    api.getInfo(this.$route.query.id).then(data => {
      this.info = data;
      api
        .gettransactionbyblockheight(this.$route.query.id, data.height - 1)
        .then(data => {
          data.map(item => {
            item.time = formatTime(item.timestamp * 1000);
          });
          this.blockInfo = data[0];
        });
    });
    api
      .transactionLists(this.pageIndex, 10, this.$route.query.id)
      .then(data => {
        console.log(data);
        this.totalNumber = data.totalNumber;
        data.data.map(item => {
          item.time = formatTime(item.timestamp * 1000);
        });
        this.list = data.data;
      });
  },
  methods: {
    tab(index) {
      this.curId = index;
    },
    currentChange(e) {
      this.pageIndex = e;
    },
    updatetxChart(year,month,myChart){
      api.getechartstxdata(this.$route.query.id,year,month).then(data=>{
let  option = {
      xAxis: {
        type: "category",
        data: data.Day
      },
      tooltip: {
        trigger: "axis"
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: data.Data,
          type: "line",
          smooth: true,
          itemStyle: {
            normal: {
              color: "#66CD00",
              lineStyle: {
                color: "#66CD00"
              }
            }
          }
        }
      ]
    };

    if (option && typeof option === "object") {
      myChart.setOption(option, true);
    }
      })
    },
    updateblockChart(year,month,myChart){
      api.getechartsblockdata(this.$route.query.id,year,month).then(data=>{
let  option = {
      xAxis: {
        type: "category",
        data: data.Day
      },
      tooltip: {
        trigger: "axis"
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: data.Data,
          type: "line",
          smooth: true,
          itemStyle: {
            normal: {
              color: "#66CD00",
              lineStyle: {
                color: "#66CD00"
              }
            }
          }
        }
      ]
    };

    if (option && typeof option === "object") {
      myChart.setOption(option, true);
    }
      })
    },
    handleClick(txid){
      api.transaction(this.$route.query.id,txid).then(data=>{
       data.timeStamp = formatTime(data.timeStamp);
        this.txDetail = data;
        this.dialogVisible = true;
      })
    }
  },
  mounted() {
    this.myChart = echarts.init(this.$refs.chart);
    this.blockChart = echarts.init(this.$refs.blockchart);
    this.updatetxChart(this.txyearsVal,this.txMonth,this.myChart);
    this.updateblockChart(this.blockYear,this.blockMonth,this.blockChart);
  
  },
  watch: {
    pageIndex: function() {
      api
        .transactionLists(this.pageIndex, 10, this.$route.query.id)
        .then(data => {
          this.totalNumber = data.totalNumber;
          data.data.map(item => {
            item.time = formatTime(item.timestamp * 1000);
          });
          this.list = data.data;
        });
    },
    txyearsVal:function(){
      this.updatetxChart(this.txyearsVal,this.txMonth,this.myChart);
    },
    txMonth:function(){
      this.updatetxChart(this.txyearsVal,this.txMonth,this.myChart);
    },
    blockYear:function(){
      this.updateblockChart(this.blockYear,this.blockMonth,this.blockChart);
    },
    blockMonth:function(){
      this.updateblockChart(this.blockYear,this.blockMonth,this.blockChart);
    }
  }
};
</script>

<style scoped>
#tab {
  font-size: 13px;
  width: 90%;
  border: 1px solid #ccc;
  margin: 60px auto 0;
}
.tab-bar {
  width: 100%;
  height: 36px;
  background-color: #323232;
}
.tab-bar a {
  box-sizing: border-box;
  padding: 5px;
  float: left;
  width: 65px;
  height: 36px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  background: #323232;
  color: #70edea;
}
.tab-bar .active {
  background-color: #f8f8f6;
  color: #323232;
}
.tab-con > div {
  text-align: left;
  min-height: 100px;
  padding: 30px;
  box-sizing: border-box;
}
.channel_info_item {
  line-height: 42px;
  font-size: 16px;
}
ul,
li {
  margin: 0;
  overflow: hidden;
  
}
.item_wrap {
  border: 1px solid #dddddd;
}
.last_item_wrap {
  border-top: none;
}
.item {
  float: left;
  width: 25%;
  border-right: 1px solid #dddddd;
  text-align: center;
  padding-top: 10px;
  height: 65px;
}
.item_info {
  color: #ffa500;
  font-size: 22px;
}
.page_wrap {
  display: flex;
  flex-direction: row-reverse;
  padding-top: 20px;
}
.chart_label{
  font-size: 20px;
  margin: 30px 0 10px 0;
}
.txid_item{
  margin-bottom: 20px;
  overflow: hidden;
}
.txid_item>span{
  float: left;
}
.txid_item_info{
  width: 80%;
}
.txid_item_label{
  padding-right: 10px;
  font-size: 14px;
}
</style>