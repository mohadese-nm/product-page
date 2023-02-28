import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/product',
    name: 'productDetails',
    component: () => import ('../components/productDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
