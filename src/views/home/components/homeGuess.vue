<template>
    <div class="home-guess" ref="guess">
      <div class="guess-title" :class="{'guess-fixed':guessFixed}">
        <span>猜你喜欢</span>
      </div>
      <div class="guess-content" v-for="item,index in guessList" :key="index">
        <img :src="item.imgUrl">
        <h1>{{item.desc}}</h1>
        <p>
          饭店距景点{{item.distance}}km
          <span><em>￥</em><em class="price">{{item.prise}}</em>起</span>
        </p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "homeGuess",
      props:{
        guessList:Array
      },
      data(){
        return{
          guessFixed:false

        }
      },
      mounted() {
        window.addEventListener('scroll', () => { // 添加滚动条监听
          // console.log(document.body.scrollTop)
          if(document.body.scrollTop > 600){
            this.guessFixed=true

          }else{
            this.guessFixed=false
          }
        })
      }
    }
</script>

<style lang="stylus" scoped>
.home-guess{
  .guess-title{
    color darkcyan
    text-align center
    font-weight bold
    font-size 16px
    border-bottom 3px solid #ddd
    span{
      border-bottom 3px solid darkcyan
      line-height 30px
      display inline-block
      margin-bottom -3px
      padding 0 5px
    }
  }
  .guess-content{
    padding 10px
    img{
      width 100%
    }
    h1{
      font-weight bold
      line-height 30px

    }
    p{
      color: #aaaaaa
      padding-bottom 10px
      border-bottom 2px solid #ddd
      span{
        float right
        margin-top -5px
        em{
          color #ff5346
        }
      }
    }
    .price{
      font-weight bold
      font-size 20px
    }
  }
}
  .guess-fixed{
    position fixed
    top 50px
    left 0
    width 100%
    background #fff
  }
</style>
