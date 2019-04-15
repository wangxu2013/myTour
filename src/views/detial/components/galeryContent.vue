<template>
    <div class="gelary-content">
      <img v-for="item,key in imgList[index][index]" :src="item.imgUrl" class="imgList" @click="showImg(key)">
      <div class="imgSwiper" v-show="showImgSwiper">
        <p>
          {{myIndex}}/{{imgList[index][index].length}}
        </p>
        <swiper :options="swiperOption" class="swiper" ref="mySwiper" @slideChange="getIndex">
          <!-- slides -->
          <swiper-slide v-for="(item,index) in imgList[index][index]" :key="item.index">
            <img class="swiper-img" :src="item.imgUrl"/>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <div class="close" @click="hideImg">X</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "galeryContent",
      props:{
        imgList:Array
      },
      data(){
          return{
            myIndex:1,
            showImgSwiper:false,
            swiperOption:{
              loop:false
            }
          }
      },
      computed:{
        index(){
          return this.$store.state.index // 获取store中点击的是哪个ly-tab项
        }
      },
      methods:{
          getIndex(){ // @slideChange事件当slide发生改变时调用该方法
            //this.$refs.mySwiper.swiper.activeIndex获取swiper的activeIndex
            this.myIndex = this.$refs.mySwiper.swiper.activeIndex + 1
          },
        showImg(key){ // 显示imgSwiper
          this.$refs.mySwiper.swiper.activeIndex=key //activeIndex设置为点击图片的index
          this.myIndex=key+1 // 修改上面显示的当前是第几张图片
          this.showImgSwiper = true // 显示imgSwiper
        },
        hideImg(){
          this.showImgSwiper = false // 隐藏imgSwiper
        }
      }
    }
</script>

<style lang="stylus" scoped>
.gelary-content
  position absolute
  padding .2rem
  margin-right -.2rem
  .imgList
    width 50%
    box-sizing border-box
    padding-right .2rem
    padding-bottom .2rem
  .imgSwiper
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background #000
    p
      position absolute
      top .8rem
      width 100%
      color #fff
      text-align center
      padding .5rem
      box-sizing border-box
    .swiper
      width 100%
      top 50%
      transform translate(0,-50%)
      img
        width 100%
    .close
      color #fff
      position absolute
      width 100%
      bottom 0
      text-align center
      padding .5rem
      box-sizing border-box
</style>
