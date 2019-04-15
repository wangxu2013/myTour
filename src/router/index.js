import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Location from '@/views/location/Location'
import Detial from '@/views/detial/Detial'
import detialGalery from '@/views/detial/components/detialGalery'
import Map from '@/views/detial/components/Map'

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
    },
    {
      path: '/detial/:id',
      name: 'Detial',
      component: Detial,
      children:[
        {
          path:'galery',
          component: detialGalery
        },
        {
          path:'map',
          component: Map
        }
      ]
    }
  ]
})
