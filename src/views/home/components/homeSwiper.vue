<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in headImg" :key="item.id">
        <img class="swiper-img" :src="item.url"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    export default {
      name: "homeSwiper",
      data() {
        return {
          headImg:[
            {id:'001',url:'https://pic5.40017.cn/01/000/31/71/rBANC1sy7-iAaElXAADxiWL4LPo263_520x218_00.jpg'},
            {id:'002',url:'https://pic5.40017.cn/03/000/74/c0/rBANB1yA6KqAN_r4AAMb_cFjfB4749_520x218_00.jpg'},
            {id:'003',url:'https://pic5.40017.cn/03/000/e6/fa/rBANB1ybSOSAH-ffAAF-qQMYCa8154_520x218_00.jpg'}
          ],
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
