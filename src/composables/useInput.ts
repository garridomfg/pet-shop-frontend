import type { EmitFunction } from '@/interfaces/navDropDowns'
import { ref } from 'vue'
import { useRouter, type Router } from 'vue-router'

const useInput = (emit?: EmitFunction) => {
  const searchTerm = ref<string>('')
  const router: Router = useRouter()

  const handleSearch = (): void => {
    emit!('on:input-search', searchTerm.value)
  }

  const handleProductDetail = (id: string): void => {
    console.log(id)
    router.push({ name: 'product-detail', params: { id } })
  }

  return {
    // Data
    searchTerm,

    // Methods
    handleSearch,
    handleProductDetail
  }
}

export default useInput
