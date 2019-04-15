<template>
    <div class="detial-galery">
      <ly-tab class="tab" href="myLyTab"
        v-model="selectedId"
        :items="items"
        :options="options" @change="handelClick">
      </ly-tab>
      <div class="cate">
        <span :class="{'active':activeNum===0}" @click="changeActiveNum(0)">全部</span>
        <span :class="{'active':activeNum===1}" @click="changeActiveNum(1)">其他</span>
      </div>
      <component :is="type" :imgList="imgList"></component><!--动态组件-->
    </div>
</template>

<script>
  import galeryContent from './galeryContent'
    export default {
        name: "detialGalery",
      props:{
        galaryList:Array,
        imgList:Array
      },
      data () {
        return {
          type: galeryContent,
          activeNum:0,
          selectedId: 0,
          items: [],
          options: {
            activeColor: '#0bc071'
            // 可在这里指定labelKey为你数据里文字对应的字段
          }
        }
      },
      computed:{
        setItems(){
          for(let i=0;i<this.galaryList.length;i++){
            //console.log(this.galaryList[i])
            this.items.push({label:this.galaryList[i]}) //初始化ly-tab的items项
           // console.log(this.items)
          }
          ///this.$refs.myLyTab.click()
        }
      },
      mounted(){
         this.setItems
      },
      methods:{
        changeActiveNum(num){
          this.activeNum=num
        },
        handelClick(item,index){ // @change当ly-tab单击项发生改变时调用
          //console.log(index)
          this.$store.state.index=index // 将点击项的index传入store，方便galeryContent调用
          //console.log(this.$store.state.index)
        }
      },
      components:{
        galeryContent
      }
    }
</script>

<style lang="stylus" scoped>
.detial-galery
  position absolute
  top .8rem
  left 0
  right 0
  bottom 0
  z-index 1
  background:#fff
  .tab
    background #fff
  .cate
    background #edf0f5
    line-height .8rem
    padding-left .3rem
    span
      display inline-block
      margin-right .2rem
    .active
      color #0bc071
</style>
