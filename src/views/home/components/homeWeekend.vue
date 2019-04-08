<template>
<div class="home-weekend">
  <div class="week-title">
    <h1>//////////<span>周末出游</span>//////////</h1>
    <p>致力推荐超完美套餐</p>
  </div>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in weekImg" :key="item.id" class="week-item">
        <img class="swiper-img" :src="item.url"/>
        <h2>{{item.title}}</h2>
        <p>{{item.mes}}</p>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</div>
</template>

<script>
    export default {
        name: "homeWeekend",
      data(){
          return{
            weekImg:[
              {
                url:'https://pic5.40017.cn/01/000/7d/46/rBLkBlmJHzeAecWoAADLTfHpefI910_280x190_00.jpg',
                title:'宜兴竹海',
                mes:'踏春赏花 万亩竹海'
              },{
                url:'https://pic5.40017.cn/03/000/8c/da/rB5oQFwZtfyABsmlAABcBH79wXs668_280x190_00.jpg',
                title:'拈花湾',
                mes:'禅意假日 古韵风光'
              },{
                url:'https://pic5.40017.cn/01/000/00/9c/rBANC1vD9_GAb2qVAAD1zTnOfl0327_280x190_00.jpg',
                title:'迪士尼',
                mes:'点亮心中奇梦'
              },{
                url:'https://pic5.40017.cn/01/001/f8/b2/rBLkBlsWe--AYOxAAABvztYw1fM559_280x190_00.jpg',
                title:'东方盐湖城',
                mes:'茅山脚下的逍遥山镇'
              }
            ],
            swiperOption: {
              freeMode : true, // 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合
              spaceBetween : 10, // 在slide之间设置距离
              slidesPerView : 3 // 设置slider容器能够同时显示的slides数量
            }
          }
      }
    }
</script>

<style lang="stylus" scoped>
  .home-weekend{
    padding 10px
    box-sizing border-box
  }
.week-title{
  text-align center
  padding 20px
  color #888
  line-height 20px
  h1 {
    color #ddd
    span{
      color #000
      margin 0 10px
      font-weight bold
      font-size 16px
    }
  }
}
.week-item{
  overflow hidden
  height 0
  padding-bottom 33%
  line-height 20px
  text-align center
  border 1px solid #ddd
  box-sizing border-box
  p{
    color #ddd
  }
  img{
    width 100%
  }
}
</style>
