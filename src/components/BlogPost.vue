<template>
  <div class="d-flex">
    <v-responsive>
      <v-img :height="400" cover :src="getImageUrl(props.blog.metadata.image)"></v-img>
    </v-responsive>
    <div class="pa-16 w-50">
      <p class="blog-title mb-4">{{ props.blog.title }}</p>
      <v-btn color="primary" variant="flat">
        <span class="text-white">
          {{ props.blog.title }}
        </span>
      </v-btn>
    </div>
  </div>
</template>
<script setup lang="ts">
import useProducts from '../composables/useProducts'
import { Data } from '../interfaces/products'

const props = defineProps<{
  blog: Data
}>()

const { getImageUrl } = useProducts()
</script>
