<template>
    <div class="home">
      <home-header></home-header>
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-catalog :iconList="iconList"></home-catalog>
      <home-hot :hotContentList="hotContentList" :hotPriseList="hotPriseList" :hotTrendList="hotTrendList"></home-hot>
      <home-weekend :weekendList="weekendList"></home-weekend>
      <home-guess :guessList="guessList"></home-guess>
    </div>
</template>

<script>
  import axios from 'axios'
  import homeHeader from './components/homeHeader'
  import homeSwiper from './components/homeSwiper'
  import homeCatalog from './components/homeCatalog'
  import homeHot from './components/homeHot'
  import homeWeekend from './components/homeWeekend'
  import homeGuess from './components/homeGuess'
    export default {
        name: "Home",
      data(){
          return{
            swiperList:[],
            guessList:[],
            iconList:[],
            hotContentList:{},
            hotPriseList:{},
            hotTrendList:[],
            weekendList:[]
          }
      },
      mounted(){ // 页面加载完成后调用
          this.getHomeData() // 获取数据函数再methods里
      },
      methods:{
        getHomeData(){ // 获取数据函数
          axios.get('/api/index.json') // 发起请求
            .then(this.getHomeDataSuccess) // 成功执行getHomeDataSuccess函数
        },
        getHomeDataSuccess(res){
          //console.log(res) // 打印获取的数据信息
          const result = res.data // 本地存放数据
          if(result.data){ // 获取的数据不为空
            const data=result.data // 获取data
            //this.city=data.city
            this.swiperList=data.swiperList
            this.iconList=data.iconList
            this.guessList=data.guessList
            this.hotContentList=data.hotContentList
            this.hotPriseList=data.hotPriseList
            this.hotTrendList=data.hotTrendList
            this.weekendList=data.weekendList
          }
        }
      },
      components:{
        homeHeader,
        homeSwiper,
        homeCatalog,
        homeHot,
        homeWeekend,
        homeGuess
      }
    }
</script>

<style lang="stylus" scoped>
  .home{
    position: relative;

  }
</style>
