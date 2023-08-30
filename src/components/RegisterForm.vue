<template>
  <div class="login-form elevation-2 px-16 py-12" style="max-height: 890px;">
    <div class="d-flex flex-column align-center justify-center">
      <footer-logo class="d-flex flex-column justify-center align-center text-white logo-wrapper" />
      <p class="text-h5 text-center mt-3 mb-5">Sign up</p>
    </div>
    <v-row>
      <v-col class="v-col-6">
        <shop-input :input-label="'First Name*'" :input-type="'text'"></shop-input>
      </v-col>
      <v-col class="v-col-6">
        <shop-input :input-label="'Last Name*'" :input-type="'text'"></shop-input
      ></v-col>
      <v-col class="v-col-12"
        ><shop-input :input-label="'Email Address*'" :input-type="'email'"></shop-input
      ></v-col>
      <v-col class="v-col-12"
        ><shop-input :input-label="'Phone Number*'" :input-type="'number'"></shop-input
      ></v-col>
      <v-col class="v-col-12"
        ><shop-input :input-label="'Address*'" :input-type="'text'"></shop-input
      ></v-col>
      <v-col class="v-col-12"
        ><shop-input :input-label="'Password*'" :input-type="'password'"></shop-input
      ></v-col>
      <v-col class="v-col-12"
        ><shop-input :input-label="'Confirm Password*'" :input-type="'password'"></shop-input
      ></v-col>
      <v-col class="v-col-12"
        ><shop-input
          class="align-self-start"
          :input-label="'I want to receive inspiration, marketing promotions and updates via email.'"
          :input-type="'checkbox'"
        ></shop-input
      ></v-col>
    </v-row>
    <v-btn variant="elevated" class="text-white" block style="background-color: var(--primary500)"
      >SIGN UP</v-btn
    >
    <div class="d-flex justify-center mt-5 w-100">
      <span class="auth-actions" @click="toggleLoginRegister">Already have an account? Login</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { FooterLogo } from '../assets/icons'
import ShopInput from './ShopInput.vue'

defineProps<{
  toggleLoginRegister: () => void
}>()
</script>
