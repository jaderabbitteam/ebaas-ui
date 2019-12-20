import Vue from 'vue'
import App from './App'
import router from './router'
import VueWechatTitle from 'vue-wechat-title'
import axios from 'axios'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(VueWechatTitle)
Vue.prototype.$axios = axios

Vue.use(ElementUi)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
