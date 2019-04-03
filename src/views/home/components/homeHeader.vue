<template>
    <div class="home-header">
      <div class="header-back">
        <span class="iconfont">&#xe63c;</span>
      </div>
      <div class="header-search"><span class="iconfont">&#xe70a;</span>上海海沧工业</div>
      <div class="header-city">北京 <span class="iconfont">&#xe63a;</span></div>
    </div>
</template>

<script>
    export default {
        name: "homeHeader"
    }
</script>

<style lang="stylus" scoped>
.home-header {
  display:flex
  line-height:1rem
  text-align:center
  .header-back {
    width:.8rem
    float:left
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
    width:1.5rem
  }
}
</style>
