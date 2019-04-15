<template>
    <router-link tag="div" to="map" class="detial-map" append><!--子路径要加append-->
      <div class="map-left">
        <p>无锡宜兴市<label>酒店地址</label></p>
        <p class="address">宜兴解放东路888号</p>
      </div>
      <div class="map-right">
        地图 》
      </div>
    </router-link>
</template>

<script>
    export default {
        name: "detialMap"
    }
</script>

<style lang="stylus" scoped>
.detial-map
  position relative
  top .8rem
  padding .2rem
  display flex
  border-bottom 5px solid #f5f5f5
  .map-left
    line-height .5rem
    label
      display inline-block
      border 1px solid #ddd
      color #576b95
      font-size .2rem
      padding 0 .1rem
      margin-left .2rem
    .address
      color #888
  .map-right
    flex 1
    text-align right
    line-height 1rem
    color #576b95
</style>
