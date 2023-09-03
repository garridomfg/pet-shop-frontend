import type { NavDropDown } from "@/interfaces/navbar";

export const menuItems: NavDropDown[] = [
  {
    label: 'Products',
    isDropDown: true,
    options: [
      { path: '/products/cat', label: 'Cats' },
      { path: '/products/dogs', label: 'Dogs' }
    ]
  },
  {
    label: 'Promotions',
    isDropDown: false,
    options: [{ path: '/promotions', label: 'Promotions' }]
  },
  {
    label: 'Blog',
    isDropDown: false,
    options: [{ path: '/blog', label: 'Blog' }]
  }
]