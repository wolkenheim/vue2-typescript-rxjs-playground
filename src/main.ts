import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { repositoryFactory } from './repository-factory';
import { UserRepository } from './user-repository';

const userRepo: UserRepository = repositoryFactory.getRepository('user');

const firstUser = { id: 3, name: "max" };
userRepo.state = firstUser;

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')