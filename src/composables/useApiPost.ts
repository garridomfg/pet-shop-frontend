import { ref } from 'vue'
import shopApi from '../api/shopApi'
import type { User } from '@/interfaces/login'

const useApiPost = () => {
  const isLoading = ref<boolean>(false)
  const responseData = ref<User | undefined>(undefined)
  const errorMessage = ref<string | null>(null)

  const postData = async (url: string, body: any): Promise<User | undefined> => {
    isLoading.value = true
    responseData.value = undefined
    errorMessage.value = null

    try {
      isLoading.value = true
      errorMessage.value = ''
      const { data } = await shopApi.post<User | undefined>(url, body)
      responseData.value = data
      return data
    } catch (error: any) {
      errorMessage.value = error.response.data.errors
        ? error.response.data.errors
        : error.response.data.error
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    responseData,
    postData,
    errorMessage
  }
}

export default useApiPost
