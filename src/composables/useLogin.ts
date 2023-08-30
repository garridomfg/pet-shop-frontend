import type { EmitFunction } from '@/interfaces/login'
import { ref } from 'vue'
import { useRouter, type Router } from 'vue-router'

const useLogin = (emit?: EmitFunction) => {
  const router: Router = useRouter()
  const isLogin = ref<boolean>(true)

  const handleRecoverPassword = (): void => {
    router.push({ name: 'recover' })
  }

  const toggleLoginRegister = (): void => {
    if (!emit) return
    isLogin.value = !isLogin.value
    emit('on:toggle-menu', isLogin.value)
  }

  return {
    // Data
    isLogin,

    // Methods
    toggleLoginRegister,
    handleRecoverPassword
  }
}

export default useLogin
