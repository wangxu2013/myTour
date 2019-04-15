<template>
    <div class="map">
      <div class="allmap" ref="allmap"></div>
      <div refs="down">
        <div class="down" @click="upOrDown">V</div>
        <navbar class="page-part" v-model="selected">
          <tab-item id="1" class="tab">酒店</tab-item>
          <tab-item id="2" class="tab">景点</tab-item>
        </navbar>

        <!-- tab-container -->
        <tab-container v-model="selected" class="tab-content">
          <tab-container-item id="1">
            <cell v-for="(innerItem,index) in addressList[0]" :title="innerItem.title" :key="innerItem.id"
                  @click.native="handleCellClick(index)"></cell>
          </tab-container-item>
          <tab-container-item id="2">
            <cell v-for="(innerItem,index) in addressList[1]" :title="innerItem.title" :key="innerItem.id"
                  @click.native="handleCellClick(index)"></cell>
          </tab-container-item>
        </tab-container>
      </div>


    </div>
</template>

<script>
  import { Navbar, TabItem,TabContainer,TabContainerItem,Cell } from 'mint-ui'; // 引入mint-ui中的navbar组件
  import maskerImg from '@/assets/img/marker.png' // 引入maskerImg图片
    export default {
        name: "Map",
      props:{
        addressList:Array
      },
      data(){
          return{
            upconfig:0,
            selected: '1'
          }
      },
      watch:{
        selected(){ // 监听点击tab左边还是右边
          this.changeMasker(0) //切换地图显示
        }
      },
      mounted(){
        this.addMakser(0,0)  // 地图标注
      },
      methods:{
        addMakser(m,n){
          var map = new BMap.Map(this.$refs.allmap) //创建地图实例
          var myGeo = new BMap.Geocoder() // 创建地址解析器实例

          for(let i=0;i<this.addressList.length;i++){//遍历地址数组
            for(let j=0;j<this.addressList[i].length;j++){
              let title = this.addressList[m][n].title // 获取当前显示地址
              myGeo.getPoint(this.addressList[i][j].title, function(point){// 将地址解析结果显示在地图上，并调整地图视野
                  if (point) {
                    if(i===m && j===n){ // 选中地址
                      map.centerAndZoom(point, 15) // 初始化地图，设置中心点坐标和地图缩放级别
                      let myIcon = new BMap.Icon(
                        maskerImg,
                        // maskerImg自定义图片路径
                        new BMap.Size(50,50), // BMap.Size图片大小
                        {  imageOffset: new BMap.Size(14, 2 )}  // 设置图片偏移/周边距离
                      )
                      // 创建标注对象并添加到地图
                      let marker = new BMap.Marker(point, {icon: myIcon}) // {icon: myIcon}添加自定义的icon样式
                      map.addOverlay(marker)  // 将标注添加到地图中

                      let opts = {
                        width : 150,     // 信息窗口宽度
                        height: 60,     // 信息窗口高度
                        title : "地址信息"  // 信息窗口标题
                      }
                      //console.log(title.title)
                      let infoWindow = new BMap.InfoWindow(title,opts) // 创建信息窗口对象
                      map.openInfoWindow(infoWindow, map.getCenter())    // 打开信息窗口
                    } else {
                      let marker = new BMap.Marker(point) // 创建标注对象并添加到地图
                      map.addOverlay(marker)  // 将标注添加到地图中
                    }
                  } else {
                    console.log('对不起，找不到！')
                  }
                },
                "北京市");
            }
          }
        },
        changeMasker(n){ // 切换地图显示
          let num = this.selected-1 // 获取mint-ui的selected选中属性
          this.addMakser(num,n) //切换地图标注
        },
        handleCellClick(n){ // 接收mint-ui的cell点击传递的参数n
          this.changeMasker(n) // 切换地图显示
        },
        upOrDown(){ // 控制地图显示大小
          if(this.upconfig===0){
            this.$refs.allmap.style.height='20%'
            this.upconfig = 1
          } else{
            this.$refs.allmap.style.height='60%'
            this.upconfig = 0
          }
        }
      },
      components:{
        Navbar, TabItem,TabContainer,TabContainerItem,Cell
      }
    }
</script>

<style lang="stylus" scoped>
.map
  position absolute
  z-index 1
  width 100%
  background #fff
  top .8rem
  bottom 0
  .allmap
    background red
    height 60%
  .down
    text-align center
  .tab
    color #333
    margin 0 15%
  .is-selected
    color #26a2ff
    border-bottom 1px solid #26a2ff
  .tab-content
    margin-top 0
</style>
