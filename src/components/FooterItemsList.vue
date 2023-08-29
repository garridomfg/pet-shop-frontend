<template>
  <div class="ml-16 d-flex flex-column" v-for="item in footerItems" :key="item.title">
    <h4 class="text-black font-weight-bold">{{ item.title }}</h4>
    <a v-for="option in item.options" :key="option.label" :href="option.path" class="mt-1">
      {{ option.label }}
    </a>
  </div>
</template>
<script setup lang="ts">
import useFooter from '../composables/useFooter'
const { footerItems } = useFooter()
</script>
