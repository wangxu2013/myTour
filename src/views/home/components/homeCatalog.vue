<template>
  <div class="home-catalog">
    <div class="col-3" v-for="item in catalogs" :key="item.id">
      <img class="catalog-icon" :src="item.url" alt="">
      <span class="catalog-title">{{item.title}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "homeCatalog",
      data(){
          return{
            catalogs:[
              {id:'0001',title:'本地热推',url:'//pic5.40017.cn/01/000/5f/30/rBANC1qozNqAb3vRAAAD_Qg-dt4234.png'},
              {id:'0002',title:'亲子游',url:'//pic5.40017.cn/02/001/5f/ab/rBLkCFqozNqAJqPYAAAFlYq1v7A413.png'},
              {id:'0003',title:'主题乐园',url:'//pic5.40017.cn/02/001/5f/ab/rBLkCFqozNqAJqPYAAAFlYq1v7A413.png'},
              {id:'0004',title:'宜兴竹海',url:'//pic5.40017.cn/02/001/5f/ab/rBLkCFqozNqAF4UUAAAFH-2jq70957.png'},
            ]
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
