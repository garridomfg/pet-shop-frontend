import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import productsRouter from './products-router'

NProgress.configure({ showSpinner: false })

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home-view" */ '@/views/HomeView.vue')
  },
  {
    path: '/products',
    name: 'products',
    ...productsRouter
  },
  {
    path: '/promotions',
    name: 'promotions',
    component: () => import(/* webpackChunkName: "promotion-view" */ '@/views/PromotionView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "blog-view" */ '@/views/BlogView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "blog-view" */ '@/views/CartView.vue')
  },
  {
    path: '/:pathMatch(.*)+',
    name: '404',
    component: () => import(/* webpackChunkName: "404-view" */ '@/views/PageNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  if (to.name) {
    NProgress.start()
  }

  console.log(from)
})

router.afterEach(() => {
  NProgress.done()
})

export default router
