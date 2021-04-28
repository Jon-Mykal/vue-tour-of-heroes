import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HeroList from '../views/HeroList.vue'
import Dashboard from '../views/Dashboard.vue'
import HeroDetails from '../views/HeroDetails.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/heroes',
    name: 'HeroList',
    component: HeroList
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/heroes/:id',
    name: 'HeroDetails',
    component: HeroDetails,
    props: (route) => {
      // Props function mode to transform the parameter to number. 
      let heroId = route.params.id as string;
      return {
        id: parseInt(heroId)
      }
    }
  },
  {
    path: '',
    redirect: '/dashboard'
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
