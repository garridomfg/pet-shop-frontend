<template>
  <footer style="background-color: var(--primary50)">
    <v-container class="py-16 d-flex justify-center">
      <div class="d-flex align-center">
        <footer-logo class="footer-logo" />
        <footer-items-list />
        <div class="ml-16 align-self-center" style="max-width: 240px">
          <span> If you can't find answer to your question, please contact our </span><br /><a
            href=""
            style="color: var(--info)"
            >customer service</a
          >
        </div>
      </div>
    </v-container>
  </footer>
</template>
<script setup lang="ts">
import { FooterItemsList } from '.';
import { FooterLogo } from '../assets/icons'
</script>
