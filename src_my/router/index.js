import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CategoriesMain from '../views/categories/Main'
import signIn from '../views/auth/singIn'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categories',
    name: 'CategoriesMain',
    component: CategoriesMain
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: signIn
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
