<template>
<div class="home_body">
   <div class="user_banner">

        <div class="user_down">
          <div class="user_head">
            <span>
              用户信息
            </span>
          </div>
          <div class="user_content">

           <p>用户名：</p>
           <p>密码：</p>

           <div class="user_change">
             <span>修改</span>
           </div>

          </div>


        </div>

        <div class="user_down">
          <div class="user_head">
            <span>
              机构信息
            </span>
          </div>
          <div class="user_content jigouxinxi">

           <div class="left">
             <p>机构名称：</p>
             <p>机构简介：</p>
             <p>机构ID：</p>
           </div>
           <div class="right">
              <p>联系人：</p>
             <p>手机号：</p>
             <p>机构证书：</p>
           </div>

           <div class="change">
            <span>修改机构信息</span>
          </div>

          </div>

        </div>
   </div>
</div>
</template>

<script>
export default {
  name: 'user_manage',
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
  .home_body{
    background: #ECECEC;
  }
  .user_banner{
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
  .user_down{
    width: 100%;
    /* height: 400px; */
    /* background: skyblue; */
    margin-top: 30px;
    z-index: -10;
  }
  .user_down .user_head{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 50px;
    background: #323232;
    border-radius: 8px 8px 0 0;
  }
  .user_down .user_head>span{
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
  .user_down table{
    width: 100%;
    height: 100px;
    background: #ccc;
  }
  .user_content{
    position: relative;
    box-sizing: border-box;
    padding: 20px 100px;
    width: 100%;
    overflow: hidden;
    background: #F8F8F8;
    font-size: 13px;
    line-height: 60px;
    border-left: 3px solid #323232;
    border-right: 3px solid #323232;
    border-bottom: 2px solid #323232;
  }
  .user_content>p:nth-of-type(2){
    text-indent: 1em;
  }
  .user_content .left{
    width: 65%;
    float: left;
  }
  .user_content .right{
    width: 35%;
    float: left;
  }
  .user_content .left>p:nth-of-type(3){
    text-indent: 1em;
  }
  .user_content .right>p:nth-of-type(1),
  .user_content .right>p:nth-of-type(2){
    text-indent: 1em;
  }
  .jigouxinxi{
    position: relative;
    height: 300px;
  }
  .change{
    position: absolute;
    height: 20px;
    line-height: 20px;
    padding: 5px;
    border-radius: 5px;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
    background: #109BBE;
    color: #fff;
    cursor: pointer;
  }
  .user_change{
    position: absolute;
    width: 40px;
    bottom: 15px;
    right: 25px;
    text-align: center;
  }
  .user_change>span{
    position: relative;
    font-size: 13px;
    display: block;
    width: 10%;
    height: 20px;
    width: auto;
    line-height: 20px;
    padding: 5px;
    background: #109BBE;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
  }

</style>
