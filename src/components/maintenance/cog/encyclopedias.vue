<template>
<div class="home_body">
   <div class="banner">

        <div class="down">
          <div class="head">
            <span>
              共识算法
            </span>
          </div>
          <div class="algorithm_content">
            <h1>区块链</h1>
            <p>区块链是分布式数据存储、点对点传输、共识机制、加密算法等计算机技术的新型应用模式。</p>
            <p>
              区块链（Blockchain），是比特币的一个重要概念，它本质上是一个去中心化的数据库，同时作为比特币的底层技术，
              是一串使用密码学方法相关联产生的数据块，每一个数据块中包含了一批次比特币网络交易的信息，
              用于验证其信息的有效性（防伪）和生成下一个区块。
            </p>
            <p style="color:#008000">
              狭义来讲，区块链是一种按照时间顺序将数据区块以顺序相连的方式组合成的一种链式数据结构， 
              并以密码学方式保证的不可篡改和不可伪造的分布式账本。
            </p>
            <p>
              广义来讲，区块链技术是利用块链式数据结构来验证与存储数据、利用分布式节点共识算法来生成和更新数据、
              利用密码学的方式保证数据传输和访问的安全、利用由自动化脚本代码组成的智能合约来编程和操作数据的一种全新的分布式基础架构与计算方式。
            </p>
            <p>
              区块链主要解决交易的信任和安全问题。
            </p>
            <h2>区块</h2>
            <p>区块是区块链的基本组成部分，每一个区块包含交易和区块头，区块头包含区块hash和前一个区块hash，
              像一条链一样能够把区块串联起来，组成块链式数据结构，形成一条区块链在一个通道上，
              （区块是）一组有序交易的集合。区块往往通过密码学手段（Hash 值）连接到前导区块。
            </p>
            <h2>交易</h2>
            <p>
              交易是区块链中区块的基本组成部分，侠义来讲，交易是一笔转账交易，广义来讲，交易是一个动作，比如数据上链、数据更新等
            </p>
            <p>
              侠义来讲，交易是一笔转账交易
            </p>
            <p style="color:#008000">
              广义来讲，交易是一个动作，比如数据上链、数据更新等
            </p>
            <h2>公链、私有链、联盟链</h2>
            <p>
              公链，顾名思义，从字面上理解，就是“公有”，它是指对全世界所有人开放的，任何人都可以读取数据、发送交易且交易能够获得有效确认的共识区块链。
            </p>
            <p>
              私有链，也称专有链。它是一条非公开的“链”，通常情况，需要授权才能加入节点。
              而且私有链中各个节点的写入权限皆被严格控制，读取权限则可视需求有选择性地对外开放。
            </p>
            <p style="color:#008000">
              联盟链是指由多个机构共同参与管理的区块链，每个组织或机构管理一个或多个节点，其数据只允许系统内不同的机构进行读写和发送。
            </p>
            <h2>共识算法</h2>
            <p>
              共识算法是构筑区块链信任特性的基础，简单理解就是指大家达成一致的意思，在区块链中，通过共识算法完成对交易的验证和确认。
            </p>
            <p>
              工作量证明机制(POW):通过计算符合某一个比特币区块头的哈希散列值争夺记账权。这个过程需要通过大量的计算实现，
              简单理解就是进行的计算量大（工作量大），就有大概率获得记账权权益证明机制(POS):简单理解，根据资产的多寡分配获取记账权的概率，
              类似股份公司中的股东，资产越多，获取记账的概率越大
            </p>
            <p>
              股份授权证明机制(DPOS):通过社区选举产生记账者，类似股份公司中的董事会，股东被选举成为懂事，才能获取争夺记账的权利
            </p>
            <h2>智能合约</h2>
            <p>
              基于这些可信的不可篡改的数据，可以自动化的执行一些预先定义好的规则和条款。
            </p>
            <h2>Chaincode(链码)</h2>
            <p>
              链码是fabric中的智能合约，一个运行在账本上的软件，它可以对资产进行编码，其中的交易指令（或者叫业务逻辑）也可以用来修改资产。
            </p>
            <h2>Channel(通道)</h2>
            <p style="color:#008000">
              通道相当于链，是构建在“Fabric”网络上的私有区块链，实现了数据的隔离和保密。
            </p>
            <p>
              通道特定的账本在通道中是与所有对等节点共享的，并且交易方必须通过该通道的正确验证才能与账本进行交互。通道是由一个“配置块”来定义的。
            </p>
            <h2>Peer(节点)</h2>
            <p>
              peer是fabric网络的基本组成部分，一个网络实体，维护ledger并运行Chaincode容器来对ledger执行read-write操作
            </p>
            <p>
              侠义来讲，一个peer相当于一个运行区块链服务的服务器
            </p>
          </div>

        </div>
   </div>
</div>
</template>

<script>
export default {
  name: 'encyclopedias',
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

<style scode>
  .home_body{
    background: #ECECEC;
  }
  .banner{
    widows: 90%;
    height: 500px;
    margin: 3% 5%;
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
  .down{
    width: 100%;
    height: 400px;
    /* background: skyblue; */
    margin-top: 30px;
    z-index: -10;
  }
  .down .head{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 50px;
    background: #323232;
    border-radius: 8px 8px 0 0;
  }
  .down .head>span{
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
  .down table{
    width: 100%;
    height: 100px;
    background: #ccc;
  }
  .algorithm_content{
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
  .algorithm_content p{
    line-height: 45px;
  }
  .algorithm_content p:nth-of-type(2),
  .algorithm_content p:nth-of-type(4){
    line-height: 20px;
    margin: 10px 0;
  }
  .algorithm_content h1{
    font-size: 25px;
    margin: 10px 0;
  }
  .algorithm_content h2{
    font-size: 23px;
    margin: 10px 0;
}

</style>
