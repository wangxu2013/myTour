<template>
    <div>
      <location-header></location-header>
      <location-list :place="place":hotCities="hotCities" :cities="cities"></location-list>
      <location-alphabet @changePlace="changePlace":alphabetList="alphabetList"></location-alphabet>
    </div>
</template>

<script>
  import axios from 'axios'
  import locationHeader from './components/locationHeader'
  import locationList from './components/locationList'
  import locationAlphabet from './components/locationAlphabet'
    export default {
        name: "Location",
      data(){
          return{
            place: '',
            alphabetList:[],
            cities:{},
            hotCities:[]
          }
      },
      components:{
        locationHeader,
        locationList,
        locationAlphabet
      },
      mounted(){
          this.getLocationData()
      },
      methods:{
        changePlace(text){
          this.place = text
        },
        getLocationData(){
          axios.get('/api/city.json')
            .then(this.getLocationDataSuccess)
        },
        getLocationDataSuccess(res){
          //console.log(res)
          const result = res.data
          if(result.data){
            const data = result.data
            this.alphabetList = data.alphabetList
            this.cities = data.cities
            this.hotCities = data.hotCities
          }
        }
      }
    }
</script>

<style lang="stylus" scoped>

</style>
