import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    count:0,
    city:'',
    index:0 // 存放点击的哪个ly-tab项
  },
  mutations:{
    checkCity(state,name){
      state.city = name
    }
  }

})

export default store
