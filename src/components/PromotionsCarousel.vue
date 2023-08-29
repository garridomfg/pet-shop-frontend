<template>
  <div class="promotion-carousel">
    <v-carousel show-arrows="hover" hide-delimiters cycle height="500">
      <v-carousel-item
        v-for="promotion in promotions"
        :key="promotion.uuid"
        cover
        eager
        height="500"
        :src="getImageUrl(promotion.metadata.image)"
      >
        <div class="px-10 py-6">
          <h1 class="text-h1 text-white pa-6">{{ promotion.title }}</h1>
          <p class="text-white mt-2 pa-2">{{ promotion.content }}</p>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script setup lang="ts">
import useProducts from '../composables/useProducts'
import { Datum } from '../interfaces/products'

defineProps<{
  promotions: Datum[] | []
}>()

const { getImageUrl } = useProducts()
</script>
