import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/login',  //登录页
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/home',  //布局页
    name: 'home',
    meta:{title:'首页'},
    redirect:'/index',
    component: () => import('../views/home/index.vue'),
    children:[
      {
        path: '/index',  //首页
        name: 'index',
        meta:{title:'首页'},
        component: () => import('../views/home/index/index.vue')
      },
      {
        path: '/stats',  //数据管理
        name: 'stats',
        meta:{title:'数据管理'},
        component: () => import('../views/home/stats/index.vue')
      },
      {
        path: '/wms',  //信息管理
        name: 'wms',
        meta:{title:'信息管理'},
        component: () => import('../views/home/wms/index.vue'),
        children:[
          {
            path: '/wms/list',  //信息列表
            name: 'wmsList',
            meta:{title:'信息列表'},
            component: () => import('../views/home/wms/list.vue')
          },
        ]
      },
      {
        path: '/user',  //用户管理
        name: 'user',
        meta:{title:'用户管理'},
        component: () => import('../views/home/user/index.vue'),
        children:[
          {
            path: '/user/stats',  //用户统计
            name: 'userStats',
            meta:{title:'用户统计'},
            component: () => import('../views/home/user/stats.vue')
          },
          {
            path: '/user/role',  //角色统计
            name: 'userRole',
            meta:{title:'角色统计'},
            component: () => import('../views/home/user/role.vue')
          },
        ]
      }
    ]
  },
 
]

const router = new VueRouter({
  routes
})

export default router
