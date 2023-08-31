import { ref } from 'vue'
const useOverlay = () => {
  const showOverlay = ref<boolean>(false)

  const openOverlay = (): void => {
    showOverlay.value = true
  }

  const closeOverlay = (): void => {
    showOverlay.value = false
  }

  return {
    // Data
    showOverlay,

    // Methods
    openOverlay,
    closeOverlay
  }
}

export default useOverlay
