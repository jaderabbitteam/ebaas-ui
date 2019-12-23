<template>
<div class="home_body">
   <div class="news_banner">

        <div class="news_down">
          <div class="news_head">
            <span>
              待办
            </span>
          </div>
              <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                  prop="news_content"
                  label="消息内容"
                  min-width="50%">
                </el-table-column>
                <el-table-column
                  prop="news_time"
                  label="接收时间"
                  min-width="10%">
                </el-table-column>
                <el-table-column
                  prop="news_style"
                  label="消息类型"
                  min-width="10%">
                </el-table-column>
                <el-table-column
                  prop="salesman"
                  label="业务员"
                  min-width="10%">
                </el-table-column>
                <el-table-column
                  prop="news_state"
                  label="状态"
                  min-width="10%">
                </el-table-column>
                <el-table-column
                  prop="news_operation"
                  label="操作"
                  min-width="10%">
                </el-table-column>

              </el-table>
        </div>
   </div>
</div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      tableData: [{
        news_content: '',
        news_time: '',
        news_style: '',
        salesman: '',
        news_state: '',
        news_operation: ''
      }]
    }
  }
}
</script>

<style scoped>
  .home_body{
    background: #ECECEC;
  }
  .news_banner{
    widows: 90%;
    height: 100%;
    /* width: 65%; */
    margin: 3% 5% 0;
    padding-bottom: 30px;
    /* background: #f2f; */
  }
  .top{
    width: 100%;
    height: 116px;
    /* background: #f9f; */
  }
  .top>span{
    display: block;
    float: left;
    width: 250px;
    height: 100px;
    margin: 8px 1%;
    background: red;
    border-radius: 8px;
  }
  .top>span:nth-of-type(1){
    margin-left: 0;
    background: #607B8B;
  }
  .top>span:nth-of-type(2){
    background: #51A5C6;
  }
  .top>span:nth-of-type(3){
    background: #4A4A4A;
  }
  span>.left{
    float: left;
    position: relative;
    display: block;
    border-radius: 8px;
    width: 100px;
    height: 100px;
  }
  span>.left img{
    display: block;
    position: absolute;
    top: 0;right: 0;bottom: 0;left: 0;
    margin: auto;
  }
  span>.right{
    float: left;
    display: block;
    width: 150px;
    height: 100px;
    color: #fff;
  }
  span>.right h1{
    font-size: 32px;
    margin-top: 15px;
    font-family: '';
  }
  span>.right p{
    font-size: 13px;
  }
  .news_down{
    width: 100%;
    /* height: 400px; */
    /* background: skyblue; */
    margin-top: 30px;
    z-index: -10;
  }
  .news_down .news_head{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 50px;
    background: #323232;
    border-radius: 8px;
  }
  .news_down .news_head>span{
    position: absolute;
    display: block;
    width: 96%;
    height: 24px;
    top: 13px;
    left: 2%;
    background: red;
    background: url('../../../../static/images/table-1.png') no-repeat;
    font-size: 14px;
    color: #70EDEA;
    box-sizing: border-box;
    line-height: 24px;
    padding-left: 32px;
  }
  .news_down table{
    width: 100%;
    height: 100px;
    background: #ccc;
  }
  .el-table th{
    background-image: linear-gradient(#fff, #ccc);
    color: #444;
  }
  .el-table td{
    background: #F8F8F8;
  }
  .el-table__body-wrapper{
    /* height: 50px; */
  }
  .el-table tr{
    /* padding: -50px;
    font-size: 40px; */
  }
  .cell{
    text-align: center;
  }
  .el-table__body-wrapper body{
    min-height: 50px;
  }
  .el-table__body-wrapper td{
    height: 50px;
  }
</style>
