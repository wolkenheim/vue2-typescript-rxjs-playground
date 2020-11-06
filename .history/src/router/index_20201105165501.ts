import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import BriefingList from '../components/BriefingList.vue';
import BriefingDetail from '../components/BriefingDetail.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'BriefingList',
    component: BriefingList
  },
  {
    path: '/briefing/:briefingId',
    name: 'BriefingDetail',
    component: BriefingDetail,
    props(route:) {
      return {
        briefingId: parseInt(route.params.briefingId as string)
      }
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
