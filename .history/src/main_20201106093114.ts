import { testState } from './test-state'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

testState.next(3);

for (let i = 1; i < 100; i++) {
  testState.next(i);
}


testState.subscribe((state) => {
  console.log("state in main", state);
});

testState.next(5);

setTimeout(() => {

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}, 500)

