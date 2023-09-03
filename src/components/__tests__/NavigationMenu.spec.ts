import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { useUsersStore } from '../../stores/users'
import NavigationMenuVue from '../NavigationMenu.vue'
import { menuItems } from './menuItems.mock';



const vuetify = createVuetify({
  components,
  directives
})

describe('Navigation Menu Tests', () => {
  let wrapper
  const handleNavigation = vi.fn()

  beforeEach(() => {
    wrapper = mount(NavigationMenuVue, {
      props: {
        menuItems,
        handleNavigation
      },
      global: {
        plugins: [vuetify],
      }
    })
    setActivePinia(createPinia())
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('should render the component correctly', () => {
    const usersStore = useUsersStore()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should menu item clicked correctly', () => {
    const usersStore = useUsersStore()
    expect(wrapper.find('#Blog').exists()).toBeTruthy()
    wrapper.find('#Blog').trigger('click')

    expect(handleNavigation).toHaveBeenCalled()
  })
})
