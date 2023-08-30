import { ref } from 'vue'
const useOverlay = () => {
  const showOverlay = ref<boolean>(false)

  const closeOverlay = (): void => {
    showOverlay.value = false
  }

  return {
    // Data
    showOverlay,

    // Methods
    closeOverlay
  }
}

export default useOverlay
