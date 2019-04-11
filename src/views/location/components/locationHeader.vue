<template>
    <div class="location-header">
      <span class="iconfont">&#xe70a;</span>
      <input type="text" placeholder="请输入城市名（如北京、bj、beijing）">
    </div>
</template>
locationHeader
<script>
    export default {
        name: ""
    }
</script>

<style lang="stylus" scoped>
.location-header{
  position fixed
  width 100%
  padding .2rem
  background #e0e4ec
  box-sizing border-box
  .iconfont{
    position absolute
    margin-top .2rem
    margin-left .2rem
    color #aaa
  }
  input{
    width 100%
    box-sizing border-box
    line-height .7rem
    font-family "微软雅黑"
    font-size .3rem
    border-radius 5px
    padding-left .6rem
  }
}
</style>
