import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/content1',
    name: 'Content1',
    component: () => import('@/views/Content1.vue')
  },
  {
    path: '/content2',
    name: 'Content2',
    component: () => import('@/views/Content2.vue')
  },
  {
    path: '/content3',
    name: 'Content3',
    component: () => import('@/views/Content3.vue')
  },
  {
    path: '/content4',
    name: 'Content4',
    component: () => import('@/views/Content4.vue')
  },
  {
    path: '/content5',
    name: 'Content5',
    component: () => import('@/views/Content5.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router