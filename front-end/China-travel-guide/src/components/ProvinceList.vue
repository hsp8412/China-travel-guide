<template>
  <div class="container">
    <div :key="province._id" v-for="province in provinces">
      <ProvinceCard :province="province" />
    </div>
  </div>
</template>

<script>
import ProvinceCard from "@/components/ProvinceCard.vue";
export default {
  name: "ProvinceList",
  props: {
    provinces: Array,
  },
  components: {
    ProvinceCard,
  },
};
</script>
