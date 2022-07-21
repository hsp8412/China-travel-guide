<template>
  <div class="container row px-0">
    <h2 class="mt-3">Choose a province:</h2>
    <div
      :key="province._id"
      v-for="province in provinces"
      class="col-12 col-md-6 px-4"
    >
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
