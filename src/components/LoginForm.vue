<template>
  <form @submit.prevent="handleSubmit" class="login-form elevation-2 px-16 py-12">
    <div class="d-flex flex-column align-center justify-center">
      <footer-logo class="d-flex flex-column justify-center align-center text-white logo-wrapper" />
      <p class="text-h5 text-center mt-3 mb-5">Login</p>
      <v-col class="col-12">
        <v-row>
          <form-builder :fields="loginFields" />
        </v-row>
      </v-col>
      <v-btn
        type="submit"
        variant="elevated"
        class="text-white"
        block
        style="background-color: var(--primary500)"
        :loading="authStore.isLoading"
        >LOG IN</v-btn
      >
      <div class="d-flex justify-space-between mt-10 w-100">
        <span class="auth-actions" @click="handleRecoverPassword">Forgot password?</span>
        <span class="auth-actions" @click="toggleLoginRegister"
          >Don't have an account? Sign up</span
        >
      </div>
      <div v-if="authStore.errorMessage" class="text-red font-weight-bold">
        {{ authStore.errorMessage }}
      </div>
    </div>
  </form>
</template>
<script setup lang="ts">
import { useForm } from 'vee-validate'
import useLogin from '../composables/useLogin'
import FormBuilder from './FormBuilder.vue'
import FooterLogo from '@/assets/icons/FooterLogo.vue'
import { useAuthStore } from '../stores/auth'
import { useUsersStore } from '../stores/users'
import { UserRegistration } from '../interfaces/login'

defineProps<{
  toggleLoginRegister: () => void
}>()

const emit = defineEmits<{
  (e: 'on:close-overlay'): void
}>()

const { controlledValues } = useForm()
const { handleRecoverPassword, loginFields } = useLogin()
const authStore = useAuthStore()
const usersStore = useUsersStore()

const handleSubmit = async () => {
  const user: UserRegistration = { ...controlledValues.value }
  await authStore.login(user)
  await usersStore.getUser()
  emit('on:close-overlay')
}
</script>
