<template>
  <v-btn class="mx-3 text-white" size="large" variant="outlined" @click="handleLogout"
    >LOGOUT</v-btn
  >
  <v-avatar class="text-white" variant="outlined" @click="openOverlay">
    <!-- Mocked image -->
    <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
  </v-avatar>
  <v-overlay v-model="showOverlay" class="d-flex align-center justify-center"
    ><user-details />
  </v-overlay>
</template>
<script setup lang="ts">
import useOverlay from '../composables/useOverlay'
import { useAuthStore } from '../stores/auth'
import { UserDetails } from '.'
import { useUsersStore } from '../stores/users'

const authStore = useAuthStore()
const usersStore = useUsersStore()
const { closeOverlay, openOverlay, showOverlay } = useOverlay()

const handleLogout = (): void => {
  authStore.logout()
  usersStore.removeUser()
}
</script>
