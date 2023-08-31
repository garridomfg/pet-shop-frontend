import { type User, type UserRegistration } from '../interfaces/login'
import { defineStore } from 'pinia'
import shopApi from '@/api/shopApi'

export type AuthStoreState = {
  authUser: User | null | undefined
  error: string | null | undefined
  loading: boolean | null | undefined
}

export const useAuthStore = defineStore('auth', {
  state: () =>
    ({
      authUser: undefined,
      error: undefined,
      loading: undefined
    }) as AuthStoreState,
  getters: {
    errorMessage: (state) => state.error,
    isLoading: (state) => state.loading,
    authToken: (state) => state.authUser?.data?.token
  },
  actions: {
    async login(user: UserRegistration): Promise<void> {
      this.loading = true
      this.error = ''
      this.authUser = undefined
      try {
        const { data } = await shopApi.post<User | undefined>('/user/login', user)
        this.authUser = data
        localStorage.setItem('token', JSON.stringify(this.authUser?.data?.token))
      } catch (error: any) {
        console.log(error)
        this.error = error.response.data.errors.length
          ? error.response.data.errors
          : error.response.data.error
      } finally {
        this.loading = false
      }
    },
    logout() {
      this.authUser = undefined
      localStorage.removeItem('token')
    }
  }
})
