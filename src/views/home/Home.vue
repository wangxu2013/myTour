<template>
    <div>
      <home-header></home-header>
      {{this.$store.state.count}}
    </div>
</template>

<script>
  import homeHeader from './components/homeHeader'
    export default {
        name: "Home",
      components:{
        homeHeader
      }
    }
</script>

<style scoped>

</style>
