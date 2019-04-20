<template>
  <div class="home-catalog">
    <div class="col-3" v-for="item,index in iconList" :key="item.id" @click="changePage(index)">
      <img class="catalog-icon" :src="item.imgUrl"  :class="item.color">
      <span class="catalog-title">{{item.desc}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "homeCatalog",
      props:{
        iconList: Array
      },
      methods:{
        changePage(index){
          //console.log(index)
          if(index===0){
            //console.log(2)
            this.$router.push('/sassTest')
          }
        }
      }
    }
</script>

<style lang="stylus" scoped>
.home-catalog{
  display:flex
  padding-bottom:15px
  border-bottom 10px solid #edf0f5
  .col-3{
    width:25%;
  }
  .red{
    background lightcoral
  }

  .green{
    background lightgreen
  }

  .blue{
    background lightblue
  }

  .pink{
    background pink
  }
  img{
    border-radius 50%
  }
  .catalog-icon{
    width:45px;
    display: block;
    margin:10px auto;
    margin-top :15px
  }
  .catalog-title{
    display block
    text-align:center
  }
}
</style>
catalog-title
