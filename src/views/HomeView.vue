<template>
  <template class="d-flex flex-column justify-center align-center">
    <search-input class="search" @on:input-search="handleSearch" />
    <search-input-list v-if="products.length" :products="products"></search-input-list>
  </template>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Datum } from '../interfaces/products'
import useProductsGet from '../composables/useProductsGet'
import productsApi from '../api/productsApi'
import { SearchInput, SearchInputList } from '../components'

const { fetchData, fetchedData } = useProductsGet(productsApi)
const products = ref<Datum[] | []>([])

// TODO Migrar a composable

const handleSearch = async (term) => {
  if (!term) return (products.value = [])
  await fetchData(`/products?title=${term}`)

  if (fetchedData.value) {
    products.value = fetchedData.value.data
  }
}
</script>
