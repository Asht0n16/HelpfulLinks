import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateLink from '../views/createLink.vue'
import CreateSection from "../views/createSection.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createLink',
    name: 'CreateLink',
    component: CreateLink
  },
  {
    path: '/createSection',
    name: 'CreateSection',
    component: CreateSection
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
