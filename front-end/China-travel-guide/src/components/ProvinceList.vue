<template>
  <div class="container">
    <div :key="province.id" v-for="province in provinces">
      <ProvinceCard
        :province="province"
        @select-province="$emit('select-province', province.id)"
      />
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
