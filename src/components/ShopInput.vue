<template>
  <v-text-field
    v-if="inputType !== 'checkbox'"
    v-model="inputText"
    :type="inputType"
    :label="inputLabel"
    variant="outlined"
    class="mb-2"
  ></v-text-field>
  <v-checkbox v-else :label="inputLabel"></v-checkbox>
</template>
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  inputType: string
  inputLabel: string
}>()

const inputText = ref<string>('')
</script>

<style>
.v-input__details {
  display: none;
}
</style>
