import Vue from 'vue'
import App from './App.vue'

import './plugins/bootstrap-install'
import './plugins/axios'
import './plugins/notifications'
import router from './plugins/router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')