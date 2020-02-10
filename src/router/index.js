import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import ConfirmationAdd from '../views/ConfirmationAdd.vue'
import Visa from '../views/Visa.vue'
import Career from '../views/Career.vue'
import Money from '../views/Money.vue'
import Foreigntravel from '../views/Foreigntravel.vue'
import Health from '../views/Health.vue'
import Land from '../views/Land.vue'
import Relationship from '../views/Relationship.vue'
import Education from '../views/Education.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Visa',
    name: 'Visa',
    component: Visa
  },
  {
    path: '/Career',
    name: 'Career',
    component: Career
  },
  {
    path: '/Money',
    name: 'Money',
    component: Money
  },
  {
    path: '/Foreigntravel',
    name: 'Foreigntravel',
    component: Foreigntravel
  },
  {
    path: '/Health',
    name: 'Health',
    component: Health
  },
  {
    path: '/Land',
    name: 'Land',
    component: Land
  },
  {
    path: '/Relationship',
    name: 'Relationship',
    component: Relationship
  },
  {
    path: '/Education',
    name: 'Education',
    component: Education
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
