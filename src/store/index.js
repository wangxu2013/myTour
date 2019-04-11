import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    count:0,
    city:'北京'
  },
  mutations:{
    checkCity(state,name){
      this.state.city = name
    }
  }

})

export default store
