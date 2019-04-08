<template>
    <div class="home">
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-catalog></home-catalog>
      <home-hot></home-hot>
      <home-weekend></home-weekend>
      <home-guess></home-guess>
    </div>
</template>

<script>
  import homeHeader from './components/homeHeader'
  import homeSwiper from './components/homeSwiper'
  import homeCatalog from './components/homeCatalog'
  import homeHot from './components/homeHot'
  import homeWeekend from './components/homeWeekend'
  import homeGuess from './components/homeGuess'
    export default {
        name: "Home",
      components:{
        homeHeader,
        homeSwiper,
        homeCatalog,
        homeHot,
        homeWeekend,
        homeGuess
      }
    }
</script>

<style lang="stylus" scoped>
  .home{
    position: relative;

  }
</style>
