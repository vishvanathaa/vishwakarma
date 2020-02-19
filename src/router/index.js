import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import ConfirmationAdd from '../views/ConfirmationAdd.vue'
import Health from '../views/Health.vue'
import Education from '../views/Education.vue'
import ZodiacSign from '../views/ZodiacSign.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/Health',
    name: 'Health',
    component: Health
  },
  {
    path: '/Education',
    name: 'Education',
    component: Education
  },
  {
    path: '/ZodiacSign/:id',
    name: 'ZodiacSign',
    component: ZodiacSign
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    props: true,
    meta: {
      reload: true,
    }
  },
  {
    path: '/ConfirmationAdd',
    name: 'ConfirmationAdd',
    component: ConfirmationAdd,
    props: true,
    meta: {
      reload: true,
    }
  },
  {
    path: '/Dashboard/:id',
    name: 'DashboardRefresh',
    component: Dashboard,
    props: true,
    meta: {
      reload: true,
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
