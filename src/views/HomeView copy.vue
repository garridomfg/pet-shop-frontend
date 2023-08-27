<template>
  <main class="container col-span-12">
    <shop-input
      class="search col-span-8 col-start-5 mt-6"
      :input-id="'searchBar'"
      :input-type="'text'"
      :input-place-holder="'Search products'"
      :input-custom-class="'shop-input_success'"
      @on:search="handleSearch"
    >
      <icon-search />
    </shop-input>
    <shop-result-list
      v-if="products.length"
      class="results-list col-span-8 col-start-5"
      :results="products"
    />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Datum } from '../interfaces/products'
import useApiGet from '../composables/useApiGet'
import productsApi from '../api/productsApi'
import { ShopInput, ShopResultList } from '../shared'
import { IconSearch } from '../assets/icons'

const { fetchData, error, fetchedData, isLoading } = useApiGet(productsApi)
const products = ref<Datum[] | []>([])

const handleSearch = async (term) => {
  if (!term) return (products.value = [])
  await fetchData(`/products?title=${term}`)

  if (fetchedData.value) {
    products.value = fetchedData.value.data
    console.log(products.value)
  }
}
</script>
