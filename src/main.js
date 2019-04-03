// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/assets/style/border.css'
import '@/assets/style/reset.css'
import '@/assets/style/iconfont/iconfont.css'

import fastClick from 'fastclick'

import VueAwesomeSwiper from 'vue-awesome-swiper' /* swiper插件 */
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

fastClick.attach(document.body) // 使用fastclick

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
