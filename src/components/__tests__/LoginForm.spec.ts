import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { createTestingPinia } from '@pinia/testing'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { routes } from '../../router'
import { useAuthStore } from '../../stores/auth'
import LoginForm from '../LoginForm.vue'

const router = createRouter({
  history: createWebHistory(),
  routes
})
const vuetify = createVuetify({
  components,
  directives
})

describe('Button Navigation Menu tests', () => {
  let wrapper
  const mockRouter = {
    push: vi.fn()
  }

  beforeEach(() => {
    wrapper = mount(LoginForm, {
      props: {
        toggleLoginRegister: vi.fn()
      },
      global: {
        plugins: [vuetify, router, createTestingPinia()],
        mocks: {
          $router: mockRouter
        }
      }
    })
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('should call handleSubmit correctly', async () => {
    const authStore = useAuthStore()

    const [email, password, check] = wrapper.findAll('input')

    await email.setValue('test@test.com')
    await password.setValue('test')
    await check.setValue(true)

    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    wrapper.vm.$emit('on:close-overlay')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('on:close-overlay')).toBeTruthy()
  })
})
