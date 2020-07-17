import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Familyer from '../views/Familyer.vue'
import Layout from '../views/Layout.vue'
import Permission from '../views/Permission.vue'
import submitInfo from '../views/hanxuan/submitInfo.vue'
import teamInfo from '../views/hanxuan/teamInfo.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/familyer/index',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Layout.vue')
  },
  {
    path: '/familyer',
    title: '助理团',
    noDropMenu: true,
    redirect: '/familyer/index',
    component: Layout,
    children: [
        {
            path: 'index',
            component: Familyer
        }
    ]
},
{
  path: '/permission',
  title: '权限管理',
  noDropMenu: true,
  redirect: '/permission/index',
  component: Layout,
  children: [
      {
          path: 'index',
          component: Permission
      }
  ]
},
{
  path: '/hanxuan',
  title: '权限管理',
  noDropMenu: true,
  redirect: '/hanxuan/index',
  component: Layout,
  children: [
      {
          path: 'index',
          component: teamInfo
      },      
      {
        path: 'index2',
        component: submitInfo
    },
  ]
},
]

const router = new VueRouter({
  routes
})

export default router
