<template>
  <div class="pt-3">
    <h2>Cities in {{ province }}:</h2>
  </div>
  <CityList :cities="cities" />
</template>

<script>
import CityList from "@/components/cityView/CityList.vue";
import { getCityByProvinceId } from "@/service/cityService";
import { getProvinceById } from "@/service/provinceService";

export default {
  components: {
    CityList,
  },
  data() {
    return {
      cities: [],
      province: "",
    };
  },
  methods: {
    async fetchCities() {
      const res = await getCityByProvinceId(this.$route.params.provinceId);
      console.log(res.data);
      return res.data;
    },
    async fetchProvince() {
      const res = await getProvinceById(this.$route.params.provinceId);
      return res.data.name;
    },
  },
  async created() {
    this.cities = await this.fetchCities();
    this.province = await this.fetchProvince();
  },
};
</script>
