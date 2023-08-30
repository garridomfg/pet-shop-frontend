<template>
  <div class="login-form elevation-2 px-16 py-12">
    <div class="d-flex flex-column align-center justify-center">
      <footer-logo class="d-flex flex-column justify-center align-center text-white logo-wrapper" />
      <p class="text-h5 text-center mt-3 mb-5">Login</p>
      <v-col class="col-12">
        <shop-input :input-label="'Email'" :input-type="'email'"></shop-input>
        <shop-input :input-label="'Password'" :input-type="'password'"></shop-input>
        <shop-input
          class="align-self-start"
          :input-label="'Remember me'"
          :input-type="'checkbox'"
        ></shop-input>
      </v-col>
      <v-btn variant="elevated" class="text-white" block style="background-color: var(--primary500)"
        >LOG IN</v-btn
      >
      <div class="d-flex justify-space-between mt-10 w-100">
        <span class="auth-actions" @click="handleRecoverPassword">Forgot password?</span>
        <span class="auth-actions" @click="toggleLoginRegister"
          >Don't have an account? Sign up</span
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import FooterLogo from '@/assets/icons/FooterLogo.vue'
import { ShopInput } from '.'
import useLogin from '../composables/useLogin';

defineProps<{
  toggleLoginRegister: () => void
}>()

const {handleRecoverPassword} = useLogin()
</script>
