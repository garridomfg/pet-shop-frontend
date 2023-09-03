import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { routes } from '../../router'
import { useUsersStore } from '../../stores/users'
import { ProductSlider } from '..'
import { products } from './products.mock'

const vuetify = createVuetify({
  components,
  directives
})

const router = createRouter({
  history: createWebHistory(),
  routes
})

global.ResizeObserver = require('resize-observer-polyfill')

describe('Product Slider Tests', () => {
  let wrapper
  let usersStore
  const mockRouter = {
    push: vi.fn()
  }
  beforeEach(() => {
    setActivePinia(createPinia())
    usersStore = useUsersStore()

    wrapper = mount(ProductSlider, {
      props: {
        title: 'Pet Clean-Up And Odor Control',
        categoryId: '4bd58125-b298-3dc4-97f6-fc275d106c2a',
        products
      },
      global: {
        plugins: [vuetify, router],
        mocks: {
          $router: mockRouter
        }
      }
    })
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('should render the component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should render the title prop correctly', () => {
    expect(wrapper.find('p').text()).toBe('Pet Clean-Up And Odor Control')
  })
})
