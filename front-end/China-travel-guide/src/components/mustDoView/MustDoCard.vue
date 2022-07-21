<template>
  <div class="container must-do-card my-3 px-4 py-3" :class="leftBorderColor">
    <div class="row">
      <div class="container col-12 col-md-6 p-3">
        <p class="must-do-card-title mb-4">{{ mustDo.name }}</p>
        <p class="must-do-card-content">
          <Markdown :source="mustDo.description" />
        </p>
      </div>
      <div
        class="container col-12 col-md-6 d-flex justify-content-center align-items-center p-3"
      >
        <img :src="mustDo.image" alt="" class="rounded must-do-img" />
      </div>
    </div>
  </div>
</template>

<script>
import Markdown from "vue3-markdown-it";
export default {
  name: "MustDoCard",
  components: {
    Markdown,
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
  font-size: 30px;
}
.must-do-card-content {
  font-family: "Poppins", sans-serif;
  font-weight: normal;
  font-size: 18px;
}

.must-do-img {
  max-width: 500px;
  width: 100%;
}
</style>
