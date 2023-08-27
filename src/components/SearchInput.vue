<template>
  <div>
    <v-text-field
      color="primary"
      base-color="primary"
      label="Search products"
      variant="outlined"
      v-model="searchTerm"
      @input.prevent="handleSearch"
    >
      <template v-slot:prepend-inner>
        <v-icon color="primary" base-color="primary">mdi-magnify</v-icon>
      </template>
    </v-text-field>
  </div>
</template>
<script setup lang="ts">
import useInput from '../composables/useInput'

const emit = defineEmits<{
  (e: 'on:input-search', term: string): void
}>()

const { searchTerm, handleSearch } = useInput(emit)
</script>
