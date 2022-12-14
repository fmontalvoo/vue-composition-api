import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
  },
  {
    path: '/counter',
    name: 'counter',
    component: () => import('@/views/CounterView.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/views/UsersView.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/SearchView.vue')
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon',
    component: () => import('@/views/PokemonView.vue')
  },
  {
    path: '/todo',
    name: 'todo-list',
    component: () => import('@/views/TodoView.vue')
  },
  {
    path: '/slots',
    name: 'slots',
    component: () => import('@/views/CustomSlotsView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
