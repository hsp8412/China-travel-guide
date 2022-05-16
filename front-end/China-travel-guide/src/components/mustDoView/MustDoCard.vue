<template>
  <div
    class="container d-flex flex-column must-do-card my-3"
    :class="leftBorderColor"
  >
    <p class="must-do-card-title mt-2">{{ mustDo.name }}</p>
    <!--    <p class="must-do-card-text" style="white-space: pre-line">-->
    <!--      {{ mustDo.description }}-->
    <!--    </p>-->
    <nl2br tag="p" :text="mustDo.description" class="must-do-card-text" />
    <img :src="mustDo.image" alt="must_do_img" class="must-do-img mb-3" />
  </div>
</template>

<script>
import Nl2br from "vue3-nl2br/src/nl2br";
export default {
  name: "MustDoCard",
  components: {
    Nl2br,
  },
  props: {
    mustDo: Object,
    region: String,
  },
  data() {
    return { leftBorderColor: "" };
  },
  methods: {
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
    mustDo: {
      immediate: true,
      handler() {
        console.log(this.mustDo.description);
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
