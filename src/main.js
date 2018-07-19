import "normalize.css/normalize.css";

import Vue from 'vue'
import App from './App.vue'

import Card from './components/Card.vue'
import Tabs from './components/Tabs.vue'

import router from './router'
import store  from './store'

Vue.config.productionTip = false

Vue.component('card', Card)
Vue.component('tabs', Tabs)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
