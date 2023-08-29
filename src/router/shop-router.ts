export default {
  component: () => import(/* webpackChunkName: "shop-layout" */ '@/layouts/ShopLayout.vue'),
  children: [
    {
      path: ':id',
      name: 'products-category',
      component: () =>
        import(/* webpackChunkName: "products-by-category" */ '@/views/ProductsByCategory.vue')
    }
  ]
}
