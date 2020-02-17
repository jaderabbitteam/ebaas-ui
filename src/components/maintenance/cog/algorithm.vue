<template>
<div class="home_body">
   <div class="alg_banner">

        <div class="alg_down">
          <div class="alg_head">
            <span>
              共识算法
            </span>
          </div>
          <div class="algorithm_content">

            <p>节点：&nbsp;183.6.121.188:19281</p>
            <p>排序节点：&nbsp;127.0.0.1:7050</p>
            <p>共识算法：&nbsp;solo</p>
            <p><router-link to="../maintenance/algorithm_introduction">认识共识算法</router-link></p>
            <p>简介：&nbsp;solo共识算法非常简单，单点共识解决方案。它接受交易，对其进行排序，然后生成块，进行上链</p>
            <img src="../../../../static/images/solo.png" alt="" width="90%">

          </div>

        </div>
   </div>
</div>
</template>

<script>
export default {
  name: 'algorithm',
  data () {
    return {
      tableData: [{
        start_ip: 'peer1',
        end_ip: 'Org1MSP',
        mark: 'STARTED',
        operation: '自定义配置'
      }]
    }
  }
}
</script>

<style scoped>
  
  .alg_banner{
    widows: 90%;
    width: 65%;
    /* height: 500px; */
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
    /* border-radius: 8px; */
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
    /* border-radius: 8px; */
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
  .alg_down{
    width: 100%;
    /* height: 400px; */
    /* background: skyblue; */
    margin-top: 30px;
    z-index: -10;
  }
  .alg_down .alg_head{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 50px;
    background: #323232;
    border-radius: 8px 8px 0 0;
  }
  .alg_down .alg_head>span{
    position: absolute;
    display: block;
    width: 96%;
    height: 24px;
    top: 13px;
    left: 2%;
    background: red;
    background: url('../../../../static/images/pencil.png') no-repeat;
    font-size: 14px;
    color: #70EDEA;
    box-sizing: border-box;
    line-height: 24px;
    padding-left: 32px;
  }
  .alg_down table{
    width: 100%;
    height: 100px;
    background: #ccc;
  }
  .algorithm_content{
    box-sizing: border-box;
    padding: 20px 100px;
    width: 100%;
    background: #F8F8F8;
    font-size: 13px;
    line-height: 40px;
    border-left: 3px solid #323232;
    border-right: 3px solid #323232;
    border-bottom: 1px solid #323232;
  }
  .algorithm_content p{
    line-height: 50px;
  }
  .algorithm_content p:nth-of-type(1),
  .algorithm_content p:nth-of-type(5){
    text-indent: 25px;
  }
    .algorithm_content p:nth-of-type(4){
    text-indent: 70px;
  }
  img{
    margin-left: 70px;
  }
  a{
    color: #008000;
  }

</style>
