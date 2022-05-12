<template>
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