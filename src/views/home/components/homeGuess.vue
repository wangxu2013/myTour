<template>
    <div class="home-guess" ref="guess">
      <div class="guess-title" :class="{'guess-fixed':guessFixed}">
        <span>猜你喜欢</span>
      </div>
      <div class="guess-content" v-for="item,index in guessImg" :key="index">
        <img :src="item.url">
        <h1>{{item.title}}</h1>
        <p>
          饭店距景点{{item.way}}
          <span><em>￥</em><em class="price">{{item.price}}</em>起</span>
        </p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "homeGuess",
      data(){
        return{
          guessFixed:false,
          guessImg:[
            {
              url:'https://pic5.40017.cn/01/000/7d/46/rBLkBlmJHzeAecWoAADLTfHpefI910_280x190_00.jpg',
              title:'宜兴竹海',
              wey:'4.5km',
              price:'299'
            },{
              url:'https://pic5.40017.cn/03/000/8c/da/rB5oQFwZtfyABsmlAABcBH79wXs668_280x190_00.jpg',
              title:'拈花湾 禅意假日 古韵风光',
              wey:'2.5km',
              price:'199'
            },{
              url:'https://pic5.40017.cn/01/000/00/9c/rBANC1vD9_GAb2qVAAD1zTnOfl0327_280x190_00.jpg',
              title:'迪士尼 点亮心中奇梦',
              wey:'3.5km',
              price:'399'
            },{
              url:'https://pic5.40017.cn/01/001/f8/b2/rBLkBlsWe--AYOxAAABvztYw1fM559_280x190_00.jpg',
              title:'东方盐湖城 茅山脚下的逍遥山镇',
              wey:'5.5km',
              price:'499'
            }
          ]
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
