<template>
    <div class="home-hot">
      <div class="hot-left">
        <div class="left-title">
          限时抢购
          <span class="time-limit">距结束 <span>{{tjPlace.time1}}</span>:<span>{{tjPlace.time2}}</span>:<span>{{tjPlace.time3}}</span></span>
        </div>
        <div class="left-content">
          <img :src="tjPlace.imgUrl"/>
          <p>{{tjPlace.title}}</p>
        </div>
        <div class="left-price">
          限量{{tjPlace.count}}份
          <p><span>￥</span><span class="price">{{tjPlace.price}}</span>起</p>
        </div>
      </div>
      <div class="hot-right">
        <div class="right-list" v-for="(item,index) in rightList" :key="index">
          <div class="list-title">
            <h1>{{item.title}}</h1>
            <p>{{item.content}}</p>
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
      data(){
          return {
            tjPlace:{
              title:'常州明都枫泽山庄大酒店，双人美食晚餐+儿童乐园+随园盆景园+欢迎水果+安睡奶+健身房',
              imgUrl:'https://pic4.40017.cn/zzy/rimage/2016/12/15/15/LxfFsg_100x100_00.jpg',
              time1:12,
              time2:12,
              time3:12,
              count:200,
              price:299
            },
            rightList:[
              {
                title:'温泉爆款',
                content:'又到一年温泉季',
                imgUrl:'https://pic5.40017.cn/01/000/65/88/rBANC1usNjyAWsDJAACkawp55dU429_100x100_00.png'
              },
              {
                title:'快乐寒假',
                content:'亲自旅行记',
                imgUrl:'https://pic5.40017.cn/03/000/da/e4/rB5oQFwcf9GAM_o-AACKptfbYxE196_100x100_00.png'
              }

            ]
          }
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
      padding:5px 10px
      .time-limit{
        display inline-block
        float:right
        font-size 10px
        color #000
        span{
          color #ffffff
          background #000
          border-radius 5px
          padding 3px
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
