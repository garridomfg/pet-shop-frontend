<template>
  <template class="d-block">
    <v-container>
      <v-row>
        <div class="v-col v-col-12 mx-auto d-flex flex-column align-center">
          <search-input class="search-bar" @on:input-search="handleSearch" />
          <search-input-list v-if="products.length" :products="products"></search-input-list>
        </div>
        <promotions-carousel :promotions="promotions" class="v-col v-col-10 mx-auto mt-12" />
        <product-slider
          :title="categories[0]?.title"
          :category-id="categories[0]?.uuid"
          :products="productsByCategory"
          class="v-col v-col-10 mx-auto mt-16"
        />
      </v-row>
    </v-container>
  </template>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Datum } from '../interfaces/products'
import useProductsGet from '../composables/useProductsGet'
import shopApi from '../api/shopApi'
import { SearchInput, SearchInputList, PromotionsCarousel, ProductSlider } from '../components'

const { fetchData, fetchedData } = useProductsGet(shopApi)
const { fetchData: fetchPromotions, fetchedData: fetchedPromotions } = useProductsGet(shopApi)
const { fetchData: fetchCategories, fetchedData: fetchedCategories } = useProductsGet(shopApi)
const { fetchData: fetchProductsByCat, fetchedData: fetchedProductsByCat } = useProductsGet(shopApi)
const products = ref<Datum[] | [] | undefined>([])
const promotions = ref<Datum[] | [] | undefined>([])
const categories = ref<Datum[] | [] | undefined>([])
const productsByCategory = ref<Datum[] | [] | undefined>([])

// TODO move to composable
const handleSearch = async (term) => {
  if (!term) return (products.value = [])
  await fetchData(`/products?title=${term}`)

  if (fetchedData.value) {
    products.value = fetchedData.value.data
  }
}

onMounted(async () => {
  await fetchPromotions(`/main/promotions`)
  await fetchCategories('/categories?page=1&limit=2')

  if (fetchedPromotions.value) {
    promotions.value = fetchedPromotions.value.data
  }

  if (fetchedCategories.value) {
    categories.value = fetchedCategories.value.data

    categories.value.forEach((category) => {
      fetchProductsByCategory(category.uuid)
    })
  }
})

const fetchProductsByCategory = async (id: string) => {
  await fetchProductsByCat(`/products?category=${id}`)
  if (fetchedProductsByCat.value) {
    productsByCategory.value = fetchedProductsByCat.value.data
  }
}
</script>
