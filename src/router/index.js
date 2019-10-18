import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import nav_list from '@/components/maintenance/nav_list'
import home from '@/components/maintenance/home/home'
import link from '@/components/maintenance/link/link'
import work from '@/components/maintenance/work/work'
import node_management from '@/components/maintenance/cog/node_management'
import white from '@/components/maintenance/cog/white'
import black from '@/components/maintenance/cog/black'
import algorithm from '@/components/maintenance/cog/algorithm'
import encyclopedias from '@/components/maintenance/cog/encyclopedias'
import development from '@/components/maintenance/cog/development'
import news from '@/components/maintenance/news/news'
import user_manage from '@/components/maintenance/user_manage/user_manage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'index',
      component: index,
    },
    {
      path: '/maintenance',
      name: 'nav_list',
      component: nav_list,
      children:[{
        path: "home",
        component: home,
        meta:{
          title: "易链EBaaS - 运维主页"
        },
        
      },{
        path: "link",
        component: link,
        meta:{
          title: "易链EBaaS - 业务链管理"
        },
      },{
        path: "work",
        component: work,
        meta:{
          title: "易链EBaaS - 业务管理"
        },
      },{
        path: "node_management",
        component: node_management,
        meta:{
          title: "易链EbaaS - 节点管理"
        },
      },{
        path: "white",
        component: white,
        meta:{
          title: "易链EbaaS - 白名单"
        },
      },{
        path: "black",
        component: black,
        meta:{
          title: "易链EbaaS - 黑名单"
        },
      },{
        path: "algorithm",
        component: algorithm,
        meta:{
          title: "易链EbaaS - 链码打包、安装、升级说明"
        },
      },{
        path: "encyclopedias",
        component: encyclopedias,
        meta:{
          title: "易链EbaaS - 区块链百科"
        },
      },{
        path: "development",
        component: development,
        meta:{
          title: "易链EbaaS - 开发手册"
        },
      },{
        path: "news",
        component: news,
        meta:{
          title: "易链EbaaS - 业务员主页"
        },
      },{
        path: "user_manage",
        component: user_manage,
        meta:{
          title: "易链EbaaS - 用户管理"
        },
      }]
    }
  ]
})
