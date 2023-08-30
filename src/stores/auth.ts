import { type UserCredentials } from './../interfaces/login'
import { defineStore } from 'pinia'
import shopApi from '@/api/shopApi'

export type AuthStoreState = {
  authUser: UserCredentials | null | undefined
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
    currentUser: (state) => state.authUser,
    errorMessage: (state) => state.error,
    isLoading: (state) => state.loading
  },
  actions: {
    async login(user: any): Promise<void> {
      this.loading = true
      this.error = ''
      this.authUser = undefined
      try {
        const { data } = await shopApi.post<UserCredentials | undefined>('/user/login', user)
        this.authUser = data
        localStorage.setItem('currentUser', JSON.stringify(this.authUser))
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
      localStorage.removeItem('currentUser')
    }
  }
})
