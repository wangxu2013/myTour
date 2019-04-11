<template>
    <div>
      <div class="loading" v-show="showLoding">努力加载中...</div>
      <location-header></location-header>
      <location-list :place="place":hotCities="hotCities" :cities="cities"></location-list>
      <location-alphabet @changePlace="changePlace":alphabetList="alphabetList"></location-alphabet>
    </div>
</template>

<script>
  import axios from 'axios'
  import locationHeader from './components/locationHeader'
  import locationList from './components/locationList'
  import locationAlphabet from './components/locationAlphabet'
    export default {
        name: "Location",
      data(){
          return{
            place: '',
            alphabetList:[],
            cities:{},
            hotCities:[],
            showLoding:true
          }
      },
      components:{
        locationHeader,
        locationList,
        locationAlphabet
      },
      mounted(){
          this.getLocationData()
      },
      methods:{
        changePlace(text){
          this.place = text
        },
        getLocationData(){
          axios.get('/api/city.json') // 发起数据请求
            .then(this.getLocationDataSuccess) // 请求成功跳转成功函数
        },
        getLocationDataSuccess(res){ // 数据请求成功函数
          //console.log(res)
          const result = res.data
          if(result.data){
            this.showLoding=false // 数据请求成功则将加载隐藏
            const data = result.data
            this.alphabetList = data.alphabetList
            this.cities = data.cities
            this.hotCities = data.hotCities
          }
        }
      }
    }
</script>

<style lang="stylus" scoped>
.loading
  background #333
  color #ffffff
  border-radius 5px
  position fixed
  padding .3rem
  top 50%
  left 50%
  transform translate(-50%,-50%)
</style>
