// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/assets/style/border.css'
import '@/assets/style/reset.css'
import '@/assets/style/iconfont/iconfont.css'
import 'mint-ui/lib/style.css' // 引入mint-ui的css

import fastClick from 'fastclick'

import VueAwesomeSwiper from 'vue-awesome-swiper' /* swiper插件 */
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import LyTab from 'ly-tab' // ly-tab插件
Vue.use(LyTab)

import BMap from 'BMap' // 百度地图

Vue.config.productionTip = false

fastClick.attach(document.body) // 使用fastclick

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted() {
    let map = new BMap.Map('allmap') // 创建地图
    let myCity= new BMap.LocalCity() // 创建本地城市
    myCity.get(res => {
      if(res){
        // console.log(res.name)
        this.$store.state.city = res.name // 初始化数据仓库的city值
      }else{
        this.$store.state.city ='北京' // 没获取到显示‘北京’
      }
    })
  }
})
