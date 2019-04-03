<template>
    <div class="home">
      <home-header class="home-header"></home-header>
      <home-swiper class="home-swiper"></home-swiper>
    </div>
</template>

<script>
  import homeHeader from './components/homeHeader'
  import homeSwiper from './components/homeSwiper'
    export default {
        name: "Home",
      components:{
        homeHeader,
        homeSwiper
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
