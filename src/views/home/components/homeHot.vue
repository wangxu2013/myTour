<template>
    <div class="home-hot">
      <div class="hot-left">
        <div class="left-title">
          限时抢购
          <span class="time-limit">距结束 <span>12</span>:<span>12</span>:<span>12</span></span>
        </div>
        <div class="left-content">
          <img :src="hotContentList.imgUrl"/>
          <p>{{hotContentList.desc}}</p>
        </div>
        <div class="left-price">
          限量{{hotPriseList.num}}份
          <p><span>￥</span><span class="price">{{hotPriseList.prise}}</span>起</p>
        </div>
      </div>
      <div class="hot-right">
        <div class="right-list" v-for="(item,index) in hotTrendList" :key="index">
          <div class="list-title">
            <h1>{{item.desc}}</h1>
            <p>{{item.crite}}</p>
          </div>
          <div class="list-img">
            <img :src="item.imgUrl"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "homeHot",
      props:{
        hotContentList:Object,
        hotPriseList:Object,
        hotTrendList:Array
      }
    }
</script>

<style lang="stylus" scoped>
.home-hot{
  border-bottom:10px solid #edf0f5
  overflow hidden
  box-sizing border-box
  .hot-left{
    width:50%
    float:left
    border-right:1px solid #edf0f5
    box-sizing border-box
    .left-title{
      line-height 30px
      padding:5px
      overflow hidden
      .time-limit{
        display inline-block
        float:right
        font-size 10px
        color #000
        span{
          color #ffffff
          background #000
          border-radius 5px
          padding 2px
          margin 0 2px
        }
      }
    }
    .left-content{
      padding 5px 10px
      overflow hidden
      img{
        width: 35%
        float:left
      }
      p{
        width: 65%
        float:left
        padding-left 8px
        box-sizing border-box
        line-height 23px
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:3;
      }
    }

    .left-price{
      font-size 12px
      color #888
      padding 5px 10px
      overflow hidden
      line-height 30px
      p{
        float right
        span{
          color #ff5346
        }
      }
      .price{
        font-size 20px
        font-weight bold
      }
    }
  }
  .hot-right{
    width:50%
    float:left
    box-sizing border-box
    .right-list{
      border-bottom:1px solid #edf0f5
      padding 5px 10px
      overflow hidden
      .list-title{
        width: 60%
        float left
        padding-top 10px
        h1{
          color #000
          font-weight bold
          line-height 30px
        }
        p{
          color #888
        }
      }
      .list-img{
        width 40%
        float left
        text-align right
        img{
          width 100%
        }
      }
    }
  }
}
</style>
