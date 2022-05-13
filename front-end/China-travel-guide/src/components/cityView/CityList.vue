<template>
  <div class="container">
    <div :key="city._id" v-for="city in cities">
      <CityCard :city="city" />
    </div>
  </div>
</template>

<script>
import CityCard from "@/components/cityView/CityCard.vue";
export default {
  name: "CityList",
  components: { CityCard },
  props: {
    cities: Array,
  },
};
</script>
