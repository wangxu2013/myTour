<template>
    <div class="home">
      <home-header class="home-header"></home-header>
      <home-swiper></home-swiper>
      <home-catalog></home-catalog>
    </div>
</template>

<script>
  import homeHeader from './components/homeHeader'
  import homeSwiper from './components/homeSwiper'
  import homeCatalog from './components/homeCatalog'
    export default {
        name: "Home",
      components:{
        homeHeader,
        homeSwiper,
        homeCatalog
      }
    }
</script>

<style lang="stylus" scoped>
  .home{
    position: relative;
    .home-header{
      position:absolute;
      top:0;
      left:0;
      z-index:1;
      width:100%;
    }
  }
</style>
