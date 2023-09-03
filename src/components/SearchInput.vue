<template>
  <div>
    <v-text-field
      id="searchInput"
      color="primary"
      base-color="primary"
      label="Search products"
      variant="outlined"
      v-model="searchTerm"
      v-debounce.200ms="handleSearch"
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

<style>
.v-text-field .v-input__details {
  display: none;
}
</style>
