<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    export default {
      name: "homeSwiper",
      props:{
        swiperList:Array
      },
      data() {
        return {
          swiperOption: {
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            loop:true // 循环模式选项
          }
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet{ //样式穿透
    background :#fff

  }
  .wrapper{
    position:relative;
    z-index :0
    width:100%
    .swiper-img{
      width:100%
    }
  }


</style>
