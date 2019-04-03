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
            {id:'001',url:'http://hbimg.b0.upaiyun.com/faca12c5215abdadaef8ff79d5f78ca00f7e3b9423aaa-AeFkLd_fw658'},
            {id:'002',url:'http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg'},
            {id:'003',url:'http://pic69.nipic.com/file/20150608/9252150_134415115986_2.jpg'}
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
    position:absolute
    z-index :0
    width:100%
    .swiper-img{
      width:100%
      height:300px
    }
  }


</style>
