import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import LayoutMain from '@/LayoutMain.vue'
import { PageHome, PageLinks }from '@/pages'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: LayoutMain,
    children: [
      {
        path: '',
        component: PageHome
      },
      {
        path: '/links',
        component: PageLinks
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
