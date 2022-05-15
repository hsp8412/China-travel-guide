<template>
  <div
    class="container d-flex flex-column must-do-card my-3"
    :class="leftBorderColor"
  >
    <p class="must-do-card-title mt-2">{{ mustDo.name }}</p>
    <p class="must-do-card-text">{{ mustDo.description }}</p>
    <img :src="mustDo.image" alt="must_do_img" class="must-do-img mb-3" />
  </div>
</template>

<script>
export default {
  name: "MustDoCard",
  props: {
    mustDo: Object,
    region: String,
  },
  data() {
    return { leftBorderColor: "" };
  },
  methods: {
    renderSeasons() {},
    renderLeftBorderColor() {
      switch (this.region) {
        case "North China":
          this.leftBorderColor = "left-border-orange";
          break;
        case "Northeast China":
          this.leftBorderColor = "left-border-purple";
          break;
        case "East China":
          this.leftBorderColor = "left-border-green";
          break;
        case "South China":
          this.leftBorderColor = "left-border-blue";
          break;
        case "Central China":
          this.leftBorderColor = "left-border-yellow";
          break;
        case "Northwest China":
          this.leftBorderColor = "left-border-brown";
          break;
        case "Southwest China":
          this.leftBorderColor = "left-border-red";
          break;
      }
    },
  },
  watch: {
    region: {
      immediate: true,
      handler() {
        this.renderLeftBorderColor();
      },
    },
  },
};
</script>

<style>
.must-do-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
.must-do-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.must-do-card-title {
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 18px;
}
.must-do-card-text {
  font-family: "Poppins", sans-serif;
  font-weight: normal;
  font-size: 15px;
}
.must-do-img {
  width: 80%;
  height: auto;
  margin-left: 10%;
  margin-right: 10%;
}
</style>
