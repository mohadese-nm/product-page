import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
    path: '/',
    name: 'products',
    component: () => import ('../views/products.vue')
  },
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
