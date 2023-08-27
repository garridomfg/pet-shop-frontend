export default {
  component: () => import(/* webpackChunkName: "home-layout" */ '@/layouts/ShopLayout.vue'),
  children: [
    {
      path: '',
      name: 'home',
      component: () => import(/* webpackChunkName: "home-view" */ '@/views/HomeView.vue')
    },
    {
      path: '/cat',
      name: 'cat',
      component: () =>
        import(/* webpackChunkName: "cat-component" */ '@/components/CatComponent.vue')
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: () =>
        import(/* webpackChunkName: "dog-component" */ '@/components/DogComponent.vue')
    }
  ]
}
