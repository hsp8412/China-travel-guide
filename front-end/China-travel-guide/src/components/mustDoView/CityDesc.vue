<template>
  <div class="container">
    <img :src="city.image" alt="cityImage" class="city-img" />
    <p class="desc-text">{{ city.description }}</p>
  </div>
</template>

<script>
export default {
  name: "CityDesc",
  props: {
    city: Object,
  },
};
</script>

<style>
.city-img {
  width: 100%;
  height: auto;
}
.desc-text {
  font-family: "Poppins", sans-serif;
  font-style: italic;
}
</style>
