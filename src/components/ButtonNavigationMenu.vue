<template>
  <div class="d-flex align-center">
    <v-btn
      class="mx-3 text-white"
      size="large"
      variant="outlined"
      v-for="button in props.buttons"
      :key="button.label"
      @click="button.fn"
      :prepend-icon="button.icon"
    >
      <template v-if="button.icon ? button.icon : undefined" v-slot:prepend>
        <v-icon color="success"></v-icon>
      </template>
      {{ button.label }}
      <span v-if="button.count >= 0">({{ button.count }})</span>
    </v-btn>
  </div>
</template>
<script setup lang="ts">
import { NavButtons } from '../interfaces/navDropDowns'

const props = defineProps<{
  buttons: NavButtons[]
}>()
</script>
../interfaces/navbar