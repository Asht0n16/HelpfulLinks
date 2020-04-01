import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mockPics from './assets/MOCK_DATA1.json'

Vue.config.productionTip = false

let data = {
  funLinks: [],
  workLinks: [],
  schoolLinks: [],
  otherLinks: [],
  pictures: mockPics
}

new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')
