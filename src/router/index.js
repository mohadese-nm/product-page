import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
    path: '/',
    name: 'products',
    component: () => import ('../views/productsList.vue')
  },
  {
    path: '/product/:id',
    name: 'productDetails',
    component: () => import('../components/productDetails.vue'),
    props: true,
    redirect: {name: 'productDescription'},
    children: [
      {
        path: '/product/:id/description',
        name: 'productDescription',
        component: () => import('../components/productDescription.vue'),
        props: true
      },
      {
        path: '/product/:id/comments',
        name: 'productComments',
        component: () => import('../components/productComments.vue'),
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
