import { computed, type ComputedRef } from 'vue'
import type { DropDownOption, NavButtons, NavDropDown } from '@/interfaces/navDropDowns'
import { ShopCar } from '@/assets/icons'
import { useRouter, type Router } from 'vue-router'

const useNavBarOpts = () => {
  const router: Router = useRouter()
  const productOpts: DropDownOption[] = [
    { path: '/products/cat', label: computed(() => 'Gatos') },
    { path: '/products/dogs', label: computed(() => 'Perros') }
  ]
  const promotionsOpts: DropDownOption[] = [
    { path: '/promotions', label: computed(() => 'Promotions') }
  ]
  const blogOpts: DropDownOption[] = [{ path: '/blog', label: computed(() => 'Blog') }]

  const navDropDowns: ComputedRef<NavDropDown[]> = computed(() => [
    {
      label: 'Products',
      isDropDown: true,
      options: productOpts
    },
    {
      label: 'Promotions',
      isDropDown: false,
      options: promotionsOpts
    },
    {
      label: 'Blog',
      isDropDown: false,
      options: blogOpts
    }
  ])

  const navButtons: ComputedRef<NavButtons[]> = computed(() => [
    {
      icon: ShopCar,
      label: 'CART',
      count: 0,
      fn: () => router.push({path: '/cart'})
    },
    {
      label: 'LOGIN',
      fn: () => {
        console.log('HOLA PA')
      }
    }
  ])

  return {
    // Computed
    navDropDowns,
    navButtons
  }
}

export default useNavBarOpts
