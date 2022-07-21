<template>
  <div class="container d-flex flex-column align-items-center">
    <div class="container d-flex justify-content-center">
      <img :src="city.image" alt="cityImage" class="city-img" />
    </div>
    <p class="desc-text text-center">{{ city.description }}</p>
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
.desc-text {
  font-family: "Poppins", sans-serif;
  font-style: italic;
}
.city-img {
  width: 90%;
  max-width: 700px;
  height: auto;
}
</style>
