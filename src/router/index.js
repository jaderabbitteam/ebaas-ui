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
      },{
        path: "link",
        component: link,
      },{
        path: "work",
        component: work,
      },{
        path: "node_management",
        component: node_management,
      },{
        path: "white",
        component: white,
      },{
        path: "black",
        component: black,
      },{
        path: "algorithm",
        component: algorithm,
      },{
        path: "encyclopedias",
        component: encyclopedias,
      },{
        path: "development",
        component: development,
      },{
        path: "news",
        component: news,
      },{
        path: "user_manage",
        component: user_manage,
      }]
    }
  ]
})
