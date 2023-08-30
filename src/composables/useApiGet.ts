import { ref } from 'vue'
import type { Products } from '@/interfaces/products'
import shopApi from '@/api/shopApi'

const useApiGet = () => {
  const isLoading = ref<boolean>(false)
  const fetchedData = ref<Products | undefined>(undefined)
  const error = ref<string | null>(null)

  const fetchData = async (url: string): Promise<Products | undefined> => {
    isLoading.value = true
    fetchedData.value = undefined
    error.value = null

    try {
      const { data } = await shopApi.get<Products | undefined>(url)
      fetchedData.value = data
      return data
    } catch (err: any) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    fetchedData,
    fetchData,
    error
  }
}

export default useApiGet
