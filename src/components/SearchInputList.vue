<template>
  <div>
    <v-card class="mt-0" max-width="628">
      <v-list>
        <v-list-item
          v-for="product in products"
          :key="product.uuid"
          :value="product.uuid"
          @click="() => handleProductDetail(product.uuid)"
        >
          <v-list-item-title>{{ product.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
<script setup lang="ts">
import useInput from '../composables/useInput'
import { Datum } from '../interfaces/products'

defineProps<{
  products: Datum[] | []
}>()

const { handleProductDetail } = useInput()
</script>
