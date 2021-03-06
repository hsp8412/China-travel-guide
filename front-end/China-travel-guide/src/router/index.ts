import { createRouter, createWebHistory } from "vue-router";
import ProvinceView from "../views/ProvinceView.vue";
import CityView from "../views/CityView.vue";
import MustDoView from "../views/MustDoView.vue";
import WelcomeView from "../views/WelcomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: WelcomeView,
    },
    {
      path: "/provinces",
      name: "provinces",
      component: ProvinceView,
    },
    {
      path: "/cities/:provinceId",
      name: "cities",
      component: CityView,
      props: true,
    },
    {
      path: "/mustDos/:cityId",
      name: "mustDos",
      component: MustDoView,
      props: true,
    },
  ],
});

export default router;
