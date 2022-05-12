import { createRouter, createWebHistory } from 'vue-router'
import ProvinceView from '../views/ProvinceView.vue'
import CityView from '../views/CityView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProvinceView
    },
    {
      path: '/cities/:provinceId',
      name: 'cities',
      component: CityView
    }
  ]
})


export default router
