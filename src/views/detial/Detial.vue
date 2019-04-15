<template>
    <div>
      <detial-header></detial-header>
      <detial-swiper :swiperList="swiperList" :id="id"></detial-swiper>
      <detial-map></detial-map>
      <router-view :addressList="addressList" :galaryList="galaryList" :imgList="imgList"></router-view>
    </div>
</template>

<script>
  import axios from 'axios'
  import detialHeader from './components/detialHeader'
  import detialSwiper from './components/detialSwiper'
  import detialMap from './components/detialMap'
    export default {
        name: "Detial",
      data(){
          return{
            id:'',
            addressList:[],
            galaryList:[],
            imgList:[],
            swiperList:[]
          }
      },
      components:{
        detialHeader,
        detialSwiper,
        detialMap
      },
      mounted(){
        this.getDetialData()
        //console.log(this.$router.history.current.fullPath)
        let url= this.$router.history.current.fullPath
        //console.log(url.split('/'))
        this.id=url.split('/')[url.split('/').length-1]
        ///console.log(this.id)
      },
      methods:{
        getDetialData(){
          axios.get('/api/detail.json')
            .then(this.getDetailDataSuccess)
        },
        getDetailDataSuccess(res){
          //console.log(res)
          const result=res.data
          if(result.data){
            const data=result.data
            this.addressList=data.addressList
            this.galaryList=data.galaryList
            this.imgList=data.imgList
            this.swiperList=data.swiperList
            //console.log(this.swiperList)
          }
        }
      }
    }
</script>

<style scoped>

</style>
