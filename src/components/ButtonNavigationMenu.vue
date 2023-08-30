<template>
  <div class="d-flex align-center">
    <v-overlay class="d-flex align-center justify-center" @click:outside="isLogin = true">
      <template #activator="{ props }">
        <v-btn
          v-bind="button.label === 'LOGIN' ? props : null"
          class="mx-3 text-white"
          size="large"
          variant="outlined"
          v-for="button in props.buttons"
          :key="button.label"
          @click="button.fn"
          :prepend-icon="button.icon"
        >
          <template v-if="button.icon ? button.icon : undefined" v-slot:prepend>
            <v-icon color="success"></v-icon>
          </template>
          {{ button.label }}
          <span v-if="button.count >= 0">({{ button.count }})</span>
        </v-btn>
      </template>
      <login-form v-if="isLogin" :toggle-login-register="toggleLoginRegister" />
      <register-form v-else :toggle-login-register="toggleLoginRegister" />
    </v-overlay>
  </div>
</template>
<script setup lang="ts">
import useLogin from '../composables/useLogin'
import { NavButtons } from '../interfaces/navbar'
import { LoginForm, RegisterForm } from '.'

const emit = defineEmits<{
  (e: 'on:toggle-menu', isLogin: boolean): void
}>()

const props = defineProps<{
  buttons: NavButtons[]
}>()

const { isLogin, toggleLoginRegister } = useLogin(emit)
</script>
