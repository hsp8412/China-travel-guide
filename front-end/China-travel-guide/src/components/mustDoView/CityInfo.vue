<template>
  <div class="container">
    <h1 class="city-name mt-2" :class="titleColor">{{ city.name }}</h1>
    <p class="city-text">
      {{ renderPopulation()
      }}<span class="city-text-bold">{{
        city.population ? city.population.toLocaleString("en-US") : ""
      }}</span
      >.
    </p>
    <p class="city-text" v-if="city.hasInternationalAirport">
      The city has
      {{ renderNumOfAirports() }} international airport{{
        renderAirportsPlural()
      }}: <span class="city-text-bold">{{ renderAirports() }}</span
      >.
    </p>
    <p class="city-text" v-if="city.hasTrainStation">
      The City has {{ renderNumOfTrainStations() }} railway station{{
        renderTrainStationPlural()
      }}: <span class="city-text-bold">{{ renderTrainStations() }}</span>
    </p>
    <p class="city-text" v-if="city.hasRapidTransit">
      This city has a rapid transit system.
    </p>
  </div>
</template>

<script>
export default {
  name: "CityInfo",
  props: {
    city: Object,
    province: Object,
    region: Object,
  },
  data() {
    return { titleColor: "" };
  },
  methods: {
    renderPopulation() {
      if (this.city.population > 10000000) {
        return `This is a megacity with a population of `;
      } else if (this.city.population > 5000000) {
        return `This is a large city with a population of `;
      } else {
        return `This is a city with a population of `;
      }
    },
    renderNumOfAirports() {
      return this.city.airport.length;
    },
    renderAirportsPlural() {
      if (this.city.airport.length > 1) return "s";
      else {
        return "";
      }
    },
    renderAirports() {
      return this.city.airport.join(", ");
    },
    renderNumOfTrainStations() {
      return this.city.trainStation.length;
    },
    renderTrainStationPlural() {
      if (this.city.trainStation.length > 1) return "s";
      else return "";
    },
    renderTrainStations() {
      return this.city.trainStation.join(", ");
    },
    renderTitleColor() {
      console.log(this.region.name);
      switch (this.region.name) {
        case "North China":
          this.titleColor = "orange-text";
          break;
        case "Northeast China":
          this.titleColor = "purple-text";
          break;
        case "East China":
          this.titleColor = "green-text";
          break;
        case "South China":
          this.titleColor = "blue-text";
          break;
        case "Central China":
          this.titleColor = "yellow-text";
          break;
        case "Northwest China":
          this.titleColor = "brown-text";
          break;
        case "Southwest China":
          this.titleColor = "red-text";
          break;
        default:
          this.titleColor = "";
      }
    },
  },
  watch: {
    region: {
      immediate: true,
      handler() {
        this.renderTitleColor();
      },
    },
  },
};
</script>

<style>
.city-name {
  font-family: "Poppins", sans-serif;
  font-weight: bold;
}
.city-text {
  font-family: "Poppins", sans-serif;
  font-weight: normal;
}
.city-text-bold {
  font-family: "Poppins", sans-serif;
  font-weight: bold;
}
.orange-text {
  color: orange;
}
.purple-text {
  color: purple;
}
.green-text {
  color: green;
}
.blue-text {
  color: blue;
}
.yellow-text {
  color: yellow;
}
.brown-text {
  color: brown;
}
.red-text {
  color: red;
}
</style>
