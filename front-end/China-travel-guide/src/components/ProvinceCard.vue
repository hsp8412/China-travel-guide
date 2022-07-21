<template>
  <router-link
    :to="{ name: 'cities', params: { provinceId: `${province._id}` } }"
    style="text-decoration: none"
  >
    <div class="card row my-2" :class="leftBorderColor">
      <div class="col-4 my-auto">
        <p class="card-title mb-0">{{ province.name }}</p>
      </div>
      <div class="col-8 my-auto">
        <p class="card-text mb-0">{{ renderTags() }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import { getRegion } from "@/service/regionService";

export default {
  name: "ProvinceCard",
  props: {
    province: Object,
  },
  data() {
    return {
      leftBorderColor: "",
    };
  },
  methods: {
    renderTags() {
      if (this.province.tags.length < 3) {
        let tagString = "";
        this.province.tags.forEach((tag) => {
          const tagPiece = `${tag}, `;
          tagString += tagPiece;
        });
        return tagString.slice(0, -2);
      } else {
        return `${this.province.tags[0]}, ${this.province.tags[1]}, ${this.province.tags[2]}`;
      }
    },
  },
  async created() {
    const regionId = this.province.regionId;
    console.log(regionId);
    const res = await getRegion(regionId);
    console.log(res.data.name);
    switch (res.data.name) {
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
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");
.card {
  border-style: solid;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 50px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.card-text {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 15px;
}
.card-title {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 18px;
}
.left-border-red {
  border-left-color: red !important;
  border-left-style: solid !important;
  border-left-width: 7px !important;
}
.left-border-blue {
  border-left-color: blue !important;
  border-left-style: solid !important;
  border-left-width: 7px !important;
}
.left-border-green {
  border-left-color: green !important;
  border-left-style: solid !important;
  border-left-width: 7px !important;
}
.left-border-orange {
  border-left-color: orange !important;
  border-left-style: solid !important;
  border-left-width: 7px !important;
}

.left-border-yellow {
  border-left-color: yellow !important;
  border-left-style: solid !important;
  border-left-width: 7px !important;
}

.left-border-purple {
  border-left-color: purple !important;
  border-left-style: solid !important;
  border-left-width: 7px !important;
}

.left-border-brown {
  border-left-color: brown !important;
  border-left-style: solid !important;
  border-left-width: 7px !important;
}
</style>
