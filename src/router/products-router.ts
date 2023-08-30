export default {
  component: () => import(/* webpackChunkName: "products-layout" */ '@/layouts/ProductsLayout.vue'),
  children: [
    {
      path: 'cat',
      name: 'cat',
      component: () =>
        import(/* webpackChunkName: "cat-views" */ '@/views/CatComponent.vue')
    },
    {
      path: 'dogs',
      name: 'dogs',
      component: () =>
        import(/* webpackChunkName: "dog-views" */ '@/views/DogComponent.vue')
    },
    {
      path: ':id',
      name: 'product-detail',
      component: () =>
        import(/* webpackChunkName: "product-detail-views" */ '@/views/ProductDetail.vue')
    }
  ]
}
