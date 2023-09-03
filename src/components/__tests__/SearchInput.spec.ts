import { beforeEach, describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { SearchInput } from '..'

const vuetify = createVuetify({
  components,
  directives
})

// v-debounce mocked fn
const debounce = vi.fn()

describe('Search Input Tests', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(SearchInput, {
      global: {
        plugins: [vuetify],
        directives: {
          debounce
        }
      }
    })
  })

  test('should emit the typed value', async () => {
    const input = wrapper.find('#searchInput')
    await input.setValue('cat')
    wrapper.vm.$emit('on:input-search', input.wrapperElement.value)
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('on:input-search')).toBeTruthy()
    expect(wrapper.emitted('on:input-search')).toEqual([['cat']])
  })
})
