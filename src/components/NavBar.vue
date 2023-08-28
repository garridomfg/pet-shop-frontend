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
      <button-navigation-menu :buttons="navButtons" />
      <!-- /Right menu -->
    </v-container>
  </v-toolbar>
</template>
<script setup lang="ts">
import useNavBarOpts from '../composables/useNavBarOpts'
import { ButtonNavigationMenu, NavigationMenu } from '.'
import { FingerPrint, FingerPrintText } from '@/assets/icons'

const { menuItems, navButtons, handleNavigation, goToHome } = useNavBarOpts()
</script>
