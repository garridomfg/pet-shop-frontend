<template>
  <v-app>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </v-app>
</template>
<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>
