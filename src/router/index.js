import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import list from '@/components/maintenance/nav_list'
import home from '@/components/maintenance/home/home'
import link from '@/components/maintenance/link/link'
import work from '@/components/maintenance/work/work'
import management from '@/components/maintenance/cog/node_management'
import white from '@/components/maintenance/cog/white'
import black from '@/components/maintenance/cog/black'
import algorithm from '@/components/maintenance/cog/algorithm'
import encyclopedias from '@/components/maintenance/cog/encyclopedias'
import development from '@/components/maintenance/cog/development'
import news from '@/components/maintenance/news/news'
import manage from '@/components/maintenance/user_manage/user_manage'
import link_info from '@/components/maintenance/home/link_info/link_info'
import algorithm_introduction from '@/components/maintenance/cog/algorithm_introduction/algorithm_introduction'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/maintenance',
      name: 'nav_list',
      component: list,
      redirect: '/maintenance/home',
      children: [{
        path: 'home',
        component: home,
        meta: {
          title: 'EBaaS - 运维主页'
        }
      }, {
        path: 'link',
        component: link,
        meta: {
          title: 'EBaaS - 业务链管理'
        }
      }, {
        path: 'work',
        component: work,
        meta: {
          title: 'EBaaS - 业务管理'
        }
      }, {
        path: 'node_management',
        component: management,
        meta: {
          title: 'EBaaS - 节点管理'
        }
      }, {
        path: 'white',
        component: white,
        meta: {
          title: 'EBaaS - 白名单'
        }
      }, {
        path: 'black',
        component: black,
        meta: {
          title: 'EBaaS - 黑名单'
        }
      }, {
        path: 'algorithm',
        component: algorithm,
        meta: {
          title: 'EBaaS - 链码打包、安装、升级说明'
        }
      }, {
        path: 'encyclopedias',
        component: encyclopedias,
        meta: {
          title: 'EBaaS - 区块链百科'
        }
      }, {
        path: 'development',
        component: development,
        meta: {
          title: 'EBaaS - 开发手册'
        }
      }, {
        path: 'news',
        component: news,
        meta: {
          title: 'EBaaS - 业务员主页'
        }
      }, {
        path: 'user_manage',
        component: manage,
        meta: {
          title: 'EBaaS - 用户管理'
        }
      }, {
        path: 'link_info',
        component: link_info,
        name:'link_info',
        meta: {
          title: 'EBaaS - 业务链管理'
        }
      }, {
        path: 'algorithm_introduction',
        component: algorithm_introduction,
        meta: {
          title: 'EBaaS - 共识算法介绍'
        }
      }]
    }
  ]
})
