import './assets/main.scss'
import 'vuetify/styles'
import '../node_modules/nprogress/nprogress.css'
import 'vue-toast-notification/dist/theme-sugar.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { vue3Debounce } from 'vue-debounce'
import { defineRule } from 'vee-validate'
import { email } from '@vee-validate/rules'

import App from './App.vue'
import router from './router'
import { vuetify } from './plugins/vuetify'
import { required, minLength, confirmed } from './plugins/vee-validate'

// vee-validate validators
defineRule('required', required)
defineRule('minLength', minLength)
defineRule('confirmed', confirmed)
defineRule('email', email);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.directive('debounce', vue3Debounce({ lock: true }))
app.mount('#app')
