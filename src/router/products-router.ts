export default {
  component: () => import(/* webpackChunkName: "home-layout" */ '@/layouts/ShopLayout.vue'),
  children: [
    {
      path: 'cat',
      name: 'cat',
      component: () =>
        import(/* webpackChunkName: "cat-component" */ '@/components/CatComponent.vue')
    },
    {
      path: 'dogs',
      name: 'dogs',
      component: () =>
        import(/* webpackChunkName: "dog-component" */ '@/components/DogComponent.vue')
    },
    {
      path: ':id',
      name: 'product-detail',
      component: () =>
        import(/* webpackChunkName: "product-detail-component" */ '@/components/ProductDetail.vue')
    }
  ]
}
