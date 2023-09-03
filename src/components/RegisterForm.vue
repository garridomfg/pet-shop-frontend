<template>
  <form @submit.prevent="handleSubmit" class="login-form elevation-2 px-16 py-12">
    <div class="d-flex flex-column align-center justify-center">
      <footer-logo class="d-flex flex-column justify-center align-center text-white logo-wrapper" />
      <p class="text-h5 text-center mt-3 mb-5">Sign up</p>
    </div>
    <v-row>
      <form-builder :fields="registerFields" />
    </v-row>
    <v-btn
      type="submit"
      variant="elevated"
      class="text-white"
      block
      style="background-color: var(--primary500)"
      :loading="isLoading"
      >SIGN UP</v-btn
    >
    <div class="d-flex justify-center mt-5 w-100">
      <span class="auth-actions" @click="toggleLoginRegister">Already have an account? Login</span>
    </div>
    <div v-if="errorMessage" class="text-red font-weight-bold">{{ errorMessage }}</div>
  </form>
</template>
<script setup lang="ts">
import { useForm } from 'vee-validate'
import useLogin from '../composables/useLogin'
import FormBuilder from './FormBuilder.vue'
import { FooterLogo } from '../assets/icons'

const props = defineProps<{
  toggleLoginRegister: () => void
}>()

const emit = defineEmits<{
  (e: 'on:close-overlay'): void
  (e: 'on:toggle-menu'): void
}>()

const { controlledValues, validate, resetForm } = useForm()
const { registerFields, handleRegister, errorMessage, isLoading, onTriggerToast } = useLogin(emit)

const handleSubmit = async () => {
  const { valid } = await validate()
  if (!valid) return
  const user = {
    ...controlledValues.value
  }
  await handleRegister(user)
  if (errorMessage.value) {
    onTriggerToast('Something went wrong', 'error', 1000)
    return
  }
  resetForm()
  props.toggleLoginRegister()
}
</script>
