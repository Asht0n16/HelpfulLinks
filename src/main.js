import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let data = {
  funLinks: [],
  workLinks: [],
  schoolLinks: [],
  otherLinks: []
}

new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')
