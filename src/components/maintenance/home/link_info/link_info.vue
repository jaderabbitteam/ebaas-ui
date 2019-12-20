<template>
  <div id="tab">
    <div class="tab-bar clearfix">
      <a href="javascript:;"
         @click="tab(index)"
         v-for="(item,index) in items"
         :key="index"
         :class="{active : index===curId}"
      >{{item.item}}</a>
    </div>
    <div class="tab-con">
      <div
        v-show="index===curId"
        v-for="(content, index) in contents" :key="index">{{content.content}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        curId: 0,
        items: [
          {item: '链概况'},
          {item: '节点管理'},
          {item: '成员管理'},
          {item: '交易管理'},
          {item: '动态监控'}
        ],
        contents: [
          {content: '链概况'},
          {content: '节点管理'},
          {content: '成员管理'},
          {content: '交易管理'},
          {content: '动态监控'}
        ]
      }
    },

    methods: {
      tab (index) {
        this.curId = index;
      }
    }
  }
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
    line-height: 40px;
    text-align: center;
    text-decoration: none;
    background: #323232;
    color: #70EDEA;
  }
  .tab-bar .active {
    background-color: #F8F8F6;
    color: #323232;
  }
  .tab-con div {
    text-align: left;
    height: 100px;
  }

</style>