<template>
    <div class="detial-header">
      <div class="header-left" @click="back">
        <span class="iconfont">&#xe68b;</span>
      </div>
      <div class="header-center">
        景点+酒店
      </div>
      <div class="header-right" @click="showSecond">
        <span class="iconfont">&#xe64d;</span>
      </div>
      <transition v-if="secondShow">
        <ul class="second-list">
          <li @click="changePageTo"><span class="iconfont">&#xe70a;</span>首页</li>
          <li><span class="iconfont">&#xe70a;</span>我的同程</li>
          <li><span class="iconfont">&#xe70a;</span>登录/注册</li>
        </ul>
      </transition>
    </div>
</template>

<script>
    export default {
        name: "detialHeader",
      data(){
        return{
          secondShow:false
        }
      },
      methods:{
          back(){
            this.$router.go(-1)
          },
        showSecond(){
            this.secondShow=!this.secondShow
          console.log(this.secondShow)
        },
        changePageTo(){
            this.secondShow=false
            this.$router.push('/')
        }
      }
    }
</script>

<style lang="stylus" scoped>
.detial-header
  position fixed
  z-index 2
  width 100%
  background #ffffff
  display flex
  .header-left
    padding-left .4rem
    color #23beae
    line-height .8rem
  .header-center
    text-align center
    flex 1
    color #333
    font-size .35rem
    font-weight bold
    line-height .8rem
  .header-right
    padding-right .4rem
    color #23beae
    line-height .8rem
  .second-list
    position fixed
    background #888
    right .2rem
    top .8rem
    padding .2rem
    border-radius .1rem
    &:before
      content ''
      width 0
      height 0
      border .2rem solid
      position absolute
      margin-top -.55rem
      right .2rem
      border-color transparent transparent #888 transparent
    li
      color #fff
      line-height .5rem
      span
        margin-right .1rem
</style>
