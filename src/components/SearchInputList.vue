<template>
  <div>
    <v-card class="mt-0" max-width="628">
      <v-list>
        <v-list-item
          v-for="product in props.products"
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
import useProducts from '../composables/useProducts';
import { Data } from '../interfaces/products'

const props = defineProps<{
  products: Data[] | []
}>()

const { handleProductDetail } = useProducts()
</script>