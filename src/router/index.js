import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/talks',
    name: 'talks',
    component: () => import(/* webpackChunkName: "talks" */ '../views/Talks/Talks.vue'),
  },
  {
    path: '/talks/:id',
    name: 'talk',
    component: () => import(/* webpackChunkName: "talk" */ '../views/Talk/Talk.vue'),
  },
  {
    path: '/occupations',
    name: 'occupations',
    component: () => import(/* webpackChunkName: "occupations" */ '../views/Occupations/Occupations.vue'),
  },
  {
    path: '/occupations/:slug',
    name: 'occupation',
    component: () => import(/* webpackChunkName: "occupation" */ '../views/Occupation/Occupation.vue'),
  },
  {
    path: '/tests',
    name: 'tests',
    component: () => import(/* webpackChunkName: "occupation" */ '../views/Tests/Tests.vue'),
  },
  {
    path: '/results',
    name: 'results',
    component: () => import('../views/Tests/Result.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
