<template>
    <div id="location-list" ref="wrapper">
      <div class="content">
        <div class="location">
          <p ref="present">当前</p>
          <div @click="checkCity(location)">{{location}}</div>
        </div>
        <div class="hot-place">
          <p ref="hot">热门城市</p>
          <div v-for="item in hotCities" :key="item.id" @click="checkCity(item.name)">{{item.name}}</div>
        </div>
        <div class="alphabet" v-for="item,key in cities" :key="key" >
          <p :ref="key">{{key}}</p>
          <div v-for="innerItem in item" :key="innerItem.id" @click="checkCity(innerItem.name)"><p>{{innerItem.name}}</p></div>
        </div>
      </div>
    </div>
</template>


<script>
import BScroll from 'better-scroll'
import BMap from 'BMap'
    export default {
        name: "locationList",
      props:{
          place: String,
        hotCities: Array,
        cities: Object
      },
      data(){
        return{
          location:''
        }
      },
      watch:{
        place(){ // 监听place的变化
          const letter = this.$refs[this.place] // 通过this.$refs访问页面的DOM元素
          if(letter){ // 当元素不为空
            const element = letter[0]
            this.scroll.scrollToElement(element,1000)
          }else if(this.place ==="热门城市"){ // 点击热门城市
            const hot = this.$refs.hot // 获取热门城市DOM节点
            this.scroll.scrollToElement(hot,1000) // 1s滚动至热门城市
          }else{
            const present = this.$refs.present
            this.scroll.scrollToElement(present,1000)
          }
        }
      },
      mounted(){
        let map = new BMap.Map('allmap') // 创建地图
        let myCity= new BMap.LocalCity() // 创建本地城市
        myCity.get(res => {
          if(res){
            this.location =res.name // 获取城市
            this.$store.commit('checkCity',res.name) // 初始化数据仓库的city值
          }else{
            this.location ='正在定位' // 没获取到显示‘正在定位’
          }
        })
        this.scroll = new BScroll(this.$refs.wrapper,{
          click:true, // 允许点击
          mouseWheel:{
            speed:20,
            invert:false,
            easeTime:300
          }
        })

      },
      methods:{
         checkCity(name){
           console.log(name)
           this.$store.commit('checkCity',name)
           this.$router.push({path:'/'})
        }
      }
    }
</script>

<style lang="stylus" scoped>
#location-list{
  background #e9ecf1
  position absolute
  top 1.12rem
  left 0
  bottom 0
  z-index -1
  width 100%
  p{
    line-height .8rem
  }
  .location{
    padding .4rem .4rem 0 .4rem
    div{
      background #ffffff
      border 1px solid #ddd
      padding .3rem
      color #aaa
      border-radius .1rem
    }
  }
  .hot-place{
    overflow hidden
    padding 0 .4rem
    margin-right -.15rem
    margin-bottom -.15rem
    div{
      border 1px solid #ddd
      width 16%
      float left
      background #ffffff
      margin-right .15rem
      margin-bottom .15rem
      padding .2rem
      text-align center
      border-radius .1rem
      color #666
    }
  }
  .alphabet{
    p{
      padding 0 .4rem
    }
    div {
      background #ffffff
      padding 0 .4rem
      line-height .8rem
      p{
        padding 0
        border-bottom .02rem solid #ddd
        color #666
      }
    }
  }
}
</style>
