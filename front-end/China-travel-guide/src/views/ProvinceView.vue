<template>
  <div>
    <h1 class="pt-3">Welcome!</h1>
    <h2>Choose a province: </h2>
  </div>
  <ProvinceList :provinces="provinces"/>
</template>

<script>
import {getProvinces} from "@/service/provinceService";
import ProvinceList from "@/components/ProvinceList.vue";
export default {
  components:{
    ProvinceList
  },
  data(){
    return {
      provinces:[]
    }
  },
  methods:{
    async fetchProvinces(){
      const res = await getProvinces()
      console.log(res.data)
      return res.data
    }
  },
  async created(){
    this.provinces = await this.fetchProvinces()
  }
}
</script>

<style>
.welcome-text{
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
}
</style>