<template>
  <div>
    <template v-if="props.products?.length >= 1">
      <p
        class="slider-title text-capitalize"
        @click="() => handleCategoriesByProduct(props.categoryId)"
      >
        {{ props.title }}
      </p>

      <v-slide-group class="pa-4" show-arrows>
        <v-slide-group-item v-for="product in props.products" :key="product.uuid">
          <div class="slider-card" @click="() => handleProductDetail(product.uuid)">
            <v-responsive>
              <v-img :height="220" cover :src="getImageUrl(product.metadata.image)"></v-img>
            </v-responsive>
            <p class="text-decoration-underline mt-4 mb-2 font-weight-bold text-h6">
              {{ product.title }}
            </p>
            <p class="text-capitalize" style="color: var(--text-secondary)">
              {{ product.category.title }}
            </p>
            <p class="font-weight-bold text-h6">{{ product.price }}</p>
          </div>
        </v-slide-group-item>
      </v-slide-group>
    </template>
    <template v-else>
      <empty-state />
    </template>
  </div>
</template>
<script setup lang="ts">
import { Data } from '../interfaces/products'
import useProducts from '../composables/useProducts'
import { EmptyState } from '.'

const props = defineProps<{
  products?: Data[] | []
  title?: string
  categoryId?: string
}>()

const { getImageUrl, handleProductDetail, handleCategoriesByProduct } = useProducts()
</script>
