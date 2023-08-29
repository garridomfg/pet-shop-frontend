<template>
  <v-row>
    <div class="v-col v-col-12 mx-auto d-flex flex-column align-center">
      <search-input class="search-bar" @on:input-search="handleSearch" />
      <search-input-list v-if="products.length" :products="products" />
    </div>
    <promotions-carousel
      v-if="promotions.length"
      :promotions="promotions"
      class="v-col v-col-10 mx-auto mt-12"
    />
    <template v-for="(category, index) in categories" :key="category.uuid">
      <product-slider
        :title="category.title"
        :category-id="category.uuid"
        :products="productsByCategory[index]"
        class="v-col v-col-10 mx-auto mt-16"
      />
      <blog-post v-if="blogs.length" :blog="blogs[index]" :class="getBlogClass(index)" />
    </template>
  </v-row>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import useProducts from '../composables/useProducts'
import {
  BlogPost,
  ProductSlider,
  PromotionsCarousel,
  SearchInput,
  SearchInputList
} from '../components'

const {
  products,
  categories,
  promotions,
  blogs,
  handleSearch,
  getBlogClass,
  productsByCategory,
  fetchInitialData
} = useProducts()

onMounted(fetchInitialData)
</script>
