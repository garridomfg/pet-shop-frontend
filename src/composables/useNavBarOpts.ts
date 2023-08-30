import { computed } from 'vue'
import { useRouter, type Router } from 'vue-router'
import type { DropDownOption, NavButtons, NavDropDown } from '../interfaces/navbar'
import { ShopCar } from '@/assets/icons'

const useNavBarOpts = () => {
  const router: Router = useRouter()

  const productOpts: DropDownOption[] = [
    { path: '/products/cat', label: 'Cats' },
    { path: '/products/dogs', label: 'Dogs' }
  ]

  const promotions: DropDownOption[] = [{ path: '/promotions', label: 'Promotions' }]
  const blog: DropDownOption[] = [{ path: '/blog', label: 'Blog' }]

  const menuItems = computed<NavDropDown[]>(() => [
    {
      label: 'Products',
      isDropDown: true,
      options: productOpts
    },
    {
      label: 'Promotions',
      isDropDown: false,
      options: promotions
    },
    {
      label: 'Blog',
      isDropDown: false,
      options: blog
    }
  ])

  const navButtons = computed<NavButtons[]>(() => [
    {
      icon: ShopCar,
      label: 'CART',
      count: 0,
      fn: () => router.push({ path: '/cart' })
    },
    {
      label: 'LOGIN',
      fn: () => {}
    }
  ])

  const goToHome = (): void => {
    router.push({ path: '/' })
  }

  const handleNavigation = (path: string): void => {
    router.push({ path })
  }

  return {
    // Computed
    menuItems,
    navButtons,

    // Methods
    goToHome,
    handleNavigation
  }
}

export default useNavBarOpts
