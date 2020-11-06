import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import BriefingList from '../components/BriefingList.vue';
import BriefingDetail from '../components/BriefingDetail.vue';
import BriefingListTwo from '../components/BriefingListTwo.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'BriefingList',
    component: BriefingList
  },
  {
    path: '/two',
    name: 'BriefingListTwo',
    component: BriefingListTwo
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