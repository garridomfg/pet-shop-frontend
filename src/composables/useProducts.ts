import { ref } from 'vue'
import { useRouter, type Router } from 'vue-router'
import useApiGet from './useApiGet'
import { type Data } from '../interfaces/products'

const useProducts = () => {
  // Composables
  const router: Router = useRouter()
  const { fetchData, fetchedData } = useApiGet()

  // Data
  const products = ref<Data[]>([])
  const promotions = ref<Data[]>([])
  const categories = ref<Data[]>([])
  const productsByCategory = ref<(Data[] | undefined)[]>([])
  const blogs = ref<Data[]>([])

  // Get the image to display within sliders
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

  // Fetch products by category
  const fetchDataByCategory = async (id: string | undefined): Promise<Data[] | undefined> => {
    if (!id) return
    const resp = await fetchData(`/products?category=${id}`)
    const data = resp?.data
    return data || []
  }

  // Fetch products with the searchbar within home view
  const handleSearch = async (term: string): Promise<Data[] | undefined> => {
    if (!term) {
      products.value = []
      return
    }

    await fetchData(`/products?title=${term}`)
    products.value = fetchedData.value ? fetchedData.value.data : []
    return products.value
  }

  // Fetch all the data within home view (promotions, blogs and categories)
  const fetchInitialData = async () => {
    await Promise.all([
      fetchData(`/main/promotions`).then((data) => (promotions.value = data ? data.data : [])),
      fetchData('/categories?page=1&limit=2').then(
        (data) => (categories.value = data ? data.data : [])
      ),
      fetchData('/main/blog').then((data) => (blogs.value = data ? data.data.slice(0, 2) : []))
    ])

    productsByCategory.value = await Promise.all(
      categories.value.map((category) => fetchDataByCategory(category.uuid))
    )
  }

  const getBlogClass = (index: number) => {
    return index % 2 === 0
      ? 'v-col v-col-10 mt-16 mx-auto'
      : 'v-col v-col-10 mt-16 mx-auto flex-row-reverse'
  }

  return {
    // Data
    products,
    promotions,
    categories,
    productsByCategory,
    blogs,

    // Methods
    getImageUrl,
    handleProductDetail,
    handleCategoriesByProduct,
    getBlogClass,
    handleSearch,
    fetchInitialData
  }
}

export default useProducts
