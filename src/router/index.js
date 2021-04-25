import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog2 from '../views/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/price',
    name: 'Price',
    component: () => import('@/views/Price.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
