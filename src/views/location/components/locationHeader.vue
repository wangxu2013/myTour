<template>
    <div class="location-header">
      <span class="iconfont">&#xe70a;</span>
      <input type="text" placeholder="请输入城市名（如北京、beijing）" v-model="myInput" :class="{'input':hasValue}">
      <span class="cancel" v-show="hasValue" @click="clearInput">X</span>
      <button class="button" v-show="hasValue" @click="hideSeach">取消</button>
      <div class="checkList" ref="contentWrapper" v-show="this.searchList.length">
        <ul>
          <li class="searchResult">{{show}}</li>
          <li v-for="item,index in searchList" :key="index" @click="checkCity(item.name)">{{item.name}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {disreslove} from '@/utils/utils.js'
export default {
  name: "locationHeader",
  data(){
      return{
        myInput:'',
        hasValue:false,
        //showFlg:false,
        searchList:[],
        flag:1,
        show:'请输入城市名（如北京、beijing）',// 提示信息
        iLetter:''
      }
  },
  props:{
    cities:Object
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.contentWrapper,{ //better-scroll
      click:true, // 允许点击
      mouseWheel:{
        speed:20,
        invert:false,
        easeTime:300
      }
    })
  },
  watch:{
    myInput(){ // 监听myInput的变化
      let content = this.myInput.trim() //清除输入框中的空格
      this.addClass() // 判断是否有内容来改变样式

      if(content===''){ //内容为空
        //flag代表内容为空时的区分标志位
        if(this.flag===1){ // 1表示没有输入或逐字删除
          this.removeBack()
        } else if(this.flag===2){ //2代表点击清除按钮
          this.myInput=''
          this.removeBack()
        } else{ //剩余代表点击X按钮
          this.myInput=''
          this.show='请输入城市名（如北京、beijing）'
        }
      } else if(/^[0-9]+$/.test(content)){ //内容为数字
        this.showError()
      } else if(/^[a-zA-z]+$/.test(content)){ //内容为字母
        const lowerContent=content.toLowerCase() //转换成小写字母
        let result =[]
        for (let i in this.cities){ //遍历cities
          let haveAlpa=i.toLowerCase().indexOf(lowerContent.substr(0,1)) > -1//如果遍历的大写字母是输入的首字母
          if(haveAlpa){
            this.cities[i].forEach((value) => { // 遍历cities首字母下的城市信息
              if(value.spell.indexOf(lowerContent) >-1){ // 城市的spell包含输入字母
                this.show="请输入城市名（如北京、beijing"
                result.push(value) // 暂时存放所有城市信息
                this.searchList=result // 将城市信息放入searchList
                //console.log(1)
              } else if(lowerContent.indexOf(value.spell)>-1){  // 输入字母包含城市的spell，如beijingsss
                this.show='对不起，找不到'+this.myInput
              } else{ //输入bb
                this.loopAlphabet(lowerContent) // this.iLetter="eaio"
                if(!(this.iLetter.indexOf(lowerContent.substr(lowerContent.length-1,1))>-1)){ // 如果cities.spell的第二位没有输入字母的第二位
                  //let otherLetters=value.spell.substr(lowerContent.length,value.spell.length-lowerContent.length)
                  //console.log(lowerContent.substr(lowerContent.length-1,1))
                 // if(otherLetters.indexOf(lowerContent.substr(lowerContent.length-1,1))>-1){// 输入类似bj
                    //console.log(otherLetters)
                   // result.push(value) // 暂时存放所有城市信息
                    //this.searchList=result // 将城市信息放入searchList
                    //this.show="请输入城市名（如北京、bj、beijing"
                  //} else{
                    this.show="对不起，找不到"+this.myInput
                    this.iLetter='' // this.iLetter置空
                 // }
                } else{
                  console.log(1)
                }
              }

            })
          }else if(lowerContent.substr(0,1)==='u'||lowerContent.substr(0,1)==='i'||lowerContent.substr(0,1)==='v'||lowerContent.substr(0,1)==='o'){
            this.show="对不起，找不到"+this.myInput
            this.searchList=['']
          }
        }

      } else if(/^[\u4e00-\u9fa5]+$/.test(content)){ //内容为汉字
        let result = []
        console.log(content)
        for(let i in this.cities) {
          let haveAlph = i.toLowerCase().indexOf(disreslove(content.substr(0, 1)).substr(0, 1)) > -1
          if (haveAlph) {
            this.cities[i].forEach((value) => {
              if (value.name.indexOf(content) > -1) {
                this.show = "请输入城市名（如北京、beijing"
                result.push(value)
                this.searchList = result
              } else if (content.indexOf(value.name) > -1) {
                this.show = "对不起，找不到" + this.myInput
              } else {
                this.loopWord(content)
                if (!(this.iWord.indexOf(content.substr(content.length - 1, 1)) > -1)) {
                  this.show = "对不起，找不到" + this.myInput
                  this.iWord = ''

                }
              }

            })
          }
        }
      } else {
        this.showError()
      }
    }
  },
  methods:{
    clearInput(){ // 点击X
      this.myInput=' ' //触发watch里的myInput
      this.flag=3
    },
    hideSeach(){ // 点击取消按钮
      this.myInput=' ' //触发watch里的myInput
      this.flag=2
     // this.hasValue=false
     // this.myInput=''
    },
    addClass(){// 判断是否有内容来改变样式
      if(this.myInput!=""){
        this.hasValue=true
      }else{
        this.hasValue=false
      }
    },
    removeBack(){//清空
      this.hasValue=false // 清空样式
      this.searchList='' //清空列表
      this.show='' //清空提示信息
    },
    showError(){ // 显示错误
      this.searchList=['']
      this.show='对不起，找不到'+this.myInput
    },
    loopAlphabet(lowerContent){
      for(let i in this.cities){ //遍历cities
        if(i.toLowerCase().indexOf(lowerContent.substr(0,1)) > -1){ //cities中包含输入字符串的首字母
          let arr=[] // 暂时存放字母数组
          this.cities[i].forEach((value) => { // 遍历首字母cities城市
            arr.push(value.spell.substr(lowerContent.length-1,1)) //如果输入bb，则截取value.spell的第二位字母，并存入arr
            //console.log(arr)["e", "a",  "a", "a", "a", "a", "a", "e", "e", "i", "i", "o", "o", "a", "a", "i", "i", "i", "i", "o", "o", "o"]
            let a = [...new Set(arr)] // arr去重后赋给a["e","a","i", "o"]
            this.iLetter = a.toString() //a转换成字符串"eaio"
          })
        }
      }
    },
    loopWord(content){
      const citiesWrapper = this.cities
      for(let i in citiesWrapper){
        if(i.toLowerCase().indexOf(disreslove(content.substr(0,1)).substr(0,1))>-1){
          let arr = []
          citiesWrapper[i].forEach((value)=>{
            arr.push(value.name.substr(content.length-1,1))
            let a = [...new Set(arr)]
            this.iWord = a.toString()
          })
        }
      }
    },
    checkCity(name){
      console.log(name)
      this.$store.commit('checkCity',name)
      this.$router.push({path:'/'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.location-header{
  z-index 2
  width 100%
  padding .2rem
  background #e0e4ec
  box-sizing border-box
  .iconfont{
    position absolute
    margin-top .2rem
    margin-left .2rem
    color #aaa
  }
  input{
    width 100%
    box-sizing border-box
    line-height .7rem
    font-family "微软雅黑"
    font-size .3rem
    border-radius 5px
    padding-left .6rem
  }
  .input{
    width 85%
  }
  .cancel{
    position absolute
    display inline-block
    width .4rem
    height .4rem
    text-align center
    line-height .4rem
    margin-top .15rem
    margin-left -.6rem
    background #aaa
    color #ffffff
    border-radius 1rem
  }
  .button{
    background none
    text-align right
    font-weight normal
    width 10%
  }
  .checkList{
    background #fff
    position absolute
    overflow hidden
    z-index 2
    top 1.1rem
    bottom 0
    left 0
    right 0
    li{
      line-height .8rem
      border-bottom 1px solid #ddd
      padding 0 .4rem
    }
    .searchResult{
      line-height .5rem
      color #888
      font-size 12px
    }
  }
}
</style>
