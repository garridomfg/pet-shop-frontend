import { beforeEach, describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia, setActivePinia } from 'pinia'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { routes } from '../../router'
import { useUsersStore } from '../../stores/users'
import HomeView from '../HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes
})
const vuetify = createVuetify({
  components,
  directives
})

const debounce = vi.fn()

describe('Home View tests', () => {
  let wrapper
  beforeEach(() => {
    setActivePinia(createPinia())

    wrapper = mount(HomeView, {
      global: {
        plugins: [vuetify, router],
        directives: {
          debounce
        }
      }
    })
  })

  test('should match with snapshot', () => {
    const usersStore = useUsersStore()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
