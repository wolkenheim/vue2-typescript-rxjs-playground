import { testState } from './test-state'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

testState.next(3);
testState.next(4);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
