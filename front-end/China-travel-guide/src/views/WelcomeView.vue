<template>
  <div class="welcome-container">
    <img src="tiantan.jpeg" alt="" class="welcome-img" />
    <div class="welcome-text text-center">
      <h1>Welcome!</h1>
      <h3>Let us explore China.</h3>
      <router-link :to="{ name: 'provinces' }"
        ><button class="welcome-btn mt-3">Go</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { getProvinces } from "@/service/provinceService";
import ProvinceList from "@/components/ProvinceList.vue";
export default {
  components: {
    ProvinceList,
  },
  data() {
    return {
      provinces: [],
    };
  },
  methods: {
    async fetchProvinces() {
      const res = await getProvinces();
      console.log(res.data);
      return res.data;
    },
    selectProvince(provinceId) {},
  },
  async created() {
    this.provinces = await this.fetchProvinces();
  },
};
</script>

<style>
.welcome-container {
  position: relative;
  width: 100%;
  height: 100vh;
}

.welcome-text {
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: darkblue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-name: show-welcome;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

.welcome-img {
  width: 100%;
  height: auto;
  opacity: 0.5;
}

.welcome-btn {
  background-color: rgba(0, 0, 0, 0);
  color: darkblue;
  border: 5px solid darkblue;
  border-radius: 30px;
  padding: 1.5px 14px;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

@keyframes show-welcome {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .welcome-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .welcome-text {
    position: static;
    width: 80%;
    transform: translate(0%, 0%);
    margin-top: 2rem;
    border: 4px solid darkblue;
    border-radius: 30px;
    padding: 20px 0px;
  }
}

.welcome-btn:hover {
  background-color: darkblue;
  color: white;
}
</style>
