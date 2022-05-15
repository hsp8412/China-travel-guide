<template>
  <div class="container">
    <div :key="mustDo._id" v-for="mustDo in mustDos">
      <MustDoCard :mustDo="mustDo" :region="region" />
    </div>
  </div>
</template>

<script>
import MustDoCard from "./MustDoCard.vue";
export default {
  components: { MustDoCard },
  props: {
    mustDos: Array,
    region: String,
  },
};
</script>

<style></style>
