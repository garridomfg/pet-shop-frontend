import { useRouter, type Router } from 'vue-router'

const useProducts = () => {
  const router: Router = useRouter()

  const getImageUrl = (imageId: string): string => {
    return `http://pet-shop.buckhill.com.hr/api/v1/file/${imageId}`
  }

  const handleProductDetail = (id: string): void => {
    router.push({ name: 'product-detail', params: { id } })
  }

  const handleCategoriesByProduct = (categoryId: string): void => {
    router.push({
      name: 'products-category',
      params: { id: categoryId },
      query: { type: 'category' }
    })
  }

  return {
    // Methods
    getImageUrl,
    handleProductDetail,
    handleCategoriesByProduct
  }
}

export default useProducts
