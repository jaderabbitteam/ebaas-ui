<template>
<div class="home_body">
   <div class="dev_banner">

        <div class="dev_down">
          <div class="dev_head">
            <span>
              开发手册
            </span>
          </div>
          <div class="dev_content">
            <h1>什么是Chaincode</h1>
            <p>
              Chaincode是一段由Go语言编写（支持其他编程语言，如Java），并能实现预定义接口的程序。
            </p>
            <p>
              Chaincode运行在一个受保护的Docker容器当中，与背书节点的运行互相隔离。Chaincode可通过应用提交的交易对账本状态初始化并进行管理。
            </p>
            <p>
              一段chaincode通常处理由网络中的成员一致认可的业务逻辑，故我们很可能用“智能合约”来代指chaincode。
            </p>
            <p>
              一段chiancode创建的（账本）状态是与其他chaincode互相隔离的，故而不能被其他chaincode直接访问。
              不过，如果是在相同的网络中，一段chiancode在获取相应许可后则可以调用其他chiancode来访问它的账本
            </p>
            <h2>Chaincode API</h2>
            <p>
              每个chaincode程序都必须实现 chiancode接口 ，接口中的方法会在响应传来的交易时被调用。
            </p>
            <p>
              特别地，Init（初始化）方法会在chaincode接收到instantiate（实例化）或者upgrade(升级)交易时被调用，
              进而使得chaincode顺利执行必要的初始化操作，包括初始化应用的状态；Invoke（调用）方法会在响应invoke（调用）交易时被调用以执行交易。
            </p>
            <p>
              其他chaincode shim APIs中的接口被称为chaincode存根接口，用于访问及修改账本，并实现chaincode之间的互相调用。
            </p>
            <h2>Chaincode Interface</h2>
            <p>
              对于每一个chaincode，它都会实现预定义的chaincode接口，特别是Init和Invoke函数接口。
            </p>
            <p>
              所以我们首先为我们的chaincode引入必要的依赖。我们将在此引入chaincode shim package和peer protobuf package。
            </p>
            <img src="../../../../static/images/package.png" alt="">
            <p>
              预定义的chaincode接口
            </p>
            <img src="../../../../static/images/ccinterface.png" alt="">
            <h5>init</h5>
            <p style="color:008000">
              值得留意的是chaincode升级同样会调用该函数。当我们编写的chaincode会升级现有chaincode时，需要确保适当修正Init函数。
            </p>
            <p>
              特别地，如果没有“迁移”操作或其他需要在升级中初始化的东西，那么就提供一个空的“Init”方法。
            </p>
            <h5>Invoke</h5>
            <p>
              Invoke函数所需的传入参数正是应用想要调用的chaincode的名称。在我们的例子中，
              我们的应用只有两个简单的功能函数：pet和get;前者允许对资产的数值进行设定;后者允许获取当前资产的状态。
            </p>
            <h5>SimpleChaincode</h5>
            <img src="../../../../static/images/simplechaincode.png" alt="">
            <h5>Chaincode管理</h5>
            <p>
              实现EBaaS平台链码管理，多部门协同合作，实现链码上线审核，下线链码、上线链码等功能
            </p>
            <p>
              在SimpleChaincode中增加属性Rabbit，类型为chaincode.RabbitChaincode
            </p>
            <p>
              chaincode.RabbitChaincode实现了链码状态、审核、拒审、下线、重新上线等功能，如下图所示：
            </p>
            <img src="../../../../static/images/managercc.png" alt="">
            <p>
              Init函数的第一个参数为方法名init，第二个参数为审核链码的组织ID(mspid),第三个参数为安装或者升级说明。
            </p>
            <p>
              Invoke函数实现了，审核、拒审、下线、重新上线、获取状态、获取历史审核记录等功能
            </p>
            <p>
              使用方法：
            </p>
            <p>
              在simpleChaincode的Struct中继承RabbitChaincode,如下图所示：
            </p>
            <img src="../../../../static/images/rabbitcc.png" alt="">
            <p>
              在Init方法添加如下方法：
            </p>
            <img src="../../../../static/images/init.png" alt="">
            <p>
              在Invoke方法添加如下方法：
            </p>
            <img src="../../../../static/images/invoke.png" alt="">
            <p style="color:#cd5c5c">
              注意：在SimpleChaincode的invoke方法中不能使用默认的function名字，比如review、refused、offline、status、reonline、reviewhistory
            </p>
            <h2>链码开发注意事项：</h2>
            <p>
              链码的输入和输出需保持一致，否则其他peer无法校验，交易无效，注意一下几点
            </p>
            <p>
              1、在链码内部不适用uuid，不使用随机数
            </p>
            <p>
              2、在链码内部不使用机器时间，改为使用GetTxTimestamp获取交易时间
            </p>
            <p>
              3、尽量不要使用http或者其他方式获取外部数据，由于http等不稳定性，以及获取数据是否一致，会造成交易校验失败
            </p>
            <h2>链和链码</h2>
            <h5>1、创建链配置文件命令</h5>
            <p>
              configtxgen -profile SampleSingleMSPChannel -outputCreateChannelTx ./syschannel.tx -channelID syschannel
            </p>
            <p>
              SampleSingleMSPChannel为configtx.yaml中profiles中的配置
            </p>
            <p>
              ./syschannel.tx为输出的channel配置文件
            </p>
            <p>
              syschannel为channel的ID
            </p>
            <h5>2、创建链的创世块</h5>
            <p>
              CORE_PEER_MSPCONFIGPATH=crypto-config/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp
              ./peer channel create -c syschannel -f syschannel.tx -o orderer.rabbit.com:7050
            </p>
            <p>
              CORE_PEER_MSPCONFIGPATH=crypto-config/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp为组织的管理员msp路径
            </p>
            <p>
              -o orderer.rabbit.com:7050为发送的orderer服务器地址
            </p>
            <h5>3、加入链</h5>
            <p>
              CORE_PEER_MSPCONFIGPATH=crypto-config/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp ./peer channel join -b ./syschannel.block -o orderer.rabbit.com:7050
            </p>
            <p>
              ./syschannel.block为第二步生成的创世块
            </p>
            <h5>4、安装链码</h5>
            <p>
              CORE_PEER_MSPCONFIGPATH=crypto-config/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp ./peer chaincode install
              -n example -v 1.0 -p gitlab.com/jaderabbit/go-rabbit/chaincode/example
            </p>
            <p>
              -n example为链码名称
            </p>
            <p>
              -v 1.0为链码版本号
            </p>
            <p>
              -p gitlab.com/jaderabbit/go-rabbit/chaincode/example为链码源码
            </p>
            <h5>5、初始化链码</h5>
            <p>
              CORE_PEER_MSPCONFIGPATH=crypto-config/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp ./peer chaincode
              instantiate -C syschannel -n example -v 1.0 -c '{"Args":["init","Org1MSP","install asset chaincode"]}' -o orderer.rabbit.com:7050
            </p>
            <p>
              -c '{"Args":["init","Org1MSP","install asset chaincode"]}'为初始化链码参数
            </p>
            <h5>6、审核链码</h5>
            <p>
              ./peer chaincode invoke -C syschannel -n example -c '{"Args":["review", "shenhetongguo"]}' -o orderer.rabbit.com:7050
            </p>
            <h5>7、执行链码</h5>
            <p>
              ./peer chaincode invoke -C syschannel -n example -c '{"Args":["put", "rabbit", "gogogo"]}' -o orderer.rabbit.com:7050
            </p>
            <h5>8、查询数据</h5>
            <p>
              ./peer chaincode invoke -C syschannel -n example -c '{"Args":["get", "rabbit"]}' -o orderer.rabbit.com:7050
            </p>
            <h5>9、链码状态</h5>
            <p>
              ./peer chaincode invoke -C syschannel -n example -c '{"Args":["status"]}' -o orderer.rabbit.com:7050
            </p>
            <h5>10、链码下线</h5>
            <p>
              ./peer chaincode invoke -C syschannel -n example -c '{"Args":["offline","xiaxianbeizhu"]}' -o orderer.rabbit.com:7050
            </p>
            <h5>11、链码重新上线</h5>
            <p>
              ./peer chaincode invoke -C syschannel -n example -c '{"Args":["reonline"]}' -o orderer.rabbit.com:7050
            </p>
            <h5>11、链码拒审</h5>
            <p>
              ./peer chaincode invoke -C syschannel -n example -c '{"Args":["refused","jushenliyou"]}' -o orderer.rabbit.com:7050
            </p>
          </div>

        </div>
   </div>
</div>
</template>

<script>
export default {
  name: 'development',
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
 
  .dev_banner{
    widows: 90%;
    /* height: 500px; */
    margin: 3% 5% 0;
    padding-bottom: 30px
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
  .dev_down{
    width: 100%;
    /* height: 400px; */
    /* background: skyblue; */
    margin-top: 30px;
    z-index: -10;
  }
  .dev_down .dev_head{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 50px;
    background: #323232;
    border-radius: 8px 8px 0 0;
  }
  .dev_down .dev_head>span{
    position: absolute;
    display: block;
    width: 96%;
    height: 24px;
    top: 13px;
    left: 2%;
    background: red;
    background: url('../../../../static/images/create.png') no-repeat;
    font-size: 14px;
    color: #70EDEA;
    box-sizing: border-box;
    line-height: 24px;
    padding-left: 32px;
  }
  .dev_down table{
    width: 100%;
    height: 100px;
    background: #ccc;
  }
  .dev_content{
    box-sizing: border-box;
    padding: 20px 30px;
    width: 100%;
    background: #F8F8F8;
    font-size: 13px;
    line-height: 40px;
    border-left: 3px solid #323232;
    border-right: 3px solid #323232;
    border-bottom: 1px solid #323232;
  }
  .dev_content p{
    line-height: 50px;
  }
  .dev_content p:nth-of-type(4),
  .dev_content p:nth-of-type(6),
  .dev_content p:nth-of-type(13),
  .dev_content p:nth-of-type(32),
  .dev_content p:nth-of-type(35),
  .dev_content p:nth-of-type(37),
  .dev_content p:nth-of-type(41){
    line-height: 20px;
  }
  .dev_content h1 p:nth-of-type(2),
  .dev_content h1 p:nth-of-type(4){
    line-height: 20px;
    margin: 10px 0;
  }
  .dev_content h1{
    font-size: 25px;
    margin: 10px 0;
  }
  .dev_content h2{
    font-size: 23px;
    margin: 10px 0;
  }
  .dev_content h5{
    font-size: 17px;
    margin: 10px 0;
  }

</style>
