import Vue from 'vue'
import App from './App'
import router from './router'
import VueWechatTitle from 'vue-wechat-title'
import { 
  Table,
  TableColumn
 } from 'element-ui'
Vue.use(VueWechatTitle)

Vue.use(Table)
Vue.use(TableColumn)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
