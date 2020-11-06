import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import BriefingList from '../components/BriefingList';
import BriefingDetail from '../components/BriefingDetail';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'BriefingList',
    component: BriefingList
  },
  {
    path: '/briefing/:briefingId',
    name: 'BriefingDetail',
    component: BriefingDetail,
    props(route) {
      return {
        briefingId: parseInt(route.params.briefingId as string)
      }
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router