import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import ConfirmationAdd from '../views/ConfirmationAdd.vue'
import Health from '../views/Health.vue'
import Education from '../views/Education.vue'
import ZodiacSign from '../views/ZodiacSign.vue'
import Research from '@/views/Research'
import ForeignTravel from '../views/Foreigntravel'
import Visa from '../views/Visa'
import Marriage from '../views/Marriage'
import Relationship from '../views/Relationship'
import Money from '../views/Money'
import Land from '../views/Land'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    props: true,
    meta: {
      reload: true,}
  },
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
    path: '/Marriage',
    name: 'Marriage',
    component: Marriage
  },
  
  {
    path: '/Relationship',
    name: 'Relationship',
    component: Relationship
  },
  {
    path: '/ZodiacSign/:id',
    name: 'ZodiacSign',
    component: ZodiacSign
  },
  {
    path : '/Money',
    name : 'Money',
    component : Money
  },
  {
    path : '/ForeignTravel',
    name : 'ForeignTravel',
    component : ForeignTravel
  },
  {
    path: '/Research',
    name: 'Research',
    component: Research
  },
  {
    path: '/Visa',
    name: 'Visa',
    component: Visa
  },
  {
    path: '/Land',
    name: 'Land',
    component: Land
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
