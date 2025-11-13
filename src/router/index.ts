import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import LayoutMain from '@/LayoutMain.vue'
import PageHome from '@/pages/PageHome/PageHome.vue'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: LayoutMain,
    children: [
      {
        path: '',
        component: PageHome
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
