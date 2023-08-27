import { ref } from 'vue'
import { useRouter, type Router } from 'vue-router'
import type { DropDownOption, EmitFunction } from '@/interfaces/navDropDowns'

const useDropDown = (emit: EmitFunction) => {
  const router: Router = useRouter()
  const dropdown = ref<boolean>(false)

  // Methods
  const toggleDropDown = (): boolean => (dropdown.value = !dropdown.value)
  const clickOutside = (): void => {
    dropdown.value = false
  }
  const dropDownEvent = (option: DropDownOption) => {
    dropdown.value = false
    if (option.fn) return option.fn()
    if (option.path) {
      emit('on:close')
      return router.push({ path: option.path })
    }
    emit('on:drop-down')
  }

  return {
    // Data
    dropdown,

    // Directive
    clickOutside,

    // Methods
    toggleDropDown,
    dropDownEvent
  }
}

export default useDropDown
