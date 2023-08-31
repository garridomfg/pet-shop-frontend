import { type User, type UserData } from '../interfaces/login'
import { defineStore } from 'pinia'
import shopApi from '@/api/shopApi'

export type UsersStoreState = {
  user: UserData | null | undefined
  error: string | null | undefined
  loading: boolean | null | undefined
}

export const useUsersStore = defineStore('users', {
  state: () =>
    ({
      user: undefined,
      error: undefined,
      loading: undefined
    }) as UsersStoreState,
  getters: {
    currentUser: (state) => state.user,
    errorMessage: (state) => state.error,
    isLoading: (state) => state.loading
  },
  actions: {
    async getUser(): Promise<void> {
      this.loading = true
      this.error = ''
      try {
        const { data } = await shopApi.get<User | undefined>('/user')
        this.user = data?.data
      } catch (error: any) {
        console.log(error)
        this.error = error.response.data.errors.length
          ? error.response.data.errors
          : error.response.data.error
      } finally {
        this.loading = false
      }
    },
    removeUser() {
      this.user = undefined
    }
  }
})
