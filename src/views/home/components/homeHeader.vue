<template>
    <div class="home-header" :class="{'header-fixed':headerFixed}">
      <div class="header-back">
        <span class="iconfont">&#xe63c;</span>
      </div>
      <div class="header-search"><span class="iconfont">&#xe70a;</span>上海海沧工业</div>
      <div class="header-city"><router-link to="/location">{{this.$store.state.city}} <span class="iconfont">&#xe63a;</span></router-link></div>
    </div>
</template>

<script>
    export default {
        name: "homeHeader",
      data(){
          return {
            headerFixed:false
          }
      },
    mounted() {
      window.addEventListener('scroll', () => {
        if(document.body.scrollTop > 0 || document.documentElement.scrollTop >0){
          this.headerFixed=true
        }else{
          this.headerFixed=false
        }
      })
    }
    }
</script>

<style lang="stylus" scoped>
.home-header {
  position absolute
  line-height:1rem
  text-align:center
  top:0;
  left:0;
  z-index:1;
  width:100%;
  display flex
  .header-back {
    width:auto
    margin-left .2rem
    float:left
    color #fff
  }
  .header-search{
    flex:1
    line-height:.6rem
    margin:.2rem .2rem
    border-radius: .5rem
    box-shadow: 0 0 .01rem .02rem #888
    background: rgba(255,255,255,.8)
  }
  .header-city{
    float:right
    width:auto
    padding-right .2rem
    a{
      color #fff
    }
  }
}
  .header-fixed{
    position fixed
    background-color #fff
    z-index 2
    .header-search{
      background #eee
    }
    .header-back {
      color #333
    }
    .header-city a{
      color #333
    }
    transition:background-color .3s
  }
</style>
