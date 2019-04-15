<template>
    <div class="derial-swiper">
      <router-link to="galery" append>
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide v-for="(item,index) in myswiper.images" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl"/>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </router-link>
      <div class="des">
        <div class="left">{{myswiper.date}}</div>
        <div class="center">编号：{{myswiper.number}}</div>
        <div class="right">{{myswiper.page}}张</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "detialSwiper",
      props:{
        id:String,
        swiperList:Array
      },
      computed:{
          myswiper(){
            //console.log(this.swiperList)
            this.swiperList.forEach( item => {
              //console.log(this.id)
              if(item.id===this.id){
                this.swiper=item
                //this.swiperImgs =item.images
              }
            })
            //console.log(this.swiper)
            return this.swiper
          }

      },
      data(){
          return{
            swiper:{},
            //swiperImgs:[],
            swiperOption:{
              loop:true
            }
          }
      }
    }
</script>

<style lang="stylus" scoped>
.derial-swiper
  position relative
  top .8rem
  .swiper-img
    width 100%
  .des
    position absolute
    bottom 0
    background rgba(0,0,0,0.5)
    z-index:1
    display flex
    width 100%
    color #fff
    padding .15rem
    box-sizing border-box
    .center
      flex 1
      text-align center
</style>
