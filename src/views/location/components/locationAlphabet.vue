<template>
  <div class="location-alphabet">
    <ul>
      <li v-for="item,index in alphabetList" :key="item.id" @touchstart="showItemfn(index)" @touchend="hideItemfn(index)">
        {{item.content}}
        <span v-show="index===showItem">{{item.content}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "locationAlphabet",
      props:{
        alphabetList : Array
      },
      data(){
          return{
            showItem:''
          }
      },
      methods:{
          showItemfn(index){
            this.showItem = index
            //console.log(this.showItem)
          },
          hideItemfn(index){
            this.showItem = ''
            let text = this.alphabetList[index].content
            //console.log(text)
            this.$emit('changePlace',text)
           // console.log(this.showItem)
          }
      }
    }
</script>

<style lang="stylus" scoped>
.location-alphabet
  position fixed
  top 1.15rem
  right 0
  padding-bottom 100rem
  text-align center
  background #ddd
  color lightskyblue
  opacity .8
  font-size .2rem
  ul > li
    padding .08rem 0
    span
      background chartreuse
      color #fff
      display block
      position fixed
      right 1.1rem
      margin-top -.45rem
      font-size .25rem
      padding .2rem
      border-radius .1rem
      &:after
        content ""
        position absolute
        right -.2rem
        width 0
        height 0
        border 6px solid
        border-color transparent transparent transparent chartreuse
</style>
