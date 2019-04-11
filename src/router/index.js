import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Location from '@/views/location/Location'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/location',
      name: 'Location',
      component: Location
    }
  ]
})
