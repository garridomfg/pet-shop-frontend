<template>
  <template class="d-block">
    <v-row>
      <div class="v-col v-col-12 mx-auto d-flex flex-column align-center">
        <search-input class="search-bar" @on:input-search="handleSearch" />
        <search-input-list v-if="products.length" :products="products"></search-input-list>
      </div>
      <promotions-carousel :promotions="promotions" class="v-col v-col-10 mx-auto mt-12" />
      <product-slider
        :title="categories[0]?.title"
        :category-id="categories[0]?.uuid"
        :products="productsByCategory[0]"
        class="v-col v-col-10 mx-auto mt-16"
      />
      <blog-post v-if="blogs.length" :blog="blogs[0]" class="v-col v-col-10 mt-16 mx-auto" />
      <product-slider
        :title="categories[1]?.title"
        :category-id="categories[1]?.uuid"
        :products="productsByCategory[1]"
        class="v-col v-col-10 mx-auto"
      />
      <blog-post
        v-if="blogs.length"
        :blog="blogs[1]"
        class="v-col v-col-10 mt-16 mx-auto flex-row-reverse"
      />
    </v-row>
  </template>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Data } from '../interfaces/products'
import useProductsGet from '../composables/useProductsGet'
import shopApi from '../api/shopApi'
import {
  SearchInput,
  SearchInputList,
  PromotionsCarousel,
  ProductSlider,
  BlogPost
} from '../components'

const { fetchData, fetchedData } = useProductsGet(shopApi)
const { fetchData: fetchPromotions, fetchedData: fetchedPromotions } = useProductsGet(shopApi)
const { fetchData: fetchCategories, fetchedData: fetchedCategories } = useProductsGet(shopApi)
const { fetchData: fetchProductsByCat } = useProductsGet(shopApi)
const { fetchData: fetchBlog, fetchedData: fetchedBlog } = useProductsGet(shopApi)
const products = ref<Data[] | [] | undefined>([])
const promotions = ref<Data[] | [] | undefined>([])
const categories = ref<Data[] | [] | undefined>([])
const productsByCategory = ref<Data[] | [] | undefined>([])
const blogs = ref<Data[] | [] | undefined>([])

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
  await fetchBlog('/main/blog')

  if (fetchedPromotions.value) {
    promotions.value = fetchedPromotions.value.data
  }

  if (fetchedCategories.value) {
    categories.value = fetchedCategories.value.data

    const products = []
    for (const category of categories.value) {
      const productsByCat = await fetchProductsByCategory(category.uuid)
      products.push(productsByCat)
    }
    productsByCategory.value = products
  }

  if (fetchedBlog.value) {
    blogs.value = fetchedBlog.value.data.slice(0, 2)
  }
})

const fetchProductsByCategory = async (id: string): Promise<Data[]> => {
  const { data } = await fetchProductsByCat(`/products?category=${id}`)
  if (data) {
    return data
  }
}
</script>
