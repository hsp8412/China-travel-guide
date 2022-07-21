<template>
  <ProvinceList :provinces="provinces" />
</template>

<script>
import { getProvinces } from "@/service/provinceService";
import ProvinceList from "@/components/ProvinceList.vue";
export default {
  components: {
    ProvinceList,
  },
  data() {
    return {
      provinces: [],
    };
  },
  methods: {
    async fetchProvinces() {
      const res = await getProvinces();
      console.log(res.data);
      return res.data;
    },
    selectProvince(provinceId) {},
  },
  async created() {
    this.provinces = await this.fetchProvinces();
  },
};
</script>

<style>
welcome-img-container {
  position: relative;
}

.welcome-text {
  font-family: "Poppins", sans-serif;
  font-weight: bold;
}

.welcome-img {
  width: 100%;
  height: auto;
  opacity: 0.8;
}
</style>
