import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fun from '../views/funLinks.vue'
import Work from '../views/workLinks.vue'
import School from '../views/schoolLinks.vue'
import Other from '../views/otherLinks.vue'
import Create from '../views/createLink.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/funLinks',
    name: 'Fun',
    component: Fun
  },
  {
    path: '/workLinks',
    name: 'Work',
    component: Work
  },
  {
    path: '/schoolLinks',
    name: 'School',
    component: School
  },
  {
    path: '/otherLinks',
    name: 'Other',
    component: Other
  },
  {
    path: '/createLink',
    name: 'Create',
    component: Create
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
