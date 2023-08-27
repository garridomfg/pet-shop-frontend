import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#4ec690',
          secondary: '#f09e00',
          greyscale: '#9fa2b4',
          grey: '#69817b',
          info: '#1976d2',
          mainInfo: '#2196f3',
          success: '#4caf50',
          'border-color': '#0000003b',
          'disabled-bg': 'rgba(0, 0, 0, 0.12)',
          'disabled-text': 'rgba(0, 0, 0, 0.26)',
          'text-secondary': 'rgba(0, 0, 0, 0.54)',
          'text-primary': 'rgba(0, 0, 0, 0.87)',
        }
      },
    },
  },
})