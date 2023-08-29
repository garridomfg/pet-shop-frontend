<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <shop-footer></shop-footer>
  </v-app>
</template>
<script setup lang="ts">
import { NavBar, ShopFooter } from './components'
</script>
