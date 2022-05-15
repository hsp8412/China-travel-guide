<template>
  <CityInfo :city="city" :province="province" :region="region" />
  <CityDesc :city="city" />
  <MustDoList :mustDos="mustDos" :region="region.name" />
</template>

<script>
import { getCityById } from "@/service/cityService";
import CityInfo from "@/components/mustDoView/CityInfo.vue";
import { getProvinceById } from "@/service/provinceService";
import { getRegion } from "@/service/regionService";
import CityDesc from "@/components/mustDoView/CityDesc.vue";
import { getMustDosByCityId } from "@/service/mustDoService";
import MustDoList from "@/components/mustDoView/MustDoList.vue";

export default {
  components: { MustDoList, CityInfo, CityDesc },
  data() {
    return {
      city: {},
      province: {},
      region: {},
      mustDos: [],
    };
  },
  methods: {
    async fetchCity() {
      const res = await getCityById(this.$route.params.cityId);
      console.log(res.data);
      return res.data;
    },
    async fetchProvince() {
      const res = await getProvinceById(this.city.provinceId);
      return res.data;
    },
    async fetchRegion() {
      const res = await getRegion(this.province.regionId);
      return res.data;
    },
    async fetchMustDos() {
      const res = await getMustDosByCityId(this.$route.params.cityId);
      console.log(res.data);
      return res.data;
    },
  },
  async created() {
    this.city = await this.fetchCity();
    this.province = await this.fetchProvince();
    this.region = await this.fetchRegion();
    this.mustDos = await this.fetchMustDos();
  },
};
</script>
