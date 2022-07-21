<template>
  <div class="container row px-0">
    <div :key="city._id" v-for="city in cities" class="col-12 col-md-6 px-4">
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
