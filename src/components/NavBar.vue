<template>
  <v-toolbar color="primary">
    <v-container class="py-0 fill-height d-flex justify-space-between">
      <!-- Brand logo -->
      <div class="d-flex align-center" style="cursor: pointer" @click="goToHome">
        <finger-print />
        <finger-print-text />
      </div>
      <!-- /Brand logo -->
      <!-- Center menu -->
      <navigation-menu :menu-items="menuItems" :handle-navigation="handleNavigation" />
      <!-- /Center menu -->
      <!-- Right menu -->
      <button-navigation-menu v-if="!usersStore.currentUser" :buttons="navButtons" />
      <div v-else>
       <logged-menu></logged-menu>
      </div>
      <!-- /Right menu -->
    </v-container>
  </v-toolbar>
</template>
<script setup lang="ts">
import useNavBarOpts from '../composables/useNavBarOpts'
import { ButtonNavigationMenu, NavigationMenu, LoggedMenu } from '.'
import { FingerPrint, FingerPrintText } from '../assets/icons'
import { useUsersStore } from '../stores/users'

const { menuItems, navButtons, handleNavigation, goToHome } = useNavBarOpts()
const usersStore = useUsersStore()
</script>