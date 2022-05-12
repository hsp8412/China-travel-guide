import { createRouter, createWebHistory } from 'vue-router'
import ProvinceView from '../views/ProvinceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProvinceView
    },
  ]
})


export default router
