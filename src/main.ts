import './assets/main.scss'
import 'vuetify/styles'
import '../node_modules/nprogress/nprogress.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { vue3Debounce } from 'vue-debounce'

import App from './App.vue'
import router from './router'
import { vuetify } from './plugins/vuetify'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.directive('debounce', vue3Debounce({ lock: true }))
app.mount('#app')
