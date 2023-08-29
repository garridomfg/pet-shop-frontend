import type { EmitFunction } from '@/interfaces/navDropDowns'
import { ref } from 'vue'

const useInput = (emit?: EmitFunction) => {
  const searchTerm = ref<string>('')

  const handleSearch = (): void => {
    emit!('on:input-search', searchTerm.value)
  }

  return {
    // Data
    searchTerm,

    // Methods
    handleSearch
  }
}

export default useInput
